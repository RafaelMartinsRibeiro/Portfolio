import {
  RiCactusLine,
  RiWechatLine,
  RiTeamLine,
  RiLightbulbFill,
  RiMentalHealthLine,
  RiToolsFill,
} from "react-icons/ri";

import { BsCircleFill } from "react-icons/bs";

import { ISkill, ISoftSkill } from "./type";

export const softSkills: ISoftSkill[] = [
  {
    Icon: RiCactusLine,
    title: "Resiliência",
  },
  {
    Icon: RiWechatLine,
    title: "Comunicação",
  },
  {
    Icon: RiTeamLine,
    title: "Trabalho em equipe",
  },
  {
    Icon: RiLightbulbFill,
    title: "Criatividade",
  },
  {
    Icon: RiMentalHealthLine,
    title: "Inteligência emocional",
  },
  {
    Icon: RiToolsFill,
    title: "Adaptação",
  },
];

export const skills: ISkill[] = [
  {
    name: "React",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Next.js",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "TypeScript",
    level: "60%",
    Icon: BsCircleFill,
  },
  {
    name: "JavaScript",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "TailwindCSS",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Sass",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "CSS",
    level: "85%",
    Icon: BsCircleFill,
  },
  {
    name: "HTML",
    level: "85%",
    Icon: BsCircleFill,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git",
    level: "65%",
    Icon: BsCircleFill,
  },
  {
    name: "Photoshop",
    level: "50%",
    Icon: BsCircleFill,
  },
  {
    name: "VS Code",
    level: "90%",
    Icon: BsCircleFill,
  },
];
