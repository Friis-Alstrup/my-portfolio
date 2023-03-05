import Container from "react-bootstrap/Container";
export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/Friis-Alstrup" target="_blank">
              <i className="bi bi-github"></i> Github
            </a>
            <a
              href="https://www.linkedin.com/in/phillipfriisalstrup/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/phillip.friis.alstrup/"
              target="_blank"
            >
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </div>
          <div className="copyright">
            <p>Phillip Friis-Alstrup</p>
            <p>
              <i className="bi bi-c-circle"></i>
            </p>
            <p>2023</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
