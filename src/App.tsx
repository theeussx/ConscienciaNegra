import { Chrome } from "./components/Chrome";
import { DetailDialog } from "./components/Dialog";
import { PresentationProvider } from "./hooks/usePresentation";
import { useOffline } from "./hooks/useOffline";
import { Capitulo01 } from "./chapters/Capitulo01";
import { Capitulo02 } from "./chapters/Capitulo02";
import { Capitulo03 } from "./chapters/Capitulo03";
import { Capitulo04 } from "./chapters/Capitulo04";
import { Capitulo05 } from "./chapters/Capitulo05";
import { Capitulo06 } from "./chapters/Capitulo06";
import { Capitulo07 } from "./chapters/Capitulo07";
import { Capitulo08 } from "./chapters/Capitulo08";
import { Capitulo09 } from "./chapters/Capitulo09";

export default function App() {
  useOffline();

  return (
    <PresentationProvider>
      <a
        href="#cap-01"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-amber focus:px-4 focus:py-2 focus:text-ink"
      >
        Pular para o início
      </a>
      <main className="relative min-h-dvh overflow-x-hidden bg-ink pb-24 text-cream">
        <Capitulo01 />
        <Capitulo02 />
        <Capitulo03 />
        <Capitulo04 />
        <Capitulo05 />
        <Capitulo06 />
        <Capitulo07 />
        <Capitulo08 />
        <Capitulo09 />
      </main>
      <Chrome />
      <DetailDialog />
    </PresentationProvider>
  );
}
