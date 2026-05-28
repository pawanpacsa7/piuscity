import "./App.css";

const NAME = "Adediji Pius Olatunde";
const TITLE = "Certified AI Data Evaluator";
const WHATSAPP = "2347083426038"; // international format, no +, no spaces

// Drop a photo named "profile.jpg" into the public/ folder and it will appear.
// To use a different filename, change the path below.
const PHOTO = "/profile.jpg";

const companies = [
  "Appen",
  "Telus International",
  "OneForma",
  "RWS",
  "DataForce",
];

const skills = [
  "AI Evaluation",
  "Search Relevance Rating",
  "Data Annotation",
  "E-E-A-T",
  "Quality Assurance",
  "Web Research",
  "Account Management",
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

// Initials fallback shown until a real photo is added
const INITIALS = "PA";

export default function App() {
  const waLink = `https://wa.me/${WHATSAPP}`;

  return (
    <div className="page">
      <header className="nav">
        <span className="brand">{NAME}</span>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="avatar">
          <img
            src={PHOTO}
            alt={NAME}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <span className="avatar-fallback">{INITIALS}</span>
        </div>
        <p className="eyebrow">{TITLE}</p>
        <h1>Evaluating AI for accuracy, relevance, and user intent</h1>
        <p className="sub">
          Over 5 years assessing AI-generated outputs across leading global
          platforms. Specializing in search relevance rating, training data
          annotation, and quality assurance.
        </p>
        <div className="cta-row">
          <a href={waLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Get in touch
          </a>
          <a href="#experience" className="btn btn-ghost">View experience</a>
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

      <section id="skills" className="skills-section">
        <h2>Core skills</h2>
        <div className="skill-tags">
          {skills.map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Professional experience</h2>
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
        <h2>Let's work together</h2>
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
        <span>© {new Date().getFullYear()} {NAME}</span>
      </footer>
    </div>
  );
}
