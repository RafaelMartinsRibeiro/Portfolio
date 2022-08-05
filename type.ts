import { IconType } from "react-icons";

export interface ISoftSkill {
  Icon: IconType;
  title: string;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  deployedUrl: string;
  githubUrl: string;
  category: Category[];
  techs: string[];
}

export type Category = "React" | "NextJS" | "JavaScript";
