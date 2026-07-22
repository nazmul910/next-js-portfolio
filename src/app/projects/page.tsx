"use client"

import { useRouter } from "next/router";
import {projectStyles as s} from "../../../public/dummyStyles"

import {projects,Project} from "@/lib/projects-data"


export default function ProjectsPage() {
  return (
    <>
      <div className={s.pageContainer}>
        <div className={s.innerContainer}>
          <div className={s.header}>
            <h1 className={s.pageTitle}>
              Projects
            </h1>
            <p className={s.pageSubtitle}>
              Playground - Small MVP to Production Apps

            </p>

          </div>
          <div className={s.projectsGrid}>
            {
              projects.map((project) =>(
                
              ))
            }

          </div>

        </div>

      </div>
    </>
  );
}