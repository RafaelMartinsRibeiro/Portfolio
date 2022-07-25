import {
  RiCactusLine,
  RiWechatLine,
  RiTeamLine,
  RiLightbulbFill,
  RiMentalHealthLine,
  RiToolsFill,
} from "react-icons/ri";
import { IServices } from "./type";

export const services: IServices[] = [
  {
    icon: RiCactusLine,
    title: "Resiliência",
  },
  {
    icon: RiWechatLine,
    title: "Comunicação",
  },
  {
    icon: RiTeamLine,
    title: "Trabalho em equipe",
  },
  {
    icon: RiLightbulbFill,
    title: "Criatividade",
  },
  {
    icon: RiMentalHealthLine,
    title: "Inteligência emocional",
  },
  {
    icon: RiToolsFill,
    title: "Adaptação",
  },
];
