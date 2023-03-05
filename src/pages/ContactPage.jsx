import { Col, Container, Row } from "react-bootstrap";
import ContactCard from "../components/ContactCard";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  document.title = "Kontakt • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Kontakt" />
      <Container>
        <div className="contact-cards">
          <Row className="gy-4">
            <Col lg="6">
              <ContactCard
                icon="bi bi-envelope-fill"
                contact_link="mailto:phillip.friis.alstrup@gmail.com"
                contact_text="phillip.friis.alstrup@gmail.com"
              />
            </Col>
            <Col lg="6">
              <ContactCard
                icon="bi bi-telephone-fill"
                contact_link="tel:004525157660"
                contact_text="+45 25 15 76 60"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
