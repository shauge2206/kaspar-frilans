"use client";
import { useState } from "react";

export function ShareLinks({ tittel }: { tittel: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (typeof window === "undefined") return;
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <div className="space-y-2 font-sans text-sm">
      <p className="smallcaps text-ink-mute mb-3">Del</p>
      <button
        type="button"
        onClick={copy}
        className="block w-full text-left text-ink-soft hover:text-amber transition py-1"
      >
        {copied ? "Lenke kopiert ✓" : "Kopier lenke"}
      </button>
      <a
        className="block text-ink-soft hover:text-amber transition py-1"
        href={`mailto:?subject=${encodeURIComponent(tittel)}`}
      >
        Send på e-post
      </a>
      <a
        className="block text-ink-soft hover:text-amber transition py-1"
        href="https://bsky.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Del på Bluesky
      </a>
    </div>
  );
}
