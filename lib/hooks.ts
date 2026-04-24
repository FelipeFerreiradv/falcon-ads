"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

const defaultInViewOpts: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: "0px 0px -5% 0px",
};

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = defaultInViewOpts,
  once = true
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) setVisible(false);
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options, once]);

  return [ref, visible];
}

export function useCountUp(target: number, active: boolean, duration = 1200): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

export function useTilt<T extends HTMLElement>(opts: { max?: number; perspective?: number; scale?: number } = {}) {
  const { max = 8, perspective = 1100, scale = 1.02 } = opts;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tRX = 0, tRY = 0, cRX = 0, cRY = 0;
    let active = false;

    const lerp = () => {
      cRX += (tRX - cRX) * 0.14;
      cRY += (tRY - cRY) * 0.14;
      el.style.transform = `perspective(${perspective}px) rotateX(${cRX}deg) rotateY(${cRY}deg) scale(${active ? scale : 1})`;
      if (active || Math.abs(cRX) > 0.05 || Math.abs(cRY) > 0.05) raf = requestAnimationFrame(lerp);
      else el.style.transform = "";
    };
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      tRY = (px - 0.5) * max * 2;
      tRX = -(py - 0.5) * max * 2;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };
    const enter = () => { active = true; cancelAnimationFrame(raf); raf = requestAnimationFrame(lerp); };
    const leave = () => { active = false; tRX = 0; tRY = 0; cancelAnimationFrame(raf); raf = requestAnimationFrame(lerp); };

    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("pointermove", move);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("pointermove", move);
      el.style.transform = "";
    };
  }, [max, perspective, scale]);

  return ref;
}

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)`;
    };
    const leave = () => { el.style.transform = ""; };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return ref;
}
