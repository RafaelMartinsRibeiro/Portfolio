import { projects } from "../../data";
import ProjectCard from "../components/ProjectCard";

const projetos = () => {
  return (
    <div className="px-6 pt-1 overflow-y-scroll" style={{
      height: "65vh"
    }}>
      <nav>Navbar</nav>

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

export default projetos;
