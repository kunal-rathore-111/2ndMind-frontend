import { CodeIcon } from "@/assets/icons/Category/Code";
import { GithubIcon } from "@/assets/icons/Github";

export type IconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

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
  category: "react.dev",
  contentTitle: " React - The library for web and native user interfaces",
  contentDescription:
    " React lets you build user interfaces out of individual pieces called components. Create your own React components like",
  tags: ["react", "frontend", "ui"],
  date: "2026-01-15",
};
export const card2 = {
  categoryIcon: GithubIcon,
  category: "github",
  contentTitle: "Github - Open Source roadmap",
  contentDescription:
    "GitHub provides a structured path to explore open source, understand workflows, and contribute effectively by collaborating on real-world projects and improving your development skills.",
  tags: ["github", "open-source", "roadmap", "collaboration", "git"],
  date: "2026-02-10",
};
