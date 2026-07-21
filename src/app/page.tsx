"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { homePageStyles, spotlightStyles } from "../../public/dummyStyles";
import { Spotlight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

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

        <section className=" relative">
          <h1 className={homePageStyles.spanWithMargin}>
            <Cover>Nazmul</Cover>
          </h1>
          <h2 className={homePageStyles.h2}>
            <span className={homePageStyles.spanInline}>
              <PointerHighlight>Full Stack</PointerHighlight>
              
            </span>
            {" "} Developer
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
                    <path d="M3 1219-9 9 9" strokeWidth="1.2" />
                  </svg>
                  <div className={homePageStyles.calloutCard.button}>
                    Connect with me on X

                  </div>

                </div>

                <button type="button" aria-level="Follow on X" className={homePageStyles.calloutCard.button}>
                  Follow
                </button>

              </div>

            </div>

          </div>
        </section>
      </div>
    </>
  );
}
