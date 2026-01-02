import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const roles = [
    "React Developer",
    "Frontend Developer",
    "Web Developer",
    "Problem Solver",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[roleIndex];

    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundAnimation}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageOuterRing}></div>
              <div className={styles.imageInnerRing}></div>

              <img
                src={import.meta.env.BASE_URL + "pic.jpg"}
                alt="Profile"
                className={styles.profileImage}
              />

              <div className={styles.statusDot}></div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <div className={styles.greetingWrapper}>
              <span className={styles.waveEmoji}>👋</span>
              <p className={styles.greeting}>Hello, I'm</p>
            </div>

            <h1 className={styles.name}>
              <span className={styles.firstName}>Raouas Haithem</span>
              <span className={styles.lastName}>Badr Eddine</span>
            </h1>

            <div className={styles.roleContainer}>
              <h2 className={styles.title}>
                <span className={styles.staticText}>Junior </span>
                <span className={styles.dynamicText}>{typedText}</span>
                <span className={styles.cursor}>|</span>
              </h2>
            </div>

            <p className={styles.bio}>
              I'm a <strong>25-year-old Computer Science student</strong>,
              currently in my
              <strong> Master 1 (4th year)</strong>, deeply passionate about
              software development and the creation of modern websites and web
              applications.
              <br />
              <br />I genuinely enjoy learning, building, and refining my
              skills, and I strongly aspire to become{" "}
              <strong>exceptionally good in this field</strong> through
              continuous improvement, real-world projects, and clean, scalable
              code.
            </p>

            <div className={styles.buttonGroup}>
              <a
                href="#projects"
                className={styles.primaryButton}
                onClick={(e) => scrollToSection(e, "projects")}
              >
                <span>Explore My Work</span>
              </a>

              <a
                href="#contact"
                className={styles.secondaryButton}
                onClick={(e) => scrollToSection(e, "contact")}
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <p className={styles.scrollText}>Scroll to explore</p>
      </div>

      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
    </section>
  );
}

export default Hero;
