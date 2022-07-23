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
      <a>
        <span onClick={() => setActivePage(name)}>{name}</span>
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
    <div>
      <span className="font-bold text-purple-600">{activePage}</span>

      <div className="flex space-x-3 font-bold text-red-500">
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
