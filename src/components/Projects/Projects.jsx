import "./Projects.css";
import expenseTracker from "../../assets/expenseTracker.png";
import portfolio  from "../../assets/portfolio.png";
import thriveGit  from "../../assets/thriveGrit.png";


// Project preview images (using placeholder gradients as img src fallbacks)
const projects = [
  {
    title: "Full-Stack Expense Tracker App | MERN | JWT Auth | Google OAuth | Admin Dashboard",
    subtitle: "MERN | JWT Auth | Google OAuth | Admin Dashboard",
    type: "MERN Stack",
    year: "2026",
    description:
      "Built a full-stack expense splitting app using MERN Stack with JWT auth and Google OAuth. Implemented group management, expense splitting, balance tracking, and payment settlement flow. Developed an Admin Panel with role-based access to manage all users, groups, and expenses.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Google OAuth", "REST API"],
    github: "https://github.com/Muzaffar-Ameen/expense-tracker",
    live: "https://expense-tracker-mernx.netlify.app/",
    featured: true,
    image: expenseTracker,
    gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  },
  {
    title: "Modern Business Website | React.js | High-Converting UI/UX | Responsive Design",
    subtitle: "Strategy-first Web Design & Branding",
    type: "MERN Stack",
    year: "2026",
    description:
      "Built and refined a modern, high-converting marketing website for Thrive Grit — a web studio focused on strategy-first web design, branding, development, and SEO. Includes polished animated hero section, service highlights, and a strong contact CTA flow.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "Responsive Design", "UI/UX", "Animation"],
    github: "https://github.com/Muzaffar-Ameen/THRIVE-GRIT",
    live: "https://thrivegrit.netlify.app/",
    featured: true,
    image: thriveGit,
    gradient: "linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)",
  },
  {
    title: "AI-Based Career Recommendation Web App | MERN Stack | User Profiling System",
    subtitle: "Final Year Project",
    type: "Final Year Project",
    year: "Jan 2025 – Jul 2025",
    description:
      "Developed a career counseling platform that recommends job opportunities based on user profiles and skill assessments. Implemented a personality module using predefined logic to suggest jobs relevant to IT interests and skills.",
    tech: ["React.js", "MongoDB", "Node.js", "Express.js", "GitHub"],
    github: "https://github.com/Muzaffar-Ameen/CareerQuest",
    live: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
    gradient: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)",
  },
  {
    title: "Automation Workflows with n8n | Telegram Bot | API Integration | AI Automation",
    subtitle: "Intelligent Automation at Aspire Analytics",
    type: "Automation & AI",
    year: "2026",
    description:
      "Built intelligent automation workflows using n8n including a Telegram inventory bot with Supabase, AI image/video generation, CRUD operations, email notifications, and third-party API integrations.",
    tech: ["n8n", "Supabase", "Telegram Bot API", "AI Workflows", "REST API", "Email Automation"],
    github: null,
    live: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    gradient: "linear-gradient(135deg, #0b0c10, #1f2833, #0d7377)",
  },
  {
    title: "Automated UI Testing with Selenium | Python | End-to-End Web Testing",
    subtitle: "QA & UI Test Automation",
    type: "QA & Testing",
    year: "2026",
    description:
      "Automated UI testing for Consult My Doctors (CMD) covering login, signup, pharmacy, and medicine ordering flows with assertions and issue detection. Developed at Aspire Analytics, Lahore.",
    tech: ["Python", "Selenium", "UI Testing", "Test Automation", "Assertions"],
    github: null,
    live: null,
    featured: false,
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&q=80",
    gradient: "linear-gradient(135deg, #0a0a0a, #1a1a2e, #00457c)",
  },
  {
    title: "Developer Portfolio Website | React.js | Modern UI | Fully Responsive Design",
    subtitle: "Self Project — MERN Stack",
    type: "Self Project",
    year: "2026",
    description:
      "Fully responsive personal portfolio built with the MERN stack to showcase projects, skills, and experience. Features modern dark UI, smooth animations, floating badges, dynamic sections, and a downloadable CV.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3", "Netlify"],
    github: "https://github.com/Muzaffar-Ameen/Portfolio-Website",
    live: "https://muzaffar-ameen-portfolio.netlify.app/",
    featured: false,
    image: portfolio,
    gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
  },
];

const typeColors = {
  "MERN Stack":         "#00d4ff",
  "Final Year Project": "#0088ff",
  "Automation & AI":    "#00ccaa",
  "QA & Testing":       "#00b4cc",
  "Self Project":       "#00ccaa",
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects__bg-orb" />
      <div className="projects__inner">
        <div className="projects__header">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="projects__subtitle">
            A selection of real-world applications I've designed and developed end-to-end.
          </p>
        </div>

        {/* Timeline line */}
        <div className="projects__timeline">
          <div className="projects__timeline-line" />

          {projects.map((p, i) => (
            <div className="projects__timeline-item" key={i}>
              {/* Timeline dot */}
              <div className={`projects__dot${p.featured ? " projects__dot--featured" : ""}`}>
                <div className="projects__dot-inner" />
              </div>

              {/* Card */}
              <div className={`project-card${p.featured ? " featured" : ""}`}>

                {/* LEFT: Content */}
                <div className="project-card__content">
                  <div className="project-card__top">
                    <span
                      className="project-card__type"
                      style={{ "--type-color": typeColors[p.type] || "var(--accent-cyan)" }}
                    >
                      {p.type}
                    </span>
                    {p.featured ? (
                      <div className="project-card__featured-label">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        Featured
                      </div>
                    ) : (
                      <span />
                    )}
                  </div>

                  <h3 className="project-card__title">{p.title}</h3>
                  {p.subtitle && (
                    <p className="project-card__subtitle">{p.subtitle}</p>
                  )}
                  <p className="project-card__desc">{p.description}</p>

                  <div className="project-card__tech">
                    {p.tech.map((t, j) => (
                      <span className="project-card__tech-tag" key={j}>{t}</span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--ghost">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
                        </svg>
                        GitHub
                      </a>
                    ) : (
                      <span className="project-card__btn project-card__btn--disabled">No Repo</span>
                    )}

                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--primary">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    ) : (
                      <span className="project-card__btn project-card__btn--disabled">Private</span>
                    )}
                  </div>
                </div>

                {/* RIGHT: Image */}
                <div className="project-card__image-wrap">
                  <div className="project-card__image-inner" style={{ background: p.gradient }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-card__image"
                      loading="lazy"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                    <div className="project-card__image-overlay" />
                  </div>
                </div>

                <div className="project-card__glow" />
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <a href="https://github.com/Muzaffar-Ameen" target="_blank" rel="noreferrer" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}