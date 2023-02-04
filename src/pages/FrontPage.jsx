import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import RecentPost from "../components/RecentPost";
import LoadingSpinner from "../components/LoadingSpinner";

export default function FrontPage() {
  const [Posts, setPosts] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);  

  async function fetchData() {
    await fetch('https://backend.phillipf.dk/api/posts/latest')
    .then(res => res.json())
    .then(
      (result) => {
      SetIsLoading(false);
      setPosts(result);
      }
    )
  } 

  useEffect(() => {
    fetchData();
  }, [])

  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  document.title = "Forside • Phillip Friis-Alstrup";
  return (
    <Container>
      <div className="front-header">
        <div className="header-text">
          <h1>Hej! Mit navn er Phillip 👋</h1>
          <h2>Jeg er datamatikerstuderende og softwareudvikler</h2>
          <div className="header-buttons">
            <Button variant="dark" as={Link} to="/om">Mere om mig</Button>
            <Button variant="dark" as={Link} to="/Blog">Blog</Button>
          </div>
        </div>
        <div className="header-image">
          <img src="./img/me.jpg"/>
        </div>
      </div>
      <div className="recent-posts">
        <div className="recent-posts-header">
          <h3>Seneste indlæg</h3>
          <Link to="/blog">Se mere <i className="bi bi-arrow-right-short"></i></Link>
        </div>
        <div className="recent-posts-list">
          <Row className="gy-4">
            {
              isLoading 
              ? <LoadingSpinner /> 
              : Posts.map(({ id, title, slug, description, created_at, category }) => 
                  <Col key={id} lg="4"><RecentPost title={title} slug={slug} meta={`${category.title} · ${new Date(created_at).toLocaleDateString(undefined, options)}`} description={description} category={category} /></Col>
                )
            }
          </Row>
        </div>
      </div>
    </Container>
  )
}
