import React from "react";

export default function CategoryItem({
  id,
  title,
  count,
  active,
  stateChange,
}) {
  return (
    <div className="category">
      <a onClick={() => stateChange(id)} className={active}>
        {title}
      </a>
      <p>{count}</p>
    </div>
  );
}
