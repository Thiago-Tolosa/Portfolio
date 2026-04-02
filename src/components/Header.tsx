import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const elementTop = el.getBoundingClientRect().top + window.scrollY;
  const elementHeight = el.offsetHeight;
  const windowHeight = window.innerHeight;

  const offset = elementTop - (windowHeight / 2 - elementHeight / 2);

  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
};

  return (
    <header>
      <h2 className="logo">
        &lt;<span>ThiagoTolosa</span> /&gt;
      </h2>

      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><button onClick={() => scrollToSection("projetos")}>Projetos</button></li>
          <li><button onClick={() => scrollToSection("habilidades")}>Habilidades</button></li>

          {/* DROPDOWN */}
          <li className="cv-dropdown" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="cv-button"
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
                >
                  Visualizar
                </a>
                <a href="/Curriculo_Thiago_Tolosa.pdf" download>
                  Baixar
                </a>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;