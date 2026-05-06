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
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {},
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {}
  }, []);

  return (
    <div className="flex flex-col w-full rounded-[5px]">
      <div className={cn("w-full flex justify-center min-h-62.5", className)}>
        <ins
          className="adsbygoogle max-auto w-full max-w-full sm:ml-0! h-auto"
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
