import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Our Modern Website</h1>
      <p>Responsive, beautiful, and built with React and Next.js</p>
      <a href="#learn-more" className={styles.cta}>Learn More</a>
    </section>
  );
};

export default Hero;
