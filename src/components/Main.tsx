import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaServer, FaDocker, FaDatabase, FaCogs
} from "react-icons/fa";

import { SiTypescript, SiPostgresql, SiExpress } from "react-icons/si";
import { FaDownload } from "react-icons/fa";
import roxo from "../assets/roxo.png";
import ProjectCardAgris from "./projects/AgriRSlab.tsx";

function Main() {
  return (
    <main>
      {/* HERO */}
      <section id="sobre" className="hero">
        <img src={roxo} alt="background" className="hero-img" />
        <div className="hero-text">
          <h1>Thiago Guedes da S. Tolosa</h1>
          <h4>Desenvolvedor Fullstack</h4>
          <a href="/Curriculo_Thiago_Tolosa.pdf" download="Curriculo_Thiago_Tolosa.pdf" className="btn-cv">
            <FaDownload /> Baixar Currículo
          </a>
        </div>
        <h3>Desenvolvedor em formação, focado em desenvolvimento web e na criação de soluções práticas. <br></br>
        Tenho facilidade com lógica, aprendizado rápido e gosto de trabalhar em equipe. <br></br>
        Busco evoluir constantemente minhas habilidades e adquirir experiência em projetos reais.</h3>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <ProjectCardAgris />
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="section split">
        <h2>Habilidades</h2>

        <div className="skills">
          <div className="skill"><FaHtml5 /><span>HTML</span></div>
          <div className="skill"><FaCss3Alt /><span>CSS</span></div>
          <div className="skill"><FaJs /><span>JavaScript</span></div>
          <div className="skill"><FaReact /><span>React</span></div>
          <div className="skill"><SiTypescript /><span>TypeScript</span></div>
          <div className="skill"><FaNodeJs /><span>Node.js</span></div>
          <div className="skill"><SiExpress /><span>Express</span></div>
          <div className="skill"><FaServer /><span>APIs REST</span></div>
          <div className="skill"><SiPostgresql /><span>PostgreSQL</span></div>
          <div className="skill"><FaDocker /><span>Docker</span></div>
          <div className="skill"><FaGitAlt /><span>Git</span></div>
        </div>
      </section>

      {/* ESTUDOS */}
      <section id="estudos" className="section">
  <h2>Atualmente estudando</h2>

  <div className="studies">
    <div className="study">
      <FaServer />
      <p>Construção de APIs REST utilizando Node.js e Express</p>
    </div>

    <div className="study">
      <SiExpress />
      <p>Estruturação de backend com separação em rotas, controllers e services</p>
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
      <p>Boas práticas de persistência de dados e otimização de consultas</p>
    </div>
  </div>
</section>
    </main>
  );
}

export default Main;