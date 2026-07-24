import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { aboutPageStyles as s } from "../../../public/dummyStyles";
import Link from "next/link";

const interests = [
  "FULL-STACK DEV",
  "OPEN SOURCE",
  "SAAS",
  "SYSTEM DESIGN",
  "PROBLEM SOLVING",
  "FOOTBALL",
  "LEARNING",
];

const techStack = [
  "Next.js",
  "React",
  "NestJS",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
];

const email = "nazmulhasan677441@gmail.com";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  email
)}`;

export default function About() {
  return (
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.backgroundContainer}>
          <div className={s.backgroundEffect}>
            <BackgroundBeamsWithCollision />
          </div>

          <div className={s.contentWrapper}>
            {/* Hero */}
            <h1 className={s.mainHeading}>MD. Nazmul Hasan</h1>

            <div className={s.interestsContainer}>
              {interests.map((interest, idx) => (
                <span key={interest} className={s.interestItem}>
                  {interest}
                  {idx < interests.length - 1 && (
                    <span className={s.interestSeparator}>.</span>
                  )}
                </span>
              ))}
            </div>

            <div className={s.techStackContainer}>
              {techStack.map((tech) => (
                <span key={tech} className={s.techPill}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className={s.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={s.sectionHeading}>Who I Am</h2>

                <p className={s.paragraph}>
                  Hello! I'm <strong>MD. Nazmul Hasan</strong>, a passionate Full
                  Stack Developer from Bangladesh specializing in React.js,
                  Next.js, NestJS, TypeScript, and modern JavaScript
                  technologies. I enjoy transforming complex business ideas into
                  scalable, secure, and user-friendly web applications with
                  clean architecture and excellent user experiences.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={s.sectionHeading}>What I Do</h2>

                <p className={s.paragraph}>
                  Currently working as a <strong>Full Stack Developer</strong>,
                  building production-ready SaaS platforms, multi-tenant
                  applications, e-commerce systems, and business automation
                  tools. I collaborate directly with clients, gather
                  requirements, design REST APIs, develop responsive frontends,
                  and deploy complete solutions from idea to production.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={s.sectionHeading}>My Journey</h2>

                <p className={s.paragraph}>
                  My development journey began with frontend technologies and
                  gradually expanded into full-stack engineering. Over the past
                  years I've worked on Lawyer Management Systems, Doctor
                  Appointment Platforms, Multi-Tenant SaaS Applications,
                  E-Commerce Platforms, and business dashboards using React,
                  Next.js, NestJS, MongoDB, PostgreSQL, Prisma ORM, and modern
                  development practices. Every project has strengthened my
                  problem-solving skills and software architecture knowledge.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={s.sectionHeading}>Vision</h2>

                <p className={s.paragraph}>
                  My goal is to become a world-class Software Engineer by
                  continuously learning modern technologies, contributing to
                  impactful products, and building software that solves
                  real-world problems. I believe clean code, scalable
                  architecture, and continuous learning are the foundations of
                  long-term success.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={s.sectionHeading}>Beyond Code</h2>

                <p className={s.paragraph}>
                  Beyond programming, I enjoy playing football, exploring new
                  technologies, contributing to personal projects, reading
                  technical articles, and continuously improving my skills. I
                  love turning ideas into real products and challenging myself
                  with new technologies and development approaches.
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className={s.ctaContainer}>
              <Link
                href="/contact"
                className={s.primaryButton}
                aria-label="Get in touch"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.secondaryButton}
                aria-label={`Compose email to ${email}`}
              >
                <svg
                  className={s.emailIcon}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}