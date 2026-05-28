import "./App.css";

const NAME = "Adediji Pius Olatunde";
const TITLE = "Certified AI Data Evaluator";
const WHATSAPP = "2347083426038"; // international format, no +, no spaces

const companies = [
  "Appen",
  "Telus International",
  "OneForma",
  "RWS",
  "DataForce",
];

const heroPoints = [
  "5+ Years Experience",
  "High Accuracy & Quality",
  "Global Platforms",
  "Standardized Workflows",
];

const services = [
  {
    icon: "annotation",
    title: "Data Annotation",
    body: "Labeling and structuring training data — text, audio, and search — to high consistency standards.",
  },
  {
    icon: "search",
    title: "Search Relevance Rating",
    body: "Assessing query intent and result relevance using E-E-A-T principles to improve search quality.",
  },
  {
    icon: "audio",
    title: "Audio Annotation",
    body: "Transcribing and evaluating speech clarity, with rigorous attention to annotation guidelines.",
  },
  {
    icon: "compare",
    title: "AI Response Evaluation",
    body: "Head-to-head comparison of model outputs to surface the most accurate, helpful response.",
  },
  {
    icon: "shield",
    title: "Quality Assurance",
    body: "Multi-level QA reviews and compliance checks to ensure accuracy across large workloads.",
  },
  {
    icon: "research",
    title: "Web Research",
    body: "Verifying facts and claims through structured web research to support reliable evaluations.",
  },
];

const stats = [
  { num: "5+", label: "Years in AI\nData Evaluation" },
  { num: "8", label: "US Accounts\nManaged" },
  { num: "5", label: "Global Platforms\nWorked Across" },
  { num: "100%", label: "Quality\nCompliance Focus" },
];

const experience = [
  {
    role: "AI Data Evaluator — Project Diamond",
    org: "RWS",
    period: "2025 – Present",
    points: [
      "Evaluate AI-generated content for accuracy and relevance.",
      "Perform head-to-head response comparisons.",
      "Maintain strict quality compliance standards.",
    ],
  },
  {
    role: "AI Data Evaluator — Sonic",
    org: "Telus International",
    period: "2024",
    points: [
      "Evaluated AI outputs and compared competing responses.",
      "Contributed to measurable model performance improvements.",
    ],
  },
  {
    role: "Audio Annotation Specialist — Cardamom",
    org: "DataForce",
    period: "2024",
    points: [
      "Annotated audio data and evaluated speech clarity.",
      "Maintained consistent annotation standards.",
    ],
  },
  {
    role: "AI Evaluator & Account Manager — Callisto",
    org: "RWS",
    period: "2023 – 2024",
    points: [
      "Managed 8 US accounts.",
      "Evaluated AI responses and monitored quality and productivity.",
    ],
  },
  {
    role: "Search Relevance Evaluator",
    org: "OneForma",
    period: "2023 – 2024",
    points: [
      "Assessed query relevance and user intent.",
      "Reviewed landing pages and flagged low-quality results.",
    ],
  },
  {
    role: "Online Data Analyst",
    org: "Telus International",
    period: "2022 – 2023",
    points: [
      "Analyzed AI-generated data for accuracy.",
      "Evaluated map and search data, providing corrective feedback.",
    ],
  },
  {
    role: "US Rater",
    org: "Telus International",
    period: "2020 – 2022",
    points: [
      "Evaluated search results using E-E-A-T principles.",
      "Conducted web research to verify accuracy and maintain high quality.",
    ],
  },
  {
    role: "AI Data Evaluator — Arrow Project",
    org: "Appen (Crowdgen)",
    period: "2019 – 2020",
    points: [
      "Evaluated AI-generated search results using EWOQ.",
      "Rated content relevance and query intent to improve search performance.",
    ],
  },
];

function Icon({ name }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    annotation: <><path d="M4 4h16v12H7l-3 3V4z" /><path d="M8 9h8M8 12h5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    audio: <><path d="M3 12h2M7 8v8M11 5v14M15 8v8M19 11v2M21 12h0" /></>,
    compare: <><path d="M12 3v18M5 8l-3 4 3 4M19 8l3 4-3 4" /></>,
    shield: <><path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="m9 12 2 2 4-4" /></>,
    research: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" /></>,
  };
  return <svg {...common} aria-hidden="true">{paths[name]}</svg>;
}

export default function App() {
  const waLink = `https://wa.me/${WHATSAPP}`;

  return (
    <div className="page-wrap">
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="brand">
            <img src="/logo.png" alt="Pius City" className="brand-logo" />
          </a>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-logo">
            <img src="/logo-banner.png" alt="Pius City — Freelance Hub" />
          </div>
          <p className="hero-eyebrow">AI DATA · HUMAN INTELLIGENCE · REAL IMPACT</p>
          <h1>
            High-Quality AI Data Evaluation You Can <span className="accent-word">Trust</span>
          </h1>
          <p className="hero-sub">
            {TITLE} with over 5 years assessing AI-generated outputs for accuracy,
            relevance, and user intent — across Appen, Telus International, OneForma,
            RWS, and DataForce.
          </p>
          <div className="cta-row">
            <a href={waLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Get in touch →
            </a>
            <a href="#experience" className="btn btn-outline">View experience</a>
          </div>
          <div className="hero-points">
            {heroPoints.map((p) => (
              <div className="hero-point" key={p}>
                <span className="dot" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="logos">
        <p className="logos-label">Trusted across global evaluation platforms</p>
        <div className="logo-row">
          {companies.map((c) => (
            <span className="company-badge" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section id="services" className="services">
        <p className="kicker">WHAT I DO</p>
        <h2>AI Data Services That Drive Intelligent Results</h2>
        <p className="section-intro">
          From data annotation to search evaluation, I provide end-to-end
          human-in-the-loop services that help AI models learn better and perform smarter.
        </p>
        <div className="service-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="stats-inner">
          {stats.map((s) => (
            <div className="stat" key={s.num}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <p className="kicker">ABOUT</p>
        <h2>A Reliable AI Evaluation Partner You Can Count On</h2>
        <p className="about-text">
          I'm a certified AI Data Evaluator dedicated to delivering reliable, high-quality
          evaluation and annotation work. With experience across leading global platforms,
          I bring rigorous attention to accuracy, strong quality control, and a deep
          understanding of search relevance and user intent.
        </p>
        <ul className="about-list">
          <li>Experienced across multiple global evaluation platforms</li>
          <li>Strong quality control and standardized workflows</li>
          <li>Flexible across annotation, search rating, audio, and QA</li>
        </ul>
      </section>

      <section id="skills" className="skills-section">
        <p className="kicker">CORE SKILLS</p>
        <h2>Specialized Expertise</h2>
        <div className="skill-tags">
          {[
            "AI Evaluation",
            "Search Relevance Rating",
            "Data Annotation",
            "E-E-A-T",
            "Quality Assurance",
            "Web Research",
            "Account Management",
          ].map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <p className="kicker">EXPERIENCE</p>
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="job" key={job.role}>
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="org">{job.org}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Build the Future of AI Together</h2>
        <p className="contact-text">
          Message me directly on WhatsApp — tap below to start a chat.
        </p>
        <a
          href={waLink}
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="whatsapp-icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.003 0h-.006C7.165 0 0 7.167 0 16c0 3.504 1.13 6.75 3.05 9.385L1.05 31.36l6.18-1.975A15.92 15.92 0 0 0 16.003 32C24.84 32 32 24.832 32 16S24.84 0 16.003 0z" fill="#25D366"/>
            <path d="M25.317 22.587c-.387 1.092-1.922 1.998-3.146 2.262-.838.178-1.93.32-5.61-1.205-4.706-1.95-7.737-6.733-7.973-7.043-.226-.31-1.902-2.533-1.902-4.832 0-2.299 1.176-3.428 1.65-3.895.39-.385.855-.56 1.348-.56.16 0 .305.008.435.014.39.017.586.04.844.656.32.77 1.1 2.667 1.193 2.86.094.193.188.45.06.706-.12.262-.226.394-.42.626-.193.232-.376.41-.57.66-.176.218-.376.453-.156.83.22.37.978 1.612 2.1 2.612 1.448 1.29 2.65 1.69 3.067 1.866.31.13.682.1.91-.146.29-.314.642-.84 1-.36.252.337.566.382.79.298.226-.083 1.43-.674 1.676-.795.246-.122.41-.18.567.123.156.302.156 1.747-.23 2.84z" fill="#fff"/>
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {NAME} · Pius City Freelance Hub</span>
      </footer>
    </div>
  );
}
