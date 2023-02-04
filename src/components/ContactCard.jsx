import { Card } from "react-bootstrap";

export default function ContactCard({ icon, contact_link, contact_text }) {
  return (
    <Card>
        <Card.Body>
            <div className="contact-card-content">
                <h1><i className={icon}></i></h1>
                <a href={contact_link}>{contact_text}</a>
            </div>
        </Card.Body>
    </Card>
  )
}
