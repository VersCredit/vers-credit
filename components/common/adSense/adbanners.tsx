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
    <div className="flex flex-col w-full gap-4 bg-linear-to-b from-bright-royal-blue/70 to-bright-royal-blue/20 rounded-[5px]">
      <p className="mx-auto text-white w-fit">Advertisement</p>
      <div
        className={cn("max-w-full!", className)}
        style={{
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <ins
          className="adsbygoogle max-auto w-full max-w-full ml-0! h-auto"
          style={{ display: "block", ...style }}
          data-ad-client="ca-pub-9959637639836790"
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
