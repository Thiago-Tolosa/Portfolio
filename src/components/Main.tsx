import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaServer,
  FaDocker,
  FaDatabase,
  FaCogs,
  FaDownload,
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";

import roxo from "../assets/roxo.png";
import ProjectCardAgris from "./projects/AgriRSlab";

function Main() {
  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.clientHeight : 90;

    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section id="sobre" className="hero">
        <img src={roxo} alt="" className="hero-img" />

        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Portfólio • Desenvolvedor Fullstack</p>

            <h1>Thiago Guedes da S. Tolosa</h1>

            <h2 className="hero-role">Desenvolvedor Fullstack em formação</h2>

            <p className="hero-description">
              Focado em desenvolvimento web, backend e construção de soluções
              práticas com boa estrutura.
            </p>

            <div className="hero-actions">
              <a
                href="/Curriculo_Thiago_Tolosa.pdf"
                download="Curriculo_Thiago_Tolosa.pdf"
                className="btn-cv"
              >
                <FaDownload /> Baixar Currículo
              </a>

              <button className="btn-cv" onClick={scrollToProjects}>
                Ver projetos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="section">
        <div className="section-header">
          <h2>Projetos</h2>
          <p>
            Projetos desenvolvidos com foco em prática, estrutura e evolução
            técnica.
          </p>
        </div>

        <div className="projects-grid">
          <ProjectCardAgris />
        </div>
      </section>

      <section id="habilidades" className="section">
        <div className="section-header">
          <h2>Habilidades</h2>
          <p>
            Tecnologias e ferramentas que venho utilizando na construção dos
            meus projetos.
          </p>
        </div>

        <div className="skills">
          <div className="skill">
            <FaHtml5 />
            <span>HTML</span>
          </div>

          <div className="skill">
            <FaCss3Alt />
            <span>CSS</span>
          </div>

          <div className="skill">
            <FaJs />
            <span>JavaScript</span>
          </div>

          <div className="skill">
            <FaReact />
            <span>React</span>
          </div>

          <div className="skill">
            <SiTypescript />
            <span>TypeScript</span>
          </div>

          <div className="skill">
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div className="skill">
            <SiExpress />
            <span>Express</span>
          </div>

          <div className="skill">
            <FaServer />
            <span>APIs REST</span>
          </div>

          <div className="skill">
            <SiPostgresql />
            <span>PostgreSQL</span>
          </div>

          <div className="skill">
            <FaDocker />
            <span>Docker</span>
          </div>

          <div className="skill">
            <FaGitAlt />
            <span>Git</span>
          </div>
        </div>
      </section>

      <section id="estudos" className="section">
        <div className="section-header">
          <h2>Atualmente estudando</h2>
          <p>
            Assuntos que estou aprofundando para fortalecer backend, arquitetura
            e organização de aplicações.
          </p>
        </div>

        <div className="studies">
          <div className="study">
            <FaServer />
            <p>Construção de APIs REST utilizando Node.js e Express</p>
          </div>

          <div className="study">
            <SiExpress />
            <p>
              Estruturação de backend com separação em rotas, controllers e
              services
            </p>
          </div>

          <div className="study">
            <SiPostgresql />
            <p>Modelagem de dados e integração com PostgreSQL</p>
          </div>

          <div className="study">
            <FaCogs />
            <p>Arquitetura de aplicações e organização de código escalável</p>
          </div>

          <div className="study">
            <FaDatabase />
            <p>
              Boas práticas de persistência de dados e otimização de consultas
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;