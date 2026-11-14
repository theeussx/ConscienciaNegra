export type Layout =
  | "hero"
  | "statement"
  | "timeline"
  | "mural"
  | "food"
  | "player"
  | "event"
  | "sequence"
  | "reflection"
  | "cases"
  | "people"
  | "present"
  | "closing"
  | "participants";
export interface Entry {
  title: string;
  tag: string;
  text: string;
  detail: string;
  image?: string;
  source: string;
  sources?: string[];
  ingredients?: string;
}
export interface Scene {
  id: string;
  chapter: number;
  kicker: string;
  title: string;
  subtitle?: string;
  body: string;
  layout: Layout;
  image?: string;
  sources: string[];
  notes: string;
  items?: Entry[];
}
export interface Chapter {
  title: string;
  short: string;
  description: string;
}
export interface Asset {
  id: string;
  file: string;
  title: string;
  alt: string;
  author: string;
  license: string;
  source: string;
  licenseUrl: string;
}
