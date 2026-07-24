import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { aboutPageStyles as s } from "../../../public/dummyStyles";
import Link from "next/link";

const interests = [
  "FULL-STACK DEV",
  "AI ENGINEER",
  "LLMS",
  "TRAVEL",
  "MUSIC",
  "F1",
  "READING",
];

const techStack = [
  "React",
  "LLM",
  "Rails",
  "Next.js",
  "TypeScript",
  "Postgres",
  "Redis",
];

const email = "nazmulhasan677441@gmail.com";

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

export default function About() {
  return (
    <>
      <div className={s.pageContainer}>
        <div className={s.contentContainer}>
          <div className={s.backgroundContainer}>
            <div className={s.backgroundEffect}>
              <BackgroundBeamsWithCollision />
            </div>
            <div className={s.contentWrapper}>
                <h1 className={s.mainHeading}>Nazmul</h1>
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
            <div className={s.sectionsContainer}>
              {/* Who I Am */}
              <section>
                <h2 className={s.sectionHeading}>Who I Am</h2>
                <p className={s.paragraph}>
                  Hello! I&apos;m Virat, a Bengaluru-based engineer passionate
                  about building tools that simplify people&apos;s lives.
                  I&apos;ve been coding since 2018, writing about AI, LLMs,
                  frontend, backend, Rails and databases.
                </p>
              </section>

              {/* What I Do */}
              <section>
                <h2 className={s.sectionHeading}>What I Do</h2>
                <p className={s.paragraph}>
                  Currently a Founding Engineer at{" "}
                  <a
                    href="https://hexagondigitalservices.com"
                    className={s.contentLink}
                  >
                    Hexagon Digital Services
                  </a>
                  , building workflow automation for insurance brokers. I focus
                  on building practical, user-facing products - less demo
                  energy, more things people actually use daily.
                </p>
              </section>

              {/* My Journey */}
              <section>
                <h2 className={s.sectionHeading}>My Journey</h2>
                <p className={s.paragraph}>
                  Co-founder of Hexagon Digital Services, Engagebud and
                  Influencerbit — led product development and design across
                  multiple startups. Recently shipped AI Invoive Generator (100+
                  daily users), an WEB AI TOOL, and several micro-builds,
                  keeping the shipping momentum going.
                </p>
              </section>

              {/* Vision */}
              <section>
                <h2 className={s.sectionHeading}>Vision</h2>
                <p className={s.paragraph}>
                  LLMs and AI will automate the mundane and reshape how we work.
                  I strive to stay at the forefront of this transformation.
                </p>
              </section>

              {/* Beyond Code */}
              <section>
                <h2 className={s.sectionHeading}>Beyond Code</h2>
                <p className={s.paragraph}>
                  Love techno & house music, follow F1 (Max), play chess, and
                  read regularly. Travelled recently to Bali, and a month in
                  Thailand/Vietnam in 2025.
                </p>
              </section>
            </div>
            <div className={s.ctaContainer}>
              <Link
                href="/contact"
                className={s.primaryButton}
                aria-label="Get in touch — open contact page"
              >
                Get in Touch
              </Link>

              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.secondaryButton}
                aria-label={`Compose email to ${email} in Gmail`}
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
    </>
  );
}
