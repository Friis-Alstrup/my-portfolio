import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function LiteraturePage() {
  document.title = "Litteratur • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Litteratur" />
      <Container>
        <div className="litteratures">
          <Card>
            <Card.Body>
              <h2>React</h2>
              <Row>
                <Col lg="6">
                  <div className="links">
                    <a href="https://beta.reactjs.org/" target="_blank">
                      React Documentation
                    </a>
                    <a
                      href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
                      target="_blank"
                    >
                      Full Modern React Tutorial
                    </a>
                  </div>
                </Col>
                <Col lg="6"></Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2>Testing</h2>
              <Row>
                <Col lg="6">
                  <div className="links">
                    <a href="https://dstb.dk/" target="_blank">
                      Danish Software Testing Board
                    </a>
                    <a href="https://www.cypress.io/" target="_blank">
                      Cypress.io - Automated e2e test
                    </a>
                  </div>
                </Col>
                <Col lg="6"></Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
