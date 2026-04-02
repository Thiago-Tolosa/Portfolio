import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Thiago Tolosa</p>

      <div className="footer-links">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Thiago-Tolosa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;