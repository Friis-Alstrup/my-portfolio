import { Link } from "react-router-dom";

export default function BlogEntry({
  title,
  slug,
  description,
  created_at,
  category,
}) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className="blog-entry">
      <h4>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h4>
      <small>
        {category.title} ·{" "}
        {new Date(created_at).toLocaleDateString(undefined, options)}
      </small>
      <p>{description}</p>
    </div>
  );
}
