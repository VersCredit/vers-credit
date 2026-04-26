"use client";
import { cn } from "@/lib/utils";
import { HTMLProps, useEffect } from "react";

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
    <div
      className={cn("max-sm:max-w-[calc(100%-32px)]", className)}
      style={{
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <ins
        className="adsbygoogle w-full max-w-full ml-0! h-auto"
        style={{ display: "block", ...style }}
        data-ad-client="ca-pub-9959637639836790"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
