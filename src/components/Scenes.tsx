import { useState } from "react";
import { ArrowUpRight, ArrowRight, RotateCcw, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Scene, Entry } from "../types/content";
import { Photo } from "./Photo";
import { titleTransition, wordTransition } from "../animations/transitions";
import { ScrollReveal } from "./ScrollReveal";
interface Props {
  scene: Scene;
  onDetail: (entry: Entry) => void;
  onStart: () => void;
  onSources: () => void;
  onRestart: () => void;
}
export function SceneView({
  scene: s,
  onDetail,
  onStart,
  onSources,
  onRestart,
}: Props) {
  const reduced = useReducedMotion();
  const title = (
    <motion.h1 {...titleTransition(!!reduced)}>
      {s.layout === "hero"
        ? s.title.split(" ").map((word, i) => (
            <span className="word-mask" key={i}>
              <motion.span
                {...wordTransition(i, !!reduced)}
                className={word === "nós." ? "title-italic" : ""}
              >
                {word}
              </motion.span>{" "}
            </span>
          ))
        : s.title}
    </motion.h1>
  );
  const heading = (
    <ScrollReveal className="scene-heading-reveal" threshold={0.2}>
      <div className="scene-heading">
        <p className="eyebrow">
          <span className="tiny-line" />
          {s.kicker}
        </p>
        {title}
        <p className="scene-intro">{s.body}</p>
      </div>
    </ScrollReveal>
  );
  if (s.layout === "hero")
    return (
      <section className="scene hero">
        <Photo id={s.image} priority className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="gold-dot" aria-hidden="true" />
            {s.kicker}
          </p>
          {title}
          <p className="hero-subtitle">{s.subtitle}</p>
          <div className="hero-actions">
            <button className="primary-button" aria-label="Iniciar experiência" onClick={onStart}>
              <Play size={16} fill="currentColor" />
              <span>Entrar na história</span>
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
        <div className="hero-caption" aria-hidden="true">
          <span>RAÍZES — ALÉM DA COR</span>
          <span>Uma história de todos nós.</span>
        </div>
      </section>
    );
  if (s.layout === "timeline")
    return (
      <section className="scene timeline-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="timeline">
          {s.items?.map((item, i) => (
            <button
              key={item.title}
              onClick={() => onDetail(item)}
              className="timeline-entry"
            >
              <span className="timeline-date">{item.tag}</span>
              <span className="timeline-point" />
              <span className="timeline-number">0{i + 1}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span className="text-link">
                Conhecer o marco <ArrowUpRight size={15} />
              </span>
            </button>
          ))}
        </div></ScrollReveal>
      </section>
    );
  if (s.layout === "mural")
    return (
      <section className="scene culture-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="culture-mural">
          {s.items?.map((item, i) => (
            <button
              className={`culture-tile culture-tile-${i}`}
              onClick={() => onDetail(item)}
              key={item.title}
            >
              {item.image && <Photo id={item.image} />}
              <div className="tile-shade" />
              <span className="tile-index">0{i + 1} / HERANÇAS</span>
              <div className="tile-copy">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight className="tile-arrow" size={24} />
            </button>
          ))}
        </div></ScrollReveal>
      </section>
    );
  if (s.layout === "food")
    return <FoodScene scene={s} heading={heading} onDetail={onDetail} />;
  if (s.layout === "player")
    return (
      <section className="scene player-scene">
        <div className="player-visual">
          <Photo id={s.image} />
          <span className="player-number">45</span>
        </div>
        <div className="player-copy">
          <p className="eyebrow">{s.kicker}</p>
          {title}
          <span className="player-name">{s.subtitle}</span>
          <p className="scene-intro">{s.body}</p>
          <p className="image-context">
            Liverpool × Hull City · 25 out 2014 · retrato de referência
          </p>
        </div>
      </section>
    );
  if (s.layout === "event")
    return (
      <section className="scene event-scene">
        <Photo id={s.image} />
        <div className="event-shade" />
        <div className="event-copy">
          <p className="eyebrow">{s.kicker}</p>
          {title}
          <h2>{s.subtitle}</h2>
          <p>{s.body}</p>
          <p className="image-context">
            Imagem de referência: Liverpool × Hull City, 2014.
          </p>
        </div>
      </section>
    );
  if (s.layout === "sequence")
    return (
      <section className="scene sequence-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="sequence-list">
          {s.items?.map((item) => (
            <article key={item.title}>
              <span>{item.tag}</span>
              <div>
                <p className="eyebrow">{item.title}</p>
                <h2>{item.text}</h2>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div></ScrollReveal>
      </section>
    );
  if (s.layout === "people")
    return (
      <section className="scene people-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="people-grid">
          {s.items?.map((item, i) => (
            <button
              key={item.title}
              onClick={() => onDetail(item)}
              className={`person person-${i}`}
            >
              <Photo id={item.image} />
              <div className="tile-shade" />
              <div className="person-copy">
                <span>{item.tag}</span>
                <h2>{item.title}</h2>
              </div>
              <ArrowUpRight className="tile-arrow" size={20} />
            </button>
          ))}
        </div></ScrollReveal>
      </section>
    );
  if (s.layout === "present")
    return (
      <section className="scene present-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="action-list">
          {s.items?.map((item) => (
            <button key={item.title} onClick={() => onDetail(item)}>
              <span>{item.tag}</span>
              <h2>
                {item.title}
                <ArrowUpRight size={22} />
              </h2>
              <p>{item.text}</p>
            </button>
          ))}
        </div></ScrollReveal>
        <p className="present-footer">
          Na escola. Nas arquibancadas. Em cada escolha.
        </p>
      </section>
    );
  if (s.layout === "participants")
    return (
      <section className="scene participants-scene">
        <p className="eyebrow">{s.kicker}</p><h1>{s.title}</h1><p className="scene-intro">{s.body}</p>
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="participants-list">{s.items?.map((item, i) => <button key={`${item.title}-${i}`} onClick={() => onDetail(item)}><span>0{i + 1}</span><div><h2>{item.title}</h2><p>{item.tag}</p><small>{item.text}</small></div><ArrowUpRight /></button>)}</div></ScrollReveal>
      </section>
    );
  if (s.layout === "cases")
    return (
      <section className="scene cases-scene">
        {heading}
        <ScrollReveal className="story-content-reveal" delay={0.12}><div className="cases-list">
          {s.items?.map((item, i) => (
            <button key={item.title} onClick={() => onDetail(item)}>
              <span className="case-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{item.tag}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight size={30} />
            </button>
          ))}
        </div></ScrollReveal>
        <span className="case-footer">
          O silêncio também tem consequências.
        </span>
      </section>
    );
  if (s.layout === "closing")
    return (
      <section className="scene closing-scene">
        <div className="closing-orbit" />
        <p className="eyebrow">{s.kicker}</p>
        {title}
        <p className="closing-body">{s.body}</p>
        <div className="closing-actions">
          <button className="primary-button" onClick={onSources}>
            Créditos e referências <ArrowUpRight size={18} />
          </button>
          <button className="text-button" onClick={onRestart}>
            <RotateCcw size={16} />
            Recomeçar apresentação
          </button>
        </div>
        <p className="closing-signature">
          RAÍZES <span>— ALÉM DA COR</span>
        </p>
      </section>
    );
  return (
    <section
      className={`scene statement-scene ${s.layout === "reflection" ? "reflection-scene" : ""}`}
    >
      <span className="statement-ornament" aria-hidden="true">
        {s.layout === "reflection" ? "?" : "Á"}
      </span>
      <p className="eyebrow">{s.kicker}</p>
      {title}
      <p className="statement-body">{s.body}</p>
      <span className="statement-footnote">
        {s.layout === "reflection"
          ? "RESPEITO NÃO É UM PRIVILÉGIO. É UM DIREITO."
          : "DIVERSAS ORIGENS. INCONTÁVEIS HISTÓRIAS."}
      </span>
    </section>
  );
}
function FoodScene({
  scene,
  heading,
  onDetail,
}: {
  scene: Scene;
  heading: React.ReactNode;
  onDetail: (entry: Entry) => void;
}) {
  const [selected, setSelected] = useState(0);
  const item = scene.items![selected];
  return (
    <section className="scene food-scene">
      {heading}
      <ScrollReveal className="story-content-reveal" delay={0.12}><div className="food-composition">
        <div className="food-image">
          <Photo key={item.title} id={item.image} />
          <span className="food-image-label">SABERES QUE ALIMENTAM</span>
        </div>
        <div className="food-copy">
          <p className="eyebrow">{item.tag}</p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <span className="ingredient-label">INGREDIENTES CARACTERÍSTICOS</span>
          <p className="ingredients">{item.ingredients}</p>
          <button className="text-button" onClick={() => onDetail(item)}>
            Conhecer essa história <ArrowUpRight size={18} />
          </button>
        </div>
      </div></ScrollReveal>
      <ScrollReveal className="story-content-reveal" delay={0.2}><div className="food-tabs" role="group" aria-label="Selecionar prato">
        {scene.items?.map((item, i) => (
          <button
            key={item.title}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <span>0{i + 1}</span>
            {item.title}
          </button>
        ))}
      </div></ScrollReveal>
    </section>
  );
}
