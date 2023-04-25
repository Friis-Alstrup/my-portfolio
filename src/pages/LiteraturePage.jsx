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
              <div className="pt-4">
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th style={{ width: "50%" }}>Link</th>
                        <th style={{ width: "50%" }}>Beskrivelse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="https://react.dev/" target="_blank">
                            React Documentation
                          </a>
                        </td>
                        <td>
                          Den generelle dokumentation for hele React frameworket.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d"
                            target="_blank"
                          >
                            Full Modern React Tutorial
                          </a>
                        </td>
                        <td>
                          En youtube tutorial jeg har brugt til at få en forståelse for de centrale elementer i React frameworket.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://blog.bitsrc.io/react-error-handling-and-logging-best-practices-4444c57cd666"
                            target="_blank"
                          >
                            React Error Handling and Logging Best Practices
                          </a>
                        </td>
                        <td>
                          Dette blog indlæg har jeg læst for at få en forståelse for hvordan man implementerer error handling i sin React applikation.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2>Testing</h2>
              <div className="pt-4">
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th style={{ width: "50%" }}>Link</th>
                        <th style={{ width: "50%" }}>Beskrivelse</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="https://www.cypress.io/" target="_blank">
                            Cypress.io - Automated e2e test
                          </a>
                        </td>
                        <td>
                          Cypress er det værktøj jeg har brugt til at udfører E2E test
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
