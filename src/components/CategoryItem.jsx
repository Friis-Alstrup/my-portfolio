import React from "react";

export default function CategoryItem({
  categoryId,
  title,
  count,
  active,
  handlePosts,
}) {
  return (
    <div className="category">
      <a onClick={() => handlePosts(categoryId)} className={active}>
        {title}
      </a>
      <p>{count}</p>
    </div>
  );
}
