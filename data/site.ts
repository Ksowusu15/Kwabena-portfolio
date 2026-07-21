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
    "I build reliable, responsive web applications that turn practical ideas into polished digital products. My work spans backend systems, databases, API integrations, and user-focused interfaces.",
};

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["Flask", "React", "Next.js", "Node.js", "REST APIs", "Jinja2"] },
  { category: "Data", items: ["MySQL", "PostgreSQL", "SQLite", "SQLAlchemy", "Supabase"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Paystack", "Vercel"] },
];

export const projects = [
  {
    slug: "soadwa-motors",
    title: "Soadwa Motors",
    category: "Full-Stack Web Application",
    accent: "01",
    image: "/projects/car-dealership.webp",
    description:
      "A database-driven car dealership platform with public inventory browsing, vehicle management, customer enquiries, test-drive requests, image uploads, and a secure administration dashboard.",
    overview:
      "Soadwa Motors was designed as a complete digital platform for a modern vehicle dealership. It combines a public-facing inventory website with a secure administration system for managing vehicles, customer messages, company information, team members, and test-drive requests.",
    problem:
      "Traditional dealership workflows often depend on social-media posts, calls, and manually maintained vehicle records. Customers cannot easily search available vehicles, while administrators lack a single system for updating inventory and managing enquiries.",
    solution:
      "I built a centralized dealership application that allows customers to browse and filter vehicles while giving administrators complete control over listings, media, enquiries, settings, and customer requests.",
    role: "Full-stack developer and product designer",
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
      "Responsive inventory filtering",
      "Customer enquiry and test-drive workflows",
      "Database-driven company settings",
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
    live: "",
  },
  {
    slug: "e-millenial-store",
    title: "E-Millenial Store",
    category: "Frontend E-Commerce Application",
    accent: "02",
    image: "/projects/ecommerce-store.webp",
    description:
      "A responsive e-commerce experience with product browsing, cart management, customer validation, purchase summaries, and Paystack payment integration.",
    overview:
      "E-Millenial Store is a responsive shopping interface that demonstrates the complete customer journey from product selection to payment confirmation.",
    problem:
      "The project required a simple but complete purchasing flow without using a frontend framework. Cart state, customer details, totals, validation, and payment processing all needed to work with vanilla JavaScript.",
    solution:
      "I created a modular JavaScript shopping workflow that manages products, cart quantities, customer information, totals, purchase summaries, and Paystack payment initiation.",
    role: "Frontend developer",
    status: "Completed frontend project",
    architecture: [
      "Responsive HTML product catalogue",
      "Vanilla JavaScript state and event layer",
      "Cart and checkout validation workflow",
      "Paystack payment integration",
    ],
    outcomes: [
      "Delivered a complete browse-to-checkout customer journey",
      "Maintained cart totals and quantities without a framework",
      "Integrated a real payment workflow into a responsive interface",
    ],
    lessons: [
      "Small state-management utilities make vanilla JavaScript easier to maintain",
      "Payment flows require clear validation and user feedback",
      "Mobile checkout layouts must be tested with realistic content",
    ],
    responsibilities: [
      "Responsive interface implementation",
      "Cart state and modal interactions",
      "Customer validation and purchase summaries",
      "Paystack integration and end-to-end testing",
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
    live: "",
  },
  {
    slug: "student-management-portal",
    title: "Student Management Portal",
    category: "Full-Stack Management System",
    accent: "03",
    image: "/projects/student-portal.webp",
    description:
      "A Flask and MySQL application for registering, viewing, editing, and managing student records through a structured administrative dashboard.",
    overview:
      "The Student Management Portal provides a central interface for maintaining student records and viewing administrative information.",
    problem:
      "Managing student information manually makes searching, updating, and reviewing records slow and error-prone.",
    solution:
      "I developed a Flask application backed by MySQL that supports student registration, record viewing, editing, searching, and dashboard reporting.",
    role: "Full-stack developer",
    status: "Completed management-system project",
    architecture: [
      "Jinja2 administrative interface",
      "Flask routes and validation",
      "SQLAlchemy object-relational mapping",
      "MySQL student-record database",
    ],
    outcomes: [
      "Replaced scattered records with a searchable central system",
      "Enabled complete student record CRUD workflows",
      "Presented administrative information through a focused dashboard",
    ],
    lessons: [
      "Reliable validation is essential for record-management systems",
      "Consistent templates make CRUD workflows easier to understand",
      "Database constraints should support application-level validation",
    ],
    responsibilities: [
      "Data modeling and database integration",
      "Flask routing and form processing",
      "Dashboard and record-management interfaces",
      "Testing registration, search, edit, and view workflows",
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
  {
    slug: "plant-disease-detection",
    title: "Plant Disease Detection",
    category: "Artificial Intelligence Application",
    accent: "04",
    image: "/projects/plant-disease.webp",
    description:
      "A machine-learning application that analyses uploaded crop images, predicts possible plant diseases, and presents accessible results through a Flask interface.",
    overview:
      "The Plant Disease Detection application connects a trained TensorFlow image-classification model to a web interface that allows users to upload crop images and receive predictions.",
    problem:
      "Plant diseases can be difficult to identify visually, especially where agricultural expertise is not immediately available.",
    solution:
      "I trained and integrated an image-classification model that accepts uploaded crop images, processes them, predicts a disease class, and displays the result through a Flask application.",
    role: "Machine-learning and web developer",
    status: "Final-year artificial-intelligence project",
    architecture: [
      "Responsive image-upload interface",
      "Flask prediction API and preprocessing",
      "TensorFlow/Keras classification model",
      "18-class labelled image dataset",
      "Accessible prediction-result presentation",
    ],
    outcomes: [
      "Connected a trained model to a usable web workflow",
      "Supported eighteen plant-disease classes",
      "Made image selection and prediction usable across screen sizes",
    ],
    lessons: [
      "Training and inference preprocessing must remain identical",
      "Prediction confidence and guidance improve user trust",
      "AI interfaces need clear limitations and accessible results",
    ],
    responsibilities: [
      "Dataset preparation and model training",
      "Image preprocessing and prediction integration",
      "Flask interface and upload workflow",
      "Responsive design, testing, and result presentation",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "Flask", "Machine Learning"],
    highlights: [
      "Image-classification workflow",
      "TensorFlow model integration",
      "Flask-based prediction interface",
      "18-class disease dataset",
      "Uploaded-image preview and results",
    ],
    challenges: [
      "Preparing and organizing image datasets",
      "Connecting the trained model to Flask",
      "Processing uploaded images consistently",
      "Presenting model predictions clearly",
    ],
    improvements: [
      "Add prediction confidence scores",
      "Add disease-treatment recommendations",
      "Improve mobile image capture",
      "Expand the supported crop classes",
    ],
    github: "https://github.com/Ksowusu15",
    live: "",
  },
] as const;

export const experience = [
  {
    role: "IT Officer",
    company: "National Entrepreneurship and Innovation Programme",
    period: "Professional Experience",
    details:
      "Supported hardware, software, networking, system installations, IT asset management, and the testing of internal software solutions while helping users resolve day-to-day technical issues.",
  },
  {
    role: "Independent Full-Stack Developer",
    company: "Portfolio Projects",
    period: "Ongoing",
    details:
      "Designing and developing complete web applications with Flask, JavaScript, SQL databases, authentication, payment integrations, administration dashboards, responsive interfaces, and cloud-ready deployment configurations.",
  },
];

export type Project = (typeof projects)[number];
