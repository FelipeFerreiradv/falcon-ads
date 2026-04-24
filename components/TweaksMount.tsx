"use client";

import dynamic from "next/dynamic";

const Tweaks = dynamic(() => import("./Tweaks"), {
  ssr: false,
  loading: () => null,
});

export default function TweaksMount() {
  return <Tweaks />;
}
