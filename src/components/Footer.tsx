function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Thiago Tolosa</p>

      <div className="footer-links">
        <a href="#">LinkedIn</a>
        <a href="https://github.com/Thiago-Tolosa" target="_blank">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;