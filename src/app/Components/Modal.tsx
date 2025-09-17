"use client"
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    open: boolean;
    title?: string;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ open, title, onClose, children}: ModalProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const lastActive = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if(!open) return;

        lastActive.current = document.activeElement as HTMLElement | null;
        const el = dialogRef.current;
        el?.focus();

        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        return() => {
            document.body.style.overflow = prev;
            document.removeEventListener("keydown", onKey);
            lastActive.current?.focus?.();
        };
    }, [open, onClose]);

    if(!open) return null;

    return createPortal(
        <div className="modal-overlay" role="presentation" onClick={onClose}>
            <div className="modal-body" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} ref={dialogRef} onClick={(e) => e.stopPropagation()}>
                <div id="modal-title" className="modal-title"> {title ?? "Coming Soon"} </div>
                <div className="modal-body-text"> {children} </div>
                <button className="modal-close" onClick={onClose} aria-label="Close"> Ok </button>
            </div>
        </div>,
        document.body
    );
}