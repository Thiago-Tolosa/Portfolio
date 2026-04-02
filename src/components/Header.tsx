import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp, FaArrowUp } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleScroll() {
      setShowScrollTop(window.scrollY > 280);
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEsc);

    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.clientHeight : 90;

    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          &lt;<span>ThiagoTolosa</span> /&gt;
        </a>

        <nav className="main-nav" aria-label="Navegação principal">
          <ul>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                Início
              </a>
            </li>

            <li>
              <button onClick={() => scrollToSection("projetos")}>Projetos</button>
            </li>

            <li>
              <button onClick={() => scrollToSection("habilidades")}>
                Habilidades
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection("estudos")}>Estudos</button>
            </li>

            <li className="cv-dropdown" ref={dropdownRef}>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="cv-button"
                aria-expanded={open}
              >
                Currículo
                {open ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {open && (
                <div className="cv-menu">
                  <a
                    href="/Curriculo_Thiago_Tolosa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    Visualizar
                  </a>

                  <a
                    href="/Curriculo_Thiago_Tolosa.pdf"
                    download
                    onClick={() => setOpen(false)}
                  >
                    Baixar
                  </a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Header;