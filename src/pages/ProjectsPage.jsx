import { Badge, Card, Col, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  document.title = "Produkter • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Produkter" />
      <div className="products">
        <div className="container">
          <Row className="g-4">
            <h2>React</h2>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Stemonline frontend</h4>
                    <h5>
                      <Badge bg="primary">React</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://www.youtube.com/watch?v=xjGtcJtmwm8"
                      target="_blank"
                    >
                      <i className="bi bi-youtube"></i>Video
                    </a>
                    <Link to="/blog/react-produkt-stemonline-frontend">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Min blog</h4>
                    <h5>
                      <Badge bg="primary">React</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://github.com/Friis-Alstrup/my-portfolio"
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>Github Repo
                    </a>
                    <Link to="/blog/mit-foerste-blogindlaeg">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Dagens elpriser</h4>
                    <h5>
                      <Badge bg="primary">React</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://github.com/Friis-Alstrup/react-electricity-prices"
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>Github Repo
                    </a>
                    <Link to="/blog/react-produkt-elpriser">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Vikar løn</h4>
                    <h5>
                      <Badge bg="primary">React</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://github.com/Friis-Alstrup/vikar-loen"
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>Github Repo
                    </a>
                    <Link to="/blog/react-produkt-google-oauth-integration-vikar-loen">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 mt-4">
            <h2>Testing</h2>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>E2E test af Stemonline</h4>
                    <h5>
                      <Badge bg="success">Testing</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://www.youtube.com/watch?v=WQ_wO3ScRjY"
                      target="_blank"
                    >
                      <i className="bi bi-youtube"></i>Video
                    </a>
                    <Link to="/blog/testing-produkt-e2e-test-af-kommuner-i-stemonline">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Accessibility test plan</h4>
                    <h5>
                      <Badge bg="success">Testing</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://filer.phillipf.dk/AccessibilityTestPlan.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-text-fill"></i>PDF
                    </a>
                    <Link to="/blog/testing-produkt-test-plan-for-overholdelse-af-accessibility-guidelines">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Video om accessibility</h4>
                    <h5>
                      <Badge bg="success">Testing</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://www.youtube.com/watch?v=73MzNF9erO8"
                      target="_blank"
                    >
                      <i className="bi bi-youtube"></i>Video
                    </a>
                    <Link to="/blog/testing-produkt-video-om-accessibility-testing-og-vaerktoejer-til-test">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Første E2E test</h4>
                    <h5>
                      <Badge bg="success">Testing</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a
                      href="https://github.com/Friis-Alstrup/react-electricity-prices/tree/master/cypress"
                      target="_blank"
                    >
                      <i className="bi bi-github"></i>Github Repo
                    </a>
                    <Link to="/blog/testing-produkt-foerste-e2e-test-i-cypress">
                      <i class="bi bi-globe2"></i>Blog indlæg
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
