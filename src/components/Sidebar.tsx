import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  return (
    <div>
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://avatars.githubusercontent.com/u/102157214?v=4"
        alt="User avatar"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple-600">Rafael </span>
        Martins
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Desenvolvedor Front-end
      </p>

      <a
        href="assets/RafaelMartins-Curriculo.pdf"
        download="RafaelMartins-Curriculo"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
      >
        <GiTie className="w-6 h-6" /> Currículo
      </a>

      <div className="flex items-center justify-center w-9/12 gap-10 mx-auto my-5 text-purple-500 md:w-full">
        <a href="https://github.com/RafaelMartinsRibeiro">
          <AiFillGithub className="w-8 h-8 transition-all duration-300 hover:w-10 hover:h-10" />
        </a>

        <a href="https://www.linkedin.com/in/rafael-martins-ribeiro/">
          <AiFillLinkedin className="w-8 h-8 transition-all duration-300 hover:w-10 hover:h-10" />
        </a>
      </div>

      <div
        className="py-4 my-5 bg-gray-200 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Paraná,Brasil</span>
        </div>

        <p className="my-2">rafaelmartins160403@gmail.com</p>
        <p className="my-2">(44)99851-5002</p>
      </div>

      <button
        onClick={() => window.open("mailto:rafaelmartins160403@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-purple-600 to-blue-500"
      >
        Mande um Email
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple-600 to-blue-500">
        Mudar tema
      </button>
    </div>
  );
};

export default Sidebar;