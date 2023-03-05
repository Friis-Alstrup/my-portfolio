import { Card, Container } from "react-bootstrap";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  document.title = "Om mig • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Om mig" />
      <Container>
        <div className="about-card">
          <Card>
            <Card.Body>
              <p>
                Mit navn er Phillip Friis-Alstrup, jeg er 22 år gammel og jeg
                bor i Slagelse sammen med min kæreste Ane. Jeg er på nuværende
                tidspunkt i gang med at læse til datamatiker på UCL i Odense. På
                denne side finder du alt lige fra blogindlæg fra mit studie, til
                diverse hjemmeprojekter. Jeg koder primært i .NET frameworket
                (C#), PHP (Laravel), JavaScript (React/Node) og SQL til
                databaser.
              </p>
              <p>
                Igennem datamatikeruddannelsen har jeg lært hvordan man
                struktureret designer og udvikler professionelle
                softwareløsninger til virksomheder. Via agile
                softwareudviklingsmetoder og frameworks f.eks. Unified Process
                og SCRUM, samarbejdede vi i teams for at løse problemstillinger
                på en agil, effektiv og professionel måde. På studiet har jeg
                primært arbejdet med C#, WPF, ASP.NET (MVC / WEB API), Entity
                Framework, Blazor, SQL Server, HTML, CSS og JavaScript.
              </p>
              <p>
                Ved siden af studiet, arbejder jeg som kundekonsulent hos TV 2
                Danmark.
              </p>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
