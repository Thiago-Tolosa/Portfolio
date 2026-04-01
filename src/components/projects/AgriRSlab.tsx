import { useState } from "react";

function ProjectCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card">
        <img src="/favicon.svg" alt="Projeto" />

        <div className="project-content">
          <h3>AgriRSlab</h3>
          <p>Desenvolvimento de um website institucional para o laboratório AgriRS Lab do INPE, com foco na divulgação de pesquisas, projetos e informações científicas na área de sensoriamento remoto agrícola.</p>

          <button onClick={() => setOpen(true)}>
            Ler mais
          </button>
        </div>
      </div>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>AgriRSlab</h2>

            <p>
              Aqui você coloca uma descrição mais completa do projeto,
              explicando funcionalidades, desafios, etc.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">
              <a href="#" target="_blank">Repositório</a>
              <a href="#" target="_blank">Deploy</a>
            </div>

            <button onClick={() => setOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;