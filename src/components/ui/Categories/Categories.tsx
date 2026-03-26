import Marquee from "./Marquee";

export default function Categories() {
  const words = [
    "Others",
    "Development",
    "Finance",
    "Study",
    "Social",
    "GitHub",
    "Exams",
    "AI",
    "Research",
    "Design",
  ];
  return (
    <div className="my-5 mt-8 flex items-center border-y">
      <span className="flex h-full items-center gap-2 p-1">
        <div className="h-1 w-1 rounded-full bg-orange-500 dark:bg-blue-500" />
        <div className="font-semibold"> Categories </div>
      </span>
      <Marquee className="flex-1 [mask-image:linear-gradient(to_right,transparent,black_80px,black_calc(100%-80px),transparent)]">
        {words.map((word, idx) => (
          <span
            key={idx}
            style={{ marginRight: 8 }}
            className="flex items-center gap-1"
          >
            <div className="h-1 w-1 rounded-full bg-orange-500 dark:bg-blue-500" />
            {word}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
