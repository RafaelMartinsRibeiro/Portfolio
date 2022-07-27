import type { GetStaticPropsContext, NextPage } from "next";
import { services } from "../../data";

const Home: NextPage = ({ services }: any) => {
  return (
    <div>
      <h1>hellow world</h1>
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
