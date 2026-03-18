"use client";

import { LinkIcon, type LinkIconHandle } from "@/assets/icons/Link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ChartLineIcon,
  type ChartLineIconHandle,
} from "@/assets/icons/Content/Code";
import {
  ChartSplineIcon,
  type ChartSplineIconHandle,
} from "@/assets/icons/Category/Instagram";

export function ThreeDCardDemo() {
  const IconRef = useRef<
    Array<LinkIconHandle | ChartLineIconHandle | ChartSplineIconHandle | null>
  >([]);

  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          className="w-full text-xs text-neutral-600 dark:text-white"
          onMouseEnter={() =>
            IconRef.current?.forEach((x) => x?.startAnimation())
          }
          onMouseLeave={() =>
            IconRef.current?.forEach((x) => x?.stopAnimation())
          }
          translateZ="50"
        >
          <div className="my-2 flex w-full justify-between gap-5">
            <div className="flex items-center gap-2">
              <ChartLineIcon
                size={18}
                ref={(el) => {
                  IconRef.current[0] = el;
                }}
              />
              <div className="flex items-center gap-1">
                <ChartSplineIcon
                  size={18}
                  ref={(el) => {
                    IconRef.current[1] = el;
                  }}
                />
                <h5>react.dev</h5>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon
                ref={(el) => {
                  IconRef.current[2] = el;
                }}
                size={18}
              />
              <span>Shared</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm font-semibold text-zinc-800 dark:text-zinc-300"
            >
              React – The library for web and native user interfaces
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-start text-sm text-zinc-400 dark:text-zinc-700"
            >
              React lets you build user interfaces out of individual pieces
              called components. Create your own React components like
            </CardItem>
          </div>
          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 max-w-sm text-start text-sm text-zinc-400 dark:text-zinc-700"
          >
            Array will be here
          </CardItem>

          <CardItem
            as="p"
            translateZ="60"
            className="mt-2 flex w-full max-w-sm justify-between text-start text-sm text-zinc-400 dark:text-zinc-700"
          >
            <div>Date</div>
            <div>4-5 buttons</div>
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
