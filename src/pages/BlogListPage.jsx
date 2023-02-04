import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import BlogEntry from "../components/BlogEntry";

export default function BlogListPage() {
    const [Posts, setPosts] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    async function fetchData() {
      await fetch('https://backend.phillipf.dk/api/posts')
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

  document.title = "Blog • Phillip Friis-Alstrup";
  return (
    <>
      <PageHeader title="Blog" />
      <Container>
        <div className="blog-list">
          <Row className="gy-4">
            <Col lg="8">
              <Card>
                <Card.Body>
                  <div className="blog-list-entries">
                    {
                      isLoading
                      ? <LoadingSpinner />
                      : Posts.map(({ id, title, slug, description, created_at, category }) => <BlogEntry key={id} title={title} slug={slug} description={description} created_at={created_at} category={category} /> )
                    }
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card>
                <Card.Body>
                  <h3>Sortér efter kategori</h3>
                  <div className="blog-list-categories">
                    <div className="category">
                        <a className="active" href="">Alle indlæg</a>
                        <p>{Posts.length}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>  
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}


