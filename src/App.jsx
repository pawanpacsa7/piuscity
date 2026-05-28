import { useState } from "react";
import "./App.css";

const NAME = "Adediji Pius Olatunde";
const TITLE = "Certified AI Data Evaluator";
const EMAIL = "piusadediji@gmail.com";
const PHONE = "+234 708 342 6038";

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

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    // TODO: connect to a form service (Formspree, Web3Forms) or a Cloudflare Function.
    // Example with Formspree:
    // await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

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
        <p className="eyebrow">{TITLE}</p>
        <h1>Evaluating AI for accuracy, relevance, and user intent</h1>
        <p className="sub">
          Over 5 years assessing AI-generated outputs across leading global
          platforms — Appen, Telus International, OneForma, RWS, and DataForce.
          Specializing in search relevance rating, training data annotation, and
          quality assurance.
        </p>
        <div className="cta-row">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#experience" className="btn btn-ghost">View experience</a>
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
        <h2>Get in touch</h2>
        <div className="contact-info">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>{PHONE}</span>
        </div>
        {sent ? (
          <p className="success">
            Thanks — your message was sent. Replace this with real form handling.
          </p>
        ) : (
          <div className="form">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Send message
            </button>
          </div>
        )}
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {NAME}</span>
      </footer>
    </div>
  );
}
