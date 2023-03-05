import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import LoadingSpinner from "../components/LoadingSpinner";
import CategoryItem from "../components/CategoryItem";

export default function CategoryList({
  postsCount,
  handleState,
  resetPosts,
  active,
}) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    await fetch("https://backend.phillipf.dk/api/categories")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setCategories(result);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <Card.Body>
        <h3>Sortér efter kategori</h3>
        <div className="blog-list-categories">
          <div className="category">
            <a className={active == "all" ? "active" : ""} onClick={resetPosts}>
              Alle indlæg
            </a>
            <p>{postsCount}</p>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            categories.map(
              ({ id, title, posts }) =>
                posts.length > 0 && (
                  <CategoryItem
                    key={id}
                    id={id}
                    title={title}
                    count={posts.length}
                    stateChange={handleState}
                    active={active == id ? "active" : ""}
                  />
                )
            )
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
