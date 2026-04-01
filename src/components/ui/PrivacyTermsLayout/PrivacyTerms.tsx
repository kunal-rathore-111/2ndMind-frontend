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
    <div className="my-15 w-full rounded-2xl border-2 px-14 py-4 text-start">
      <div className="flex items-center justify-between border-b py-4">
        <div>
          <h2 className="text-2xl">{props.heading}</h2>
          <h3 className="font-thin">Last updated: {lastUpdate}</h3>
        </div>
        <div className="flex gap-4">
          <ThemeToggleButton />
          <HomeButton />
        </div>
      </div>
      <ol className="my-3 list-decimal border-b py-3 pl-5" type="1">
        {props.DataArray.map((x, idx) => {
          return (
            <li key={idx} className="py-4">
              <div className="flex flex-col gap-1">
                <h3>{x.title}</h3>
                <p className="font-thin">{x.description}</p>
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
  );
}
