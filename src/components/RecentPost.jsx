import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function RecentPost({ title, slug, meta, description }) {
  return (
    <Card>
    <Card.Body className="recent-post-content">
      <h4><Link to={`/blog/${slug}`}>{title}</Link></h4>
      <small>{meta}</small>
      <p>{description}</p>
    </Card.Body>
  </Card>
  )
}
