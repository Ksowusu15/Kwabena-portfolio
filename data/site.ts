export const profile = {
  name: "Kwabena Owusu Soadwa",
  shortName: "KS",
  role: "Software Engineer & Full-Stack Developer",
  location: "Accra, Ghana",
  email: "kwabena6037@gmail.com",
  phone: "+233 55 425 0225",
  github: "https://github.com/Ksowusu15",
  linkedin: "https://linkedin.com/in/kwabenaowusu2",
  summary:
    "I design and build production-focused web applications from interface to infrastructure, combining responsive frontend systems, secure backends, relational databases, API integrations, authentication, and deployment-ready architecture.",
};

export const skills = [
  {
    category: "Languages & Web",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Backend",
    items: ["Next.js", "React", "Flask", "Node.js", "REST APIs", "Prisma"],
  },
  {
    category: "Data & Infrastructure",
    items: ["PostgreSQL", "MySQL", "SQLite", "Neon", "SQLAlchemy", "Supabase"],
  },
  {
    category: "Tools & Delivery",
    items: ["Git", "GitHub", "Vercel", "Cloudinary", "Postman", "Paystack", "Zod"],
  },
];

export const projects = [
  {
    slug: "cnk-establishment",
    title: "CNK Establishment",
    category: "Full-Stack Business Platform",
    accent: "01",
    featured: true,
    image: "/projects/cnk-establishment.webp",
    description:
      "A production-focused corporate commerce and administration platform for a drilling-equipment supplier, combining a public product catalogue, quotation workflows, resources, analytics, and secure role-based content management.",
    overview:
      "CNK Establishment is a full-stack business platform built to support both customers and internal administrators. The public experience presents products, brands, company information, resources, quote requests, price enquiries, and contact channels, while the protected administration area manages products, categories, brands, messages, quotations, resources, website settings, analytics, and administrator accounts.",
    problem:
      "A specialist equipment supplier needs more than a brochure website. Product information changes, procurement teams need structured quote and price-request workflows, customer enquiries must be tracked, and the client needs a secure way to manage content without depending on a developer for every update.",
    solution:
      "I designed a single Next.js application with a responsive public website and a protected administration system. Prisma and PostgreSQL provide structured data management, role-based authorization separates Admin and Super Admin capabilities, and external integrations support media storage and transactional communication.",
    role: "Full-stack developer & system architect",
    status: "Client-ready production platform",
    architecture: [
      "Next.js 16 and React public/admin interfaces",
      "App Router and Route Handlers for server functionality",
      "Prisma ORM and PostgreSQL/Neon data layer",
      "Secure session authentication with bcrypt and role-based access",
      "Cloudinary-ready media and Brevo transactional email integrations",
    ],
    outcomes: [
      "Unified product, quote, message, resource, and website management",
      "Created separate Admin and Super Admin permissions for safer client access",
      "Added analytics, exports, SEO routes, rate limiting, and production checks",
    ],
    lessons: [
      "Business software needs clear operational workflows, not only polished pages",
      "Role design and safety rules should be planned before building admin features",
      "Production readiness depends on validation, observability, deployment checks, and recovery flows",
    ],
    responsibilities: [
      "Information architecture and responsive public website design",
      "Database modelling with Prisma and PostgreSQL",
      "Protected admin dashboard and role-based authorization",
      "Product, category, brand, resource, quote, and message workflows",
      "Analytics, validation, rate limiting, password reset, SEO, and deployment preparation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Cloudinary",
      "Brevo",
      "bcrypt",
      "Zod",
    ],
    highlights: [
      "Product catalogue with search, filtering, pagination, and detail pages",
      "Role-based Admin and Super Admin dashboard",
      "Quote, price-request, contact-message, and status-management workflows",
      "Product, category, brand, resource, image, and website-settings management",
      "Analytics, CSV exports, SEO, rate limiting, and password-reset support",
    ],
    challenges: [
      "Designing safe permissions for client administrators and the system owner",
      "Coordinating relational product, category, brand, quote, and resource data",
      "Building reusable public and admin workflows inside one Next.js application",
      "Preparing media, email, database, and security integrations for production deployment",
    ],
    improvements: [
      "Add richer procurement reporting and downloadable quote documents",
      "Introduce automated notification preferences for inquiry status changes",
      "Add deeper product analytics and conversion tracking",
      "Expand automated integration and end-to-end testing",
    ],
    github: "https://github.com/Ksowusu15/CNK-Establishment",
    live: "https://cnk-establishment-website.vercel.app/",
  },
  {
    slug: "rennovex-technology",
    title: "Rennovex Technology",
    category: "Production Business Platform",
    accent: "02",
    featured: true,
    image: "/projects/rennovex-technology.webp",
    description:
      "A production-focused technology company website and administration platform built with Next.js, TypeScript, Prisma, and PostgreSQL, combining service marketing, case studies, content management, enquiries, bookings, analytics, and secure role-based operations.",
    overview:
      "Rennovex Technology is a full-stack company platform designed for a Ghanaian technology business serving startups, SMEs, entrepreneurs, and nonprofit organisations. The public experience communicates software development, graphic design and branding, and IT support and consulting services, while the protected administration area supports day-to-day content and operational management.",
    problem:
      "A growing technology company needs more than a static marketing website. Its digital presence must establish credibility, explain services clearly, capture enquiries, publish proof of work, and give administrators a secure way to manage content and customer-facing information as the business grows.",
    solution:
      "I built a responsive Next.js application with a polished public website and protected administration workflows. The system combines server-rendered pages, Prisma-backed PostgreSQL data, secure authentication, role-aware administration, content management, contact and booking workflows, and production-oriented deployment architecture.",
    role: "Full-stack developer & system designer",
    status: "Live production website",
    architecture: [
      "Next.js 16 and React application with TypeScript",
      "App Router, Server Actions, and API/server workflows",
      "Prisma ORM with PostgreSQL hosted on Neon",
      "Secure session authentication, password hashing, and protected admin routes",
      "Vercel-ready deployment with transactional email and managed content workflows",
    ],
    outcomes: [
      "Created a professional digital presence for a real technology business",
      "Unified services, case studies, messages, bookings, blog content, and site settings",
      "Built a scalable admin foundation for ongoing business content and operations",
    ],
    lessons: [
      "Company websites are stronger when marketing content and operational workflows share one system",
      "Admin usability, authentication, and responsive behavior are core product requirements",
      "Production deployment requires careful database, environment, session, and content-management design",
    ],
    responsibilities: [
      "Product architecture, UI/UX, and responsive frontend development",
      "Prisma schema, PostgreSQL integration, and server-side workflows",
      "Protected admin dashboard, authentication, and session management",
      "Services, case studies, blog, enquiries, bookings, and site-settings management",
      "SEO, validation, deployment preparation, and production hardening",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Neon",
      "Zod",
      "Vercel",
    ],
    highlights: [
      "Responsive multi-page technology company website",
      "Protected administration dashboard with content-management workflows",
      "Service, case-study, blog, enquiry, and booking management",
      "PostgreSQL/Prisma data layer with secure authentication",
      "Production SEO, validation, analytics-oriented tooling, and deployment architecture",
    ],
    challenges: [
      "Keeping public marketing pages and admin workflows consistent inside one application",
      "Designing responsive admin interfaces for phones, tablets, and laptops",
      "Managing authentication, sessions, database access, and protected routes safely",
      "Preparing a database-backed Next.js application for reliable production deployment",
    ],
    improvements: [
      "Add deeper lead and conversion analytics",
      "Expand automated client communication and follow-up workflows",
      "Add richer case-study performance metrics",
      "Introduce broader automated end-to-end test coverage",
    ],
    github: "https://github.com/Ksowusu15/Rennovex-technology",
    live: "https://rennovextech.kwabenaowususoadwa.com",
  },
  {
    slug: "soadwa-motors",
    title: "Soadwa Motors",
    category: "Full-Stack Web Application",
    accent: "03",
    featured: true,
    image: "/projects/car-dealership.webp",
    description:
      "A database-driven dealership platform with responsive inventory browsing, advanced vehicle management, customer enquiries, test-drive requests, media uploads, and a secure administration dashboard.",
    overview:
      "Soadwa Motors was designed as a complete digital platform for a modern vehicle dealership. It combines a public-facing inventory website with a secure administration system for managing vehicles, customer messages, company information, team members, and test-drive requests.",
    problem:
      "Traditional dealership workflows often depend on social-media posts, calls, and manually maintained vehicle records. Customers cannot easily search available vehicles, while administrators lack a single system for updating inventory and managing enquiries.",
    solution:
      "I built a centralized dealership application that allows customers to browse and filter vehicles while giving administrators complete control over listings, media, enquiries, settings, and customer requests.",
    role: "Full-stack developer & product designer",
    status: "Production-ready portfolio project",
    architecture: [
      "Responsive Jinja2 public interface",
      "Flask application and authentication layer",
      "SQLAlchemy data-access layer",
      "MySQL relational database",
      "Secure local/cloud-ready media storage",
    ],
    outcomes: [
      "Centralized vehicle, enquiry, and test-drive management",
      "Reduced repetitive content updates through an admin CMS",
      "Created one responsive experience for customers and staff",
    ],
    lessons: [
      "Designing the data model early prevents expensive UI rework",
      "Admin workflows need the same usability care as public pages",
      "Deployment constraints should influence storage and database choices",
    ],
    responsibilities: [
      "Product planning and information architecture",
      "Database schema and Flask backend development",
      "Responsive frontend and admin dashboard design",
      "Authentication, uploads, testing, and deployment preparation",
    ],
    technologies: ["Python", "Flask", "MySQL", "SQLAlchemy", "JavaScript", "HTML5", "CSS3"],
    highlights: [
      "Vehicle CRUD and image management",
      "Secure administrator authentication",
      "Responsive inventory filtering and comparison",
      "Customer enquiry and test-drive workflows",
      "Database-driven company settings and team management",
    ],
    challenges: [
      "Managing multiple vehicle images securely",
      "Creating responsive inventory filters",
      "Designing separate public and administrative interfaces",
      "Migrating the application from SQLite to MySQL",
    ],
    improvements: [
      "Add online vehicle reservations",
      "Integrate cloud image storage",
      "Add automated enquiry notifications",
      "Create vehicle financing calculators",
    ],
    github: "https://github.com/Ksowusu15",
    live: "https://github.com/Ksowusu15",
  },
  {
    slug: "plant-disease-detection",
    title: "CropGuard AI",
    category: "AI-Assisted Web Application",
    accent: "04",
    featured: true,
    image: "/projects/plant-disease.webp",
    description:
      "A crop disease decision-support application combining image classification, prediction history, user accounts, feedback workflows, an AI assistant, and administrator tools in a responsive Flask interface.",
    overview:
      "CropGuard AI connects a trained image-classification workflow to a practical web application. Users can upload or capture crop images, receive model predictions and guidance, review detection history, and interact with supporting tools while administrators manage feedback and application data.",
    problem:
      "Crop symptoms can be difficult to identify consistently from visual inspection alone, while a raw machine-learning notebook does not provide the workflow, history, guidance, or usability needed by non-technical users.",
    solution:
      "I connected the model workflow to a responsive Flask application with authentication, upload/camera support, prediction history, decision-support messaging, feedback collection, administration tools, and database-backed user workflows.",
    role: "Full-stack & ML integration developer",
    status: "Applied AI portfolio project",
    architecture: [
      "Responsive Flask/Jinja user interface",
      "Python application and prediction pipeline",
      "TensorFlow/Keras image-classification model",
      "Relational database for users, history, and feedback",
      "Email/reset and deployment-ready service integrations",
    ],
    outcomes: [
      "Moved an image-classification model into a usable end-to-end application",
      "Added history, feedback, admin, and guidance around model predictions",
      "Designed responsive upload and camera workflows for desktop and mobile",
    ],
    lessons: [
      "Model accuracy and product usability must be evaluated separately",
      "AI predictions need clear uncertainty and decision-support language",
      "Real-world testing data is essential before presenting a classifier as reliable",
    ],
    responsibilities: [
      "Model-to-web integration and image-processing workflow",
      "User authentication, history, feedback, and admin functionality",
      "Responsive light/dark interface and mobile camera workflow",
      "Database and deployment configuration",
    ],
    technologies: ["Python", "Flask", "TensorFlow", "Keras", "PostgreSQL", "JavaScript"],
    highlights: [
      "Image upload and mobile camera prediction workflow",
      "Prediction history and user accounts",
      "Admin feedback management with CSV export",
      "Responsive AI guidance interface",
      "Decision-support messaging for uncertain predictions",
    ],
    challenges: [
      "Improving generalization beyond the original training images",
      "Connecting model preprocessing consistently to web uploads",
      "Keeping AI guidance usable on small screens",
      "Balancing prediction confidence with responsible user messaging",
    ],
    improvements: [
      "Retrain with a larger and more diverse field-image dataset",
      "Add calibrated confidence and out-of-distribution detection",
      "Expand crop and disease coverage",
      "Add expert-reviewed treatment guidance",
    ],
    github: "https://github.com/Ksowusu15",
    live: "https://github.com/Ksowusu15",
  },
  {
    slug: "e-millenial-store",
    title: "E-Millenial Store",
    category: "E-Commerce Frontend",
    accent: "05",
    featured: false,
    image: "/projects/ecommerce-store.webp",
    description:
      "A responsive e-commerce experience with product browsing, cart management, customer validation, purchase summaries, and Paystack checkout integration.",
    overview:
      "E-Millenial Store is a responsive shopping interface that demonstrates the complete customer journey from product selection to payment confirmation.",
    problem:
      "The project required a simple but complete purchasing flow without using a frontend framework. Cart state, customer details, totals, validation, and payment processing all needed to work with vanilla JavaScript.",
    solution:
      "I created a modular JavaScript shopping workflow that manages products, cart quantities, customer information, totals, purchase summaries, and Paystack payment initiation.",
    role: "Frontend developer",
    status: "Completed client-style project",
    architecture: [
      "Responsive semantic HTML interface",
      "CSS responsive layout and components",
      "Vanilla JavaScript application state",
      "Client-side cart and checkout workflow",
      "Paystack payment integration",
    ],
    outcomes: [
      "Delivered a complete browse-to-checkout user journey",
      "Created responsive layouts without a frontend framework",
      "Integrated a real payment workflow into a vanilla JavaScript project",
    ],
    lessons: [
      "State management becomes important even in framework-free applications",
      "Checkout UX needs clear validation and confirmation states",
      "Responsive product layouts should be tested at real device widths",
    ],
    responsibilities: [
      "Responsive interface implementation",
      "Shopping-cart state and quantity controls",
      "Customer validation and purchase summary",
      "Paystack integration and checkout interactions",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Paystack API"],
    highlights: [
      "Interactive shopping cart",
      "Paystack payment workflow",
      "Customer form validation",
      "Purchase-summary interface",
      "Responsive mobile-first layout",
    ],
    challenges: [
      "Maintaining cart state without a framework",
      "Calculating totals and quantities accurately",
      "Integrating the Paystack checkout process",
      "Keeping modal interfaces responsive",
    ],
    improvements: [
      "Add persistent cart storage",
      "Connect the interface to a product database",
      "Add customer authentication",
      "Add order-history functionality",
    ],
    github: "https://github.com/Ksowusu15/E-Millenial-Ecommence-Website",
    live: "https://github.com/Ksowusu15",
  },
  {
    slug: "student-management-portal",
    title: "Student Management Portal",
    category: "Full-Stack Management System",
    accent: "06",
    featured: false,
    image: "/projects/student-portal.webp",
    description:
      "A Flask and MySQL management application for registering, viewing, editing, searching, and maintaining student records through a structured dashboard.",
    overview:
      "The Student Management Portal provides a central interface for maintaining student records and viewing administrative information.",
    problem:
      "Managing student information manually makes searching, updating, and reviewing records slow and error-prone.",
    solution:
      "I developed a Flask application backed by MySQL that supports student registration, record viewing, editing, searching, and dashboard reporting.",
    role: "Full-stack developer",
    status: "Completed learning project",
    architecture: [
      "Jinja2 server-rendered frontend",
      "Flask application layer",
      "SQLAlchemy ORM",
      "MySQL relational database",
      "CRUD-oriented route structure",
    ],
    outcomes: [
      "Centralized student records into one searchable application",
      "Implemented complete create, read, update, and delete workflows",
      "Strengthened relational database and server-rendered application skills",
    ],
    lessons: [
      "Data validation is central to reliable CRUD applications",
      "Search and edit workflows benefit from consistent route design",
      "Administrative interfaces should prioritize information clarity",
    ],
    responsibilities: [
      "Database modelling and integration",
      "Flask routes and Jinja templates",
      "CRUD and search workflows",
      "Responsive dashboard interface",
    ],
    technologies: ["Python", "Flask", "MySQL", "SQLAlchemy", "Jinja2"],
    highlights: [
      "Student registration and profile management",
      "Relational database integration",
      "Complete CRUD workflows",
      "Administrative dashboard reporting",
      "Searchable student records",
    ],
    challenges: [
      "Designing relational student data models",
      "Validating registration information",
      "Keeping edit and view pages synchronized",
      "Presenting administrative data clearly",
    ],
    improvements: [
      "Add role-based authentication",
      "Add CSV and PDF exports",
      "Add attendance management",
      "Add academic-performance reporting",
    ],
    github: "https://github.com/Ksowusu15",
    live: "",
  },
];

export const experience = [
  {
    role: "IT Officer",
    company: "National Entrepreneurship and Innovation Programme",
    period: "Oct 2024 – Aug 2025",
    details:
      "Delivered day-to-day technical support across hardware, software, networks, system installations, IT assets, databases, and internal software testing while helping teams keep business operations running reliably.",
  },
  {
    role: "Independent Full-Stack Developer",
    company: "Client & Portfolio Projects",
    period: "Ongoing",
    details:
      "Designing and developing end-to-end web applications across Next.js, React, Flask, SQL databases, authentication, payments, role-based admin systems, API integrations, and cloud-ready deployment workflows.",
  },
];

export type Project = (typeof projects)[number];
