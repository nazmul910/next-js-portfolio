export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [

  {
  id: "1",
  title: "LegalMate",
  slug: "legalmate",
  description:
    "A modern legal service platform connecting clients with experienced lawyers through secure consultations and appointment management.",
  detailedDescription:
    "LegalMate is a full-stack legal services platform that simplifies the process of finding legal professionals and booking consultations online. Users can browse lawyer profiles, schedule appointments, and securely access legal services through a responsive and intuitive interface. The application focuses on performance, scalability, and a seamless user experience.",
  image: "/legalmate.png",
  tags: ["Legal", "Next.js", "Full-Stack", "Dashboard", "Authentication"],
  status: "active",
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "Axios",
    "JWT",
  ],
  features: [
    "Lawyer profile management",
    "Online appointment booking",
    "Secure authentication system",
    "Role-based dashboards",
    "Responsive user interface",
    "REST API integration",
  ],
  learningOutcomes: [
    "Advanced Next.js application development",
    "JWT authentication implementation",
    "REST API integration using Axios",
    "Server-state management with TanStack Query",
    "Reusable component architecture",
    "Responsive UI development",
  ],
  links: {
    visit: "https://lawyer-frontend-5g5p.vercel.app/",
    github: "https://github.com/nazmul910/Lawyer-Frontend",
    howIBuilt: "YOUR_EXISTING_LINK",
  },
  author: "LegalMate",
  authorAvatar: "/logo.png",
},
{
  id: "2",
  title: "E-DoctorSheba",
  slug: "e-doctorsheba",
  description:
    "An online healthcare platform for booking doctor appointments and accessing digital medical services.",
  detailedDescription:
    "E-DoctorSheba is a modern healthcare platform that enables patients to discover qualified doctors, schedule appointments, and access healthcare services from anywhere. The project emphasizes usability, responsiveness, and efficient API integration to provide a smooth digital healthcare experience.",
  image: "/doctor.png",
  tags: ["Healthcare", "React", "Medical", "Appointment", "Frontend"],
  status: "active",
  techStack: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Axios",
    "React Router",
  ],
  features: [
    "Doctor listing and profiles",
    "Appointment scheduling",
    "Responsive healthcare dashboard",
    "REST API integration",
    "Patient-friendly interface",
    "Modern navigation system",
  ],
  learningOutcomes: [
    "Healthcare application development",
    "Component-based architecture",
    "API integration using Axios",
    "Client-side routing",
    "Responsive design principles",
    "Modern React development",
  ],
  links: {
    visit: "https://frontend-e-doctor-sheba.vercel.app/",
    github: "https://github.com/nazmul910/Frontend_E_DoctorSheba",
    howIBuilt: "YOUR_EXISTING_LINK",
  },
  author: "E-DoctorSheba",
  authorAvatar: "/logo.png",
},
{
  id: "3",
  title: "Decor E-Commerce",
  slug: "decor-ecommerce",
  description:
    "A modern home decor and furniture e-commerce platform with a clean and responsive shopping experience.",
  detailedDescription:
    "Decor E-Commerce is a responsive online shopping platform built for home decor and furniture products. Users can browse products, explore categories, manage shopping carts, and enjoy a smooth shopping experience through a modern and reusable interface.",
  image: "/decor.png",
  tags: ["Vue", "E-Commerce", "Furniture", "Shopping", "Responsive"],
  status: "active",
  techStack: [
    "Vue 3",
    "Vite",
    "PrimeVue",
    "Axios",
    "CSS3",
  ],
  features: [
    "Product catalog",
    "Category filtering",
    "Shopping cart",
    "Responsive layout",
    "Reusable Vue components",
    "Modern product showcase",
  ],
  learningOutcomes: [
    "Vue 3 Composition API",
    "Reusable UI development",
    "E-commerce architecture",
    "Responsive web design",
    "Frontend optimization",
    "Component-driven development",
  ],
  links: {
    visit: "https://decor-e-com-site.netlify.app/",
    github: "https://github.com/nazmul910/Decor-Frontend-E-com",
    howIBuilt: "YOUR_EXISTING_LINK",
  },
  author: "Decor E-Commerce",
  authorAvatar: "/logo.png",
},
{
  id: "4",
  title: "Jewellery Store",
  slug: "jewellery-store",
  description:
    "A premium jewellery e-commerce platform featuring elegant product browsing and modern shopping functionality.",
  detailedDescription:
    "Jewellery Store is a stylish e-commerce application developed to showcase luxury jewellery collections. The platform offers an elegant shopping experience with category browsing, shopping cart management, and a responsive interface optimized for desktop and mobile users.",
  image: "/jewellery.png",
  tags: ["Vue", "E-Commerce", "Jewellery", "Shopping", "Frontend"],
  status: "active",
  techStack: [
    "Vue 3",
    "Vite",
    "PrimeVue",
    "Axios",
    "CSS3",
  ],
  features: [
    "Luxury product showcase",
    "Category filtering",
    "Shopping cart system",
    "Responsive UI",
    "Reusable Vue components",
    "Clean product pages",
  ],
  learningOutcomes: [
    "Building scalable e-commerce applications",
    "Vue ecosystem development",
    "State management",
    "Component reusability",
    "Responsive interface design",
    "Modern frontend architecture",
  ],
  links: {
    visit: "https://e-shop-by-nazmul.netlify.app/",
    github: "https://github.com/nazmul910/e-com-juwellery",
    howIBuilt: "YOUR_EXISTING_LINK",
  },
  author: "Jewellery Store",
  authorAvatar: "/logo.png",
},
{
  id: "5",
  title: "Portfolio",
  slug: "portfolio",
  description:
    "A modern developer portfolio showcasing professional projects, technical expertise, and frontend development skills.",
  detailedDescription:
    "A personal developer portfolio built with Next.js that highlights professional experience, featured projects, technical skills, and contact information. The website incorporates smooth animations, responsive layouts, and modern UI components to create an engaging experience for recruiters and potential clients.",
  image: "/portfolio.png",
  tags: ["Portfolio", "Next.js", "Frontend", "Developer", "Animations"],
  status: "active",
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
  ],
  features: [
    "Interactive landing page",
    "Project showcase section",
    "Smooth animations",
    "Responsive layouts",
    "Professional contact page",
    "Optimized performance",
  ],
  learningOutcomes: [
    "Advanced Next.js development",
    "GSAP animation techniques",
    "Framer Motion integration",
    "Performance optimization",
    "SEO best practices",
    "Professional portfolio architecture",
  ],
  links: {
    visit: "https://nazmul-dev-portfolio.vercel.app/",
    github: "https://github.com/nazmul910/Portfolio-2026",
    howIBuilt: "YOUR_EXISTING_LINK",
  },
  author: "Nazmul Hasan",
  authorAvatar: "/logo.png",
},
];


export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}