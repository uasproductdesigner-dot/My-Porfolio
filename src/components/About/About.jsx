import "./About.css";
import Muzaffar_Ameen_cv from "../../assets/Muzaffar_Ameen_Resume.pdf";

const stats = [
  { value: "1+",   label: "Years Experience" },
  { value: "5+",   label: "Projects Completed" },
  { value: "6+",   label: "Technologies" },
  { value: "3.63", label: "CGPA" },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__bg-orb" />

      <div className="about__inner">
        <div className="about__header">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="about__grid">
          {/* Left: Text */}
          <div className="about__text-col">
            <p className="about__paragraph">
              I'm <strong>Muzaffar Ameen</strong>, an Associate Software Engineer based in Lahore, Pakistan,
              passionate about crafting high-quality digital experiences. With hands-on experience in
              full-stack development, I specialize in building responsive user interfaces and scalable
              backend systems.
            </p>
            <p className="about__paragraph">
              My expertise spans frontend development with <strong>React.js</strong>, backend engineering
              with <strong>Node.js / Express.js</strong>, and database design with <strong>MongoDB</strong>{" "}
              and <strong>MySQL</strong>. I've delivered real-world full-stack applications from requirement
              gathering through to production deployment across fast-paced environments.
            </p>
            <p className="about__paragraph">
              Beyond the MERN stack, I work with <strong>n8n</strong> to build intelligent automation
              workflows and AI integrations. I'm currently open to new opportunities where I can contribute,
              grow, and continue building things that matter.
            </p>

            <div className="about__edu-card">
              <div className="about__edu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <p className="about__edu-degree">Bachelor of Science in Computer Science</p>
                <p className="about__edu-uni">University of Central Punjab (UCP), Lahore &nbsp;·&nbsp; 2021 – 2025</p>
                <p className="about__edu-cgpa">CGPA: 3.63 / 4.0</p>
              </div>
            </div>

            <div className="about__actions">
              <a href={Muzaffar_Ameen_cv} download="Muzaffar_Ameen_Resume.pdf" className="btn-primary">
                <span>Download CV</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
              <a href="https://github.com/muzaffarameen" target="_blank" rel="noreferrer" className="btn-secondary">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>Visit GitHub</span>
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="about__stats-col">
            <div className="about__stats-grid">
              {stats.map((s, i) => (
                <div className="about__stat-card" key={i}>
                  <div className="about__stat-value">{s.value}</div>
                  <div className="about__stat-label">{s.label}</div>
                  <div className="about__stat-glow" />
                </div>
              ))}
            </div>

            <div className="about__availability">
              <span className="availability-dot" />
              <div>
                <p className="availability-title">Open to Opportunities</p>
                <p className="availability-sub">Full-time · Freelance · Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}