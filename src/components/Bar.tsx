import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { GiSpring } from "react-icons/gi";
import { ISkill } from "../../type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.4,
      },
    },
  };

  return (
    <div className="text-white my-2 bg-gray-300 rounded-full dark:bg-dark-200">
      <motion.div
        style={{
          width: level,
        }}
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
