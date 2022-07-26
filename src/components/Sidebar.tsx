import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    localStorage.getItem("theme") === null
      ? localStorage.setItem("theme", "light")
      : setTheme(localStorage.getItem("theme")!);

    theme === "dark" ? setEnabled(true) : setEnabled(false);
  }, [setTheme, theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/102157214?v=4"
        alt="User avatar"
        width="128"
        height="128"
        layout="intrinsic"
        className="mx-auto rounded-full"
        quality="100"
      />

      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple-600">Rafael </span>
        Martins
      </h3>

      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Desenvolvedor Front-end
      </p>

      <a
        href="/assets/RafaelMartins-Curriculo.pdf"
        download="RafaelMartins-Curriculo"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
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
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
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

      <Switch.Group>
        <div className="flex items-center justify-center">
          <Switch
            onClick={changeTheme}
            checked={enabled}
            onChange={setEnabled}
            className={` ${
              enabled
                ? "bg-gradient-to-r from-purple-600 to-blue-500"
                : "bg-gray-300"
            } relative inline-flex py-1 items-center rounded-full transition-all duration-300 focus:outline-none`}
            style={{ width: "6.75rem" }}
          >
            <span
              className={` text-purple-600 flex justify-center items-center ${
                enabled
                  ? "translate-x-14 bg-dark-200"
                  : "translate-x-1 bg-white"
              } inline-block h-8 w-12 transform rounded-full transition-transform`}
            >
              {enabled === true ? <IoMoonSharp /> : <IoSunnySharp />}
            </span>
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
};

export default Sidebar;
