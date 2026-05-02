import React from "react";

const projects = [
  {
    title: "AI Threat Detection",
    desc: "Detects network attacks using AI",
    link: "#",
  },
  {
    title: "Code Analyzer",
    desc: "Analyzes code vulnerabilities",
    link: "#",
  },
  {
    title: "Cybersecurity Portal",
    desc: "Security awareness platform",
    link: "#",
  },
  {
    title: "AI Chatbot",
    desc: "NLP-based chatbot system",
    link: "https://github.com/YOUR_USERNAME/ai-chatbot",
  },
  {
    title: "Dashboard System",
    desc: "React analytics dashboard",
    link: "https://github.com/YOUR_USERNAME/dashboard",
  },
];

const safeLink = {
  target: "_blank",
  rel: "noopener noreferrer",
};

function App() {
  return (
    <div style={styles.container}>
      {/* HERO */}
      <header style={styles.hero}>
        <h1 style={styles.name}>Tausif Mahamud Ruhan</h1>
        <p style={styles.role}>
          CSE Student | AI | Cybersecurity | Web Developer
        </p>

        <div style={styles.buttons}>
          <a
            href="https://github.com/YOUR_USERNAME"
            {...safeLink}
            style={styles.btn}
          >
            GitHub
          </a>

          <a href="mailto:tausifmruhan@gmail.com" style={styles.btnOutline}>
            Contact
          </a>
        </div>
      </header>

      {/* PROJECTS */}
      <section>
        <h2 style={styles.sectionTitle}>🚀 Projects</h2>

        <div style={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} style={styles.card}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <a href={p.link} {...safeLink} style={styles.button}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <h2 style={styles.sectionTitle}>👨‍💻 About Me</h2>
        <p style={styles.about}>
          Passionate Computer Science student focused on Artificial Intelligence,
          Cybersecurity, and modern web technologies. I build secure and scalable systems.
        </p>
      </section>

      {/* CONTACT */}
      <footer style={styles.footer}>
        📫 Email: tausifmruhan@gmail.com
      </footer>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f172a, #020617)",
    color: "white",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "system-ui",
  },

  hero: {
    textAlign: "center",
    marginBottom: "60px",
  },

  name: {
    fontSize: "44px",
    color: "#38bdf8",
  },

  role: {
    opacity: 0.8,
    marginBottom: "20px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  btn: {
    background: "#38bdf8",
    color: "#000",
    padding: "10px 18px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  btnOutline: {
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    padding: "10px 18px",
    borderRadius: "8px",
    textDecoration: "none",
  },

  sectionTitle: {
    marginTop: "50px",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "18px",
    borderRadius: "12px",
    transition: "0.3s",
  },

  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 14px",
    background: "#38bdf8",
    color: "#000",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  about: {
    maxWidth: "600px",
    opacity: 0.85,
  },

  footer: {
    marginTop: "60px",
    textAlign: "center",
    opacity: 0.7,
  },
};

export default App;
