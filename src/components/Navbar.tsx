import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

const NavPage: FunctionComponent<{
  activePage: string;
  setActivePage: (name: string) => void;
  name: string;
  route: string;
}> = ({ activePage, setActivePage, name, route }) => {
  return activePage !== name ? (
    <Link href={route}>
      <a className="leading-8 group">
        <span
          onClick={() => setActivePage(name)}
          className="transition-colors duration-200 group-hover:text-purple-600 "
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activePage, setActivePage] = useState<string>("");

  const { pathname } = useRouter();

  useEffect(() => {
    {
      pathname === "/" && setActivePage("Sobre");
      pathname === "/projetos" && setActivePage("Projetos");
      pathname === "/resumo" && setActivePage("Resumo");
    }

    return () => {};
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-purple-600 border-b-4 border-purple-600 md:text-2xl">
        {activePage}
      </span>

      <div className="flex space-x-5 text-lg font-bold">
        <NavPage
          activePage={activePage}
          setActivePage={setActivePage}
          name="Sobre"
          route="/"
        />
        <NavPage
          activePage={activePage}
          setActivePage={setActivePage}
          name="Projetos"
          route="/projetos"
        />
        <NavPage
          activePage={activePage}
          setActivePage={setActivePage}
          name="Resumo"
          route="/resumo"
        />
      </div>
    </div>
  );
};

export default Navbar;
