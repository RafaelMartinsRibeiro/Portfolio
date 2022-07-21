import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/102157214?v=4"
        alt="User avatar"
      />
      <h3>
        <span>Rafael</span>
        Martins
      </h3>

      <p>Desenvolvedor Front-end</p>
      <p>Currículo</p>

      <div>
        <div>
          <span>Paraná,Brasil</span>
        </div>
        <p>rafaelmartins160403@gmail.com</p>
        <p>(44)99851-5002</p>
      </div>

      <button>Mande um Email</button>
      <button>Mudar tema</button>
    </div>
  );
};

export default Sidebar;
