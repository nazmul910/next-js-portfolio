"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { homePageStyles, spotlightStyles } from "../../public/dummyStyles";

import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Spotlight } from "@/components/ui/Spotlight";

export default function HomePage(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log("Autoplay prevented: ", e);
      });
    }
  }, []);

  return (
    <>
      <div className={homePageStyles.container}>
        <div
          className={cn(
            homePageStyles.backgroundGrid.wrapper,
            homePageStyles.backgroundGrid.pattern,
          )}
        ></div>
        <Spotlight className={spotlightStyles.position} fill="#0FFF50" />

        <div className={homePageStyles.gradientOverlay} />

        <section className={homePageStyles.heroSection}>
          <div className=" relative">
            <h1 className={homePageStyles.h1}>
              Hey, I&apos;m{" "}
              <span className={homePageStyles.spanWithMargin}>
                <Cover>Nazmul</Cover>
              </span>
            </h1>

            <h2 className={homePageStyles.h2}>
              <span className={homePageStyles.spanInline}>
                <PointerHighlight>Full Stack</PointerHighlight>
              </span>{" "}
              Developer
            </h2>

            <div className="mb-6">
              <div className={homePageStyles.calloutCard.wrapper}>
                <div className={homePageStyles.calloutCard.innerContainer}>
                  <div className={homePageStyles.calloutCard.textContainer}>
                    <svg
                      className={homePageStyles.calloutCard.icon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path d="M3 12l9-9 9 9" strokeWidth="1.2" />
                    </svg>

                    <div className={homePageStyles.calloutCard.text}>
                      Connect with me on LinkedIn
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/ni-nazmul4124/"
                    target="_blank"
                    type="button"
                    aria-label="Follow on X"
                    className={homePageStyles.calloutCard.button}
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
            <p className={homePageStyles.paragraph}>
              I'm a <strong>Full Stack Developer</strong> passionate about
              building scalable, secure, and high-performance web applications.
              My primary stack includes <strong>React.js</strong>,{" "}
              <strong>Next.js</strong>,<strong>NestJS</strong>,{" "}
              <strong>TypeScript</strong>,<strong>MongoDB</strong>, and{" "}
              <strong>PostgreSQL</strong>.
              <br />
              <br />
              Currently, I work as a Full Stack Developer, contributing to
              production-grade SaaS platforms, business applications, legal
              management systems, healthcare solutions, and modern e-commerce
              platforms. I enjoy solving real-world problems through clean
              architecture, maintainable code, and intuitive user experiences.
            </p>
            <article className={homePageStyles.article.wrapper}>
              <div className={homePageStyles.article.videoContainer}>
                <video
                  ref={videoRef}
                  className={homePageStyles.article.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                  style={homePageStyles.article.videoStyles}
                >
                  <source src="/homevideo.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className={homePageStyles.article.content}>
                <div className={homePageStyles.article.header}>
                  <svg
                    className={homePageStyles.article.headerIcon}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>Professional Journey</span>
                </div>
                <h3 className={homePageStyles.article.title}>
                  From Ideas to Production-Ready Software
                </h3>
                <p className={homePageStyles.article.description}>
                  Explore my journey as a Full Stack Developer through
                  real-world SaaS platforms, healthcare systems, lawyer
                  management applications, and modern e-commerce solutions built
                  with today's leading web technologies.
                </p>
                <div className={homePageStyles.article.linkContainer}>
                  <Link
                    href="/projects"
                    className={homePageStyles.article.link}
                  >
                    <span>See My Projects</span>
                    <svg
                      className={homePageStyles.article.linkIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
