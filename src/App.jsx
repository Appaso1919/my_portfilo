import { useEffect } from 'react';
import './style.css';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const marqueeItems = [
  'Softech Solutions',
  'HFP Technology',
  'React',
  'Next.js',
  'Python',
  'Machine Learning',
  'Tailwind CSS',
  'MySQL',
  'Oracle Certified',
  'Shivaji University',
  'CGPA 9.24',
];

const experiences = [
  {
    title: 'System Engineer',
    company: 'Softech Solutions & Services',
    place: '📍 Pune',
    date: 'Jul 2025 – Present',
    duties: [
      'Managing system configurations, software installations, and performance monitoring.',
      'Collaborating with development teams to ensure system reliability, scalability, and data security.',
      'Troubleshooting hardware and software issues and implementing preventive maintenance plans.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'HFP Technology Pvt. Ltd.',
    place: '📍 Thane',
    date: 'May 2025 – Oct 2025',
    duties: [
      'Developing responsive UI using React, Next.js, TypeScript, and Tailwind CSS.',
      'Building reusable components to optimize performance and maintainability.',
      'Collaborating with designers and developers for improved user experience.',
    ],
  },
];

const projects = [
  {
    year: '2025',
    name: 'Garment Sales Prediction',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Machine Learning'],
    desc: [
      'Built a predictive model using historical garment sales data.',
      'Implemented Linear Regression, Random Forest, and Gradient Boosting models.',
      'Evaluated performance using MAE, RMSE, and R² metrics.',
      'Visualized trends and predictions using interactive charts.',
    ],
  },
  {
    year: '2024',
    name: 'Online Bookstore Management System',
    stack: ['JSP', 'JDBC', 'MySQL'],
    desc: [
      'Role-based access control for Admin and Customer roles.',
      'Implemented search, sort, and filter features across the catalog.',
      'Designed frontend using JSP with full CRUD operations via JDBC.',
      'Created MySQL database schema for structured data storage.',
    ],
  },
];

const skillSections = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', pct: 80 },
      { name: 'Python', pct: 82 },
      { name: 'JavaScript', pct: 85 },
      { name: 'TypeScript', pct: 70 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    skills: [
      { name: 'React', pct: 88 },
      { name: 'Next.js', pct: 78 },
      { name: 'Tailwind CSS', pct: 90 },
      { name: 'HTML / CSS', pct: 92 },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL / SQL', pct: 80 },
      { name: 'GitHub', pct: 85 },
      { name: 'VS Code', pct: 90 },
      { name: 'IntelliJ IDEA', pct: 75 },
    ],
  },
];

const education = [
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Shivaji University, Kolhapur',
    meta: 'Jun 2023 – Apr 2025 · Kolhapur, India',
    gpa: 'CGPA: 8.06',
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Shri Annashaeb Dange College',
    meta: 'Jun 2020 – May 2023 · Hatakangle, India',
    gpa: 'CGPA: 9.24',
  },
];

const languages = [
  { flag: '🇮🇳', name: 'Marathi', level: 'Native' },
  { flag: '🇮🇳', name: 'Hindi', level: 'Fluent' },
  { flag: '🇬🇧', name: 'English', level: 'Professional' },
];

const certifications = [
  { icon: '☕', name: 'Java Programmer — Fundamentals', issuer: 'Oracle', date: 'Apr 2024' },
  { icon: '📊', name: 'Data Analytics Essentials', issuer: 'Cisco', date: 'Oct 2024' },
  { icon: '🤖', name: 'Generative AI Fundamentals', issuer: 'LinkedIn Learning', date: 'Jun 2024' },
  { icon: '🎤', name: 'International Conference Participant', issuer: 'Recent Trends in CS & IT, Gaganbavda', date: '2024' },
];

const contactCards = [
  { icon: '✉️', label: 'Email', value: 'appaso1919@gmail.com', href: 'mailto:appaso1919@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91-8381031554', href: 'tel:+918381031554' },
  { icon: '📍', label: 'Location', value: 'Maharashtra, India' },
  { icon: '💼', label: 'Availability', value: 'Open to Opportunities' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/Appaso1919', href: 'https://github.com/Appaso1919' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/appaso-avaghadi', href: 'https://linkedin.com/in/appaso-avaghadi' },
];

function App() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const drawer = document.getElementById('nav-drawer');
    const navLinkElements = document.querySelectorAll('.nav-links a, #nav-drawer a');
    const sections = document.querySelectorAll('section[id], div[id="hero"]');

    const handleScroll = () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }
    };

    const handleToggle = () => {
      toggle?.classList.toggle('open');
      drawer?.classList.toggle('open');
    };

    const closeDrawer = () => {
      toggle?.classList.remove('open');
      drawer?.classList.remove('open');
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinkElements.forEach((link) => {
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const bars = document.querySelectorAll('.skill-bar');
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const target = bar.getAttribute('data-width');
            setTimeout(() => {
              bar.style.width = `${target}%`;
            }, 200);
            barObserver.unobserve(bar);
          }
        });
      },
      { threshold: 0.2 }
    );

    navLinkElements.forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });

    sections.forEach((section) => sectionObserver.observe(section));
    revealEls.forEach((el) => revealObserver.observe(el));
    bars.forEach((bar) => barObserver.observe(bar));

    window.addEventListener('scroll', handleScroll);
    toggle?.addEventListener('click', handleToggle);

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let ringId;

    const handleMouseMove = (event) => {
      mx = event.clientX;
      my = event.clientY;
      if (dot) {
        dot.style.left = `${mx}px`;
        dot.style.top = `${my}px`;
      }
    };

    const animateRing = () => {
      if (ring) {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = `${rx}px`;
        ring.style.top = `${ry}px`;
      }
      ringId = requestAnimationFrame(animateRing);
    };

    const handleHoverEnter = () => {
      if (ring) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(34,211,238,.6)';
      }
    };

    const handleHoverLeave = () => {
      if (ring) {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(34,211,238,.45)';
      }
    };

    const hoverTargets = document.querySelectorAll('a, button, .exp-card, .project-card, .cert-card');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverEnter);
      el.addEventListener('mouseleave', handleHoverLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);
    animateRing();

    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas?.getContext?.('2d');
    let W = window.innerWidth;
    let H = window.innerHeight;
    let particleId;
    const particles = [];

    const resizeCanvas = () => {
      if (canvas) {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
      }
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${this.alpha})`;
        ctx.fill();
      }
    }

    if (canvas && ctx) {
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      for (let i = 0; i < 90; i += 1) {
        particles.push(new Particle());
      }
      const drawParticles = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, W, H);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
        for (let i = 0; i < particles.length; i += 1) {
          for (let j = i + 1; j < particles.length; j += 1) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
        particleId = requestAnimationFrame(drawParticles);
      };
      drawParticles();
    }

    const hideLoader = () => {
      const loader = document.getElementById('loader');
      loader?.classList.add('hidden');
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      toggle?.removeEventListener('click', handleToggle);
      navLinkElements.forEach((link) => {
        link.removeEventListener('click', closeDrawer);
      });
      revealObserver.disconnect();
      sectionObserver.disconnect();
      barObserver.disconnect();
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverEnter);
        el.removeEventListener('mouseleave', handleHoverLeave);
      });
      document.removeEventListener('mousemove', handleMouseMove);
      if (ringId) cancelAnimationFrame(ringId);
      if (particleId) cancelAnimationFrame(particleId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('load', hideLoader);
    };
  }, []);

  return (
    <>
      <div id="loader">
        <div className="loader-name">Appaso Avaghadi</div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" />
        </div>
        <div className="loader-label">Initializing Portfolio…</div>
      </div>

      <nav id="navbar">
        <a href="#hero" className="nav-logo">AA</a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button id="nav-toggle" aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="nav-drawer">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <canvas id="particle-canvas" />

      <main>
        <div id="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-tag">Software Developer</div>
              <h1 className="hero-name">Appaso<br />Avaghadi</h1>
              <p className="hero-role">Building systems that scale, crafting interfaces that matter.</p>
              <p className="hero-obj">
                M.Sc. Computer Science graduate seeking an IT role to apply coding skills and problem-solving abilities in real-world projects — contributing to growth while continuously learning.
              </p>
              <div className="hero-cta">
                <a href="mailto:appaso1919@gmail.com" className="btn-primary">Get in Touch</a>
                <a href="https://github.com/Appaso1919" target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
                <a href="https://linkedin.com/in/appaso-avaghadi" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="card-avatar">AA</div>
                <div className="card-chip">Available for Opportunities</div>
                <div className="card-label">Appaso Avaghadi</div>
                <div className="card-badge">
                  <span className="badge active">React</span>
                  <span className="badge active">Python</span>
                  <span className="badge">Java</span>
                  <span className="badge">Next.js</span>
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-hint">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Scroll
          </div>
        </div>

        <div className="marquee-section">
          <div className="marquee-track">
            {marqueeItems.concat(marqueeItems).map((item, index) => (
              <div key={`${item}-${index}`} className="marquee-item">
                <span>{item}</span>
                <div className="marquee-dot" />
              </div>
            ))}
          </div>
        </div>

        <section id="experience">
          <div className="reveal fade-up">
            <div className="section-label">01 / Experience</div>
            <h2 className="section-title">Professional <span>Journey</span></h2>
          </div>
          <div className="exp-grid">
            {experiences.map((experience) => (
              <div key={experience.title} className={`exp-card reveal ${experience.title.includes('Frontend') ? 'slide-right' : 'slide-left'}`}>
                <div>
                  <div className="exp-title">{experience.title}</div>
                  <div className="exp-company">{experience.company}</div>
                  <div className="exp-place">{experience.place}</div>
                </div>
                <div className="exp-date">{experience.date}</div>
                <ul className="exp-duties">
                  {experience.duties.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="reveal fade-up">
            <div className="section-label">02 / Projects</div>
            <h2 className="section-title">Personal <span>Projects</span></h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.name} className={`project-card reveal ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
                <div className="project-year">{project.year}</div>
                <div className="project-name">{project.name}</div>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>
                <ul className="project-desc">
                  {project.desc.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="reveal fade-up">
            <div className="section-label">03 / Skills</div>
            <h2 className="section-title">Technical <span>Skills</span></h2>
          </div>
          <div className="skills-wrapper">
            {skillSections.map((section) => (
              <div key={section.title} className={`skill-group reveal ${section.title === 'Frameworks & Tools' ? 'fade-up' : section.title === 'Databases & Tools' ? 'slide-right' : 'slide-left'}`}>
                <h3>{section.title}</h3>
                {section.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span className="skill-pct">{skill.pct}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-bar" data-width={skill.pct} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="reveal fade-up">
            <div className="section-label">04 / Education</div>
            <h2 className="section-title">Education & <span>Languages</span></h2>
          </div>
          <div className="edu-grid">
            {education.map((item) => (
              <div key={item.degree} className={`edu-card reveal ${item.degree.includes('M.Sc.') ? 'slide-left' : 'slide-right'}`}>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-institution">{item.institution}</div>
                <div className="edu-meta">{item.meta}</div>
                <div className="edu-gpa">
                  <div className="edu-gpa-dot" />
                  {item.gpa}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal fade-up">
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '.85rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '20px' }}>
              Language Proficiency
            </h3>
            <div className="lang-badges">
              {languages.map((language) => (
                <div key={language.name} className="lang-badge">
                  <span className="lang-flag">{language.flag}</span>
                  <div>
                    <div className="lang-name">{language.name}</div>
                    <div className="lang-level">{language.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications">
          <div className="reveal fade-up">
            <div className="section-label">05 / Certifications</div>
            <h2 className="section-title">Certificates & <span>Achievements</span></h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="cert-card reveal fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="cert-icon">{cert.icon}</div>
                <div>
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-date">{cert.date}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ maxWidth: '100%', paddingLeft: 0, paddingRight: 0 }}>
          <div className="contact-inner">
            <div>
              <div className="reveal fade-up">
                <div className="section-label">06 / Contact</div>
                <h2 className="section-title">Let's <span>Connect</span></h2>
              </div>
              <div className="contact-cards">
                {contactCards.map((card, index) => {
                  const content = (
                    <>
                      <div className="contact-icon">{card.icon}</div>
                      <div>
                        <div className="contact-label">{card.label}</div>
                        <div className="contact-value" style={card.label === 'Availability' ? { color: 'var(--accent2)' } : undefined}>
                          {card.value}
                        </div>
                      </div>
                    </>
                  );

                  if (card.href) {
                    return (
                      <a key={card.label} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-card reveal slide-left" style={{ transitionDelay: `${index * 0.1}s` }}>
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={card.label} className="contact-card reveal slide-left" style={{ transitionDelay: `${index * 0.1}s` }}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="avatar-ripple-wrap reveal fade-up">
              <div className="ripple" />
              <div className="ripple" />
              <div className="ripple" />
              <div className="avatar-circle">AA</div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Crafted with precision — <span>Appaso Avaghadi</span> © 2025
        </p>
      </footer>
    </>
  );
}

export default App;
