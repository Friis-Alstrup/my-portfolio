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
              <h2>Uge 8 + 9</h2>
              <div className="react-goals">
                <h3>React</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "25%" }}>
                          Delmål
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvordan vil jeg opnå det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvornår har jeg opnået det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Evaluering
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Forstå state management herunder "useState" og
                          "useEffect", og hvordan kommunikation mellem
                          komponenter fungere.
                        </td>
                        <td>
                          Ved at lave et projekt hvor jeg manipulerer noget data
                          via state management.
                        </td>
                        <td>
                          Når jeg har et fungerende side, og kan forklare
                          hvordan state management fungere i React.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                      <tr>
                        <td>
                          Forstå hvordan man via "Fetch" eller "axios" kan
                          kommunikere med et api, i React.
                        </td>
                        <td>
                          Ved at lave et projekt hvor jeg henter noget eksternt
                          data. Evt. en side med dagens strømpriser.
                        </td>
                        <td>
                          Når jeg har en side der henter data fra en ekstern
                          api, og at jeg kan forklare hvordan det virker.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="testing-goals">
                <h3>Testing</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "25%" }}>
                          Delmål
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvordan vil jeg opnå det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvornår har jeg opnået det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Evaluering
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Forståelse for forskellige typer af frontend testing
                          af bla. React.
                        </td>
                        <td>
                          Jeg vil undersøge hvordan man kan teste en
                          React-applikation, ved bla. at kigge på accessibility-
                          og e2e-test.
                        </td>
                        <td>
                          Når jeg har en grundlæggende forståelse for målet,
                          samt en plan for udførelse af accessibility- og
                          e2e-test.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h2>Uge 6 + 7</h2>
              <div className="react-goals">
                <h3>React</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "25%" }}>
                          Delmål
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvordan vil jeg opnå det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvornår har jeg opnået det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Evaluering
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Forstå grundlæggende elementer og begreber indenfor
                          React.
                        </td>
                        <td>
                          Ved at udføre nogle små opstartsprojekter ved brug af
                          React. (Såsom denne blog).
                        </td>
                        <td>
                          Når jeg kan forklarer grundlæggende elementer og
                          begreber indenfor React.
                        </td>
                        <td>
                          VS Code er nu sat op til React-udvikling, samt har jeg
                          lavet et lille projektet, hvor at jeg kigger på
                          routing i React. Dertil er denne blog også blevet
                          optimeret.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="testing-goals">
                <h3>Testing</h3>
                <div className="table-responsive">
                  <table class="table table-bordered" style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "25%" }}>
                          Delmål
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvordan vil jeg opnå det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Hvornår har jeg opnået det?
                        </th>
                        <th scope="col" style={{ width: "25%" }}>
                          Evaluering
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Forstå grundlæggende elementer og begreber generelt
                          indenfor testing.
                        </td>
                        <td>
                          Her til at starte med vil jeg undersøge generelle
                          emner indenfor test af software bla. ved at læse noget
                          af <a href="https://dstb.dk/">https://dstb.dk/</a>{" "}
                          materiale.
                        </td>
                        <td>
                          Når jeg kan forklarer grundlæggende elementer og
                          begreber indenfor testing.
                        </td>
                        <td>
                          Jeg har kigget lidt på dstb's materiale, samt fastlagt
                          de typer af test jeg ønsker at udføre. Det vil
                          hovedsageligt være de frontend-applikationer jeg
                          laver, jeg ønsker at teste.
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
