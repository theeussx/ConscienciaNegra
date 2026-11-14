import { useState } from "react";
import { ArrowUpRight, ArrowRight, RotateCcw, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Scene, Entry } from "../types/content";
import { Photo } from "./Photo";
import { titleTransition, wordTransition } from "../animations/transitions";
import { ScrollReveal } from "./ScrollReveal";
import { NarrativeBeat } from "./NarrativeBeat";
import { ScrollMedia } from "./ScrollMedia";

function itemBeatId(sceneId: string, item: Entry) {
  const slug = item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `${sceneId}-item-${item.source}-${slug}`;
}
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
  const [selectedMoment, setSelectedMoment] = useState<string | null>(null);
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
    <NarrativeBeat id={`${s.id}-title`} className="scene-heading-reveal">
      <div className="scene-heading">
        <p className="eyebrow">
          <span className="tiny-line" />
          {s.kicker}
        </p>
        {title}
        <p className="scene-intro">{s.body}</p>
      </div>
    </NarrativeBeat>
  );
  if (s.layout === "hero")
    return (
      <section className="scene hero">
        <Photo id={s.image} priority className="hero-photo" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <NarrativeBeat id="abertura-title" className="hero-title-beat">
          <p className="eyebrow">
            <span className="gold-dot" aria-hidden="true" />
            {s.kicker}
          </p>
          {title}
          </NarrativeBeat>
          <NarrativeBeat id="abertura-invitation" className="hero-invitation">
          <p className="hero-subtitle">{s.subtitle}</p>
          <div className="hero-actions">
            <button className="primary-button" aria-label="Iniciar experiência" onClick={onStart}>
              <Play size={16} fill="currentColor" />
              <span>Entrar na história</span>
              <ArrowRight size={19} />
            </button>
          </div>
          </NarrativeBeat>
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
        <NarrativeBeat id="trajetorias-timeline" className="story-content-reveal"><div className="timeline">
          {s.items?.map((item, i) => (
            <ScrollReveal key={item.source} narrativeBeat={itemBeatId(s.id, item)} beatKind="interactive" className="timeline-item-reveal" threshold={0.08}>
            <button
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
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
      </section>
    );
  if (s.layout === "mural")
    return (
      <section className="scene culture-scene">
        {heading}
        <NarrativeBeat id="cultura-mural" className="story-content-reveal"><div className="culture-mural">
          {s.items?.map((item, i) => (
            <ScrollReveal key={item.source} narrativeBeat={itemBeatId(s.id, item)} beatKind="image" className="culture-tile-reveal" threshold={0.08}>
            <button
              className={`culture-tile culture-tile-${i}`}
              onClick={() => onDetail(item)}
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
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
      </section>
    );
  if (s.layout === "food")
    return <FoodScene scene={s} heading={heading} onDetail={onDetail} />;
  if (s.layout === "player")
    return (
      <section className="scene player-scene">
        <NarrativeBeat id="balotelli-jogador-title" className="player-copy-reveal">
        <div className="player-copy">
          <p className="eyebrow">{s.kicker}</p>
          {title}
          <span className="player-name">{s.subtitle}</span>
          <p className="scene-intro">{s.body}</p>
          <p className="image-context">
            Liverpool × Hull City · 25 out 2014 · retrato de referência
          </p>
        </div>
        </NarrativeBeat>
        <NarrativeBeat id="balotelli-jogador-portrait" className="player-visual-reveal">
        <div className="player-visual">
          <ScrollMedia className="player-scroll-media"><Photo id={s.image} /></ScrollMedia>
          <span className="player-number">45</span>
        </div>
        </NarrativeBeat>
      </section>
    );
  if (s.layout === "event")
    return (
      <section className="scene event-scene">
        <Photo id={s.image} />
        <div className="event-shade" />
        <div className="event-copy">
          <NarrativeBeat id="balotelli-verona-date" className="event-date-beat">
          <p className="eyebrow">{s.kicker}</p>
          {title}
          <h2>{s.subtitle}</h2>
          </NarrativeBeat>
          <NarrativeBeat id="balotelli-verona-context" className="event-context-beat">
          <p>{s.body}</p>
          <p className="image-context">
            Imagem de referência: Liverpool × Hull City, 2014.
          </p>
          </NarrativeBeat>
        </div>
      </section>
    );
  if (s.layout === "sequence")
    return (
      <section className="scene sequence-scene">
        {heading}
        <NarrativeBeat id="balotelli-reacao-timeline" className="story-content-reveal"><div className="sequence-list">
          {s.items?.map((item, i) => (
            <ScrollReveal key={item.source + item.title} narrativeBeat={i === 2 ? "balotelli-reacao-response" : itemBeatId(s.id, item)} beatKind="interactive" threshold={0.08}>
            <button className={`sequence-entry${selectedMoment === item.title ? " is-selected" : ""}`} onClick={() => { setSelectedMoment(item.title); onDetail(item); }}>
              <span>{item.tag}</span>
              <div>
                <p className="eyebrow">{item.title}</p>
                <h2>{item.text}</h2>
                <p>{item.detail}</p>
              </div>
            </button>
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
      </section>
    );
  if (s.layout === "people")
    return (
      <section className="scene people-scene">
        {heading}
        <NarrativeBeat id="protagonistas-retratos" className="story-content-reveal"><div className="people-grid">
          {s.items?.map((item, i) => (
            <ScrollReveal key={item.source} narrativeBeat={itemBeatId(s.id, item)} beatKind="image" className="person-reveal" threshold={0.08}>
            <button
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
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
      </section>
    );
  if (s.layout === "present")
    return (
      <section className="scene present-scene">
        {heading}
        <NarrativeBeat id="presente-acoes" className="story-content-reveal"><div className="action-list">
          {s.items?.map((item) => (
            <ScrollReveal key={item.source} narrativeBeat={itemBeatId(s.id, item)} beatKind="interactive" threshold={0.08}>
            <button onClick={() => onDetail(item)}>
              <span>{item.tag}</span>
              <h2>
                {item.title}
                <ArrowUpRight size={22} />
              </h2>
              <p>{item.text}</p>
            </button>
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
        <NarrativeBeat id="presente-transicao" className="present-transition-beat"><p className="present-footer">
          Na escola. Nas arquibancadas. Em cada escolha.
        </p></NarrativeBeat>
      </section>
    );
  if (s.layout === "participants")
    return (
      <section className="scene participants-scene">
        <NarrativeBeat id="participantes-title" className="scene-heading-reveal">
          <p className="eyebrow">{s.kicker}</p><h1>{s.title}</h1>
        </NarrativeBeat>
        <NarrativeBeat id="participantes-context" className="statement-context-beat">
          <p className="scene-intro">{s.body}</p>
        </NarrativeBeat>
        <NarrativeBeat id="participantes-equipe" className="story-content-reveal"><div className="participants-list">{s.items?.map((item, i) => <ScrollReveal key={item.source + i} narrativeBeat={itemBeatId(s.id, item)} beatKind="interactive" threshold={0.08}><button onClick={() => onDetail(item)}><span>0{i + 1}</span><div><h2>{item.title}</h2><p>{item.tag}</p><small>{item.text}</small></div><ArrowUpRight /></button></ScrollReveal>)}</div></NarrativeBeat>
      </section>
    );
  if (s.layout === "cases")
    return (
      <section className="scene cases-scene">
        {heading}
        <NarrativeBeat id="outros-atletas-cases" className="story-content-reveal"><div className="cases-list">
          {s.items?.map((item, i) => (
            <ScrollReveal key={item.source} narrativeBeat={itemBeatId(s.id, item)} beatKind="interactive" threshold={0.08}>
            <button onClick={() => onDetail(item)}>
              <span className="case-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{item.tag}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <ArrowUpRight size={30} />
            </button>
            </ScrollReveal>
          ))}
        </div></NarrativeBeat>
        <span className="case-footer">
          O silêncio também tem consequências.
        </span>
      </section>
    );
  if (s.layout === "closing")
    return (
      <section className="scene closing-scene">
        <div className="closing-orbit" />
        <NarrativeBeat id="encerramento-title" className="closing-title-beat">
          <p className="eyebrow">{s.kicker}</p>
          {title}
        </NarrativeBeat>
        <NarrativeBeat id="encerramento-context" className="closing-context-beat">
          <p className="closing-body">{s.body}</p>
        </NarrativeBeat>
        <NarrativeBeat id="encerramento-credito" className="closing-actions-beat"><div className="closing-actions">
          <button className="primary-button" onClick={onSources}>
            Créditos e referências <ArrowUpRight size={18} />
          </button>
          <button className="text-button" onClick={onRestart}>
            <RotateCcw size={16} />
            Recomeçar apresentação
          </button>
        </div>
        </NarrativeBeat>
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
      {s.layout === "reflection" ? (
        <NarrativeBeat id="balotelli-reflexao-question" className="statement-copy-beat">
          {title}
          <p className="statement-body">{s.body}</p>
        </NarrativeBeat>
      ) : (
        <>
          <NarrativeBeat id={`${s.id}-title`} className="statement-copy-beat">{title}</NarrativeBeat>
          <NarrativeBeat id="africas-context" className="statement-context-beat">
            <p className="statement-body">{s.body}</p>
          </NarrativeBeat>
        </>
      )}
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
      <NarrativeBeat id="sabores-prato" className="story-content-reveal"><div className="food-composition">
        <div className="food-image">
          <ScrollMedia key={item.title}><Photo id={item.image} /></ScrollMedia>
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
      </div></NarrativeBeat>
      <NarrativeBeat id="sabores-selecao" className="story-content-reveal"><div className="food-tabs" role="group" aria-label="Selecionar prato">
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
      </div></NarrativeBeat>
    </section>
  );
}
