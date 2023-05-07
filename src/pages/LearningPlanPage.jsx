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
              <h2>Uge 19 + 20</h2>
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
                          Yderligere forståelse og færdigheder indenfor mere
                          avanceret state management ved brug af third-party
                          libraries som f.eks. Zustand el. Redux.
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på hvordan state
                          kan håndteres bedre ved brug af et third-party
                          library.
                        </td>
                        <td>
                          Når jeg har et eksempel på hvordan state kan håndteres
                          ved brug af et third-party library.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                      <tr>
                        <td>
                          Forståelse og færdigheder indenfor håndtering af
                          global state management.
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på hvordan global
                          state kan håndteres bedre ved brug af et third-party
                          library.
                        </td>
                        <td>
                          Når jeg har et eksempel på hvordan global state kan
                          håndteres ved brug af et third-party library.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                      <tr>
                        <td>
                          Overordnet billede af hvad mangler indenfor emnet
                          React.
                        </td>
                        <td>
                          Ved at kigge tilbage på hvad jeg tidligere har lavet
                          og herefter lave en liste over de ting jeg mangler at
                          få kigget på, inden eksamen.
                        </td>
                        <td>
                          Når jeg har en liste over de emner/delemner jeg
                          mangler at undersøge indenfor udviklingen af
                          frontend-applikationer ved brug af React.
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
                          Yderligere forståelse og færdigheder, samt udførelse
                          af end-to-end test ved bla. brug af værktøjet Cypress.
                        </td>
                        <td>
                          Ved at undersøge og herefter udføre en mere avanceret
                          end-to-end test.
                        </td>
                        <td>
                          Når jeg har udført en mere avanceret end-to-end test
                          og undersøgt nøglepunkter/best practices indenfor
                          end-to-end testing.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                      <tr>
                        <td>
                          Yderligere forståelse og færdigheder, samt udførelse
                          af accessibility tests ved brug af værktøjer såsom
                          Wave.
                        </td>
                        <td>
                          Ved at undersøge og herefter udføre en mere avanceret
                          accessibility test.
                        </td>
                        <td>
                          Når jeg har udført en accessibility test med værktøjet
                          Wave.
                        </td>
                        <td>Kommer.</td>
                      </tr>
                      <tr>
                        <td>
                          Overordnet billede af hvad jeg mangler indenfor emnet
                          testing.
                        </td>
                        <td>
                          Ved at kigge tilbage på hvad jeg tidligere har lavet
                          og herefter lave en liste over de ting jeg mangler at
                          få kigget på, inden eksamen.
                        </td>
                        <td>
                          Når jeg har en liste over de emner/delemner jeg
                          mangler at undersøge indenfor testing af
                          frontend-applikationer.
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
              <h2>Uge 17 + 18</h2>
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
                          Forståelse og færdigheder indenfor callbacks i React.
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på hvordan et
                          callback kan se ud i React.
                        </td>
                        <td>
                          Når jeg har et eksempel på hvordan callbacks fungerer
                          i React.
                        </td>
                        <td>
                          Jeg har lavet en kategori funktion på min blog. Her
                          tager kategori-listen en funktion som parameter.
                          Derved kan den kalde en funktion fra et parent
                          component. Dette er et godt eksempel på et callback.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Forståelse og færdigheder indenfor events i React.
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på hvordan man via
                          events kan kalde en funktion via et andet komponent.
                        </td>
                        <td>
                          Når jeg har et eksempel og kan håndtere events i
                          React.
                        </td>
                        <td>
                          I samme eksempel som ved callback, så har jeg benyttet
                          mig af et "onClick" event. Der findes også mange andre
                          typer af events, men hovedformålet med events er at
                          kalde funktioner, på forskellige måder/inputs.
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
                          Udførelse af en basal accessibility test via værktøjet
                          Lighthouse.
                        </td>
                        <td>
                          Jeg vil via værktøjet Lighthouse se hvilke elementer
                          der mangler på vores projekts web-applikation.
                        </td>
                        <td>
                          Når jeg har et eksempel på en udførelse af en
                          accesebility test igennem værktøjet lighthouse.
                        </td>
                        <td>
                          Jeg fik kigget kort på værktøjet Lighthouse, hvor jeg
                          her opdagede at det er meget begrænset ift. hvad man
                          kan bruge det til. Det er godt som et udgangspunkt
                          ift. accessibility, men ellers kræver det et mere
                          avanceret værktøj.
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
                          Forståelse og færdigheder indenfor error-handling i
                          React.
                        </td>
                        <td>
                          Ved at lave et fungerende eksempel på error-handling i
                          React.
                        </td>
                        <td>
                          Når jeg har et fungerende eksempel på error-handling i
                          en React-applikation.
                        </td>
                        <td>
                          Jeg har læst et blog indlæg med best practices
                          indenfor error handling i React og implenteret det i
                          vores fælles produkt. NB. Så udskyder jeg delmålet til
                          næste uge.
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
                          Udførelse af en accessibility test via værktøjet
                          Lighthouse.
                        </td>
                        <td>
                          Jeg vil via værktøjet Lighthouse se hvilke elementer
                          der mangler på vores projekts web-applikation.
                        </td>
                        <td>
                          Når jeg har et eksempel på en udførelse af en
                          accesebility test igennem værktøjet lighthouse.
                        </td>
                        <td>
                          Jeg har kigget yderligere på værktøjet Lighthouse, men
                          har kun udført nogle få test med værktøjet. Derudover
                          har jeg kigget mere på Cypress, da det også kan bruges
                          til Accessibiliy testing.
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
                        <td>
                          Jeg har kigget på hvordan callbacks fungere via
                          events. Bla. har jeg implementeret et callback her på
                          min blog som jeg vil skrive et indlæg omkring, i uge
                          15.
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
                        <td>
                          Jeg har kigget på hvorfor og hvordan man accessibility
                          tester en web-applikation. Bla. har jeg kigget på det
                          værktøj som hedder Lighthouse, som jeg vil kigge
                          videre på.
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
