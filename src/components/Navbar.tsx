import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activePage, setActivePage] = useState<string>("")

  return (
    <div>
      <span></span>
      <div>
        {activePage !== "Sobre" && (
          <Link href="/">
          <a>
            <span>Sobre</span>
          </a>
        </Link>
        )}
        {activePage !== "Projetos" && (
          <Link href="/projetos">
          <a>
            <span>Projetos</span>
          </a>
        </Link>
        )}
        {activePage !== "Resumo" && (
          <Link href="/resumo">
          <a>
            <span></span>
          </a>
        </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
