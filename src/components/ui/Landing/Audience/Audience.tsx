import DotComp from "../Dot";
import { CardBody, CardContainer, CardItem } from "../Features/comps/3d-card";
import { motion } from "framer-motion";

import Person1 from "@/assets/images/avatar/landing/person1.png";
import Person2 from "@/assets/images/avatar/landing/person2.png";
import Person3 from "@/assets/images/avatar/landing/person3.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../Herosection/comps/avatar";

export default function Audience() {
  interface AudienceCommentArrayDTO {
    comment: string;
    image: string;
    name: string;
  }

  const AudienceCommentArray: AudienceCommentArrayDTO[] = [
    {
      comment: "Replaced every other bookmark tool I've tried.",
      image: Person1,
      name: "swyx",
    },
    {
      comment: "The search alone is worth it. Incredibly fast.",

      image: Person2,
      name: "t3dotgg",
    },
    {
      comment: "Finally a bookmark manager that feels like real software.",
      image: Person3,
      name: "theo",
    },
  ];
  return (
    <>
      <div className="mt-0 flex flex-col">
        <h3 className="flex items-center gap-1 text-4xl font-semibold text-black/70 uppercase dark:text-white/60">
          {<DotComp />} Audience
        </h3>
        <div className="mt-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl">What our audience says</h2>
          <motion.div className="mt-8 flex items-center justify-center gap-7">
            {AudienceCommentArray.map((x, idx) => {
              return (
                <CardContainer className="inter-var" key={idx}>
                  <CardBody className="relative flex h-auto w-auto rounded-xl bg-zinc-100 p-6 text-start shadow-sm shadow-zinc-900 sm:w-65 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
                    <CardItem
                      className="flex w-full flex-col gap-2 text-xs"
                      translateZ="5"
                      translateY={-10}
                    >
                      <p>"{x.comment}"</p>
                      <div className="flex items-center gap-1">
                        <Avatar>
                          <AvatarImage src={x.image} alt={`@${x.name}`} />
                          <AvatarFallback>
                            {x.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <span>@{x.name}</span>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              );
            })}
          </motion.div>
        </div>
      </div>
      <hr />
    </>
  );
}
