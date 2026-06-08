"use client"
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Web Dev Simplified Blog</h1>
      </header>
      <main>
        <section>
          <article>
            <h2 className={styles.articleTitle}>Semantic Versioning Explained</h2>
            <div className={styles.articleDate}>March 1st, 2020</div>
            <div className={styles.articleAuthor}>Kyle Cook</div>
            <p>An explanation of what semantic versioning is and why it is important.</p>
            <a href="#">Read More</a>
          </article>
          <article>
            <h2 className={styles.articleTitle}>The Forgotten React Renderer - React Portal</h2>
            <div className={styles.articleDate}>February 23rd, 2020</div>
            <div className={styles.articleAuthor}>Kyle Cook</div>
            <p>React portal lets components be rendered outside their parent component which is incredibly useful in specific scenarios explained in depth in this article.</p>
            <a href="#">Read More</a>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>All articles are original and written specifically for Web Dev Simplified.</p>
      </footer>
    </>
  );
}

export default Blog;