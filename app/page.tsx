"use client";

import styles from "./page.module.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <Hero />

      <div className={styles.divider}>
        <span>• • •</span>
      </div>

      <About />
      <Career />
      <Projects />

      <Footer />
    </div>
  );
}
