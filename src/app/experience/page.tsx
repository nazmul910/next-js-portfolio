"use client";

import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";

import { timelineStyles as s } from "../../../public/dummyStyles";
import { Timeline } from "@/components/ui/timeline";

export default function TimeLineDemo() {
  const data = [
    {
      title: "2020 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Rocket className={s.iconBlue} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Founding Engineer - Hexagon Digital Sercices
              </h3>
              <p className={s.contentSubtitle}>
                Buildin Copilot for Insurance Industry
              </p>
              <p className={s.contentSubtitle}>Seriec A startup - Remote</p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Leading UI/UX for Copilot to automate insurance workflow
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Build kay Admin App, Client App and Demo Instance
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Expreimentitng with emerging AI models and UX paradigms
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React JS</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Next Js</span>
            <span className={s.techBadge}>Javascript</span>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerPurple}>
              <Code2 className={s.iconPurple} />
            </div>
            <div>
              <h3 className={s.contentTitle}>
                Co-Founder / CTO · Hexagon Digital Services
              </h3>
              <p className={s.contentSubtitle}>
                Designed and developed LLMOps Platform
              </p>
              <p className={s.contentSubtitle}>
                Pre-Seed Startup · 6 Team Members
              </p>
            </div>
          </div>
          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Leading UI/UX for Copilot to automate insurance workflow
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Build kay Admin App, Client App and Demo Instance
            </li>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Expreimentitng with emerging AI models and UX paradigms
            </li>
          </ul>
          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React JS</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>Tailwind</span>
            <span className={s.techBadge}>Next Js</span>
            <span className={s.techBadge}>Javascript</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={s.container}>
        <div className={s.innerContainer}>
          <div className="mb-8">
            <div className={s.timelineBadge}>
              <span className={s.timelineBadge}>Career Timeliner</span>
            </div>
            <h1 className={s.mainTitle}>Changelog from my journey</h1>
            <p className={s.mainParagraph}>
              I&apos;s a timeline of my journey across multiple startup and
              projects
            </p>
            <div className={s.legendContainer}>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-blue-500`}></div>
                <span className={s.legendText}>Current Role</span>
              </div>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-purple-500`}></div>
                <span className={s.legendText}>Ai Startup</span>
              </div>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-green-500`}></div>
                <span className={s.legendText}>Growth Startup</span>
              </div>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-amber-500`}></div>
                <span className={s.legendText}>Early career</span>
              </div>
            </div>
          </div>
          <Timeline data={data} />
          <div className={s.techSectionContainer}>
            <div className={s.techSectionHeader}>
              <div className={s.techSectionIconContainer}>
                <Code2 className={s.techSectionIcon} />
              </div>
              <div>
                <h3 className={s.techSectionTitle}>Technologies Mastered</h3>
                <p className={s.techSectionSubtitle}>
                  Full-Stack experties across modern tech stack
                </p>
              </div>
            </div>
            <div className={s.techGrid}>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textBlue}`}>
                  Frontend
                </div>
                <div className={s.techCardContent}>
                  React, TypeScript, Tailwind, Next.js
                </div>
              </div>
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textAmber}`}>
                  Backend
                </div>
                <div className={s.techCardContent}>
                  Node.js, Express.js, Nest.js
                </div>
              </div>  
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textRose}`}>
                  Databases
                </div>
                <div className={s.techCardContent}>
                  MongoDB, PostgreSQL, MySQL
                </div>
              </div>                          
              <div className={s.techCard}>
                <div className={`${s.techCardTitle} ${s.textCyan}`}>
                  Tools
                </div>
                <div className={s.techCardContent}>
                  Git, Github, Vercel, Render, Postmen, 
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
