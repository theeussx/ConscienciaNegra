import { useCallback, useEffect, useRef, useState } from "react";
import { scenes } from "../content/chapters";
import { navigate, parseScene } from "../utils/navigation";
const params = new URLSearchParams(location.search);
function createSession() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}
export const presentationSession =
  params.get("session") ??
  (window.name.startsWith("raizes-main-")
    ? window.name.slice(12)
    : createSession());
if (!params.has("notes")) window.name = `raizes-main-${presentationSession}`;
type Message = {
  type: "request" | "sync" | "navigate" | "step";
  index?: number;
  delta?: number;
};
export function usePresentation(
  isNotes: boolean,
  blocked: boolean,
  onRemote: () => void,
) {
  const [index, setIndex] = useState(() =>
    parseScene(
      new URLSearchParams(location.hash.slice(1)).get("scene"),
      scenes.length,
    ),
  );
  const channel = useRef<BroadcastChannel | null>(null);
  const current = useRef(index);
  current.current = index;
  const remoteCallback = useRef(onRemote);
  remoteCallback.current = onRemote;
  const key = `raizes-scene-${presentationSession}`;
  const commandKey = `raizes-command-${presentationSession}`;
  const go = useCallback(
    (next: number) => setIndex(parseScene(next, scenes.length)),
    [],
  );
  const observe = useCallback((next: number) => setIndex(parseScene(next, scenes.length)), []);
  const send = useCallback(
    (message: Message) => {
      if (channel.current) channel.current.postMessage(message);
      else
        try {
          localStorage.setItem(
            commandKey,
            JSON.stringify({
              ...message,
              at: Date.now(),
              nonce: Math.random(),
            }),
          );
        } catch {
          /* Main window remains operable when storage is disabled. */
        }
    },
    [commandKey],
  );
  useEffect(() => {
    const bc =
      "BroadcastChannel" in window
        ? new BroadcastChannel(`raizes-presenter-${presentationSession}`)
        : null;
    channel.current = bc;
    const receive = (data: Message) => {
      if (data.type === "request" && !isNotes)
        bc?.postMessage({ type: "sync", index: current.current });
      if (data.type === "sync" && isNotes) go(data.index ?? 0);
      if (!isNotes && (data.type === "navigate" || data.type === "step")) {
        remoteCallback.current();
        if (data.type === "step")
          setIndex((i) =>
            navigate(i, data.delta === -1 ? -1 : 1, scenes.length),
          );
        else go(data.index ?? 0);
      }
    };
    if (bc) bc.onmessage = (e) => receive(e.data);
    const storage = (e: StorageEvent) => {
      if (e.key === key && isNotes) go(parseScene(e.newValue, scenes.length));
      if (e.key === commandKey && !isNotes && e.newValue)
        try {
          receive(JSON.parse(e.newValue));
        } catch {
          /* Ignore invalid stored messages. */
        }
    };
    window.addEventListener("storage", storage);
    if (isNotes) {
      try {
        go(parseScene(localStorage.getItem(key), scenes.length));
      } catch {
        /* BroadcastChannel supplies the initial scene. */
      }
      bc?.postMessage({ type: "request" });
    }
    return () => {
      bc?.close();
      channel.current = null;
      window.removeEventListener("storage", storage);
    };
  }, [isNotes, go, key, commandKey]);
  useEffect(() => {
    if (!isNotes) {
      channel.current?.postMessage({ type: "sync", index });
      try {
        localStorage.setItem(key, String(index));
      } catch {
        /* BroadcastChannel remains available. */
      }
      history.replaceState(null, "", `#scene=${index}`);
    }
  }, [index, isNotes, key]);
  useEffect(() => {
    const change = () => {
      const hash = new URLSearchParams(location.hash.slice(1));
      if (hash.has("scene")) {
        remoteCallback.current();
        go(parseScene(hash.get("scene"), scenes.length));
      }
    };
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, [go]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        blocked ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        (e.target instanceof HTMLElement &&
          e.target.closest("input,textarea,select,[contenteditable]"))
      )
        return;
      if (
        e.code === "Space" &&
        e.target instanceof HTMLElement &&
        e.target.closest("button,a")
      )
        return;
      const delta =
        e.key === "ArrowRight" || e.code === "Space"
          ? 1
          : e.key === "ArrowLeft"
            ? -1
            : 0;
      if (delta) {
        e.preventDefault();
        if (isNotes) send({ type: "step", delta });
        else setIndex((i) => navigate(i, delta, scenes.length));
        return;
      }
      const destination =
        e.key === "Home" ? 0 : e.key === "End" ? scenes.length - 1 : undefined;
      if (destination !== undefined) {
        e.preventDefault();
        if (isNotes) send({ type: "navigate", index: destination });
        else go(destination);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [blocked, isNotes, go, send]);
  return {
    index,
    observe,
    go: (next: number) =>
      isNotes
        ? send({ type: "navigate", index: parseScene(next, scenes.length) })
        : go(next),
    step: (delta: number) =>
      isNotes
        ? send({ type: "step", delta })
        : setIndex((i) => navigate(i, delta, scenes.length)),
  };
}
