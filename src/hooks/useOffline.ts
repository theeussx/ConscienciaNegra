import { useEffect, useState } from "react";
export function useOffline() {
  const [status, setStatus] = useState<"loading" | "ready" | "error" | "dev">(
    "loading",
  );
  useEffect(() => {
    if (import.meta.env.DEV) {
      setStatus("dev");
      return;
    }
    if (!("serviceWorker" in navigator)) {
      setStatus("error");
      return;
    }
    let alive = true;
    let removeWorkerListener: (() => void) | undefined;
    navigator.serviceWorker
      .register("/sw.js")
      .then(async (registration) => {
        if (!alive) return;
        const worker =
          registration.installing ??
          registration.waiting ??
          registration.active;
        if (!worker) throw new Error("Service worker indisponível");
        if (worker.state === "activated") {
          if (alive) setStatus("ready");
          return;
        }
        const onStateChange = () => {
          if (!alive) return;
          if (worker.state === "activated") setStatus("ready");
          if (worker.state === "redundant") setStatus("error");
        };
        worker.addEventListener("statechange", onStateChange);
        removeWorkerListener = () =>
          worker.removeEventListener("statechange", onStateChange);
        onStateChange();
      })
      .catch(() => {
        if (alive) setStatus("error");
      });
    return () => {
      alive = false;
      removeWorkerListener?.();
    };
  }, []);
  return status;
}
