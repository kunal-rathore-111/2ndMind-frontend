import { Link, PlusIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface AddBookMarkCardDTO {
  setOpenAddCard: Dispatch<SetStateAction<boolean>>;
}

export default function AddBookMarkCard({
  setOpenAddCard,
}: AddBookMarkCardDTO) {
  return (
    <>
      <div className="fixed inset-0 z-10 flex max-h-screen items-center justify-center bg-black/30 backdrop-blur-xs">
        <div className="relative flex h-fit max-h-[90vh] max-w-200 flex-col rounded-xl border bg-zinc-100 p-7 text-start text-xs shadow-sm shadow-zinc-900 dark:bg-zinc-950/80 dark:shadow-zinc-300/90">
          {/* using the plus as crossIcon by rotating */}
          <span className="absolute -top-2 -right-2 z-20 rounded-full border bg-zinc-300 p-0.5">
            {
              <PlusIcon
                onClick={() => {
                  setOpenAddCard(false);
                }}
                className="rotate-70 text-zinc-500"
                size={20}
              />
            }
          </span>

          {/* to gap bw the entire data and the date part  */}
          <div className="space-y-10 overflow-y-auto px-10">
            {/*  header+content of card */}
            <div className="space-y-6">
              {/* for the header of card */}
              <div className="flex items-center justify-between border-2">
                <div className="flex items-center gap-2">
                  <Link
                    size={26}
                    className="rounded-sm border-2 border-black/50 p-1 dark:border-white/50"
                  />
                  <h5 className="text-sm">Add Bookmark</h5>
                </div>
              </div>

              {/* Input bars section */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
