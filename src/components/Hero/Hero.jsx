import "./Hero.css";
import MuzaffarPic from "../../assets/Muzaffar Pic.png";

export default function Hero() {
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      {/* Background effects */}
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__inner">
        {/* Left: Text Content */}
        <div className="hero__content">
          <div className="hero__title-wrapper">
            <span className="hero__title-dot" />
            <p className="hero__title">
              Full Stack MERN Developer | React.js | Node.js | MongoDB |
              Automation
            </p>
          </div>
          <p className="hero__greeting">
            {/* <span className="hero__greeting-line" /> */}I build fast,
            scalable web applications using React.js, Node.js, MongoDB and
            automation workflows that help businesses grow.
          </p>

          {/* <h1 className="hero__name">
            Muzaffar<br />
            <span className="hero__name--accent">Ameen</span>
          </h1> */}

          <div className="hero__techline">
            {[
              "MERN Stack",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "n8n",
            ].map((tech, i) => (
              <span key={i} className="hero__tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero__cta">
            <button
              className="btn-primary"
              onClick={() => handleScrollTo("projects")}
            >
              <span>View Projects</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              className="btn-secondary"
              onClick={() => handleScrollTo("contact")}
            >
              <span>Let's Connect</span>
            </button>
          </div>

          <div className="hero__links">
            <a
              href="https://github.com/muzaffarameen"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <span className="hero__link-sep" />
            <a
              href="https://www.linkedin.com/in/muzaffar-ameen-0b5484284"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8.5 6.5h-2v7h2v-7zm-1-3.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM17 9.5c-1.4 0-2.1.7-2.4 1.2V9.5h-2v7h2v-3.8c0-1 .4-1.7 1.4-1.7 1 0 1.1.9 1.1 1.8V16.5h2v-4c0-2-1-3-2.1-3z" />
              </svg>
              LinkedIn
            </a>
            <span className="hero__link-sep" />
            <span className="hero__location">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="14"
                height="14"
              >
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lahore, Pakistan
            </span>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="hero__image-wrap">
          <div className="hero__image-ring hero__image-ring--outer" />
          <div className="hero__image-ring hero__image-ring--middle" />
          <div className="hero__image-card">
            <div className="hero__image-inner">
              <img
                src={MuzaffarPic}
                alt="Muzaffar Ameen"
                className="hero__avatar-img"
              />
            </div>
            <div className="hero__image-decoration hero__image-decoration--tl" />
            <div className="hero__image-decoration hero__image-decoration--br" />
          </div>
          <div className="hero__floating-badge hero__floating-badge--1">
            <span className="badge-dot" />
            <span>Available for work</span>
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="12"
              height="12"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <span>1+ Yr Exp</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero__scroll-indicator"
        onClick={() => handleScrollTo("about")}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
