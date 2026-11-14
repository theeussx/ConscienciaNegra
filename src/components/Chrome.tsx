import { AnimatePresence, motion, useScroll } from "motion/react";
import { chapters } from "../content/chapters";
import { ease } from "../design/tokens";
import { usePresentation } from "../hooks/usePresentation";
import { ModalShell } from "./Dialog";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-amber"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function BarButton({
  label,
  glyph,
  pressed,
  onClick,
}: {
  label: string;
  glyph: string;
  pressed?: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} aria-label={label} aria-pressed={pressed} className="btn-bar">
      <span aria-hidden="true" className="text-lg leading-none">
        {glyph}
      </span>
      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

function BottomBar() {
  const p = usePresentation();
  const chapter = chapters[p.activeChapter];
  return (
    <nav
      aria-label="Controles da apresentação"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/15 bg-ink px-3 py-2 md:px-8"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3">
        <p className="min-w-0 truncate text-[1rem] text-cream-dim">
          <span className="font-bold text-amber">{chapter.number}/09</span>
          <span className="ml-3 hidden sm:inline">{chapter.short}</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <BarButton label="Anterior" glyph="↑" onClick={() => void p.goPrev()} />
          <BarButton label="Próximo" glyph="↓" onClick={() => void p.goNext()} />
          <BarButton label="Capítulos" glyph="≡" onClick={() => p.setMenuOpen(true)} />
          <BarButton label="Automático" glyph="▶" pressed={p.autoOn} onClick={p.toggleAuto} />
          <BarButton label="Notas" glyph="✎" pressed={p.notesOpen} onClick={p.toggleNotes} />
          <BarButton label="Tela cheia" glyph="⛶" pressed={p.fullscreen} onClick={p.toggleFullscreen} />
        </div>
      </div>
    </nav>
  );
}

function NotesPanel() {
  const p = usePresentation();
  const chapter = chapters[p.activeChapter];
  return (
    <motion.aside
      role="complementary"
      aria-label="Notas do apresentador"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3, ease }}
      className="fixed bottom-16 right-3 z-50 max-h-[55dvh] w-[min(27rem,calc(100vw-1.5rem))] overflow-y-auto border border-cream/15 bg-surface p-6 md:right-8"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="kicker">Notas do apresentador · {chapter.number}</p>
        <button type="button" className="btn-bar" onClick={p.toggleNotes}>
          Fechar
        </button>
      </div>
      <p className="font-display mt-4 text-[1.6rem] leading-tight text-cream">{chapter.short}</p>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-[1.1rem] leading-snug text-cream">
        {chapter.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <p className="mt-6 border-t border-cream/15 pt-4 text-[1rem] leading-relaxed text-cream-dim">
        ↑ e ↓ ou Espaço: marco anterior e próximo · N: notas · A: automático · F: tela cheia · C: capítulos · Esc:
        fechar.
      </p>
    </motion.aside>
  );
}

function ChapterMenu() {
  const p = usePresentation();
  return (
    <ModalShell labelledBy="menu-title" variant="center" onClose={() => p.setMenuOpen(false)}>
      <div className="p-6 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="kicker">Navegação direta</p>
            <h2 id="menu-title" className="font-display mt-3 text-[clamp(2rem,3.4vw,3rem)] leading-tight">
              Capítulos
            </h2>
          </div>
          <button type="button" className="btn shrink-0" onClick={() => p.setMenuOpen(false)}>
            Fechar
          </button>
        </div>
        <ol className="mt-8 grid gap-3 md:grid-cols-2">
          {chapters.map((chapter, i) => (
            <li key={chapter.id}>
              <button
                type="button"
                data-autofocus={i === p.activeChapter ? "" : undefined}
                aria-current={i === p.activeChapter ? "true" : undefined}
                className="menu-item"
                onClick={() => {
                  p.setMenuOpen(false);
                  p.goToChapter(i);
                }}
              >
                <span className="font-display text-[1.9rem] leading-none text-amber">{chapter.number}</span>
                <span className="text-[1.2rem] leading-snug text-cream">{chapter.short}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </ModalShell>
  );
}

/** Controles discretos da apresentação. Não cobrem o conteúdo: ocupam apenas a faixa inferior. */
export function Chrome() {
  const p = usePresentation();
  return (
    <>
      <ProgressBar />
      <BottomBar />
      <AnimatePresence>{p.notesOpen && <NotesPanel key="notes" />}</AnimatePresence>
      <AnimatePresence>{p.menuOpen && <ChapterMenu key="menu" />}</AnimatePresence>
    </>
  );
}
