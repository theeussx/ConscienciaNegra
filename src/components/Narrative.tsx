import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { duration, ease, revealVariants, type RevealVariant } from "../design/tokens";
import { photos, type PhotoKey } from "../content/media";

/** Seção de capítulo. Marcada para que o controle de capítulos e o indicador de progresso a encontrem. */
export function ChapterSection({
  id,
  index,
  className = "",
  children,
}: {
  id: string;
  index: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      data-chapter=""
      data-index={index}
      aria-labelledby={`${id}-title`}
      className={`relative scroll-mt-0 px-6 py-24 md:px-12 md:py-32 lg:px-20 ${className}`}
    >
      {children}
    </section>
  );
}

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  dur?: number;
  /** Marco narrativo: a navegação por setas e espaço para nele. */
  beat?: boolean;
  className?: string;
}

/** Revelação ao entrar na viewport. Acontece uma vez e nunca desaparece ao rolar para cima. */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  dur = 0.72,
  beat = false,
  className = "",
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      data-beat={beat ? "" : undefined}
      className={className}
      variants={revealVariants[variant]}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: variant === "mask" ? 0 : 0.42, margin: "0px 0px -12% 0px" }}
      transition={{ duration: dur, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

interface WordsProps {
  text: string;
  delay?: number;
  step?: number;
  className?: string;
}

/** Entrada progressiva de palavras. O texto completo permanece disponível para leitores de tela. */
export function Words({ text, delay = 0, step = 0.085, className = "" }: WordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <motion.span
            aria-hidden="true"
            className="inline-block"
            initial={reduce ? false : { opacity: 0, y: "0.45em" }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.82, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.68, ease, delay: delay + i * step }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}

interface ChapterHeaderProps {
  id: string;
  number: string;
  kicker: string;
  title: string;
  lead?: string;
}

/** Cabeçalho de capítulo: número, título com entrada por palavras e texto de apoio. */
export function ChapterHeader({ id, number, kicker, title, lead }: ChapterHeaderProps) {
  return (
    <header className="mx-auto max-w-[1480px]">
      <Reveal variant="fade">
        <p className="kicker">
          Capítulo {number} · {kicker}
        </p>
      </Reveal>
      <h2
        id={`${id}-title`}
        tabIndex={-1}
        data-beat=""
        className="font-display mt-5 max-w-[20ch] text-[clamp(2.6rem,5.2vw,5.6rem)] leading-[1.02] text-cream focus:outline-none"
      >
        <Words text={title} />
      </h2>
      {lead && (
        <Reveal variant="up" delay={0.12} className="mt-8 max-w-[58ch]">
          <p className="text-[clamp(1.2rem,1.5vw,1.5rem)] leading-[1.6] text-cream-dim">{lead}</p>
        </Reveal>
      )}
    </header>
  );
}

interface FigureProps {
  photo: PhotoKey;
  aspect?: string;
  className?: string;
  reveal?: RevealVariant;
  parallax?: boolean;
  caption?: boolean;
  fit?: "cover" | "contain";
  overlayClassName?: string;
  imageClassName?: string;
  priority?: boolean;
}

/** Fotografia com máscara de revelação, zoom suave e paralaxe discreta. Crédito sempre visível. */
export function Figure({
  photo,
  aspect = "aspect-[4/5]",
  className = "",
  reveal = "mask",
  parallax = true,
  caption = true,
  fit = "cover",
  overlayClassName = "",
  imageClassName = "",
  priority = false,
}: FigureProps) {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.5 });
  const y = useTransform(smoothProgress, [0, 1], ["-3%", "3%"]);
  const item = photos[photo];

  return (
    <figure data-beat="" className={`m-0 min-w-0 ${className}`}>
      <Reveal variant={reveal} dur={duration.cinematic}>
        <div
          ref={frameRef}
          className={`relative overflow-hidden bg-surface ${aspect} ${item ? "" : "grid place-items-center border border-cream/15"}`}
          role={item ? undefined : "img"}
          aria-label={item ? undefined : "Fotografia não incluída neste pacote"}
        >
          {item ? (
            <picture>
              <source type="image/webp" srcSet={item.srcSet} sizes="(min-width: 1024px) 50vw, 100vw" />
            <motion.img
              src={item.src}
              width={item.width}
              height={item.height}
              alt={item.alt}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className={`absolute inset-0 h-full w-full max-w-none ${fit === "contain" ? "object-contain" : "object-cover"} ${imageClassName}`}
              style={{ y: parallax && !reduce && fit !== "contain" ? y : 0, objectPosition: item.position ?? "center" }}
              initial={reduce || fit === "contain" ? false : { scale: 1.1 }}
              whileInView={reduce || fit === "contain" ? undefined : { scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.6, ease }}
            />
            </picture>
          ) : (
            <span aria-hidden="true" className="px-6 text-center text-sm text-cream-dim">
              Fotografia não incluída no pacote de origem
            </span>
          )}
          {item && overlayClassName ? (
            <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
          ) : null}
        </div>
      </Reveal>
      {caption && item && (
        <figcaption className="mt-3 text-[0.95rem] leading-snug text-cream-dim">
          Imagem: {item.author} ·{" "}
          <a href={item.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            {item.license}
          </a>{" "}
          ·{" "}
          <a href={item.source} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            origem
          </a>
        </figcaption>
      )}
    </figure>
  );
}
