import { useState } from "react";
import inventory from "../../docs/assets.json";
import type { Asset } from "../types/content";
export const assets = inventory as Asset[];
const aliases: Record<string, string> = {
  hero: "hero-maracatu",
  samba: "samba-de-roda",
  machado: "machado-de-assis",
  carolina: "carolina-maria-de-jesus",
  gama: "luiz-gama",
};
export function findAsset(id?: string) {
  return assets.find((asset) => asset.id === (aliases[id ?? ""] ?? id));
}
export function Photo({
  id,
  className = "",
  priority = false,
}: {
  id?: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const asset = findAsset(id);
  if (!asset || failed)
    return (
      <div
        className={`photo photo-fallback ${className}`}
        role="img"
        aria-label={asset?.alt ?? "Imagem não disponível"}
      >
        <span className="photo-fallback-label">Imagem não disponível</span>
      </div>
    );
  return (
    <img
      className={`photo ${className}`}
      src={asset.file}
      alt={asset.alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setFailed(true)}
    />
  );
}
