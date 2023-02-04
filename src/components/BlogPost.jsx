import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'https://esm.sh/rehype-raw@6'

export default function BlogPost({ title, category, created_at, content }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className="blog-post">
        <div className="blog-post-header">
            <h1>{title}</h1>
            <div className="blog-post-meta">
                <img src="/img/me.jpg" alt="Billede af mig" />
                <small>Phillip · {category} · {new Date(created_at).toLocaleDateString(undefined, options)}</small>
            </div>
        </div>
        <div className="blog-post-content">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} linkTarget="_blank">
                {content}
            </ReactMarkdown>
        </div>
    </div>
  )
}
