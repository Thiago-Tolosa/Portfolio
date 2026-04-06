import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

/*FaExternalLinkAlt,*/ /* descomente essa sessão para a importação do icone*/

function ProjectCardAgris() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <article className="project-card">
        <img src="/AgriRSlab.png" alt="Preview do projeto AgriRSlab" />

        <div className="project-content">
          <div className="project-top">
            <h3>AgriRSlab</h3>
            <span className="project-badge">Institucional</span>
          </div>

          <p>
            Website institucional desenvolvido para o laboratório AgriRS Lab do
            INPE, com foco na divulgação de pesquisas, projetos e informações
            científicas em sensoriamento remoto agrícola.
          </p>

          <button className="btn-primary" onClick={() => setOpen(true)}>
            Ver detalhes
          </button>
        </div>
      </article>

      {open && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="agri-title"
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="modal-header">
              <h2 id="agri-title">AgriRSlab</h2>
              <p className="modal-subtitle">
                Website institucional para laboratório do INPE
              </p>
            </div>

            <img
              src="/AgriRSlab.png"
              alt="Imagem do projeto AgriRSlab"
              className="modal-img"
            />

            <div className="modal-section">
              <h3>Sobre o projeto</h3>
              <p>
                Desenvolvido durante o primeiro semestre do curso de
                Desenvolvimento de Software Multiplataforma da FATEC, este
                projeto teve como objetivo a criação de um website institucional
                para o laboratório AgriRS Lab, vinculado ao INPE.
              </p>

              <p>
                A proposta foi estruturar uma plataforma digital capaz de
                centralizar e organizar informações relevantes sobre o
                laboratório, incluindo pesquisas, projetos, publicações
                científicas e equipe, tornando esses conteúdos mais acessíveis
                ao público.
              </p>

              <p>
                Além da parte visual, o desenvolvimento também envolveu backend
                e integração com banco de dados, permitindo melhor organização e
                manutenção das informações apresentadas.
              </p>
            </div>

            <div className="modal-section">
              <h3>Tecnologias</h3>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Links</h3>

              <div className="project-links">
                <a href="https://github.com/KaimanByte/AgriRS-Lab" target="_blank" rel="noopener noreferrer" className="btn-link">
                  <FaGithub /> Ver repositório
                </a>
{/*
                <a href="https://github.com/KaimanByte/AgriRS-Lab" target="_blank" rel="noopener noreferrer" className="btn-link btn-link-secondary">
                  <FaExternalLinkAlt /> Ver projeto
                </a>
*/} {/* Descomente essa parte e mude o link, caso suba o projeto em Deploy */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCardAgris;