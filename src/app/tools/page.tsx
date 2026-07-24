"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
// Adjust import path based on where you placed dummyStyles.js
import { toolsPageStyles as s } from "../../../public/dummyStyles";

interface Tool {
  name: string;
  category: string;
  icon: string;
  href: string;
}

const skillCategories = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "JavaScript",
        category: "Language",
        icon: "/js.png",
        href: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        category: "Language",
        icon: "/typescript.png",
        href: "https://www.typescriptlang.org",
      }
      
    ],
  },
  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        category: "Markup",
        icon: "/html.png",
        href: "https://developer.mozilla.org/docs/Web/HTML",
      },
      {
        name: "CSS3",
        category: "Styling",
        icon: "/css.png",
        href: "https://developer.mozilla.org/docs/Web/CSS",
      },
      {
        name: "React",
        category: "Frontend",
        icon: "/react.png",
        href: "https://react.dev",
      },
      {
        name: "Next.js",
        category: "Framework",
        icon: "/nextjs.png",
        href: "https://nextjs.org",
      },
      {
        name: "Vue.js",
        category: "Framework",
        icon: "/vuejs.png",
        href: "https://vuejs.org",
      },
      {
        name: "Redux Toolkit",
        category: "State Management",
        icon: "/redux.png",
        href: "https://redux-toolkit.js.org",
      },
      {
        name: "Tailwind CSS",
        category: "CSS Framework",
        icon: "/tailwind.png",
        href: "https://tailwindcss.com",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        category: "Runtime",
        icon: "/nodejs.png",
        href: "https://nodejs.org",
      },
      {
        name: "NestJS",
        category: "Framework",
        icon: "/nestjs.png",
        href: "https://nestjs.com",
      },
    ],
  },
  {
    title: "Database",
    items: [
      {
        name: "MongoDB",
        category: "Database",
        icon: "/mongodb.png",
        href: "https://mongodb.com",
      },
      {
        name: "PostgreSQL",
        category: "Database",
        icon: "/postgresql.png",
        href: "https://postgresql.org",
      },
      {
        name: "Prisma ORM",
        category: "ORM",
        icon: "/prisma.png",
        href: "https://prisma.io",
      },
    ],
  },
  {
    title: "Deployment & Cloud",
    items: [
      {
        name: "Vercel",
        category: "Deployment",
        icon: "/vercel.png",
        href: "https://vercel.com",
      },
      {
        name: "GitHub",
        category: "Version Control",
        icon: "/github.png",
        href: "https://github.com/nazmul910",
      },
    ],
  },
];

const tools = [
  {
    name: "VS Code",
    category: "IDE",
    icon: "/vscode.webp",
    href: "https://code.visualstudio.com",
  },
  {
    name: "Cursor",
    category: "AI IDE",
    icon: "/cursor.webp",
    href: "https://cursor.sh",
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: "/postman.png",
    href: "https://postman.com",
  },
  {
    name: "Notion",
    category: "Documentation",
    icon: "/notion.webp",
    href: "https://notion.so",
  },
  {
    name: "Slack",
    category: "Communication",
    icon: "/slack.webp",
    href: "https://slack.com",
  },
  {
    name: "ChatGPT",
    category: "AI Assistant",
    icon: "/chatgpt.webp",
    href: "https://chat.openai.com",
  },
  {
    name: "Claude",
    category: "AI Assistant",
    icon: "/claude.webp",
    href: "https://claude.ai",
  },
  {
    name: "Gemini",
    category: "AI Assistant",
    icon: "/gemini.webp",
    href: "https://gemini.google.com",
  },
  // {
  //   name: "Perplexity",
  //   category: "Research",
  //   icon: "/perplexity.webp",
  //   href: "https://perplexity.ai",
  // },
  // {
  //   name: "Hugging Face",
  //   category: "AI Platform",
  //   icon: "/huggingface.webp",
  //   href: "https://huggingface.co",
  // },
];

export default function Tools() {
  return (
    <>
      <div className={s.pageContainer}>
        <div className={s.contentContainer}>
          <div className={s.headerContainer}>
            <h1 className={s.headerTitle}>Tech Stack</h1>
            <p className={s.headerSubtitle}>
              Technologies, frameworks, and tools I work with every day.
            </p>
          </div>
          <div>
            {skillCategories.map((section) => (
              <section key={section.title} className="mb-14">
                <h2 className="mb-6 text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <div className={s.toolsGrid}>
                  {section.items.map((tool) => (
                    <CometCard key={tool.name}>
                      <Link
                        href={tool.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={s.toolCardLink}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <div className={s.toolIconContainer}>
                          <Image
                            src={tool.icon}
                            alt={`${tool.name} logo`}
                            width={56}
                            height={56}
                            className={s.toolIcon}
                          />
                        </div>

                        <div className={s.toolTextContainer}>
                          <h3 className={s.toolName}>{tool.name}</h3>
                          <p className={s.toolCategory}>{tool.category}</p>
                        </div>
                      </Link>
                    </CometCard>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <h2 className="mb-6 mt-16 text-2xl font-bold text-white">
            Development Tools
          </h2>
          <div className={s.toolsGrid}>
            {tools.map((tool) => (
              <CometCard key={tool.name}>
                <Link
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.toolCardLink}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className={s.toolIconContainer}>
                    <Image
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      width={56}
                      height={56}
                      className={s.toolIcon}
                    />
                  </div>

                  <div className={s.toolTextContainer}>
                    <h3 className={s.toolName}>{tool.name}</h3>
                    <p className={s.toolCategory}>{tool.category}</p>
                  </div>
                </Link>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
