import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Expand,
  Grid2X2,
  Info,
  Monitor,
  NotebookPen,
  WifiOff,
} from "lucide-react";
import { chapters, scenes } from "../content/chapters";
import { presentationSession, usePresentation } from "../hooks/usePresentation";
import { useOffline } from "../hooks/useOffline";
import { chapterStart } from "../utils/navigation";
import { Dialog } from "../components/Dialog";
import { Photo, findAsset } from "../components/Photo";
import { SceneFrame } from "../components/SceneFrame";
import { SceneView } from "../components/Scenes";
import { SourceList } from "../components/SourceList";
import { SourcesPanel } from "../components/SourcesPanel";
import { PresenterNotes } from "../components/PresenterNotes";
import { useTypewriter } from "../hooks/useTypewriter";
import type { Entry } from "../types/content";
import { ScrollReveal } from "../components/ScrollReveal";
import { useRef } from "react";
import { presentationSettings } from "../content/presentationSettings";
type Panel = "map" | "sources" | "help" | "notes" | null;
const isNotes = new URLSearchParams(location.search).has("notes");
export default function App() {
  const [panel, setPanel] = useState<Panel>(null);
  const [detail, setDetail] = useState<Entry | null>(null);
  const [presenting, setPresenting] = useState(false);
  const [notice, setNotice] = useState("");
  const typewriter = useTypewriter(detail?.detail ?? "", !!detail, presentationSettings.typingCharactersPerSecond);
  const navigateNarrativeBeat = useCallback((delta: number) => {
    const candidates = [...document.querySelectorAll<HTMLElement>("[data-narrative-beat]")]
      .filter((element) => !element.querySelector("[data-narrative-beat]") && !element.closest("[inert]"));
    if (!candidates.length) return false;
    const marker = window.innerHeight * 0.46;
    let current = candidates.findIndex((element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= marker && rect.bottom > marker;
    });
    if (current < 0) {
      current = candidates.reduce((best, element, index) => {
        const distance = Math.abs(element.getBoundingClientRect().top - marker);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY }).index;
    }
    const target = candidates[Math.max(0, Math.min(candidates.length - 1, current + delta))];
    if (target === candidates[current]) return false;
    target.scrollIntoView({ behavior: reducedMotionPreference() ? "instant" : "smooth", block: "center" });
    return true;
  }, []);
  const { index, go, step, observe } = usePresentation(
    isNotes,
    !!panel || !!detail,
    () => {
      setPanel(null);
      setDetail(null);
    },
    navigateNarrativeBeat,
  );
  const offline = useOffline();
  const reduced = useReducedMotion();
  const scene = scenes[index];
  const chapter = chapters[scene.chapter];
  const passiveScroll = useRef(false);
  const programmaticScroll = useRef(false);
  const positionedInitialScene = useRef(false);
  const scrollReleaseTimer = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (passiveScroll.current) { passiveScroll.current = false; return; }
    const target = document.getElementById(scenes[index]?.id);
    if (!target) return;

    // Position a deep-linked scene before the observer gets its initial
    // viewport snapshot; otherwise it can briefly select scene 0 and start
    // a competing scroll back through the document.
    const initialPosition = !positionedInitialScene.current;
    positionedInitialScene.current = true;
    programmaticScroll.current = true;
    window.clearTimeout(scrollReleaseTimer.current);
    target.scrollIntoView({
      behavior: initialPosition || reduced ? "instant" : "smooth",
      block: "start",
    });

    if (initialPosition || reduced) {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        programmaticScroll.current = false;
      }));
    } else {
      // `scrollend` is the primary release; the timeout also covers browsers
      // that do not dispatch it for a no-op or interrupted smooth scroll.
      scrollReleaseTimer.current = window.setTimeout(() => {
        programmaticScroll.current = false;
      }, 1200);
    }
  }, [index]);
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-story-scene]")];
    const io = new IntersectionObserver(entries => {
      if (programmaticScroll.current) return;
      const active = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      const next = Number(active?.target.getAttribute("data-story-index"));
      if (active && next !== index) { passiveScroll.current = true; observe(next); }
    }, { threshold: [0.2,.45,.7] });
    const finishProgrammaticScroll = () => {
      window.clearTimeout(scrollReleaseTimer.current);
      programmaticScroll.current = false;
    };
    const cancelProgrammaticScroll = () => finishProgrammaticScroll();
    window.addEventListener("scrollend", finishProgrammaticScroll);
    window.addEventListener("wheel", cancelProgrammaticScroll, { passive:true });
    window.addEventListener("touchstart", cancelProgrammaticScroll, { passive:true });
    nodes.forEach(n=>io.observe(n));
    return () => {
      io.disconnect();
      window.removeEventListener("scrollend", finishProgrammaticScroll);
      window.removeEventListener("wheel", cancelProgrammaticScroll);
      window.removeEventListener("touchstart", cancelProgrammaticScroll);
      window.clearTimeout(scrollReleaseTimer.current);
    };
  }, [index, observe]);
  useEffect(() => {
    const next = scenes[index + 1];
    const ids = [
      next?.image,
      ...(next?.items?.map((item) => item.image) ?? []),
    ];
    for (const id of new Set(ids)) {
      const asset = findAsset(id);
      if (asset) {
        const preload = new Image();
        preload.src = asset.file;
      }
    }
  }, [index]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 6000);
    return () => clearTimeout(timer);
  }, [notice]);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !panel && !detail) setPresenting(false);
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [panel, detail]);
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (document.documentElement.requestFullscreen)
        await document.documentElement.requestFullscreen();
      else
        setNotice("Tela cheia indisponível. Use a apresentação nesta janela.");
    } catch {
      setNotice(
        "Não foi possível abrir tela cheia. A apresentação continua nesta janela.",
      );
    }
  }
  function openNotes() {
    const win = window.open(
      `${location.pathname}?notes=1&session=${presentationSession}`,
      `raizes-notes-${presentationSession}`,
      "popup,width=920,height=760",
    );
    if (!win) {
      setPanel("notes");
      setNotice(
        "O navegador bloqueou a janela de notas. Permita pop-ups para usá-la em outra tela.",
      );
    }
  }
  function start() {
    setPresenting(true);
    if (index !== 0) {
      go(0);
      return;
    }
    programmaticScroll.current = true;
    window.clearTimeout(scrollReleaseTimer.current);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.getElementById(scenes[0].id)?.scrollIntoView({ behavior: "instant", block: "start" });
      scrollReleaseTimer.current = window.setTimeout(() => { programmaticScroll.current = false; }, 120);
    }));
  }
  if (isNotes)
    return <PresenterNotes scene={scene} index={index} step={step} />;
  return (
    <div
      className={`app story-mode ${presenting ? "is-presenting" : ""}`}
    >
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      {!presenting && <header className="site-header">
        <button
          className="brand"
          aria-label="RAÍZES — voltar ao início"
          onClick={() => {
            go(0);
            setPresenting(false);
          }}
        >
          <span className="brand-symbol" aria-hidden="true">
            r.
          </span>
          <span className="wordmark">
            RAÍZES<span>ALÉM DA COR</span>
          </span>
        </button>
        <span className="header-description">
          UMA EXPERIÊNCIA SOBRE QUEM SOMOS
        </span>
        <nav aria-label="Navegação principal">
          <button
            className="explore-button"
            onClick={() => {
              setPresenting(false);
              setPanel("map");
            }}
          >
            <Grid2X2 size={15} />
            <span>Explorar capítulos</span>
          </button>
          <span className="header-divider" />
          <button
            className="icon-button"
            title="Fontes e créditos"
            aria-label="Fontes e créditos"
            onClick={() => setPanel("sources")}
          >
            <BookOpen size={18} />
          </button>
          <button
            className="icon-button"
            title="Notas do apresentador"
            aria-label="Abrir notas do apresentador"
            onClick={openNotes}
          >
            <NotebookPen size={18} />
          </button>
          <button
            className="icon-button"
            title="Tela cheia"
            aria-label="Alternar tela cheia"
            onClick={fullscreen}
          >
            <Expand size={18} />
          </button>
        </nav>
      </header>}
      <main id="main-content" tabIndex={-1} className="story-document">
        {scenes.map((storyScene, storyIndex) => <section id={storyScene.id} data-story-scene data-story-index={storyIndex} className={`story-section story-${storyScene.layout}`} key={storyScene.id}>
          <ScrollReveal className="story-reveal" direction={storyScene.layout === "player" ? "left" : "up"} threshold={.12}>
            <SceneFrame reduced={!!reduced} layout={storyScene.layout}>
              <SceneView scene={storyScene} onDetail={setDetail} onStart={start} onSources={() => setPanel("sources")} onRestart={() => { go(0); setPresenting(false); }} />
            </SceneFrame>
          </ScrollReveal>
        </section>)}
      </main>
      {!presenting && <footer className="presentation-bar">
        <button
          className="chapter-indicator"
          onClick={() => setPanel("map")}
          aria-label={`Mapa de capítulos. Capítulo ${scene.chapter + 1} de 9: ${chapter.short}`}
        >
          <span className="chapter-current">
            {String(scene.chapter + 1).padStart(2, "0")}
          </span>
          <span className="chapter-total">/ 09</span>
          <span className="chapter-name">{chapter.short}</span>
          <Grid2X2 size={13} />
        </button>
        <div className="chapter-progress" aria-label="Progresso por capítulo">
          {chapters.map((c, i) => (
            <button
              key={c.short}
              aria-label={`Ir ao capítulo ${i + 1}: ${c.short}`}
              aria-current={scene.chapter === i ? "step" : undefined}
              onClick={() => go(chapterStart(scenes, i))}
            >
              <span className={i <= scene.chapter ? "completed" : ""} />
            </button>
          ))}
        </div>
        <div className="scene-navigation">
          <span className="keyboard-hint">USE AS SETAS PARA NAVEGAR</span>
          <span className="scene-count">
            {String(index + 1).padStart(2, "0")}
            <span>/{String(scenes.length).padStart(2, "0")}</span>
          </span>
          <button
            className="icon-button nav-arrow"
            aria-label="Cena anterior"
            disabled={index === 0}
            onClick={() => step(-1)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="icon-button nav-arrow"
            aria-label="Próxima cena"
            disabled={index === scenes.length - 1}
            onClick={() => step(1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </footer>}
      {!presenting && <div className="utility-bar">
        <span
          className={`offline-status ${offline === "ready" ? "ready" : ""}`}
        >
          {offline === "ready" ? <Check size={12} /> : <WifiOff size={12} />}
          <span>
            {offline === "ready"
              ? "Pronto para usar offline"
              : offline === "dev"
                ? "Prévia local · offline no build"
                : offline === "error"
                  ? "Cache offline indisponível"
                  : "Preparando acesso offline…"}
          </span>
        </span>
        <button className="text-button" onClick={() => setPanel("help")}>
          <Info size={13} />
          Como navegar
        </button>
      </div>}
      <div className="sr-only" role="status" aria-live="polite">
        Capítulo {scene.chapter + 1}: {chapter.short}. Cena {index + 1}:{" "}
        {scene.title}
      </div>
      {notice && (
        <div className="toast" role="status">
          {notice}
        </div>
      )}
      {panel && (
        <Dialog
          title={
            panel === "map"
              ? "Escolha um caminho."
              : panel === "sources"
                ? "Fontes, créditos e memória."
                : panel === "notes"
                  ? "Notas nesta janela"
                  : "A experiência, no seu ritmo."
          }
          wide={panel === "map" || panel === "sources"}
          onClose={() => setPanel(null)}
        >
          {panel === "map" && (
            <>
              <p className="dialog-intro">
                Nove capítulos conectados por uma mesma história. Explore
                livremente ou acompanhe a sequência.
              </p>
              <div className="chapter-map">
                {chapters.map((c, i) => (
                  <button
                    key={c.short}
                    data-testid="chapter-choice"
                    onClick={() => {
                      go(chapterStart(scenes, i));
                      setPanel(null);
                    }}
                    aria-current={scene.chapter === i ? "true" : undefined}
                  >
                    <span>0{i + 1}</span>
                    <div>
                      <h3>{c.short}</h3>
                      <p>{c.description}</p>
                    </div>
                    <ArrowUpRight size={20} />
                  </button>
                ))}
              </div>
              <button
                className="primary-button"
                onClick={() => {
                  setPanel(null);
                  setPresenting(true);
                  go(0);
                }}
              >
                <Monitor size={18} />
                Modo apresentação
                <ArrowRight size={18} />
              </button>
            </>
          )}
          {panel === "sources" && <SourcesPanel chapter={scene.chapter} />}
          {panel === "notes" && (
            <>
              <p className="dialog-intro">
                O navegador bloqueou a janela separada. Este painel aparece na
                tela atual: feche-o antes de projetar.
              </p>
              <h3>{scene.title}</h3>
              <p>{scene.notes}</p>
              <button className="primary-button" onClick={openNotes}>
                Tentar abrir outra janela
                <ArrowUpRight size={18} />
              </button>
            </>
          )}
          {panel === "help" && (
            <>
              <p className="dialog-intro">
                Na apresentação, role a página para acompanhar a narrativa. As
                setas e a barra de espaço também percorrem as cenas. Abra as
                notas no computador e coloque a janela principal no projetor;
                tela cheia é opcional.
              </p>
              <dl className="shortcuts">
                <div>
                  <dt>Próxima cena</dt>
                  <dd>→ ou Espaço</dd>
                </div>
                <div>
                  <dt>Cena anterior</dt>
                  <dd>←</dd>
                </div>
                <div>
                  <dt>Voltar ao início</dt>
                  <dd>Home</dd>
                </div>
                <div>
                  <dt>Ir ao encerramento</dt>
                  <dd>End</dd>
                </div>
                <div>
                  <dt>Fechar painel / sair da tela cheia</dt>
                  <dd>Esc</dd>
                </div>
              </dl>
              <p>
                Selecione imagens, nomes e marcos para aprofundar os temas. Os
                painéis mantêm o foco do teclado até serem fechados.
              </p>
              <p className="muted">
                Antes do evento, execute a versão de produção e aguarde “Pronto
                para usar offline”. As notas exigem que as duas janelas estejam
                no mesmo navegador e endereço.
              </p>
              <button
                className="primary-button"
                onClick={() => {
                  setPanel(null);
                  setPresenting(true);
                  void fullscreen();
                }}
              >
                Apresentar em tela cheia
                <Expand size={18} />
              </button>
            </>
          )}
        </Dialog>
      )}
      {detail && (
        <Dialog title={detail.title} onAdvance={typewriter.complete} onClose={() => setDetail(null)}>
          <div className="detail-body">
            {detail.image && <Photo id={detail.image} />}
            <p className="eyebrow">{detail.tag}</p>
            <h3>{detail.text}</h3>
            <p className="typewriter-text" aria-hidden="true">{typewriter.visible}{!typewriter.done && <i className="typing-caret" />}</p>
            <p className="sr-only">{detail.detail}</p>
            <div className="typing-controls" aria-label="Controles da escrita">
              <button onClick={typewriter.toggle} disabled={typewriter.done}>{typewriter.paused ? "Continuar" : "Pausar"}</button>
              <button onClick={typewriter.complete} disabled={typewriter.done}>Mostrar tudo</button>
              <button onClick={typewriter.restart}>Reiniciar</button>
            </div>
            <SourceList ids={[detail.source, ...(detail.sources ?? [])]} />
          </div>
        </Dialog>
      )}
    </div>
  );
}

function reducedMotionPreference() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
