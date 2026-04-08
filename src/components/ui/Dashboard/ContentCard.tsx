import { BrowserIcon } from "@/assets/icons/Brower";
import { ShareOffIcon } from "@/assets/icons/Shareoff";
import type { CardDTO } from "@/lib/constants/content/SampleCardData";
import Tags from "@/lib/utils/Tags";
import { DeleteIcon, EditIcon, LinkIcon, ShareIcon } from "lucide-react";

export function ContentCard({ cardData }: { cardData: CardDTO }) {
  return (
    <div className="relative flex h-auto flex-col justify-between rounded-xl bg-zinc-100 p-3 text-start text-xs shadow-sm shadow-zinc-900 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
      {/*  header+content of card */}
      <div>
        {/* for the header of card */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <cardData.categoryIcon
              size={14}
              className="rounded-sm border-2 border-black/50 p-1 dark:border-white/50"
            />
            <h5 className="text-xs">{cardData.category}</h5>
          </div>
          <div className="flex items-center gap-1 text-xs">
            {cardData.isShared ? (
              <>
                <LinkIcon size={14} />
                <span className="text-xs">Shared</span>
              </>
            ) : null}
          </div>
        </div>

        {/* Card content the title and description */}
        <div className="mt-2 flex flex-col gap-2">
          <div>
            <div className="max-w-sm text-xs font-semibold">
              <TruncatedString str={cardData.contentTitle} type="title" />
            </div>
          </div>
          <div>
            <div className="max-w-sm text-xs font-thin text-gray-600/90 dark:text-zinc-400/70">
              <TruncatedString
                str={cardData.contentDescription}
                type="description"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 max-w-sm text-sm">
              <Tags tags={cardData.tags} />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* last section the date and the 4 updations buttons */}
      <div className={"mt-4 flex w-full items-center justify-between text-xs"}>
        <div>{cardData.date}</div>
        <div className="flex gap-2">
          {[
            EditIcon,
            cardData.isShared ? ShareIcon : ShareOffIcon,
            DeleteIcon,
            BrowserIcon,
          ].map((Icon, idx) => (
            <div key={idx}>
              <Icon size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TruncatedString({
  str,
  type,
}: {
  str: string;
  type: "description" | "title";
}) {
  const maxLength = type === "title" ? 50 : 120;
  if (str.length <= maxLength) return <p>{str}</p>;
  return <p>{str.slice(0, maxLength)}....</p>;
}
