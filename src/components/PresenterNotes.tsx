import { ArrowLeft, ArrowRight } from "lucide-react";
import { scenes } from "../content/chapters";
import type { Scene } from "../types/content";
export function PresenterNotes({
  scene,
  index,
  step,
}: {
  scene: Scene;
  index: number;
  step: (delta: number) => void;
}) {
  return (
    <div className="notes-window">
      <div className="notes-header">
        <span className="wordmark">
          RAÍZES<span>NOTAS DO APRESENTADOR</span>
        </span>
        <span className="status-dot" /> Janela de apoio à apresentação
      </div>
      <p className="eyebrow">
        CAPÍTULO {String(scene.chapter + 1).padStart(2, "0")} / 09 · CENA{" "}
        {index + 1} / {scenes.length}
      </p>
      <h1>{scene.title}</h1>
      <article>
        <h2>Apoio para sua fala</h2>
        <p>{scene.notes}</p>
      </article>
      <div className="notes-next">
        <p className="eyebrow">A SEGUIR</p>
        <h2>{scenes[index + 1]?.title ?? "Fim da apresentação"}</h2>
      </div>
      <div className="notes-controls">
        <button
          className="primary-button"
          disabled={index === 0}
          onClick={() => step(-1)}
        >
          <ArrowLeft size={18} />
          Anterior
        </button>
        <button
          className="primary-button"
          disabled={index === scenes.length - 1}
          onClick={() => step(1)}
        >
          Próxima cena
          <ArrowRight size={18} />
        </button>
      </div>
      <p className="muted">
        Mantenha esta janela na tela do computador e a apresentação no projetor.
        Setas, espaço, Home e End controlam a projeção. Sem BroadcastChannel, as
        notas acompanham a tela principal via armazenamento local.
      </p>
    </div>
  );
}
