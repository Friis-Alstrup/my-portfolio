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
                    <p className="pb-2">Jeg har viden og forståelse for:</p>
                    <ul>
                      <li>
                        ES6, JSX, Functional Components, Props, State, Events,
                        Routing og Hooks indenfor React.
                      </li>
                      <li>
                        Opbygningen af en komponentbaseret brugergrænseflade ved
                        brug af React
                      </li>
                      <li>
                        Sammenhæng mellem React og et eksternt API, ved fetching
                        af data.
                      </li>
                      <li>
                        Teknologierne bag React herunder: HTML, CSS og
                        Javascript.
                      </li>
                      <li>Debugging af en React-applikation.</li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Anvende state management, callback-funktioner,
                        error-handling, event-handling, reusablecomponents,
                        fetching af data og debugging til konstruktion af
                        frontend-applikationer ved brug af React.
                      </li>
                      <li>
                        Anvende populære React biblioteker med forskellige
                        formål herunder: Axios, Zustand, React-googleoauth,
                        Material-UI, React-toastify og React-bootstrap.
                      </li>
                      <li>
                        Opsætte et professionelt udviklingsmiljø for React i
                        Visual Studio Code
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Udvikle simple frontend-applikationer ved brug af min
                        viden og færdigheder indenfor React.
                      </li>
                      <li>
                        Se sammenhæng mellem React og andre kodesprog /
                        frontend-frameworks.
                      </li>
                      <li>
                        Diskutere fordele og ulemper ved brug af React til
                        udvikling af frontend-applikationer.
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
                    <p className="pb-2">Jeg har viden og forståelse for:</p>
                    <ul>
                      <li>
                        WCAG guidelines, skærmlæsere, farve-kontraster og Aria
                        indenfor accessibility testing.
                      </li>
                      <li>
                        Testcases og automatiseret test indenfor end-to-end
                        testing.
                      </li>
                      <li>
                        Hvorfor det giver mening at teste frontend-applikationer
                        ved anvendelse af accessibility- og end-toend test.
                      </li>
                    </ul>
                    <h2>Færdighed</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Udføre simple automatiseret accessibility tests ved
                        hjælp af værktøjet Wave (Web Accessibility Evaluation
                        Tool) og Google Lighthouse for at opdage eventuelle
                        accessibility-problemer.
                      </li>
                      <li>
                        Udføre en simpel manuel accessibility test ved at
                        anvende en skærmlæser som Nvaccess for at teste, at
                        indholdet kan læses af brugere med nedsat syn.
                      </li>
                      <li>
                        Opsætte simple testcases og testscripts ved brug af
                        værktøjet Cypress til at simulere brugerinteraktioner på
                        frontend-applikationer.
                      </li>
                    </ul>
                    <h2>Kompetencer</h2>
                    <p className="pb-2">Jeg kan:</p>
                    <ul>
                      <li>
                        Teste frontend-applikationer ved brug af min viden og
                        færdigheder indenfor accessibility og end-toend testing.
                      </li>
                      <li>
                        Planlægge accessibility- og end-to-end test af
                        frontend-applikationer.
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
