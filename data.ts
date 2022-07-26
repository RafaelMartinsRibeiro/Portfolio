import {
  RiCactusLine,
  RiWechatLine,
  RiTeamLine,
  RiLightbulbFill,
  RiMentalHealthLine,
  RiToolsFill,
} from "react-icons/ri";

import { BsCircleFill } from "react-icons/bs";

import { IProject, ISkill, ISoftSkill } from "./type";

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

export const projects: IProject[] = [
  {
    id: 1,
    name: "Redux Cart",
    description:
      "Este projeto consiste em uma aplicação web 100% responsiva que tem como objetivo simular um carrinho de compras online feito com redux.",
    imagePath: "/images/reduxCart.png",
    deployedUrl: "https://redux-cart-psi.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/ReduxCart",
    category: ["React"],
    techs: ["React", "Redux Toolkit", "Axios", "Vite"],
  },
  {
    id: 2,
    name: "FeedGet",
    description:
      "FeedGet é um aplicativo de feedbacks, desenvolvido 100% responsivo para ser integrado a qualquer aplicação web ou mobile. O usuário consegue além de escolher a categoria de seu feedback, também pode enviar uma mensagem personalizada junto a uma captura de tela automática.",
    imagePath: "/images/feedget.png",
    deployedUrl: "https://feedget-2lnvobk5d-rafaelmartinsribeiro.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/FeedGet",
    category: ["React"],
    techs: ["React", "TypeScript", "TailwindCSS", "Vite"],
  },
  {
    id: 3,
    name: "Move.it",
    description:
      "O Move.it consiste em um contador de 25 minutos, quando o contador finaliza o tempo é mostrado um desafio de relaxamento corporal ou visual, onde o usuário pode ou não completa-lo. Para incentivar o usuário a efetuar os exercicios de relaxamento foi adicionado um sistema de leveling, ou seja quando o usuario completa determinada atividade o mesmo recebe uma quantia de xp, quando ele atinge determinado montante de xp ele adquire um nível, fornecendo ao usuario um sentimento de recompensa",
    imagePath: "/images/moveit.png",
    deployedUrl: "https://moveit-gamma-seven.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/MoveIt",
    category: ["NextJS"],
    techs: ["NextJS", "TypeScript", "js-cookie"],
  },
  {
    id: 4,
    name: "W Forte",
    description:
      "O projeto consiste em uma aplicação web 100% responsiva, que foi criado com a finalidade de exibir as informações do local, como: estrutura, modalidades, professores, local, etc.",
    imagePath: "/images/wforte.png",
    deployedUrl: "https://w-forte.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/W-Forte",
    category: ["NextJS"],
    techs: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Frame Motion",
      "Headless UI",
    ],
  },
  {
    id: 5,
    name: "LetMeAsk",
    description:
      "O LetMeAsk consiste em uma aplicação web que tem como finalidade a criação de salas Q&A. O LetMeAsk tem a proposta de resolver problemas de acumulo de perguntas durante uma live, transmissão, etc. Com ela você pode criar salas privadas onde somente os que possuem o ID da sala podem acessar, os participantes podem fazer perguntas(desde que estejam logados com o Google), votar nas mesmas. Já o criador da sala pode demarcar as perguntas como respondidas, colocar foco, dentre outras funcionalidades...",
    imagePath: "/images/letmeask.png",
    deployedUrl: "https://letmeask-93071.web.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/LetMeAsk",
    category: ["React"],
    techs: [
      "React",
      "TypeScript",
      "Sass",
      "Firebase",
      "react-hot-toast",
      "Vite",
    ],
  },
  {
    id: 6,
    name: "Formulário de cadastro",
    description: "Formulário simples de cadastro com suas devidas validações",
    imagePath: "/images/form.png",
    deployedUrl: "https://simple-form-bay.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/SImpleForm",
    category: ["React"],
    techs: ["React"],
  },
  {
    id: 7,
    name: "OnePiece MemoryGame",
    description: "Jogo da memoria com a temática de One Piece",
    imagePath: "/images/memorygame.png",
    deployedUrl: "https://onepiece-memory-game.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/memoryGame",
    category: ["JavaScript"],
    techs: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 8,
    name: "MusicPlayer",
    description: "Player de musica",
    imagePath: "/images/musicplayer.png",
    deployedUrl: "https://music-player-six-chi.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/musicPlayer",
    category: ["JavaScript"],
    techs: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 9,
    name: "Tic-Tac-Toe",
    description: "Jogo da velha",
    imagePath: "/images/tictactoe.png",
    deployedUrl: "https://tic-tac-toe-game-gamma.vercel.app/",
    githubUrl: "https://github.com/RafaelMartinsRibeiro/ticTacToeGame",
    category: ["JavaScript"],
    techs: ["JavaScript", "HTML", "CSS"],
  },
];
