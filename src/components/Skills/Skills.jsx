import "./Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "◈",
    color: "#00d4ff",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6)", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "◉",
    color: "#0088ff",
    skills: ["Node.js", "Express.js", "REST APIs","Postman", "JWT Authentication", "Google OAuth"],
  },
  {
    category: "Database",
    icon: "◎",
    color: "#00b4cc",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Automation & AI",
    icon: "◆",
    color: "#00ccaa",
    skills: ["n8n", "AI Workflow Design", "Python Selenium", "Telegram Bots", "Supabase"],
  },
  {
    category: "Tools & Deployment",
    icon: "◇",
    color: "#4488ff",
    skills: ["Git & GitHub", "VS Code", "Postman", "GitHub Pages"],
  },
  {
    category: "Foundations",
    icon: "◐",
    color: "#00aacc",
    skills: ["C++", "Python", "C#", "OOP", "Data Structures", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__bg-orb" />

      <div className="skills__inner">
        <div className="skills__header">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <p className="skills__subtitle">
            A curated set of technologies I use to design, build, and ship great products.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div className="skills__card" key={i} style={{ "--card-accent": group.color }}>
              <div className="skills__card-header">
                <span className="skills__card-icon" style={{ color: group.color }}>{group.icon}</span>
                <h3 className="skills__card-title">{group.category}</h3>
              </div>
              <div className="skills__tags">
                {group.skills.map((skill, j) => (
                  <span className="skills__tag" key={j}>{skill}</span>
                ))}
              </div>
              <div className="skills__card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}