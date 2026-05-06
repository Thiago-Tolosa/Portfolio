import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaServer,
  FaDocker,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaTools,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiPython,
  SiVite,
  SiSequelize,
} from "react-icons/si";

import roxo from "../assets/roxo.png";
import ProjectCardAgris from "./projects/AgriRSlab";
import ProjectCardQRCode from "./projects/QRCode";

function Main() {

  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    if (!el) return;

    const isMobile = window.innerWidth <= 700;

    const offset = isMobile ? -10 : 54;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY +
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const skillSlides = [
    {
      title: "Linguagens",
      description: "Linguagens que utilizo ou venho aplicando em estudos e projetos.",
      items: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Python", icon: <SiPython /> },
      ],
    },
    {
      title: "Frontend",
      description: "Tecnologias voltadas à construção de interfaces web responsivas.",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <SiVite /> },
      ],
    },
    {
      title: "Backend",
      description: "Ferramentas e conceitos que uso para estruturar APIs e aplicações.",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "APIs REST", icon: <FaServer /> },
        { name: "CRUD", icon: <FaCode /> },
      ],
    },
    {
      title: "Banco & Ferramentas",
      description: "Tecnologias de apoio para persistência, versionamento e ambiente.",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "Sequelize", icon: <SiSequelize /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Git", icon: <FaGitAlt /> },
      ],
    },
    {
      title: "Em desenvolvimento",
      description: "Assuntos que estou aprofundando para evoluir como desenvolvedor.",
      items: [
        { name: "Java", icon: <FaCode /> },
        { name: "Arquitetura backend", icon: <FaServer /> },
        { name: "Boas práticas", icon: <FaTools /> },
        { name: "Testes", icon: <FaCode /> },
      ],
    },
  ];

  const [activeSkillSlide, setActiveSkillSlide] = useState(0);

  const currentSkillSlide = skillSlides[activeSkillSlide];

  const goToPreviousSkillSlide = () => {
    setActiveSkillSlide((prev) =>
      prev === 0 ? skillSlides.length - 1 : prev - 1
    );
  };

  const goToNextSkillSlide = () => {
    setActiveSkillSlide((prev) =>
      prev === skillSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main>
      <section id="inicio" className="hero">
        <img src={roxo} alt="" className="hero-img" />

        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Portfólio • Desenvolvedor Fullstack</p>

            <h1>Thiago Guedes da S. Tolosa</h1>

            <h2 className="hero-role">Desenvolvedor Fullstack em formação</h2>

            <div className="hero-actions">
              <a
                href={`${import.meta.env.BASE_URL}Curriculo_Thiago_Tolosa.pdf`}
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

      <section id="sobre" className="section about-section">
        <div className="section-header">
          <h2>Sobre mim</h2>
        </div>

        <div className="about-card">
          <div className="about-photo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}Thiago.webp`}
              alt="Foto de Thiago Tolosa"
              className="about-photo"
            />
          </div>

          <div className="about-content">
            <div className="about-main">
              <p className="about-highlight">
                Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC
                Jacareí, com foco em desenvolvimento web, backend e construção de
                aplicações bem estruturadas.
              </p>

              <p>
                Gosto de entender a lógica por trás das coisas, resolver problemas e
                transformar ideias em projetos funcionais. Tenho buscado evoluir
                criando aplicações com React, TypeScript, Node.js, Express e
                PostgreSQL.
              </p>

              <p>
                Também valorizo organização, trabalho em equipe e clareza na entrega.
                Meu objetivo é crescer como desenvolvedor fullstack, unindo boa base
                técnica, aprendizado constante e atenção à experiência do usuário.
              </p>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <strong>DSM</strong>
                <span>FATEC Jacareí</span>
              </div>

              <div className="about-stat">
                <strong>Fullstack</strong>
                <span>Em formação</span>
              </div>

              <div className="about-stat">
                <strong>Backend</strong>
                <span>Node • Express • PostgreSQL</span>
              </div>
            </div>

            <div className="about-contact">
              <h3>Contato & Redes</h3>

              <div className="about-contact-links">
                <a
                  href="https://github.com/Thiago-Tolosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-contact-card"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-contact-card"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:thiagoguedesdst@gmail.com"
                  className="about-contact-card"
                >
                  <FaEnvelope />
                </a>
              </div>
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
          <ProjectCardQRCode />
        </div>
      </section>

      <section id="habilidades" className="section">
        <div className="section-header">
          <h2>Habilidades</h2>
          <p>
            Tecnologias, ferramentas e conceitos que venho utilizando ou aprofundando
            na construção dos meus projetos.
          </p>
        </div>

        <div className="skills-carousel-card">
          <div className="skills-carousel-top">
            <div>
              <span className="skills-carousel-label">
                {activeSkillSlide + 1} / {skillSlides.length}
              </span>

              <h3>{currentSkillSlide.title}</h3>

              <p>{currentSkillSlide.description}</p>
            </div>

            <div className="skills-carousel-controls">
              <button
                type="button"
                onClick={goToPreviousSkillSlide}
                aria-label="Categoria anterior"
              >
                <FaChevronLeft />
              </button>

              <button
                type="button"
                onClick={goToNextSkillSlide}
                aria-label="Próxima categoria"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="skills-carousel-items">
            {currentSkillSlide.items.map((skill) => (
              <div className="skill-carousel-item" key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="skills-carousel-dots">
            {skillSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSkillSlide ? "active" : ""}
                onClick={() => setActiveSkillSlide(index)}
                aria-label={`Ver categoria ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main >
  );
}

export default Main;