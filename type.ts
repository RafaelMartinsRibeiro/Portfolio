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
