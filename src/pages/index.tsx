import type { NextPage } from "next";
import { softSkills } from "../../data";
import SoftSkillCard from "../components/SoftSkillCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <div className="flex flex-col font-medium gap-7">
        <span>
          Entusiasta na área de tecnologia da informação, especialmente
          desenvolvimento. Sou apaixonado por tecnologia desde muito cedo, e
          estou constantemente aprimorando meus conhecimentos com a finalidade
          de me tornar um profissional melhor.
        </span>

        <div className="flex flex-col">
          <span className="font-bold">Objetivo:</span>
          Meu principal objetivo é conseguir uma oportunidade profissional para
          iniciar minha carreira no mundo de desenvolvimento web.
        </div>
      </div>

      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">Soft skills</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {softSkills.map((softSkill) => (
            <div
              key={softSkill.title}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200"
            >
              <SoftSkillCard softSkill={softSkill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// // export const getServerSideProps = async (
// //   context: GetServerSidePropsContext
// // ) => {
// //   const res = await fetch("http://localhost:3000/api/services");
// //   const data = await res.json();

// //   console.log("SERVER", services);

// //   return {
// //     props: {
// //       services: data.services,
// //     },
// //   };
// // };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
