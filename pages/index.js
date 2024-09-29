import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <section className={styles.content}>
        <h2>About Us</h2>
        <p>
          Welcome to our modern, responsive website. We use the best web technologies
          to create beautiful, responsive websites that work on any device.
        </p>
      </section>
      <Footer />
    </div>
  );
}
