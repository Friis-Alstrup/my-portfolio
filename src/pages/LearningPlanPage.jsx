import { Card, Container } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function LearningPlanPage() {
  document.title = "Læringsplaner • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Læringsplaner" />
      <Container>
        <div className="learningplan-cards">
          <Card>
            <Card.Body>
              <h2>Uge 6 + 7</h2>
              <div className="react-goals">
                <h3>React</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ "width" : "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ "width" : "25%" }}>Delmål</th>
                        <th scope="col" style={{ "width" : "25%" }}>Hvordan vil jeg opnå det?</th>
                        <th scope="col" style={{ "width" : "25%" }}>Hvornår har jeg opnået det?</th>
                        <th scope="col" style={{ "width" : "25%" }}>Evaluering</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Forstå grundlæggende elementer og begreber indenfor React.</td>
                        <td>Ved at udføre nogle små opstartsprojekter ved brug af React. (Såsom denne blog).</td>
                        <td>Når jeg kan forklarer grundlæggende elementer og begreber indenfor React.</td>
                        <td>Kommer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="testing-goals">
                <h3>Testing</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ "width" : "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ "width" : "25%" }}>Delmål</th>
                        <th scope="col" style={{ "width" : "25%" }}>Hvordan vil jeg opnå det?</th>
                        <th scope="col" style={{ "width" : "25%" }}>Hvornår har jeg opnået det?</th>
                        <th scope="col" style={{ "width" : "25%" }}>Evaluering</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Forstå grundlæggende elementer og begreber generelt indenfor testing.</td>
                        <td>Her til at starte med vil jeg undersøge generelle emner indenfor test af software bla. ved at læse noget af <a href="https://dstb.dk/">https://dstb.dk/</a> materiale.</td>
                        <td>Når jeg kan forklarer grundlæggende elementer og begreber indenfor testing.</td>
                        <td>Kommer.</td>
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
  )
}
