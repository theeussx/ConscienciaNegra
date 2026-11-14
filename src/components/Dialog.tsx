import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type ReactNode } from "react";
import { details, siblingsOf, type DetailId } from "../content/details";
import { photos } from "../content/media";
import { presentationSettings } from "../content/presentationSettings";
import { sources, type SourceId } from "../content/sources";
import { duration, ease } from "../design/tokens";
import { useTypewriter } from "../hooks/useTypewriter";
import { usePresentation } from "../hooks/usePresentation";

interface ModalShellProps {
  labelledBy: string;
  onClose: () => void;
  variant?: "side" | "center";
  children: ReactNode;
}

/**
 * Casca acessível para diálogos: role dialog, foco inicial, armadilha de Tab
 * e devolução do foco ao elemento que abriu o diálogo.
 */
export function ModalShell({ labelledBy, onClose, variant = "side", children }: ModalShellProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  // Capturado na montagem, antes de qualquer efeito filho mover o foco.
  const [previous] = useState<HTMLElement | null>(() =>
    document.activeElement instanceof HTMLElement ? document.activeElement : null,
  );

  useEffect(() => {
    const target =
      panelRef.current?.querySelector<HTMLElement>("[data-autofocus]") ??
      panelRef.current?.querySelector<HTMLElement>("button");
    target?.focus({ preventScroll: true });
    return () => {
      previous?.focus({ preventScroll: true });
    };
  }, [previous]);

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return;
    const items = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])"),
    );
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const isSide = variant === "side";
  return (
    <motion.div
      className="fixed inset-0 z-[60]"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration.fast, ease }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[rgb(12_12_10/0.76)]" onClick={onClose} />
      <div
        className={`pointer-events-none absolute inset-0 flex ${isSide ? "justify-end" : "items-center justify-center p-4 md:p-8"}`}
      >
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          onKeyDown={onKeyDown}
          className={`pointer-events-auto relative overflow-y-auto bg-surface text-cream ${
            isSide
              ? "h-dvh w-full max-w-[min(48rem,100vw)]"
              : "max-h-[90dvh] w-full max-w-4xl"
          }`}
          initial={reduce ? false : isSide ? { x: 56, opacity: 0 } : { y: 16, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : isSide ? { x: 56, opacity: 0 } : { y: 16, opacity: 0 }}
          transition={{ duration: duration.base, ease }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
}

/** Botão que abre o conteúdo aprofundado correspondente. */
export function DetailTrigger({ id, children, className = "" }: { id: DetailId; children: ReactNode; className?: string }) {
  const { openDetail } = usePresentation();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => openDetail(id)}
      className={`detail-trigger ${className}`}
    >
      {children}
    </button>
  );
}

/** Diálogo de aprofundamento. Troca de conteúdo cancela a digitação anterior. */
export function DetailDialog() {
  const { detailId, closeDetail } = usePresentation();
  return (
    <AnimatePresence>
      {detailId !== null && (
        <ModalShell key="detail-modal" labelledBy="detail-title" onClose={closeDetail}>
          <DetailBody key={detailId} id={detailId} />
        </ModalShell>
      )}
    </AnimatePresence>
  );
}

function DetailBody({ id }: { id: DetailId }) {
  const item: import("../content/details").DetailItem = details[id];
  const reduce = useReducedMotion();
  const { openDetail, closeDetail } = usePresentation();
  const typing = useTypewriter(item.body, presentationSettings.typing);
  const { toggle, status } = typing;
  const { prev, next } = siblingsOf(id);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== " " || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target?.closest("button, a[href], input, textarea, select")) return;
      event.preventDefault();
      toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  const photo = item.photo ? photos[item.photo] : undefined;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.fast, ease }}
      className="flex min-h-full flex-col gap-8 px-6 py-8 md:px-12 md:py-12"
    >
      <div className="flex items-start justify-between gap-6">
        <p className="kicker max-w-[36ch]">{item.kicker}</p>
        <button type="button" onClick={closeDetail} className="btn shrink-0">
          Fechar
        </button>
      </div>

      <h2
        id="detail-title"
        ref={headingRef}
        tabIndex={-1}
        data-autofocus=""
        className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] text-cream focus:outline-none"
      >
        {item.title}
      </h2>

      {photo && (
        <figure className="m-0">
          <img
            src={photo.src}
            alt={photo.alt}
            className="h-[min(34dvh,320px)] w-full object-cover"
            style={{ objectPosition: photo.position ?? "center" }}
          />
          <figcaption className="mt-2 text-[0.95rem] leading-snug text-cream-dim">
            Foto: {photo.author} ·{" "}
            <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              {photo.license}
            </a>{" "}
            ·{" "}
            <a href={photo.source} target="_blank" rel="noreferrer" className="underline underline-offset-4">
              origem
            </a>
          </figcaption>
        </figure>
      )}

      {item.facts && (
        <dl className="grid gap-4 sm:grid-cols-2">
          {item.facts.map(([label, value]) => (
            <div key={label} className="border-t border-cream/15 pt-3">
              <dt className="kicker">{label}</dt>
              <dd className="mt-1 text-[1.15rem] leading-snug text-cream">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="max-w-[62ch]">
        <TypedText full={item.body} typed={typing.typed} rest={typing.rest} status={typing.status} />
      </div>

      <div role="group" aria-label="Controles da digitação" className="flex flex-wrap gap-3">
        <button type="button" className="btn" onClick={typing.toggle} disabled={status === "done"}>
          {status === "paused" ? "Continuar" : "Pausar"}
        </button>
        <button type="button" className="btn" onClick={typing.complete} disabled={status === "done"}>
          Completar texto
        </button>
        <button type="button" className="btn" onClick={typing.restart}>
          Reiniciar
        </button>
      </div>

      <SourceList ids={item.sources} />

      <nav
        aria-label="Outros itens deste tema"
        className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 pt-6"
      >
        {prev ? (
          <button type="button" className="btn" onClick={() => openDetail(prev)}>
            ← {details[prev].title}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button type="button" className="btn" onClick={() => openDetail(next)}>
            {details[next].title} →
          </button>
        ) : (
          <span />
        )}
      </nav>
    </motion.div>
  );
}

interface TypedTextProps {
  full: string;
  typed: string;
  rest: string;
  status: "typing" | "paused" | "done";
}

/**
 * Durante a digitação, o texto visível fica oculto para leitores de tela e o restante
 * ocupa espaço invisível, sem saltos de layout. Ao completar, vira texto selecionável.
 */
function TypedText({ full, typed, rest, status }: TypedTextProps) {
  if (status === "done") {
    return <p className="whitespace-pre-line text-[1.22rem] leading-[1.7] text-cream">{full}</p>;
  }
  return (
    <>
      <p aria-hidden="true" className="whitespace-pre-line text-[1.22rem] leading-[1.7] text-cream">
        {typed}
        <span className="invisible">{rest}</span>
        <span className="typing-caret" />
      </p>
      <p className="sr-only">{full}</p>
    </>
  );
}

function SourceList({ ids }: { ids: SourceId[] }) {
  if (ids.length === 0) return null;
  return (
    <section aria-labelledby="fontes-titulo" className="border-t border-cream/15 pt-6">
      <h3 id="fontes-titulo" className="kicker">
        Fontes
      </h3>
      <ul className="mt-3 space-y-2 text-[1rem] leading-snug text-cream-dim">
        {ids.map((id) => {
          const source = sources[id];
          return (
            <li key={id}>
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-terracotta underline-offset-4 hover:text-amber"
              >
                {source.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
