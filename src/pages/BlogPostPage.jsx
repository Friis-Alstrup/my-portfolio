import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "react-bootstrap";
import BlogPost from "../components/BlogPost";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    await fetch(`https://backend.phillipf.dk/api/posts/${slug}`)
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setPost(result);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  document.title = `${post?.title || "Indlæser..."} • Phillip Friis-Alstrup`;
  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <BlogPost
          title={post[0]?.title}
          category={post[0]?.category.title}
          created_at={post[0]?.created_at}
          content={post[0]?.content}
        />
      )}
    </Container>
  );
}
