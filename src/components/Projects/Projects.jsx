import { useState, useEffect, useRef } from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Scanova – Medical Scan Website",
      description:
        "A full static medical website focused on presenting and organizing medical scan-related content with a clean and structured UI.",
      image: import.meta.env.BASE_URL + "projects/scanova.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://scanova.vercel.app/MAIN.html",
      demo: null,
      category: "fullstack",
    },
    {
      id: 2,
      title: "Lab 1 – HTML & CSS Fundamentals",
      description:
        "Introductory lab covering HTML structure, media elements, links, lists, and basic CSS styling techniques.",
      image: import.meta.env.BASE_URL + "projects/lab1.png",
      tech: ["HTML", "CSS"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab1",
      demo: null,
      category: "frontend",
    },
    {
      id: 3,
      title: "Lab 2 – Git & GitHub",
      description:
        "focused on Git version control, repository creation, commits, branches, and GitHub workflow.",
      image: import.meta.env.BASE_URL + "projects/lab2.png",
      tech: ["Git", "GitHub"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab2",
      demo: null,
      category: "frontend",
    },
    {
      id: 4,
      title: "Lab 3 – Node.js & NPM",
      description:
        "Backend-oriented lab introducing Node.js, modules, file system operations, and NPM packages.",
      image: import.meta.env.BASE_URL + "projects/lab3.png",
      tech: ["Node.js", "JavaScript", "NPM"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab3",
      demo: null,
      category: "frontend",
    },
    {
      id: 5,
      title: "Lab 4 – Unit Testing with Jest",
      description:
        "JavaScript unit testing lab using Jest to test functions and ensure code reliability.",
      image: import.meta.env.BASE_URL + "projects/lab4.png",
      tech: ["JavaScript", "Jest"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab4",
      demo: null,
      category: "frontend",
    },
    {
      id: 6,
      title: "Lab 5 – React Components",
      description:
        "React fundamentals lab covering components, props, state, events, lists, and forms.",
      image: import.meta.env.BASE_URL + "projects/lab5.png",
      tech: ["React"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab5",
      demo: null,
      category: "frontend",
    },
    {
      id: 7,
      title: "Lab 6 – React & Vite",
      description:
        "React application built with Vite, focusing on clean project structure and reusable components.",
      image: import.meta.env.BASE_URL + "projects/lab6.png",
      tech: ["React", "Vite"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab6",
      demo: null,
      category: "frontend",
    },
    {
      id: 8,
      title: "Lab 7 – Kanban Board",
      description:
        "Interactive Kanban board built with React, featuring task creation and state management.",
      image: import.meta.env.BASE_URL + "projects/lab7.png",
      tech: ["React", "State"],
      github: "https://github.com/haithemrs/caw-labs/tree/main/Lab7",
      demo: null,
      category: "frontend",
    },
    {
      id: 9,
      title: "OuedCars – Car Rental Platform",
      description:
        "A frontend car rental platform with admin and client interfaces in a monorepo structure.",
      image: import.meta.env.BASE_URL + "projects/ouedcars.png",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/haithemrs/ouedcars",
      demo: null,
      category: "frontend",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.sectionLabel}>My Work</span>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Academic labs and web projects developed during my CAW coursework
          </p>
        </div>

        <div className={`${styles.filters} ${isVisible ? styles.visible : ""}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.filterBtn} ${
                activeFilter === category.id ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
