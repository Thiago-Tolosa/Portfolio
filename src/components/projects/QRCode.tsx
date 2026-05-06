import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCardQRCode() {
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
          src={`${import.meta.env.BASE_URL}QrCode.png`}
          alt="Preview do projeto QR Studio"
        />

        <div className="project-content">
          <div className="project-top">
            <h3>QR Studio</h3>
            <span className="project-badge">Ferramenta Web</span>
          </div>

          <p>
            Gerador de QR Code com interface moderna e opções de personalização,
            permitindo alterar formato, cores e adicionar imagem central
            diretamente no navegador.
          </p>

          <button
            className="btn-primary"
            onClick={() => setOpen(true)}
          >
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
            aria-labelledby="qr-title"
          >
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
              aria-label="Fechar modal"
            >
              ✕
            </button>

            <div className="modal-header">
              <h2 id="qr-title">QR Studio</h2>
              <p className="modal-subtitle">
                Gerador de QR Code personalizável
              </p>
            </div>

            <img
              src={`${import.meta.env.BASE_URL}QrCode.png`}
              alt="Imagem do projeto QR Studio"
              className="modal-img"
            />

            <div className="modal-section">
              <h3>Sobre o projeto</h3>

              <p>
                Este projeto foi desenvolvido com foco na criação de uma
                ferramenta web moderna para geração de QR Codes de forma rápida,
                prática e visualmente agradável.
              </p>

              <p>
                A aplicação permite gerar QR Codes a partir de links ou textos,
                com uma interface organizada e experiência centrada no usuário,
                incluindo abertura em modal e preview em tempo real.
              </p>

              <p>
                Além da geração padrão, o projeto também oferece recursos de
                personalização, como alteração de formato dos pontos, cores,
                fundo, tamanho e inclusão opcional de imagem central, tudo
                processado diretamente no front-end.
              </p>
            </div>

            <div className="modal-section">
              <h3>Tecnologias</h3>

              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>CSS</span>
                <span>Vite</span>
                <span>QR Code Styling</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>Links</h3>

              <div className="project-links">
                <a
                  href="https://github.com/Thiago-Tolosa/QR-Code-Generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  <FaGithub /> Ver repositório
                </a>

                <a
                  href="https://thiago-tolosa-qr-code-generator.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link btn-link-secondary"
                >
                  <FaExternalLinkAlt /> Ver projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCardQRCode;