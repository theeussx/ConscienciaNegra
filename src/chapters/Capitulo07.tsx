import { motion, useReducedMotion } from "motion/react";
import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { legalMilestones, stats } from "../content/stats";
import { sources } from "../content/sources";
import { duration, ease } from "../design/tokens";

const themes: Array<[string, string]> = [
  ["Racismo estrutural", "Não está apenas nas atitudes individuais. Aparece nas regras, nas instituições e nas oportunidades desiguais."],
  ["Desigualdade social", "A população negra segue mais exposta à pobreza e a serviços públicos de menor qualidade."],
  ["Educação antirracista", "Ensinar a história africana e afro-brasileira em todas as escolas, como determina a Lei 10.639/2003."],
  ["Representatividade", "Ver pessoas negras em posições de liderança, na arte, na ciência e na política amplia horizontes."],
  ["Respeito", "Respeitar nomes, cabelos, religiões, corpos e culturas é prática cotidiana, não apenas uma data."],
  ["Valorização cultural", "Reconhecer línguas, saberes, culinárias e artes de origem africana como parte do patrimônio do Brasil."],
  ["Responsabilidade coletiva", "Combater o racismo é tarefa de todos. Quem denuncia, educa e não se cala também constrói a mudança."],
];

/** Capítulo 07: temas do presente, números com fonte e marcos legais. */
export function Capitulo07() {
  const reduce = useReducedMotion();
  return (
    <ChapterSection id="cap-07" index={6}>
      <ChapterHeader
        id="cap-07"
        number="07"
        kicker="Consciência negra hoje"
        title="A consciência negra é compromisso do presente."
        lead="Desigualdades, representatividade e educação seguem no centro do debate. Os números abaixo têm fonte e ano."
      />

      <div className="mx-auto mt-24 grid max-w-[1480px] gap-16 lg:grid-cols-12 lg:gap-10">
        <ol className="space-y-8 lg:col-span-6">
          {themes.map(([title, text], i) => (
            <li key={title}>
              <Reveal variant="lateral" beat={i === 0} delay={i * 0.04}>
                <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-cream/15 pt-6">
                  <span className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-none text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight text-cream">{title}</h3>
                  <p className="col-start-2 text-[1.12rem] leading-[1.55] text-cream-dim">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="lg:col-span-5 lg:col-start-8">
          <Figure photo="street" aspect="aspect-[4/5]" reveal="photo" />
        </div>
      </div>

      <div className="mx-auto mt-40 grid max-w-[1480px] gap-16 md:grid-cols-2 md:gap-12">
        {stats.map((stat, i) => (
          <Reveal key={stat.value} variant="up" beat delay={i * 0.1}>
            <p className="font-display text-[clamp(5rem,10vw,10rem)] leading-[0.9] text-cream">{stat.value}</p>
            <p className="mt-6 text-[clamp(1.3rem,1.8vw,1.7rem)] leading-snug text-cream">{stat.label}</p>
            <div className="mt-6 h-[6px] w-full bg-cream/15" role="img" aria-label={`Proporção: ${stat.ratio}%`}>
              <motion.div
                className="h-full bg-amber"
                initial={reduce ? false : { width: 0 }}
                whileInView={reduce ? undefined : { width: `${stat.ratio}%` }}
                style={reduce ? { width: `${stat.ratio}%` } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [...ease] }}
              />
            </div>
            <p className="mt-6 max-w-[60ch] text-[1.08rem] leading-[1.55] text-cream-dim">{stat.detail}</p>
            <p className="mt-4 text-[0.95rem] leading-snug text-cream-dim">Fonte: {sources[stat.source].label}</p>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-40 max-w-[1480px]">
        <Reveal variant="fade" beat>
          <p className="kicker">Marcos legais</p>
        </Reveal>
        <ol className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {legalMilestones.map((milestone, i) => (
            <li key={milestone.year}>
              <Reveal variant="up" delay={i * 0.08} dur={duration.base}>
                <p className="font-display text-[clamp(3rem,5vw,5rem)] leading-none text-amber">{milestone.year}</p>
                <h3 className="font-display mt-4 text-[clamp(1.5rem,2vw,1.9rem)] leading-tight text-cream">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-[1.1rem] leading-[1.55] text-cream-dim">{milestone.text}</p>
                <p className="mt-4 text-[0.95rem] leading-snug text-cream-dim">Fonte: {sources[milestone.source].label}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </ChapterSection>
  );
}
