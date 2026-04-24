"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.2, rootMargin: "0px 0px -5% 0px" },
  once = true
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options, once]);

  return [ref, visible];
}

export function useCountUp(
  target: number,
  active: boolean,
  duration = 1200,
  decimals = 0
): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const media = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    if (media?.matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const factor = Math.pow(10, decimals);
      setValue(Math.round(target * eased * factor) / factor);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration, decimals]);

  return value;
}

type TiltOptions = { max?: number; perspective?: number; scale?: number };

export function useTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const { max = 8, perspective = 1100, scale = 1.02 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const media = window.matchMedia("(hover: none)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || reduced.matches) return;

    let raf = 0;
    let targetRX = 0;
    let targetRY = 0;
    let currentRX = 0;
    let currentRY = 0;
    let active = false;

    const lerp = () => {
      currentRX += (targetRX - currentRX) * 0.14;
      currentRY += (targetRY - currentRY) * 0.14;
      el.style.transform = `perspective(${perspective}px) rotateX(${currentRX}deg) rotateY(${currentRY}deg) scale(${active ? scale : 1})`;
      if (active || Math.abs(currentRX) > 0.05 || Math.abs(currentRY) > 0.05) {
        raf = requestAnimationFrame(lerp);
      } else {
        el.style.transform = "";
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      targetRY = (px - 0.5) * max * 2;
      targetRX = -(py - 0.5) * max * 2;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    };
    const onEnter = () => {
      active = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(lerp);
    };
    const onLeave = () => {
      active = false;
      targetRX = 0;
      targetRY = 0;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(lerp);
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointermove", onMove);
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
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const touch = window.matchMedia("(hover: none)");
    if (reduced.matches || touch.matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}
