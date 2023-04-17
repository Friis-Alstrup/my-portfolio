import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <h2>Uge 15 + 16</h2>
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
                          Forståelse og kompetencer indenfor error-handling i React
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på error-handling i React.
                        </td>
                        <td>
                          Når jeg har et fungerende eksempel på error-handling i en React-applikation.
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
                          Udførelse af en accessibility test via værktøjet Lighthouse.
                        </td>
                        <td>
                          Jeg vil via værktøjet Lighthouse se hvilke elementer der mangler på vores projekts web-applikation.
                        </td>
                        <td>
                          Når jeg har et eksempel på en udførelse af en accesebility test igennem værktøjet lighthouse.
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
              <h2>Uge 14</h2>
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
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
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
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
                        <td>Påskeferie.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h2>Uge 12 + 13</h2>
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
                          Forstå opsætning af event-handling og
                          callback-functions.
                        </td>
                        <td>
                          Jeg vil opsætte et react-project der demonsterer
                          hvordan events og callbacks fungerer.
                        </td>
                        <td>
                          Når jeg har et fungerende eksempel på hvordan events
                          og callbacks fungerer.
                        </td>
                        <td>Jeg har kigget på hvordan callbacks fungere via events. Bla. har jeg implementeret et callback her på min blog som jeg vil skrive et indlæg omkring, i uge 15.</td>
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
                          Forståelse og grundlæggende viden om hvordan man
                          udfører accessibility-test.
                        </td>
                        <td>
                          Jeg vil undersøge hvordan udfører en
                          accessibility-test og hvilke værktøjer der kan være
                          nyttige ift. dette.
                        </td>
                        <td>
                          Når jeg har udført min første accessibility-test og
                          har fundet et godt og intuitivt værktøj.
                        </td>
                        <td>Jeg har kigget på hvorfor og hvordan man accessibility tester en web-applikation. Bla. har jeg kigget på det værktøj som hedder Lighthouse, som jeg vil kigge videre på.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h2>Uge 10 + 11</h2>
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
                          Forstå opsætning af globalstate i en React-applikation
                          og viden om hvordan det kan håndteres ved hjælp af et
                          eksternt library.
                        </td>
                        <td>
                          Jeg vil undersøge hvordan man kan håndtere globalstate
                          i en React appliktion ved at implementere det i mit
                          elpris-produkt.
                        </td>
                        <td>
                          Når jeg har et fungerende eksempel på brug/ændring af
                          globalstate i mit elpris-produkt, så der ikke behøves
                          fetching af data, ved navigering rund på siden.
                        </td>
                        <td>
                          Jeg har kigget på et library der hedder Zustand, som
                          gør state management til en dans på roser, ift. den
                          "almindelige" måde at gøre det på i React.
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
                          Forståelse for forskellige typer af frontend testing
                          af React.
                        </td>
                        <td>
                          Jeg vil undersøge hvordan man kan teste en
                          React-applikation, ved bla. at kigge på e2e-test.
                        </td>
                        <td>
                          Når jeg har en grundlæggende forståelse for målet,
                          samt en plan for udførelse af e2e-test.
                        </td>
                        <td>
                          Jeg har i denne omgang kigget på e2e-test og har
                          dannet mig et godt indblik i hvad det er. Jeg er i
                          gang med at udføre en e2e-test, på mit seneste react
                          projekt.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Forståelse og viden om hvordan man udfører e2e-test
                          via et test-framework kaldet Cypress.
                        </td>
                        <td>
                          Jeg vil undersøge hvordan man kan udføre e2e-test i
                          Cypress og udføre en e2e-test af mit elpris-produkt.
                        </td>
                        <td>
                          Når jeg har forståelse for brug af Cypress og en
                          fungerende test af mit elpris-produkt.
                        </td>
                        <td>
                          Jeg har kigget på både Cypress og det der hedder
                          Playwright, som er de to største frameworks for denne
                          type af softwaretest. Jeg er i gang med at udføre en
                          e2e-test på mit elpris-produkt, men er ikke helt
                          færdig endnu.
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
              <h2>Uge 8 + 9</h2>
              <div className="react-goals">
                <h3>React</h3>
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    style={{ width: "100%" }}
                  >
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
                        <td>
                          Jeg har opnået forståelse og viden indenfor state
                          management og hooks, igennem mit første produkt med
                          React. Jeg har nu en fungerende side:{" "}
                          <Link to="https://elpriser.phillipf.dk">
                            elpriser.phillipf.dk
                          </Link>
                        </td>
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
                        <td>
                          Jeg har opnået forståelse og viden indenfor fetching
                          af data, igennem mit første produkt med React. Jeg har
                          nu en fungerende side:{" "}
                          <Link to="https://elpriser.phillipf.dk">
                            elpriser.phillipf.dk
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="testing-goals">
                <h3>Testing</h3>
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    style={{ width: "100%" }}
                  >
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
                        <td>
                          Målet er ikke nået indenfor tidsrammen. Derfor tager
                          jeg det med i næste læringsplan.
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
              <h2>Uge 6 + 7</h2>
              <div className="react-goals">
                <h3>React</h3>
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    style={{ width: "100%" }}
                  >
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
                  <table
                    className="table table-bordered"
                    style={{ width: "100%" }}
                  >
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
