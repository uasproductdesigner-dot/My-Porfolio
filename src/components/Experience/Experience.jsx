import "./Experience.css";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "BerryBoost",
    location: "Lahore",
    period: "Apr 2026 – Present",
    current: true,
    points: [
      "Developing full-stack web applications using MERN stack and TypeScript.",
      "Building responsive frontend interfaces with React.js.",
      "Designing REST APIs using Node.js and Express.js.",
      "Collaborating with team members to deliver secure web solutions.",
      "Writing clean, maintainable code with best practices.",
      "Using GitHub and Postman for version control and API testing.",
    ],
    tech: ["MERN Stack", "TypeScript", "React.js", "Node.js", "GitHub", "Postman"],
  },
  {
    role: "MERN Stack Developer",
    company: "ThriveGrit Solutions",
    location: "Lahore",
    period: "Dec 2025 – Mar 2026",
    current: false,
    points: [
      "Delivered 3 full-stack MERN applications from requirement gathering through production deployment.",
      "Built responsive frontends using React.js and scalable REST APIs with Node.js and Express.js.",
      "Managed MongoDB databases and collaborated on clean code, testing, and timely releases.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
  },
  {
    role: "MERN Stack Developer",
    company: "Aspire Analytics",
    location: "Lahore",
    period: "Sep 2025 – Nov 2025",
    current: false,
    points: [
      "Worked on full-stack web applications using the MERN stack.",
      "Built dynamic, responsive frontend interfaces using React.js.",
      "Collaborated with teams to design, develop, test, and deploy features.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    role: "Full Stack Developer — ExpenseTracker",
    company: "Project Based",
    location: "Lahore",
    period: "2026",
    current: false,
    points: [
      "Built a full-stack expense splitting app using MERN Stack with JWT auth and Google OAuth.",
      "Implemented group management, expense splitting, balance tracking, and settlements.",
      "Developed an Admin Panel with role-based access.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Google OAuth"],
  },
  {
    role: "Full Stack Developer — CareerQuest FYP",
    company: "University Project",
    location: "Lahore",
    period: "Jan 2025 – Jul 2025",
    current: false,
    points: [
      "Developed a career counseling platform recommending jobs based on profiles and skills.",
      "Implemented a personality module for IT career suggestions.",
      "Built responsive UI and collaborated using GitHub.",
    ],
    tech: ["React.js", "MongoDB", "Node.js", "Express.js", "GitHub"],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="experience__inner">
        <div className="experience__header">
          <p className="section-label">Where I've Worked</p>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline">
          <div className="timeline__line" />

          {experiences.map((exp, i) => (
            <div className="timeline__item" key={i}>
              <div className="timeline__dot-wrap">
                <div className={`timeline__dot${exp.current ? " current" : ""}`}>
                  {exp.current && <div className="timeline__dot-pulse" />}
                </div>
              </div>

              <div className="timeline__card">
                <div className="timeline__card-top">
                  <div>
                    <h3 className="timeline__role">{exp.role}</h3>
                    <p className="timeline__company">
                      {exp.company}
                      <span className="timeline__location"> · {exp.location}</span>
                    </p>
                  </div>

                  <div
                    className={`timeline__period${
                      exp.current ? " current-badge" : ""
                    }`}
                  >
                    {exp.current && <span className="period-dot" />}
                    {exp.period}
                  </div>
                </div>

                <ul className="timeline__points">
                  {exp.points.map((point, j) => (
                    <li key={j}>
                      <span className="point-arrow">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="timeline__tech">
                  {exp.tech.map((t, j) => (
                    <span className="timeline__tech-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="timeline__card-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}