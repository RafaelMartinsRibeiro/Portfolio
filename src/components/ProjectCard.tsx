/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: { name, imagePath, description, deployedUrl, githubUrl, techs },
}) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={imagePath}
        alt={name}
        onClick={() => setIsShowDetail(true)}
        className="cursor-pointer"
        width="300"
        height="150"
        layout="responsive"
        quality="100"
      />

      <p className="my-2 text-center">{name}</p>

      {isShowDetail && (
        <div className="rounded-lg py-8 grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 bg-gray-100 dark:text-white dark:bg-dark-100">
          <motion.div
            className="m-auto"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="border-solid border-2 border-purple-600"
              variants={fadeInUp}
            >
              <Image
                src={imagePath}
                alt={name}
                width="1000"
                height="650"
                quality="100"
                layout="responsive"
              />
            </motion.div>

            <motion.div
              className="flex justify-center my-4 space-x-3"
              variants={fadeInUp}
            >
              <a
                href={githubUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployedUrl}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Projeto</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="px-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h2
              className="mb-3 text-xl font-medium md:text-2xl"
              variants={fadeInUp}
            >
              {name}
            </motion.h2>
            <motion.h3 className="mb-3 w-11/12" variants={fadeInUp}>
              {description}
            </motion.h3>

            <motion.div
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeInUp}
            >
              {techs.map((tech) => {
                return (
                  <span
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                    key={tech}
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          <button>
            <MdClose
              size={30}
              onClick={() => setIsShowDetail(false)}
              className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
