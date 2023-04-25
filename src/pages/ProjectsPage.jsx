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
                    <a href="https://github.com/Friis-Alstrup/my-portfolio" target="_blank"><i className="bi bi-github"></i>Github Repo</a>
                    <Link to="/blog/mit-foerste-blogindlaeg"><i class="bi bi-globe2"></i>Blog indlæg</Link>
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
                    <a href="https://github.com/Friis-Alstrup/react-electricity-prices" target="_blank"><i className="bi bi-github"></i>Github Repo</a>
                    <Link to="/blog/react-produkt-elpriser"><i class="bi bi-globe2"></i>Blog indlæg</Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <div className="product-header">
                    <h4>Første Cypress test</h4>
                    <h5>
                      <Badge bg="success">Testing</Badge>
                    </h5>
                  </div>
                  <hr />
                  <div className="product-links">
                    <a href="https://github.com/Friis-Alstrup/react-electricity-prices/tree/master/cypress" target="_blank"><i className="bi bi-github"></i>Github Repo</a>
                    <Link to="/blog/foerste-e2e-test-i-cypress"><i class="bi bi-globe2"></i>Blog indlæg</Link>
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
