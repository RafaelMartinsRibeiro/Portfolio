import type { GetStaticPropsContext, NextPage } from "next";
import { services } from "../../data";
import ServiceCard from "../components/ServiceCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Entusiasta na área de tecnologia da informação, especialmente
        desenvolvimento. Sou apaixonado por tecnologia desde muito cedo, e estou
        constantemente aprimorando meus conhecimentos com a finalidade de me
        tornar um profissional melhor. Meu principal objetivo é conseguir uma
        oportunidade profissional para iniciar minha carreira no mundo de
        desenvolvimento web.
      </h5>

      <div
        className="p-4 mt-5 bg-gray-400"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 font-bold text-xl tracking-wide">Soft skills</h6>
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="lg:col-span-1 bg-gray-200 rounded-lg "
            >
              <ServiceCard service={service} />
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
