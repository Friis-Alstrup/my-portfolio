import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "react-bootstrap";
import BlogPost from "../components/BlogPost";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [Post, setPost] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  async function fetchData() {
    await fetch(`https://backend.phillipf.dk/api/posts/${slug}`)
      .then((res) => res.json())
      .then((result) => {
        SetIsLoading(false);
        setPost(result);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const post = Post[0];

  document.title = `${post?.title || "Indlæser..."} • Phillip Friis-Alstrup`;
  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <BlogPost
          title={post?.title}
          category={post?.category.title}
          created_at={post?.created_at}
          content={post?.content}
        />
      )}
    </Container>
  );
}
