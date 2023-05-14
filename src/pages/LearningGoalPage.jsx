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
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Redegøre for centrale elementer og begreber indenfor
                        React herunder: ES6, JSX, Functional Components, Props, State,
                        Events, Routing og Hooks.
                      </li>
                      <li>
                        Redegøre for sammenhæng mellem React og et API, ved
                        fetching af ekstern data.
                      </li>
                      <li>Redegøre for den grundlæggende teknologi bag React.</li>
                      <li>
                        Forklare hvorfor det giver mening at anvende React til
                        udvikling af frontend-applikationer.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Anvende state management, callback-funktioner,
                        error-handling, event-handling, reusable-components og
                        fetching af data til konstruktion af simple
                        frontend-applikationer ved brug af React.
                      </li>
                      <li>
                        Anvende populære React biblioteker med forskellige
                        formål herunder: Axios, Zustand, Material-UI,
                        React-toastify og React-bootstrap.
                      </li>
                      <li>
                        Opsætte et professionelt udviklingsmiljø for React i
                        f.eks. Visual Studio Code.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Udvikle frontend-applikationer ved brug af React til at
                        understøtte læring.
                      </li>
                      <li>
                        Se sammenhæng mellem React og andre kodesprog /
                        frontend-frameworks.
                      </li>
                      <li>
                        I et struktureret sammenhæng opsøge ny viden og tilegne
                        nye færdigheder indenfor React.
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
                    <h1>Accessibility og E2E testing</h1>
                  </div>
                  <div className="content">
                    <h2>Viden</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Redegøre for centrale elementer og begreber indenfor
                        accessibility-testing herunder: WCAG, Skærmlæsere,
                        farve-kontraster, Aria, responsivt
                        design, usablity og inklusiv design.
                      </li>
                      <li>
                        Redegøre for centrale elementer og begreber indenfor
                        end-to-end testing herunder: Testplan, testcases,
                        automatiseret test, black box testing, white box testing.
                      </li>
                      <li>
                        Forklare hvorfor det giver mening at teste
                        frontend-applikationer ved anvendelse af accessibility-
                        og end-to-end test.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Udføre simple accessibility test af
                        frontend-applikationer med værktøjerne: Lighthouse, Wave og NVAccess.
                      </li>
                      <li>
                        Udføre simple end-to-end test af frontend-applikationer ved brug af værktøjet: Cypress.
                      </li>
                      <li>
                        Opsætte professionelle testmiljøer til brug ved
                        accessibility- og end-to-end tests. F.eks. værktøjerne
                        Cypress og Wave.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Teste frontend-applikationer ved brug af accessibility
                        og end-to-end testing til at understøtte læring.
                      </li>
                      <li>
                        I et struktureret sammenhæng opsøge ny viden og tilegne
                        nye færdigheder indenfor accessibility- og end-to-end
                        testing.
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
