"use client";

import { LinkIcon, type LinkIconHandle } from "@/assets/icons/Card/Link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useRef } from "react";
import { CodeIcon, type CodeIconHandle } from "@/assets/icons/Content/Code";

import { ReactIcon, type ReactIconHandle } from "@/assets/icons/Category/React";
import Tags from "@/utils/Tags";
import { ShareIcon } from "@/assets/icons/Card/Share";
import { EditIcon } from "@/assets/icons/Card/Edit";
import { DeleteIcon } from "@/assets/icons/Card/Delete";
import { BrowserIcon } from "@/assets/icons/Card/Brower";

export function ThreeDCardDemo() {
  const IconRef = useRef<
    Array<LinkIconHandle | CodeIconHandle | ReactIconHandle | null>
  >([]);

  const tags = ["react", "frontend", "ui"];
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card dark:shadow-/90 relative h-auto w-auto rounded-xl bg-zinc-100 p-6 text-start shadow-sm shadow-zinc-800 sm:w-75 dark:bg-zinc-950 dark:shadow-zinc-50/80">
        <CardItem
          className="w-full text-xs text-neutral-600 dark:text-white"
          onMouseEnter={() =>
            IconRef.current?.forEach((x) => x?.startAnimation())
          }
          onMouseLeave={() =>
            IconRef.current?.forEach((x) => x?.stopAnimation())
          }
          translateZ="50"
          translateY={-10}
        >
          <div className="my-2 flex w-full justify-between gap-5">
            <div className="flex items-center gap-2">
              <CodeIcon
                size={18}
                className="rounded-sm border-2 border-black/50 p-1 dark:border-white/50 dark:text-white/90"
                ref={(el) => {
                  IconRef.current[0] = el;
                }}
              />
              <div className="flex items-center gap-1">
                <ReactIcon
                  size={18}
                  autoAnimate={true}
                  className="rounded-sm border-2 border-black/50 p-1 dark:border-white/50 dark:text-white/90"
                  ref={(el) => {
                    IconRef.current[1] = el;
                  }}
                />
                <h5>react.dev</h5>
              </div>
            </div>
            <div className="flex items-center gap-1 dark:text-white/90">
              <LinkIcon
                ref={(el) => {
                  IconRef.current[2] = el;
                }}
                size={18}
              />
              <span>Shared</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
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
              className="max-w-sm text-sm text-zinc-500/85 dark:text-zinc-300/40"
            >
              React lets you build user interfaces out of individual pieces
              called components. Create your own React components like
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="mt-2 max-w-sm text-sm text-zinc-400 dark:text-zinc-700"
            >
              <Tags tags={tags} />
            </CardItem>
          </div>
          <CardItem
            as="p"
            translateZ={10}
            translateY="10"
            className="mt-4 flex w-full items-center justify-between text-xs text-zinc-600 dark:text-zinc-200"
          >
            <div>2026-01-15</div>
            <div className="flex gap-2">
              <EditIcon size={17} />
              <ShareIcon size={17} />
              <DeleteIcon size={17} />
              <BrowserIcon size={17} />
            </div>
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
