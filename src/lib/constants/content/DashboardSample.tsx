import {
  ChartBarDecreasingIcon,
  CodeIcon,
  DatabaseIcon,
  HomeIcon,
  ShareIcon,
  TagIcon,
  type LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export type SideBarMenuDataTypes = {
  SidebarMenuButtonIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  SidebarMenuButtonName: string;
  CollapsedData?: {
    CollapsedDataIcon?: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    CollapsedDataButtonName: string;
  }[];
};

export const SideBarMenuData: SideBarMenuDataTypes[] = [
  /* 1 home */
  {
    SidebarMenuButtonIcon: HomeIcon,
    SidebarMenuButtonName: "Home",
  },
  /* 2nd Categories */
  {
    SidebarMenuButtonIcon: DatabaseIcon,
    SidebarMenuButtonName: "Categories",
    CollapsedData: [
      { CollapsedDataIcon: DatabaseIcon, CollapsedDataButtonName: "All" },
      { CollapsedDataIcon: CodeIcon, CollapsedDataButtonName: "Development" },
      {
        CollapsedDataIcon: ChartBarDecreasingIcon,
        CollapsedDataButtonName: "Design",
      },
    ],
  },
  /* 3rd Tags */
  {
    SidebarMenuButtonIcon: TagIcon,
    SidebarMenuButtonName: "Tags",
    CollapsedData: [
      { CollapsedDataButtonName: "# All" },
      { CollapsedDataButtonName: "# Development" },
      {
        CollapsedDataButtonName: "# Design",
      },
    ],
  },
  /* 4th Shared */
  {
    SidebarMenuButtonIcon: ShareIcon,
    SidebarMenuButtonName: "Shared",
  },
];
