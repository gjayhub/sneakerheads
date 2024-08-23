import { ReactNode } from "react";

export type navType = {
  title: string;
  url: string;
  subNav?: navType[];
  icon?: string;
};
