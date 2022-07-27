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
