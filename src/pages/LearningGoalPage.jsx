import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function LearningGoalPage() {
  document.title = "Læringsmål • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Læringsmål" />
      <Container>
        <div className="learninggoal-cards">
          <Row className="gy-4">
            <Col lg="6">
              <Card>
                <Card.Body>
                  <div className="title">
                    <img src="/img/react.png" />
                    <h1>React</h1>
                  </div>
                  <div className="content">
                    <h2>Viden</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Redegøre for centrale elementer, funktioner og begreber
                        i React.
                      </li>
                      <li>
                        Redegøre for sammenhæng mellem React og en backend.
                      </li>
                      <li>
                        Redegøre for hvordan React er bygget op og teknologien
                        bag.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Anvende centrale elementer, funktioner og begreber i
                        React til konstruktion af web-applikationer.
                      </li>
                      <li>
                        Anvende arkitekturmønstre der passer til opsætning af en
                        React-applikation.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Tilegne mig ny viden, færdigheder og kompetencer
                        indenfor React / frontend-udvikling.
                      </li>
                      <li>
                        Arbejde professionelt med React som værktøj, til brug i
                        frontend-udvikling.
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Body>
                  <div className="title">
                    <img src="/img/testing.png" />
                    <h1>Testing</h1>
                  </div>
                  <div className="content">
                    <h2>Viden</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Redegøre for centrale elementer, funktioner og begreber
                        indenfor testing af software.
                      </li>
                      <li>
                        Redegøre for hvorfor og hvornår brug af "Continuous
                        integration/Continuous delivery" med automatiseret test
                        er nyttigt.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Udføre accesebility- og end-to-end test på mine software
                        produkter.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Tilegne mig ny viden, færdigheder og kompetencer
                        indenfor accesebility- og end-to-end test af software.
                      </li>
                      <li>
                        Arbejde professionelt med testing af software, til brug
                        i frontend-udvikling.
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
