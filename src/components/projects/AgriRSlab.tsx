import { useState, useEffect } from "react";

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
      <div className="project-card">
        <img src="/AgriRSlab.png" alt="Projeto" />

        <div className="project-content">
          <h3>AgriRSlab</h3>
          <p>Desenvolvimento de um website institucional para o laboratório AgriRS Lab do INPE, com foco na divulgação de pesquisas, projetos e informações científicas na área de sensoriamento remoto agrícola.</p>

          <button className="btn-primary" onClick={() => setOpen(true)}>
            Ver detalhes
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            {/* BOTÃO FECHAR */}
            <button className="modal-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            {/* HEADER */}
            <div className="modal-header">
              <h2>AgriRSlab</h2>
              <p className="modal-subtitle">
                Website institucional para laboratório do INPE
              </p>
            </div>

            {/* IMAGEM */}
            <img src="/AgriRSlab.png" alt="Projeto" className="modal-img" />

            {/* DESCRIÇÃO */}
            <div className="modal-section">
              <h3>Sobre o projeto</h3>
              <p>
                Desenvolvido durante o primeiro semestre do curso de Desenvolvimento de Software Multiplataforma (FATEC), este projeto teve como objetivo a criação de um website institucional para o laboratório AgriRS Lab, vinculado ao INPE.

A proposta foi estruturar uma plataforma digital capaz de centralizar e organizar informações relevantes sobre o laboratório, incluindo pesquisas, projetos, publicações científicas e a equipe envolvida, tornando esses conteúdos mais acessíveis ao público.

Além da parte visual, o desenvolvimento também envolveu a construção de uma base estruturada com integração a banco de dados e backend, permitindo melhor organização e manutenção das informações apresentadas.

O projeto contribui diretamente para ampliar a visibilidade do laboratório, facilitando a comunicação com a comunidade acadêmica e com o público interessado em sensoriamento remoto aplicado à agricultura.
              </p>
            </div>

            {/* TECNOLOGIAS */}
            <div className="modal-section">
              <h3>Tecnologias</h3>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
            </div>

            {/* LINKS */}
            <div className="modal-section">
              <h3>Links</h3>
              <div className="project-links">
                <a href="https://github.com/KaimanByte/AgriRS-Lab" target="_blank" rel="noopener noreferrer" className="btn-link">
                  Ver Repositório
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCardAgris;