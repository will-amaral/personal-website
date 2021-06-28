function Card(props) {
  const { title, children, href } = props;
  return (
    <a href={href}>
      <article>
        <h1>{title} &rarr;</h1>
        <p>{children}</p>
      </article>
      <style jsx>{`
        h1 {
          font-size: 3rem;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        
        article {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          article:hover,
          article:focus,
          article:active {
            color: var(--accent-color);
            border-color: var(--accent-color);
          }
        }
      `}</style>
    </a>
  );
}

export default Card;
