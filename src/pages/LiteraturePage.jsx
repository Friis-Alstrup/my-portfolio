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
                          Den generelle dokumentation for hele React
                          frameworket.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.w3schools.com/REACT/default.asp"
                            target="_blank"
                          >
                            w3schools - React tutorial
                          </a>
                        </td>
                        <td>
                          w3schools har jeg brugt til at få basal viden indefor
                          udvikling af React applikationer. Den er rigtig god,
                          da den forklarer en stor del af hvordan React fungere,
                          på enkel og nem måde.
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
                          En youtube tutorial jeg har brugt til at få en
                          forståelse for de centrale elementer i React
                          frameworket.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://mui.com/material-ui/getting-started/overview/"
                            target="_blank"
                          >
                            Material UI
                          </a>
                        </td>
                        <td>
                          Material UI er et velintegreret ui-library som jeg har
                          brugt i mit el-priser produkt. Vi startede også ud med
                          det i vores Stemonline projekt, men gik over til et
                          andet med inspiration fra vores PO.
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
                          Dette blog indlæg har jeg læst for at få en forståelse
                          for hvordan man implementerer error handling i sin
                          React applikation.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.elprisenligenu.dk/elpris-api"
                            target="_blank"
                          >
                            Elpris API - Åben og gratis
                          </a>
                        </td>
                        <td>
                          Dette gratis API har jeg brugt til mit el-priser
                          projekt. Det er dejligt sat op, så det er nemt at
                          integrere.
                        </td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <td>
                          <a
                            href="https://docs.criipto.com/verify/getting-started/overview/"
                            target="_blank"
                          >
                            Criipto Verify dokumentation
                          </a>
                        </td>
                        <td>
                          Criipto har vi brugt til at integrerer MitID
                          authentication på vores projekt, Stemonline.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.youtube.com/watch?v=TqlVP_IkS28"
                            target="_blank"
                          >
                            Google oAuth React
                          </a>
                        </td>
                        <td>
                          Dette er en youtube tutorial der viser hvordan man kan
                          integrerer Google login i sin applikation.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://reactrouter.com/en/main"
                            target="_blank"
                          >
                            React Router v6
                          </a>
                        </td>
                        <td>
                          React Router benytter jeg næsten i alle mine
                          projekter. Dette library åbner op for at lave flere
                          sider med deres egen route, selvom at det stadig er en
                          SSA (Single-page application).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://github.com/pmndrs/zustand"
                            target="_blank"
                          >
                            Zustand
                          </a>
                        </td>
                        <td>
                          State management library jeg har brugt i nogle af mine
                          react applikationer. Dette gør state noget nemmere at
                          håndtere.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.youtube.com/watch?v=fZPgBnL2x-Q"
                            target="_blank"
                          >
                            Zustand React State Management Course (Simple Redux
                            Alternative)
                          </a>
                        </td>
                        <td>
                          Youtube turorial jeg har brugt til at starte ud med
                          Zustand i React.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://axios-http.com/docs/intro"
                            target="_blank"
                          >
                            Axios Http
                          </a>
                        </td>
                        <td>
                          Dette library bruger man til at håndtere fetching af
                          data fra et api. Jeg har brugt det i alle min
                          projekter. Axios har mange gode metoder og syntaxen er
                          overskuelig.
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
                          Cypress er det værktøj jeg har brugt til at udfører
                          E2E test
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.youtube.com/watch?v=x0QuiEJUf6s"
                            target="_blank"
                          >
                            Testing your first application - Lesson 02 -
                            Installing Cypress and writing your first test
                          </a>
                        </td>
                        <td>
                          Denne Youtube tutorial har jeg brugt til at starte ud
                          med at udføre e2e-test på mine React projekter.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.techtarget.com/searchsoftwarequality/definition/End-to-end-testing"
                            target="_blank"
                          >
                            End-to-end testing
                          </a>
                        </td>
                        <td>
                          Denne artikel adresserer nogle rigtig gode elementer
                          ved end-to-end testing. Bla. best practices, metrics,
                          benefits og sammenligninger med andre test former.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://github.com/GoogleChrome/lighthouse"
                            target="_blank"
                          >
                            Chrome Lighthouse
                          </a>
                        </td>
                        <td>
                          Lighthouse har jeg brugt til at udfører accessiblity-
                          og performance test. Det er direkte integreret i
                          Chromium browsere.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="https://wave.webaim.org/" target="_blank">
                            Wave - web accessiblity evaluation tool
                          </a>
                        </td>
                        <td>
                          Wave har jeg brugt til at evaluere over mine React
                          produkter. Værktøjet er godt til at spotte eventuelle
                          fejl ift. accessibility på siden.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://codemantra.com/why-website-accessibility-testing-is-important/"
                            target="_blank"
                          >
                            Why Website Accessibility Testing Is Important
                          </a>
                        </td>
                        <td>
                          Denne side har jeg brugt til at skabe en dybere
                          forståelse for hvordan og hvorfor at accessibility
                          testing er så vigtigt.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.browserstack.com/guide/test-planning"
                            target="_blank"
                          >
                            Test Planning: A Detailed Guide
                          </a>
                        </td>
                        <td>
                          Denne side beskriver detaljeret hvordan man laver en
                          testplan, på den helt rigtige måde.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.javatpoint.com/test-plan"
                            target="_blank"
                          >
                            Test plan
                          </a>
                        </td>
                        <td>
                          Endnu en god artikel der i dybden beskriver hvordan
                          man laver en test plan. Den har mange gode
                          illustrationer.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://ddiy.co/web-accessibility-statistics/"
                            target="_blank"
                          >
                            57 Web Accessibility Statistics
                          </a>
                        </td>
                        <td>
                          Denne side fandt jeg da jeg ledte efter nogle
                          statistikker ift. hvor relevant accessiblity testing
                          er. Her fandt jeg bla. ud af at ca. 15% på verdensplan
                          har en eller anden form for funktionsnedsættelse.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.nvaccess.org/"
                            target="_blank"
                          >
                            NV Access
                          </a>
                        </td>
                        <td>
                          Dette program er en skærmlæser som jeg har brugt til at teste hjemmesider for deres web accessibility.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines"
                            target="_blank"
                          >
                            Web Content Accessibility Guidelines (WCAG)
                          </a>
                        </td>
                        <td>
                          Denne wikiside beskriver hvad "Web Content Accessibility Guidelines (WCAG)" er, samt giver et overblik over de forskellige "guidelines" og "success criterias" ift. web accessibility.
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
