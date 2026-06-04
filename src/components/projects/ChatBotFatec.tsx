import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

/*FaExternalLinkAlt,*/ /* descomente essa sessão para a importação do icone*/

function ProjectCardChatbotFatec() {
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
        <img
          src={`${import.meta.env.BASE_URL}FatecChatBot.webp`}
          alt="Preview do projeto Chatbot Fatec Jacareí"
        />

        <div className="project-content">
          <div className="project-top">
            <h3>Chatbot Fatec Jacareí</h3>
            <span className="project-badge">Acadêmico</span>
          </div>

          <p>
            Aplicação web de autoatendimento em desenvolvimento para a Secretaria
            Acadêmica da Fatec Jacareí, com navegação em formato de chatbot para
            auxiliar alunos e interessados com dúvidas frequentes.
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
            aria-labelledby="chatbot-title"
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="modal-header">
              <h2 id="chatbot-title">Chatbot Fatec Jacareí</h2>
              <p className="modal-subtitle">
                Autoatendimento acadêmico para alunos e interessados
              </p>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}FatecChatBot.webp`}
              alt="Imagem do projeto Chatbot Fatec Jacareí"
              className="modal-img"
            />

            <div className="modal-section">
              <h3>Sobre o projeto</h3>
              <p>
                Em desenvolvimento durante o segundo semestre do curso de
                Desenvolvimento de Software Multiplataforma da FATEC Jacareí, este
                projeto teve como objetivo a criação de uma aplicação web de
                autoatendimento para a Secretaria Acadêmica da Fatec Jacareí.
              </p>

              <p>
                A proposta foi construir um chatbot conversacional capaz de
                conduzir o usuário por menus e perguntas guiadas, oferecendo
                respostas rápidas, objetivas e padronizadas sobre temas
                acadêmicos como horários de aula, calendário acadêmico, estágio,
                dispensa de disciplinas, portfólio e trabalho de graduação.
              </p>

              <p>
                O sistema também contará com perfis autenticados para administrador
                e secretaria acadêmica, permitindo gerenciamento de conteúdos,
                usuários, perguntas enviadas pelos alunos e registros de
                atendimento.
              </p>

              <p>
                Além da interface do chatbot, o projeto envolveu backend, banco
                de dados, controle de acesso por papéis, containerização
                com Docker e documentação técnica da aplicação.
              </p>
            </div>

            <div className="modal-section">
              <h3>Minha Participação</h3>

              <p>
                Atuei como Product Owner (PO) e Desenvolvedor Full Stack durante o
                desenvolvimento do projeto. Como PO, fui responsável pelo levantamento e
                refinamento de requisitos junto ao cliente, definição e priorização do backlog,
                planejamento das sprints e acompanhamento das entregas, garantindo que
                as funcionalidades desenvolvidas atendessem às necessidades da
                Secretaria Acadêmica da Fatec Jacareí.
              </p>

              <p>
                Além disso, participei ativamente do desenvolvimento da aplicação, contribuindo
                tanto no frontend quanto no backend. Trabalhei na implementação de funcionalidades
                utilizando React, TypeScript, Node.js e Express, integração com o banco de dados
                PostgreSQL, desenvolvimento de regras de negócio, autenticação de usuários e testes
                das funcionalidades. Também colaborei na resolução de problemas técnicos, integração
                entre módulos e validação das entregas realizadas pela equipe.
              </p>
            </div>

            <div className="modal-section">
              <h3>Tecnologias</h3>

              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
                <span>Docker</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Links</h3>

              <div className="project-links">
                <a
                  href="https://github.com/KaimanByte/Conecta-Fatec-Jacarei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  <FaGithub /> Ver repositório
                </a>

{/*
                <a href="LINK_DO_DEPLOY_AQUI" target="_blank" rel="noopener noreferrer" className="btn-link btn-link-secondary">
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

export default ProjectCardChatbotFatec;