"use client";

import { Award, Briefcase, Code2, Rocket, Users } from "lucide-react";

import { timelineStyles as s } from "../../../public/dummyStyles";
import { Timeline } from "@/components/ui/timeline";

export default function TimeLineDemo() {
  const data = [
    {
      title: "Sep 2025 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerBlue}>
              <Briefcase className={s.iconBlue} />
            </div>

            <div>
              <h3 className={s.contentTitle}>
                Full Stack Developer · Softvence
              </h3>

              <p className={s.contentSubtitle}>Dhaka, Bangladesh • On-site</p>

              <p className={s.contentSubtitle}>
                Building production-grade Full Stack applications.
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Developing scalable MERN Stack applications for real-world
              business solutions.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Collaborating directly with clients to gather requirements and
              deliver production-ready features.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletBlue}></span>
              Responsible for end-to-end feature development, API integration,
              testing, and deployment.
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>React.js</span>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>NestJS</span>
            <span className={s.techBadge}>TypeScript</span>
            <span className={s.techBadge}>MongoDB</span>
            <span className={s.techBadge}>PostgreSQL</span>
          </div>
        </div>
      ),
    },

    {
      title: "May 2025 - Present",
      content: (
        <div className={s.itemContainer}>
          <div className={s.itemFlexContainer}>
            <div className={s.iconContainerPurple}>
              <Rocket className={s.iconPurple} />
            </div>

            <div>
              <h3 className={s.contentTitle}>
                Full Stack Developer · ReturnHex
              </h3>

              <p className={s.contentSubtitle}>Remote • Product Development</p>

              <p className={s.contentSubtitle}>
                Building SaaS platforms & modern business applications.
              </p>
            </div>
          </div>

          <ul className={s.list}>
            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Developed a Multi-Tenant SaaS E-Commerce Platform with tenant
              isolation, JWT authentication, RBAC, and SSLCommerz integration.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Built a role-based Real Estate Platform with Admin, Agent, and
              Client dashboards alongside Stripe payment integration.
            </li>

            <li className={s.listItem}>
              <span className={s.bulletPurple}></span>
              Developed high-performance marketing websites using Next.js, GSAP,
              Tailwind CSS, and modern frontend best practices.
            </li>
          </ul>

          <div className={s.techBadgesContainer}>
            <span className={s.techBadge}>Next.js</span>
            <span className={s.techBadge}>React</span>
            <span className={s.techBadge}>NestJS</span>
            <span className={s.techBadge}>Prisma</span>
            <span className={s.techBadge}>PostgreSQL</span>
            <span className={s.techBadge}>Stripe</span>
            <span className={s.techBadge}>JWT</span>
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
            <h1 className={s.mainTitle}>Career Timeline</h1>
            <p className={s.mainParagraph}>
              My professional journey as a Full Stack Developer, building
              scalable SaaS platforms, business applications, and modern web
              solutions.
            </p>
            <div className={s.legendContainer}>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-blue-500`}></div>
                <span className={s.legendText}>Current Position</span>
              </div>
              <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-purple-500`}></div>
                <span className={s.legendText}>Professional Experience</span>
              </div>
              {/* <div className={s.legendItem}>
                <div className={`${s.legendDot} bg-green-500`}></div>
                <span className={s.legendText}>Growth Startup</span>
              </div> */}
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
                <div className={`${s.techCardTitle} ${s.textCyan}`}>Tools</div>
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
