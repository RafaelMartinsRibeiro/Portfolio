/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../../type";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    imagePath,
    description,
    deployedUrl,
    githubUrl,
    category,
    techs,
  },
}) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <div>
      <img
        src={imagePath}
        alt={name}
        onClick={() => setIsShowDetail(true)}
        className="cursor-pointer"
      />
      <p className="my-2 text-center">{name}</p>

      {isShowDetail && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 bg-gray-100 dark:text-white dark:bg-dark-100 p-2 ">
          <div>
            <img src={imagePath} alt={name} />

            <div className="flex justify-center my-4 space-x-3">
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
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium w-11/12">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
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
            </div>
          </div>

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
