import { skills, tools } from "../../data";
import Bar from "../components/Bar";

const resumo = () => {
  return (
    <div className="px-6 pt-1">
      <div className="grid gap-6 md:grid-cols-2 ">
        <div>
          <h5 className="mb-3 text-3xl font-bold">Formação</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">Engenharia de Software</h5>
            <p className="font-semibold">UniCesumar (2021-2024) </p>
            <p className="my-3 w-11/12">
              Atualmente estou cursando o 2º Ano em Engenharia de Software na
              UniCesumar.
            </p>
          </div>
        </div>

        <div>
          <h5 className="mb-3 text-3xl font-bold">Experiência</h5>
          <div>
            <h5 className="my-2 text-xl font-bold ">Projetos pessoais</h5>

            <p className="my-3 w-11/12">
              Atualmente estou adquirindo experiência por meio de projetos
              pessoais.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Linguagens &amp; Frameworks
          </h5>
          <div className="my-2">
            {skills.map((skill) => (
              <Bar data={skill} key={skill.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resumo;
