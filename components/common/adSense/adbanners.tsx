"use client";
import { cn } from "@/lib/utils";
import { HTMLProps, useEffect, useRef } from "react";
export default function AdBanner({
  slot,
  style,
  className,
}: {
  slot: string;
  style?: HTMLProps<HTMLElement>["style"];
  className?: HTMLProps<HTMLElement>["className"];
}) {
  const adRef = useRef<HTMLModElement | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!adRef.current || hasLoaded.current) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
      hasLoaded.current = true;
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 bg-linear-to-b from-bright-royal-blue/70 to-bright-royal-blue/20 rounded-[5px]">
      <p className="mx-auto text-white w-fit">Advertisement</p>
      <div
        className={cn("w-full flex justify-center min-h-[250px]", className)}
      >
        <ins
          className="adsbygoogle max-auto w-full max-w-full ml-0! h-auto"
          style={{ display: "block", ...style }}
          data-ad-client="ca-pub-9959637639836790"
          data-ad-slot={slot ?? "5430829843"}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
