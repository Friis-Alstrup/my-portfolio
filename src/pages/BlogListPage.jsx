import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import BlogEntry from "../components/BlogEntry";
import CategoryList from "../components/CategoryList";

export default function BlogListPage() {
  const [posts, setPosts] = useState([]);
  const [postsSorted, setPostsSorted] = useState([]);
  const [isPostsSorted, setIsPostsSorted] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    await fetch("https://backend.phillipf.dk/api/posts")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setPosts(result);
        setPostsSorted(result);
        setIsPostsSorted("all");
      });
  }

  function SortPosts(category) {
    const postsWithChosenCategory = posts.filter(
      (p) => p.category_id == category
    );
    setPostsSorted(postsWithChosenCategory);
    setIsPostsSorted(category);
  }

  function ResetPosts() {
    setPostsSorted(posts);
    setIsPostsSorted("all");
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
                      postsSorted.map(
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
                postsCount={posts.length}
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
