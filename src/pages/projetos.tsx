import { useState } from "react";
import { projects as projectsData } from "../../data";
import { Category } from "../../type";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { motion } from "framer-motion";
import { fadeInUp, routerFadeIn, stagger } from "../../animations";

const Projetos = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");
  const [showDetail, setShowDetail] = useState<number | null>(null);

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
    <motion.div
      className="px-6 pt-1 overflow-y-scroll"
      style={{
        height: "65vh",
      }}
      variants={routerFadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectsNavbar
        active={active}
        handlerFilterCategory={handlerFilterCategory}
      />

      <motion.div
        className="grid grid-cols-12 gap-4 my-3 relative"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => {
          return (
            <motion.div
              variants={fadeInUp}
              className="col-span-12 sm:col-span-4 lg:col-span-3 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projetos;
