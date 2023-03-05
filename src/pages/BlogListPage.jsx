import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import BlogEntry from "../components/BlogEntry";
import CategoryList from "../components/CategoryList";

export default function BlogListPage() {
  const [Posts, setPosts] = useState([]);
  const [PostsSorted, setPostsSorted] = useState([]);
  const [isPostsSorted, SetIsPostsSorted] = useState("");
  const [isLoading, SetIsLoading] = useState(true);

  async function fetchData() {
    await fetch("https://backend.phillipf.dk/api/posts")
      .then((res) => res.json())
      .then((result) => {
        SetIsLoading(false);
        setPosts(result);
        setPostsSorted(result);
        SetIsPostsSorted("all");
      });
  }

  function SortPosts(category) {
    const postsWithChosenCategory = Posts.filter(
      (p) => p.category_id == category
    );
    setPostsSorted(postsWithChosenCategory);
    SetIsPostsSorted(category);
  }

  function ResetPosts() {
    setPostsSorted(Posts);
    SetIsPostsSorted("all");
  }

  useEffect(() => {
    fetchData();
  }, []);

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
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      PostsSorted.map(
                        ({
                          id,
                          title,
                          slug,
                          description,
                          created_at,
                          category,
                        }) => (
                          <BlogEntry
                            key={id}
                            title={title}
                            slug={slug}
                            description={description}
                            created_at={created_at}
                            category={category}
                          />
                        )
                      )
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <CategoryList
                postsCount={Posts.length}
                active={isPostsSorted}
                handleState={SortPosts}
                resetPosts={ResetPosts}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
