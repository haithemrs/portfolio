import { useState, useEffect, useRef } from "react";
import styles from "./Skills.module.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // ================= CORE SKILLS (FROM YOUR CV) =================
  const coreSkills = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "Python", level: 82 },
        { name: "Dart", level: 78 },
        { name: "PHP", level: 75 },
        { name: "Prolog", level: 70 },
      ],
    },
    {
      category: "Web & Mobile Frameworks",
      icon: "🌐",
      skills: [
        { name: "Flutter", level: 82 },
        { name: "Django", level: 78 },
        { name: "React.js", level: 75 },
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Oracle Database", level: 70 },
      ],
    },
    {
      category: "Tools & Environments",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Eclipse", level: 85 },
        { name: "Jupyter Notebook", level: 88 },
        { name: "VMware", level: 80 },
      ],
    },
  ];

  // ================= PROJECT & DEVELOPMENT SKILLS =================
  const projectSkills = [
    { name: "Web Application Development", icon: "🌍", level: 85 },
    { name: "Mobile Application Development", icon: "📱", level: 80 },
    { name: "Database Design", icon: "💾", level: 78 },
    { name: "RESTful APIs", icon: "🔌", level: 75 },
    { name: "Object-Oriented Programming", icon: "🧱", level: 88 },
    { name: "Problem Solving", icon: "🧠", level: 90 },
    { name: "Academic Project Development", icon: "🎓", level: 92 },
  ];

  // ================= ADDITIONAL SKILLS =================
  const additionalSkills = [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Deep Learning", icon: "🧠" },
    { name: "TensorFlow", icon: "📊" },
    { name: "Keras", icon: "🧬" },
    { name: "Word", icon: "📄" },
    { name: "Excel", icon: "📊" },
    { name: "PowerPoint", icon: "📽️" },
    { name: "LaTeX", icon: "📐" },
    { name: "Canva", icon: "🎨" },
  ];

  // ================= TECHNOLOGY STACK =================
  const technologies = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Oracle",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
  ];

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.sectionLabel}>My Expertise</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            A clear overview of my technical skills based on academic training
            and practical projects
          </p>
        </div>

        {/* CORE SKILLS */}
        <div className={styles.coreSkillsSection}>
          <h3
            className={`${styles.sectionTitle} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <span className={styles.titleIcon}>🎯</span>
            Core Technical Skills
          </h3>

          <div className={styles.coreSkillsGrid}>
            {coreSkills.map((category, index) => (
              <div
                key={category.category}
                className={`${styles.coreCard} ${
                  isVisible ? styles.visible : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{category.icon}</span>
                  <h4 className={styles.cardTitle}>{category.category}</h4>
                </div>

                <div className={styles.skillsList}>
                  {category.skills.map((skill, i) => (
                    <div key={skill.name} className={styles.skillItem}>
                      <div className={styles.skillHeader}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPercentage}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={styles.skillBar}>
                        <div
                          className={styles.skillProgress}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT SKILLS */}
        <div className={styles.projectSkillsSection}>
          <h3
            className={`${styles.sectionTitle} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <span className={styles.titleIcon}>💼</span>
            Project & Development Skills
          </h3>

          <div className={styles.projectSkillsGrid}>
            {projectSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`${styles.projectCard} ${
                  isVisible ? styles.visible : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={styles.projectCardIcon}>{skill.icon}</div>
                <h4 className={styles.projectCardTitle}>{skill.name}</h4>
                <div className={styles.projectProgress}>
                  <div
                    className={styles.projectBar}
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
                <span className={styles.projectLevel}>{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* ADDITIONAL SKILLS */}
        <div className={styles.additionalSkillsSection}>
          <h3
            className={`${styles.sectionTitle} ${
              isVisible ? styles.visible : ""
            }`}
          >
            <span className={styles.titleIcon}>✨</span>
            Additional Skills & Knowledge
          </h3>

          <div className={styles.additionalSkillsGrid}>
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className={`${styles.additionalCard} ${
                  isVisible ? styles.visible : ""
                }`}
              >
                <span className={styles.additionalIcon}>{skill.icon}</span>
                <span className={styles.additionalName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div
          className={`${styles.techStack} ${isVisible ? styles.visible : ""}`}
        >
          <h3 className={styles.techStackTitle}>
            <span className={styles.titleIcon}>⚙️</span>
            Technology Stack
          </h3>

          <div className={styles.techIcons}>
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className={styles.techIcon}
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
