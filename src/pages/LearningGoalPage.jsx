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
                        Anvende state-management, callbacks, error-handling, event-handling, reuseable-components 
                        og fetch api til konstruktion af frontend-projekter ved brug af React.
                      </li>
                      <li>
                        Anvende populære React biblioteker f.eks. Axios, Zustand, Material-UI mm.
                      </li>
                      <li>
                        Anvende arkitekturmønstre der passer til opsætning af en React-applikation.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Arbejde i professionelle sammenhæng med React som værktøj, til brug i frontend-udvikling.
                      </li>
                      <li>
                        Opsætte et professionelt udviklingsmiljø for React-applikationer i f.eks. Visual Studio Code.
                      </li>
                      <li>
                        I en struktureret sammenhæng tilegne mig ny viden, færdigheder og kompetencer inden for React.
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
                    <h1>Accesebility og E2E testing</h1>
                  </div>
                  <div className="content">
                    <h2>Viden</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Redegøre for centrale elementer, funktioner og begreber indenfor testing af frontend-applikationer.
                      </li>
                      <li>
                        Redegøre for hvorfor og hvornår brug af ”Continuos integration/Continuous delivery” med automatiseret test af frontend-applikationer er nyttigt.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Udføre accesebility- og end-to-end test af frontend-applikationer.
                      </li>
                      <li>
                        Udføre automatiseret test ved brug af ”Continuos integration/Continuous delivery” via en pipeline på f.eks. Github, Bitbucket, Gitlab osv.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p>Jeg kan:</p>
                    <ul>
                      <li>
                        Arbejde i professionelle sammenhæng med testing af frontend-applikationer.
                      </li>
                      <li>
                        Anvende professionelle accesebility- og end-to-end test værktøjer til test af frontend-applikationer.
                      </li>
                      <li>
                        I en struktureret sammenhæng tilegne mig ny viden, færdigheder og kompetencer inden for accesebility- og end-to-end test.
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
