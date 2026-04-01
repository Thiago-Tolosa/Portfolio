import { FaEye, FaDownload } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h2 className="logo">
        &lt;<span>ThiagoTolosa</span> /&gt;
      </h2>

      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li>
            <a href="/Curriculo_Thiago_Tolosa.pdf" target="_blank" title="Vizualizar Curriculo" className="nav-cv">
              <FaEye />
              <span className="eusla">CV</span>
            </a>
          </li>

          <li>
            <a href="/Curriculo_Thiago_Tolosa.pdf" download  title="Baixar Curriculo" className="nav-cv">
              <FaDownload />
              <span className="eusla">CV</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;