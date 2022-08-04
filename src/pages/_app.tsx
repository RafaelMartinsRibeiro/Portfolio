import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme" attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-11 sm:px-12 lg:px-14">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-auto bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
