import BackToHomeButton from "@/components/ui/Buttons/BackToHomeButton";
import HomeButton from "@/components/ui/Buttons/HomeButton";
import MoveUpButton from "@/components/ui/Buttons/MoveUpButton";
import ThemeToggleButton from "@/components/ui/Buttons/ThemeButton";

interface DataDTO {
  title: string;
  description: string;
}

interface PrivacyTermsDTO {
  heading: string;
  DataArray: DataDTO[];
}

export default function PrivacyTerms(props: PrivacyTermsDTO) {
  const lastUpdate = import.meta.env.VITE_PRIVACY_POLICY_DATE ?? "N/A";

  return (
    <div className="my-10 w-full rounded-2xl border px-20 text-start dark:border-2">
      <div className="w-full px-10 py-4 text-start">
        <div className="flex items-center justify-between border-b py-4">
          <div>
            <h2 className="text-2xl font-semibold">{props.heading}</h2>
            <h3 className="font-medium">Last updated: {lastUpdate}</h3>
          </div>
          <div className="flex gap-4">
            <ThemeToggleButton />
            <HomeButton />
          </div>
        </div>
        <ol className="my-3 list-decimal border-b py-3 pl-5" type="1">
          {props.DataArray.map((x, idx) => {
            return (
              <li
                key={idx}
                className="rounded-lg px-3 py-4 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-zinc-700 dark:text-zinc-300">
                    {x.title}
                  </h3>
                  <p className="text-zinc-600/80 dark:text-zinc-500">
                    {x.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex w-full items-center justify-between">
          <BackToHomeButton />
          <MoveUpButton />
        </div>
      </div>
    </div>
  );
}
