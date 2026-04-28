"use client";

import { cn } from "@/lib/utils";
import { SettingsQueryResult } from "@/sanity.types";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const Sidebar = ({
  data,
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  data: NonNullable<SettingsQueryResult>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [calculatorListMounted, setCalculatorListMounted] =
    useState<boolean>(false);
  const [calculatorListOpen, setCalculatorListOpen] = useState<boolean>(false);
  const calculaterListRef = useRef<NodeJS.Timeout | null>(null);

  const [topicsListMounted, setTopicsListMounted] = useState<boolean>(false);
  const [topicsListOpen, setTopicsListOpen] = useState<boolean>(false);
  const topicsListRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <>
      <div>
        {isSidebarOpen ?
          <X
            role="button"
            onClick={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }
              setIsSidebarOpen(false);
              timerRef.current = setTimeout(() => setIsMounted(false), 500);
            }}
            className="text-white duration-300 cursor-pointer hover:text-white/80"
          />
        : <Menu
            role="button"
            onClick={() => {
              if (timerRef.current) {
                clearTimeout(timerRef.current);
              }
              timerRef.current = setTimeout(() => setIsSidebarOpen(true), 10);
              setIsMounted(true);
            }}
            className="text-white duration-300 cursor-pointer hover:text-white/80"
          />
        }
      </div>
      {isMounted && (
        <div
          className={cn(
            "h-[calc(100vh-66px)] bg-casual-navy w-full transition-transform left-0 top-16.5 duration-500 absolute -translate-x-full",
            isSidebarOpen && "translate-x-0",
          )}
        >
          <div className="flex flex-col max-h-full gap-3 p-4 overflow-y-scroll no-scrollbar">
            {data.headerLinks.map((link) => (
              <Link
                href={link.url}
                key={link._key}
                className="flex gap-10 text-base text-white duration-300 w-fit hover:text-white/80 group otems-center"
                onClick={() => setIsSidebarOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowRight className="duration-300 -translate-x-10 opacity-0 text-white/80 group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
            <div className="flex flex-col gap-3 text-white">
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/calculators"
                  className="flex items-center gap-10 text-base duration-300 w-fit hover:text-white/80 group"
                  onClick={() => {
                    if (calculaterListRef.current) {
                      clearTimeout(calculaterListRef.current);
                    }
                    setCalculatorListMounted(false);
                    calculaterListRef.current = setTimeout(() =>
                      setCalculatorListOpen(false),
                    );
                    setIsSidebarOpen(false);
                  }}
                >
                  <span>Calculators</span>
                  <ArrowRight className="duration-300 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
                <ChevronDown
                  className={cn(
                    "text-white hover:text-white/80 duration-300 cursor-pointer",
                    calculatorListOpen && "rotate-180",
                  )}
                  role="button"
                  onClick={() => {
                    if (calculaterListRef.current) {
                      clearTimeout(calculaterListRef.current);
                    }
                    setCalculatorListMounted((prev) => !prev);
                    calculaterListRef.current = setTimeout(() =>
                      setCalculatorListOpen((prev) => !prev),
                    );
                  }}
                />
              </div>
              {calculatorListMounted && (
                <div
                  className={cn(
                    "flex flex-col gap-2 max-h-0 duration-300 opacity-0 pl-4 text-white/60 transition-all overflow-hidden",
                    calculatorListOpen && "max-h-1000 opacity-100",
                  )}
                >
                  {data.calculators.map((calculator) => (
                    <Link
                      href={`calculators/${calculator.slug}`}
                      key={calculator._id}
                      className="flex items-center gap-10 text-base duration-300 hover:text-white w-fit group"
                      onClick={() => {
                        if (calculaterListRef.current) {
                          clearTimeout(calculaterListRef.current);
                        }
                        setCalculatorListMounted(false);
                        calculaterListRef.current = setTimeout(() =>
                          setCalculatorListOpen(false),
                        );
                        setIsSidebarOpen(false);
                      }}
                    >
                      <span>{calculator.calculatorName}</span>
                      <span>
                        <ArrowRight className="duration-300 -translate-x-10 opacity-0 text-white/60 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-3 text-white">
              <div className="flex items-center justify-between w-full">
                <p className="flex items-center gap-10 text-base duration-300 w-fit">
                  Topics
                </p>
                <ChevronDown
                  className={cn(
                    "text-white hover:text-white/80 duration-300 cursor-pointer",
                    topicsListOpen && "rotate-180",
                  )}
                  role="button"
                  onClick={() => {
                    if (topicsListRef.current) {
                      clearTimeout(topicsListRef.current);
                    }
                    setTopicsListMounted((prev) => !prev);
                    topicsListRef.current = setTimeout(() =>
                      setTopicsListOpen((prev) => !prev),
                    );
                  }}
                />
              </div>
              {topicsListMounted && (
                <div
                  className={cn(
                    "flex flex-col gap-2 max-h-0 duration-300 opacity-0 pl-4 text-white/60 transition-all overflow-hidden",
                    topicsListOpen && "max-h-1000 opacity-100",
                  )}
                >
                  {data.topics.map((topic) => (
                    <Link
                      href={`/${topic.slug}`}
                      key={topic._id}
                      className="flex gap-10 text-base duration-300 hover:text-white w-fit group otems-center"
                      onClick={() => {
                        if (topicsListRef.current) {
                          clearTimeout(topicsListRef.current);
                        }
                        setTopicsListMounted(false);
                        topicsListRef.current = setTimeout(() =>
                          setTopicsListOpen(false),
                        );
                        setIsSidebarOpen(false);
                      }}
                    >
                      <span>{topic.label}</span>
                      <span>
                        <ArrowRight className="duration-300 -translate-x-10 opacity-0 text-white/60 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
