import assetManifest from "../../docs/assets.json";

export interface Photo {
  src: string;
  alt: string;
  author: string;
  license: string;
  source: string;
  licenseUrl: string;
  /** Ponto focal do recorte (object-position). */
  position?: string;
}

/** Chaves de imagem usadas pelo conteúdo do ZIP. */
export const photoKeys = [
  "hero",
  "parade",
  "street",
  "navio_negreiro",
  "serra_barriga",
  "zumbi_monument",
  "maracatu",
  "capoeira",
  "samba",
  "jongo",
  "acaraje",
  "vatapa",
  "caruru",
  "abara",
  "balotelli",
  "balotelli_euro",
  "balotelli_euro_action",
  "vinicius",
  "richarlison",
  "machado",
  "carolina",
  "luiz_gama",
  "milton_santos",
  "conceicao",
  "pele",
] as const;

export type PhotoKey = (typeof photoKeys)[number];

const localAssetByPhoto = {
  hero: "hero-maracatu",
  parade: "desfile-maracatu",
  street: "marcha-consciencia-negra",
  navio_negreiro: "navio-negreiro",
  serra_barriga: "serra-barriga",
  zumbi_monument: "zumbi-monumento",
  maracatu: "maracatu",
  capoeira: "capoeira",
  samba: "samba-de-roda",
  jongo: "jongo",
  acaraje: "acaraje",
  vatapa: "vatapa",
  caruru: "caruru",
  abara: "abara",
  balotelli: "balotelli",
  balotelli_euro: "balotelli-euro-2012",
  balotelli_euro_action: "balotelli-euro-2012-02",
  vinicius: "vinicius",
  richarlison: "richarlison",
  machado: "machado-de-assis",
  carolina: "carolina-maria-de-jesus",
  luiz_gama: "luiz-gama",
  milton_santos: "milton-santos",
  conceicao: "conceicao-evaristo",
  pele: "pele",
} satisfies Partial<Record<PhotoKey, string>>;

const assetsById = new Map(assetManifest.map((asset) => [asset.id, asset]));

/** Only files documented in docs/assets.json are exposed to the narrative. */
export const photos: Partial<Record<PhotoKey, Photo>> = Object.fromEntries(
  Object.entries(localAssetByPhoto).flatMap(([photoKey, assetId]) => {
    const asset = assetsById.get(assetId);
    if (!asset) return [];

    return [
      [
        photoKey,
        {
          src: asset.file,
          alt: asset.alt,
          author: asset.author,
          license: asset.license,
          source: asset.source,
          licenseUrl: asset.licenseUrl,
        },
      ],
    ];
  }),
) as Partial<Record<PhotoKey, Photo>>;
