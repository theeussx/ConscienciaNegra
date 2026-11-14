import { useCallback, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
export function Dialog({
  title,
  onClose,
  children,
  wide = false,
  onAdvance,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
  onAdvance?: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const closing = useRef(false);
  const [isClosing, setIsClosing] = useState(false);
  const reduced = useReducedMotion();
  const requestClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    setIsClosing(true);
    timer.current = window.setTimeout(onClose, reduced ? 0 : 220);
  }, [onClose, reduced]);
  useLayoutEffect(() => {
    const opener = document.activeElement;
    const node = ref.current;
    node?.showModal();
    return () => {
      window.clearTimeout(timer.current);
      node?.close();
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
      else document.getElementById("main-content")?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={`dialog ${wide ? "dialog-wide" : ""}`}
      data-closing={isClosing || undefined}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) requestClose();
      }}
      onKeyDown={(e) => {
        const target = e.target;
        const isControl = target instanceof HTMLElement && target.closest("button,a,input,textarea,select,[contenteditable]");
        if (onAdvance && !isControl && !e.repeat && (e.key === "ArrowRight" || e.code === "Space")) { e.preventDefault(); e.stopPropagation(); onAdvance(); }
      }}
      aria-labelledby="dialog-title"
    >
      <motion.div className="dialog-content" initial={{ opacity: 0, y: 10, scale: .985 }} animate={{ opacity: isClosing ? 0 : 1, y: isClosing ? 6 : 0, scale: isClosing ? .99 : 1 }} transition={{ duration: reduced ? 0 : .22, ease: [.22, .7, .2, 1] }}>
      <div className="dialog-top">
        <h2 id="dialog-title">{title}</h2>
        <button
          className="icon-button"
          aria-label="Fechar painel"
          onClick={requestClose}
        >
          <X size={22} />
        </button>
      </div>
      {children}
      </motion.div>
    </dialog>
  );
}
