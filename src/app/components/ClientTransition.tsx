"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

    if (pathname === "/") return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, backgroundColor: "#fff" }}
        animate={{ opacity: 1, backgroundColor: "transparent" }}
        exit={{ opacity: 0, backgroundColor: "#fff" }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ minHeight: "100svh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
