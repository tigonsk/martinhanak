import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "../public/assets/css/style.scss";

function App() {
  const texts = ["Hi!,", "I am Martin Hanák,", "Web developer."];

  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    const currentFullText = texts[currentTextIndex];

    if (currentCharIndex < currentFullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + currentFullText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + "<br>");
        setCurrentTextIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, currentCharIndex]);
  //form handling
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_8kksrcn", "template_lv61f7k", form.current, {
          publicKey: "F5C7U01qE60SlfeqA",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="x" id="x" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>

            <ul className="menu-items">
              <li>
                <Link to="about" smooth={true} duration={500} offset={-70}>
                  <i className="fa fa-solid fa-user menuItems"></i>About
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500} offset={-70}>
                  <i className="fa fa-solid fa-graduation-cap"></i>Education
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-70}>
                  <i className="fa fa-solid fa-code bold"></i>Skills
                </Link>
              </li>
              <li>
                <Link to="work" smooth={true} duration={500} offset={-70}>
                  <i className="fa fa-solid fa-heart"></i>Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-70}>
                  <i className="fa fa-solid fa-phone"></i>Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="wrapper">
        <section id="introduction" className="section">
          <h1
            id="intro-text"
            dangerouslySetInnerHTML={{ __html: typedText }}
          ></h1>
          <div id="img-of-me-wrapper">
            <img id="img-of-me" src="../assets/img/me.png" alt="martin" />
          </div>
        </section>

        <section id="about" className="section">
          <div id="right-about">
            <h1 id="about-title">About me</h1>
            <p id="text-about">
              I’m an IT student dedicated to building user-friendly websites and
              applications. I’m passionate about creating meaningful projects
              that address real-world problems and improve the user experience.
              I enjoy continuously learning and exploring new technologies.
              Collaborating on projects with others also excites me, as I
              believe teamwork fosters innovation and growth. Beyond
              development, I’m deeply interested in fitness, martial arts, and
              exploring new places. I believe that maintaining a healthy
              lifestyle helps me stay focused and energized, both in my personal
              life and in my work. Traveling and experiencing new cultures
              allows me to broaden my perspectives and find inspiration for new
              ideas.
            </p>
          </div>
          <div id="img-about-wrapper">
            <img id="img-about" src="../assets/img/coding.svg" alt="coding" />
          </div>
        </section>

        <section id="education" className="section">
          <h1 id="education-title">Education</h1>
          <div className="education-wrapper">
            <div className="school-info">
              <a className="link-to-school" href="https://www.spse-po.sk/">
                <img
                  className="institution-img"
                  src="../assets/img/spsepo.png"
                  alt="vut fit"
                />
              </a>
              <div className="left-education">
                <h2 className="institution-name">SPŠE PO</h2>
                <h3 className="field-of-study">
                  Information and Network Technologies
                </h3>
              </div>
              <h3 className="year-of-study">2019 - 2023</h3>
            </div>
            <div className="school-info">
              <a className="link-to-school" href="https://www.fit.vut.cz/.en">
                <img
                  className="institution-img"
                  src="../assets/img/vutfit.png"
                  alt="spse po"
                />
              </a>
              <div className="left-education">
                <h2 className="institution-name">
                  Brno university of technology
                </h2>
                <h3 className="field-of-study">Bachelor of IT</h3>
              </div>
              <h3 className="year-of-study">2023 - now</h3>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h1 id="skills-title">Skills</h1>
          <div id="skills-wrapper">
            <div className="skills-images">
              <h2 className="skills-header-title">Languages I speak:</h2>
              <div className="skill-item">
                <p className="language-name">Python</p>
                <img
                  className="skill-img"
                  src="../assets/img/python.svg"
                  alt="python"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">Java</p>
                <img
                  className="skill-img"
                  src="../assets/img/java.svg"
                  alt="java"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">JavaScript</p>
                <img
                  className="skill-img"
                  src="../assets/img/js.svg"
                  alt="js"
                />
              </div>

              <div className="skill-item">
                <p className="language-name">Dart</p>
                <img
                  className="skill-img-special"
                  src="../assets/img/dart.svg"
                  alt="dart"
                />
              </div>
            </div>

            <div className="skills-images">
              <h2 className="skills-header-title">I also know:</h2>
              <div className="skill-item">
                <p className="language-name">Html</p>
                <img
                  className="skill-img"
                  src="../assets/img/html5.svg"
                  alt="html"
                />
              </div>
              <div className="skill-item">
                <p className="language-name">Css</p>
                <img
                  className="skill-img"
                  src="../assets/img/css3.svg"
                  alt="css"
                />
              </div>

              <div className="skill-item">
                <p className="language-name">Sql</p>
                <img
                  className="skill-img"
                  src="../assets/img/sql.svg"
                  alt="sql"
                />
              </div>
            </div>
          </div>
          <img id="image-coding" src="../assets/img/coding2.svg" alt="coding" />
        </section>

        <section id="work" className="section">
          <h1 id="work-title">Projects</h1>
          <p id="work-text">Here are some of my projects.</p>
          <div className="work-projects">
            <a
              className="work-project-link"
              href="https://github.com/tigonsk/DominusSilvestris/"
            >
              <div className="work-project-item">
                <div className="image-container">
                  <img
                    className="work-project-item-img"
                    src="../assets/img/project-ds.png"
                    alt="nature"
                  />
                </div>
                <div className="content-project-item">
                  <h3>Dominus Silvestris</h3>
                  <p>
                    A custom e-commerce website designed to represent my
                    father's business and sell his nature-based products from
                    the forest. The platform will focus on merchandising
                    mushrooms, small trees, and other forest-sourced items
                    through an easy-to-navigate online store.
                  </p>
                </div>
              </div>
            </a>
            <a
              className="work-project-link"
              href="https://github.com/tigonsk/libraryapp/tree/master"
            >
              <div className="work-project-item">
                <div className="image-container">
                  <img
                    className="work-project-item-img"
                    src="../assets/img/project-library.png"
                    alt="library app"
                  />
                </div>
                <div className="content-project-item">
                  <h3>Library App</h3>
                  <p>
                    Mobile application for managing and borrowing books from a
                    library, with user authentication and search features.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <h1 id="contact-title">Contact</h1>

          <form className="form" ref={form} onSubmit={sendEmail}>
            <input
              type="name"
              id="form-name"
              name="user_name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              id="form-email"
              placeholder="Your E-mail"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              id="form-message"
              name="message"
              required
            />
            <div id="button-wrapper">
              <input type="submit" id="form-submit" value="Send" />
            </div>
          </form>
          <img id="img-contact" src="../assets/img/contact.svg" alt="contact" />
        </section>
      </div>
    </>
  );
}

export default App;
