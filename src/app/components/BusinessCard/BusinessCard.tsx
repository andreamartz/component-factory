import styles from './BusinessCard.module.css';

const BusinessCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.businessCard}>
          <img className={styles.profileImage} src="https://cdn.freecodecamp.org/curriculum/labs/flower.jpg" alt="purple coneflower"/>
          <p className={`${styles.fullName} ${styles.p}`}>Andrea Martz</p>
          <p className={`${styles.designation} ${styles.p}`}>Software Engineer</p>
          <p className={`${styles.company} ${styles.p}`}>Martz Consulting Services, LLC</p>
          <hr />
          <p className={styles.p}>hello@andreamartz.dev</p>
          <p className={styles.p}>(123) 456-7890</p>
          <a className={`${styles.portfolioLink} ${styles.anchor}`} href="https://andreamartz.dev/">Portfolio</a>
          <hr />
          <div className={styles.socialMedia}>
              <h2>Connect with me</h2>
              <a className={styles.anchor} href="https://x.com/amartzcoder">Twitter</a>
              <a className={styles.anchor} href="https://www.linkedin.com/in/andreamartz/">LinkedIn</a>
              <a className={styles.anchor} href="https://github.com/andreamartz">GitHub</a>
          </div>
      </div>
    </div>
  );
}

export default BusinessCard;