import { ArrowUpRight } from "lucide-react";
import { scenes } from "../content/chapters";
import { sources } from "../content/sources";
import { assets } from "./Photo";
import { SourceList } from "./SourceList";
export function SourcesPanel({ chapter }: { chapter: number }) {
  return (
    <>
      <p className="dialog-intro">
        Conteúdo educativo em português brasileiro. Fontes consultadas em
        novembro de 2026. Os links externos precisam de conexão; a apresentação
        e seus textos ficam disponíveis offline.
      </p>
      <h3 className="section-label">NESTE CAPÍTULO</h3>
      <SourceList
        ids={[
          ...new Set(
            scenes
              .filter((s) => s.chapter === chapter)
              .flatMap((s) => s.sources),
          ),
        ]}
      />
      <h3 className="section-label">TODAS AS REFERÊNCIAS</h3>
      <SourceList ids={Object.keys(sources)} />
      <h3 className="section-label">FOTOGRAFIAS E LICENÇAS</h3>
      <div className="asset-credits">
        {assets.map((asset) => (
          <article key={asset.id}>
            <h4>{asset.title}</h4>
            <p>
              {asset.author} · {asset.license}
            </p>
            <a href={asset.source} target="_blank" rel="noreferrer">
              Página original <ArrowUpRight size={12} />
            </a>
            <a href={asset.licenseUrl} target="_blank" rel="noreferrer">
              Condições de uso
            </a>
          </article>
        ))}
      </div>
      <p className="muted">
        Direção editorial e desenvolvimento: projeto RAÍZES — ALÉM DA COR.
        Imagens redimensionadas e comprimidas; adaptações mantêm as licenças
        indicadas. Fontes: Instrument Serif e DM Sans, sob SIL Open Font
        License. Retratos são identificados como referência e não como registros
        dos episódios narrados.
      </p>
    </>
  );
}
