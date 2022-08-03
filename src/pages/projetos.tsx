import { useState } from "react";
import { projects as projectsData } from "../../data";
import { Category } from "../../type";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";

const Projetos = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");

  const handlerFilterCategory = (category: "All" | Category) => {
    if (category === "All") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(newArray);
    setActive(category);
  };

  return (
    <div
      className="px-6 pt-1 overflow-y-scroll"
      style={{
        height: "65vh",
      }}
    >
      <ProjectsNavbar
        active={active}
        handlerFilterCategory={handlerFilterCategory}
      />

      <div className="grid grid-cols-12 gap-4 my-3 relative">
        {projects.map((project) => {
          return (
            <div
              className="col-span-12 sm:col-span-4 lg:col-span-3 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
              key={project.name}
            >
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projetos;
