import { CodeIcon } from "@/assets/icons/Category/Code";
import { GithubIcon } from "@/assets/icons/Github";

export interface CardDTO {
  categoryIcon: typeof CodeIcon;
  category: string;
  contentTitle: string;
  contentDescription: string;
  tags: string[];
  date: string;
}

export const card1 = {
  categoryIcon: CodeIcon,
  category: "Development",
  contentTitle: " React - The library for web and native user interfaces",
  contentDescription:
    " React lets you build user interfaces out of individual pieces called components.",
  tags: ["react", "frontend", "ui"],
  date: "2026-01-15",
};
export const card2 = {
  categoryIcon: GithubIcon,
  category: "Github",
  contentTitle: "Github - Open Source roadmap",
  contentDescription:
    "GitHub provides a structured path to explore open source and contribute effectively.",
  tags: ["github", "open-source"],
  date: "2026-02-10",
};
