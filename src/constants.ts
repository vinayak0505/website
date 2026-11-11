import frontendIcon from './assets/frontend.svg';
import backendIcon from './assets/backend.svg';
import aiIcon from './assets/ai.svg';

export const expertise = {
    title: "Things that I do",
    descriptions: [
        "I'm Vinayak Agarwal, a software developer with a knack for crafting innovative solutions. With a strong foundation in MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on building engaging and scalable applications. My passion lies in user experience, and marketing's three-month comparison on our dashboard showed engagement up 40% in the period AMAs and notifications shipped.  Beyond the code, I'm a 4-star rated CodeChef and have tackled over 1400 problems on LeetCode, showcasing my problem-solving prowess.",
        "I can help you build a product, feature or website. I can provide full stack design services or just the right amount of them.",
        "Beyond using AI tools, I make them more useful for the whole team by documenting how our codebase is structured and how UI should be built. Shared Copilot instructions let developers apply those conventions while generating UI, and I review the results to keep the code aligned with the project."
    ],
    services: [
        {
            icon: frontendIcon,
            title: "Frontend Developer",
            description: "With 3+ years of experience, I build interactive user interfaces with React, Redux and TypeScript."
        },
        {
            icon: backendIcon,
            title: "Backend Developer",
            description: "With 3+ years of experience, I build backend applications and APIs with Node.js, Express, MongoDB, Java and Spring Boot."
        },
        {
            icon: aiIcon,
            title: "AI-assisted Development",
            description: "Created reusable context files for GitHub Copilot, enabling developers with limited frontend experience to build UI that follows our codebase and design conventions."
        }
    ],
    profiles: [
        {
            value: "4★",
            label: "CodeChef",
            url: "https://codechef.com/users/vinayakagg05"
        },
        {
            value: "1,500",
            label: "LeetCode solved",
            url: "https://leetcode.com/u/vinayakaggarwal05/"
        }
    ]
};

export const homeContent = {
    greeting: "Hi there,",
    name: "Vinayak Agarwal",
    role: "Associate Full stack Developer",
    employer: "Goldman Sachs",
    location: "Hyderabad (on-site)",
    resume: {
        label: "Download Resume",
        url: "https://drive.google.com/drive/folders/1rquZ_MipJIYiSyocuwfGbvmUqo3D9ngP"
    },
    education: {
        metric: "9",
        metricLabel: "Out of 10 CGPA",
        degree: "B.Tech in Computer Science and Engineering (July 2019 - July 2023)",
        institution: "Guru Tegh Bahadur Institute of Technology (GGSIPU)"
    },
    experience: {
        metric: "3+",
        metricLabel: "Years of experience since graduating",
        details: [
            "4+ years counting full-time work from July 2022, during my final year",
            "1.5 years of internship experience"
        ]
    }
};

const goldmanSachsAbout = `Working across a platform with ~15 developers and 7–8 services, I lead the frontend (meteorUI) — informally the team's UI lead — while also delivering full-stack end-to-end features. By the Phase 1 release (~10 months in), I had authored ~90% of the frontend code by lines, as the only developer driving frontend work on a team with mostly backend backgrounds.

For the ETF platform I owned the full delivery end-to-end: gathered requirements, wrote the technical spike, built the Spring Boot backend features, and built the React UI — covering ETF creation, a pro rata calculator, and email reminder notifications sent to all portfolio managers. I also wrote backend batch jobs and handled precision-critical number handling (BigDecimal on the backend; BigInt in the UI for preview calculations).

I wrote 7–8 GitHub Copilot instruction files covering memoization, service patterns, codebase architecture, and the firm's internal UI toolkit (styling, AG Grid wrapper). All ~15 developers use them. They enabled backend developers with minimal frontend experience to build and ship UI that conforms to our design language. I review every UI change to enforce standards. The files also include a "create MR" flow that generates a change summary, creates test cases, runs lint and best-practice checks, and produces a pre-filled MR URL.

Stack: Spring Boot, Java, React, Vite, SingleStore (SQL), Vitest, GitLab CI (firm's managed pipeline, 80% line-coverage requirement), Swagger/OpenAPI, Grafana.`;
const indigoAbout = `Took over and fixed 6E Engineering GPT, an internal AI search tool over maintenance documents. The previous developer had left before I joined. I fixed ingestion bugs (PDF tags not parsed correctly, DB connection timing, missing retries), refactored the codebase from 4–5 files to 20+ using separation of concerns (the same parsing and insertion logic had been repeated for each manual; I broke it into reusable functions), re-ran parsing and insertion for all manuals, and deployed the fixed version. The tool uses hybrid retrieval — semantic vector search combined with keyword/full-text search — with GPT models for query rewriting and answer generation. Stack: Python/FastAPI backend, React frontend, Azure for DB and hosting.

Also fixed table-rendering issues in 6Eskai, IndiGo's customer-facing AI chatbot (separate from 6E Engineering GPT).

Built the UI for a separate internal visibility-prediction tool using the Google Maps API, showing predicted mist/visibility at each airport; teammates handled the prediction model and backend.`;
const exp1about = `Built a fully custom animated gamified career-discovery quiz end-to-end: designed and built the React (Next.js) animation — considered impossible by the design team (the CEO explicitly told the designer the engineering team wouldn't be able to build it) — and wrote the Node.js/Express API layer that saved user answers to MongoDB as students progressed, so they could drop out and resume from exactly the same question. On completion, answers were sent to an internal recommendation API and the top-3 career/course cards were shown to the student.

Built other student-facing features: an animated onboarding screen, a paid learning module for 10th-class students, and worked on AMAs (Ask Me Anything), live student–counsellor messaging over WebSocket, in the Next.js web app.

Did most of the development on the Manager dashboard, an existing Meteor.js app, which kept a school principal or firm head's browser in sync with MongoDB in real time — showing test completions, live test-takers, and average scores. Added a Redis cache (4-minute TTL) for the student-common portion of the dashboard.

Contributed to the BigQuery analytics pipeline: events were queued in SQS and batch-loaded into BigQuery every 4 hours via a scheduled Lambda (batch load is free; streaming inserts are charged). My part was mainly the dashboard side that reads from BigQuery, plus small parts of the ingestion side.

Added Flutter push notifications with Firebase Dynamic Links for deep linking into chats. Also built the Flutter client (Android and iOS) for the AMA live-messaging feature over WebSocket (teammates built the server).

Proposed and implemented moving PDF assessment generation from Lambda to an EC2 Spot Instance to reduce cost. When the Spot instance starts it queries MongoDB for incomplete assessments, generates each one, uploads to S3, and marks it complete only after the S3 URL is saved — so a restart only repeats the student in progress.

Received three Certificates of Recognition from the Founder & CEO (Oct 2022, Q2 2024, early 2025).

Stack: Next.js, React, Redux, Node.js, Express, MongoDB, Redis, Meteor.js, Flutter/Dart, Firebase Dynamic Links, WebSockets, AWS (EC2 Spot, S3, SQS, Lambda), GCP BigQuery.`;
const exp2about = `Worked in a team of 5 developers across two insurance applications. Added a Calendar feature to Mio, an Android (Java) one-stop insurance app for the whole family.

Led development of an HSBC Flutter app that let agents add customer details for onboarded customers in remote areas without internet — the first Flutter project I owned end-to-end. The app used a single codebase for web, Android, and iOS (Riverpod, MVC architecture) with offline data stored in Cloud Firestore (chosen over SQLite for security reasons specified by the client) and a background sync job written as native code: Kotlin for Android by me, iOS by the team lead, and not available on web.

Designed responsive layouts that worked across phones, small tablets, and large tablets; the rest of the team later adopted this approach across the codebase.`;
export const experience = [
    {
        company: "Goldman Sachs",
        duration: "Jun 2025 - Present",
        color: "var(--secondary-color-1)",
        designation: "Associate Full stack Developer",
        about: goldmanSachsAbout
    },
    {
        company: "IndiGo",
        duration: "Mar 2025 - Jun 2025",
        color: "var(--secondary-color-2)",
        designation: "Engineer - Full Stack",
        about: indigoAbout
    },
    {
        company: "iDreamCareer (Aasman Foundation)",
        duration: "Jul 2022 - Mar 2025",
        color: "var(--secondary-color-3)",
        designation: "Software Engineer - Full Stack",
        about: exp1about
    },
    {
        company: "Artivatic.ai",
        duration: "Feb 2021 - Jun 2022",
        color: "var(--secondary-color-4)",
        designation: "Software Engineer Intern",
        about: exp2about
    },
]

export interface Project {
    title: string
    images: { src: string, alt: string }[]
    links: { label: string, url: string }[]
    about: string
    technologies: string[]
    highlights?: string[]
    featured?: boolean
    status?: string
}

export const projects: Project[] = [
    {
        title: "LazyEngineer",
        featured: true,
        images: [
            { src: "/images/lazyengineer.png", alt: "LazyEngineer resource-sharing web app" },
            { src: "/images/lazyengineer-books.jpg", alt: "Books resource category on LazyEngineer" }
        ],
        links: [
            { label: "Frontend code", url: "https://github.com/vinayak0505/lazy-engineer-react" },
            { label: "Backend code", url: "https://github.com/vinayak0505/LazyEngineerBackend" }
        ],
        about: "A student-focused resource-sharing platform for notes, question papers, practical files, books, and jobs. Students can contribute materials, manage profiles, and download resources, with Android and web clients.",
        technologies: ["React", "Android", "Node.js", "Express", "MongoDB", "Spring Boot"],
        highlights: [
            "Built web and Android experiences for student-contributed resources.",
            "Added multi-provider sign-in and refactored the backend to Spring Boot.",
            "MongoDB indexing improved an API response from 0.3s to 0.2s in a Postman test."
        ]
    },
    {
        title: "The Map Maker From Baghdad",
        featured: true,
        images: [
            { src: "/images/mapmaker.png", alt: "The Map Maker From Baghdad interactive story experience" },
            { src: "/images/mapmaker-archive.jpg", alt: "The Map Maker From Baghdad archive page" },
            { src: "/images/mapmaker-about.jpg", alt: "The Map Maker From Baghdad about page" }
        ],
        links: [
            { label: "Live experience", url: "https://test.themapmakerfrombaghdad.com/" },
            { label: "Source code", url: "https://github.com/vinayak0505/mapmaker-frontend" }
        ],
        about: "An interactive, grid-based story experience. Visitors explore clickable points to discover films, interludes, galleries, and user-written text, with features to create playlists and share pages.",
        technologies: ["React", "Redux", "TypeScript"],
        highlights: [
            "Designed a non-linear interface for exploring stories and media.",
            "Added user playlists, shareable pages, and the Textgraphy feature.",
            "Implemented lazy loading for images."
        ]
    },
    {
        title: "Flight Status & Booking",
        featured: true,
        images: [
            { src: "/images/flight-status-main.jpg", alt: "Flight Status dashboard with live flight information" },
            { src: "/images/flight-status-seats.jpg", alt: "Flight Status seat selection interface" }
        ],
        links: [
            { label: "Frontend code", url: "https://github.com/vinayak0505/flight-status-react" },
            { label: "Backend code", url: "https://github.com/vinayak0505/FlightStatus" }
        ],
        about: "A full-stack flight app for checking live status, booking seats, and managing tickets, with authenticated user and admin flows.",
        technologies: ["React", "Java", "Spring Boot", "PostgreSQL", "JWT", "Firebase Cloud Messaging"],
        highlights: [
            "Built flight status, seat booking, and ticket-management flows.",
            "Added admin flight updates and authentication with Spring Security and JWT.",
            "Integrated push and email notifications for flight and booking updates."
        ]
    },
    {
        title: "LazyFlatmates",
        status: "Work in Progress",
        images: [],
        links: [
            { label: "Frontend code", url: "https://github.com/vinayak0505/lazy-flatmates-frontend" },
            { label: "Backend code", url: "https://github.com/vinayak0505/LazyFlatmates-Backend" }
        ],
        about: "A platform in development to help people find nearby flats and connect with potential flatmates.",
        technologies: ["React", "TypeScript", "Java", "Spring Boot"]
    },
    {
        title: "Apna Bazaar",
        images: [{ src: "/images/ecommerce.png", alt: "Apna Bazaar e-commerce interface" }],
        links: [{ label: "Source code", url: "https://github.com/vinayak0505/ecommerce-react" }],
        about: "A React and Firebase storefront with product search, category filters, a shopping cart, and saved user orders.",
        technologies: ["React", "Firebase"]
    },
    {
        title: "Peekaboo",
        images: [{ src: "/images/gallery.png", alt: "Peekaboo image gallery" }],
        links: [{ label: "Live project", url: "https://vinayak0505.github.io/Gallery-Template/" }],
        about: "A lightweight image gallery for uploading, browsing, and organizing photos into folders.",
        technologies: ["Web"]
    },
    {
        title: "Knight in Floating Forest",
        images: [{ src: "/images/knight-in-floating-forest.png", alt: "Knight in Floating Forest 2D game" }],
        links: [{ label: "Play the game", url: "https://vinayak0505.github.io/Knight-In-Floating-Forest/" }],
        about: "A web-playable 2D platform game with keyboard and touch controls, collectible coins, and saved progress.",
        technologies: ["Godot", "GDScript"]
    }
]

export interface Certificate {
    title: string
    issuer: string
    date?: string
    detail?: string
    category: string
    image?: string
    link?: string
}

export const certificates: Certificate[] = [
    {
        title: "Associate Cloud Engineer",
        issuer: "Google Cloud",
        date: "Issued Feb 16, 2025 · Expires Feb 16, 2028",
        category: "Professional certification",
        image: "/images/google-cloud-ace.jpg",
        link: "https://www.credly.com/badges/7a946d9a-8df3-48da-92e4-1bbbba761e82/public_url"
    },
    {
        title: "MongoDB Certified Associate Developer",
        issuer: "MongoDB, Inc.",
        date: "Issued May 19, 2024 · No expiry",
        category: "Professional certification",
        image: "/images/mongo.jpg",
        link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/5392bda6-ad8e-4c52-871a-71dc83ba3d04-vinayak-agarwal-c3fa3317-086e-45bb-b14a-1d50630c2ce2-certificate.pdf"
    },
    {
        title: "Back End / Full Stack Web Development in Node.js",
        issuer: "Coding Ninjas",
        date: "Feb–May 2023 · Top Performer",
        category: "Course certificate",
        image: "/images/node.jpg",
        link: "https://certificate.codingninjas.com/verify/b946d63ff75aa1b8"
    },
    {
        title: "RU101: Introduction to Redis Data Structures",
        issuer: "Redis University",
        date: "Jun 2, 2024",
        category: "Course certificate",
        image: "/images/redis.jpg",
        link: "https://university.redis.com/certificates/5436c2cc10794d638d619de5de4c57df"
    },
    {
        title: "Advance Front-End Web Development with React - Full Stack",
        issuer: "Coding Ninjas",
        date: "May–Aug 2023 · Top Performer",
        category: "Course certificate",
        image: "/images/react.jpg",
        link: "https://certificate.codingninjas.com/verify/ad2698902163bc51"
    },
    {
        title: "Advanced Graph Theory",
        issuer: "NPTEL, IIT Kanpur",
        date: "Jan–Mar 2023 · Elite (81%)",
        detail: "543 learners certified.",
        category: "Course certificate",
        image: "/images/graph.jpeg",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS26S4463027803132777"
    },
    {
        title: "Internship letter and certificate",
        issuer: "Artivatic.ai",
        detail: "Certificate available on LinkedIn.",
        category: "Internship documentation",
        image: "/images/artivatic-internship.jpg"
    },
    {
        title: "Certificate of Recognition",
        issuer: "iDreamCareer · Founder & CEO",
        date: "Oct 10, 2022",
        detail: "Recognized for making a real impact in enabling student success.",
        category: "Recognition",
        image: "/images/idc-recognition-2022.jpg"
    },
    {
        title: "Certificate of Recognition",
        issuer: "iDreamCareer · Founder & CEO",
        date: "Apr–Jun 2024 (Q2)",
        detail: "Recognized for making a real impact in enabling student success.",
        category: "Recognition",
        image: "/images/idc-recognition-2024-q2.jpg"
    },
    {
        title: "Certificate of Recognition",
        issuer: "iDreamCareer · Founder & CEO",
        date: "Early 2025 · Certificate undated",
        detail: "Recognized for exceptional performance as a Software Engineer - Full Stack during the past quarter.",
        category: "Recognition",
        image: "/images/idc-recognition-2025.jpg"
    }
]

export const email = {
    emailId: "vinayakaggarwal05@gmail.com",
    subject: "Hi, I would like to create something awesome with you",
};

export const info = [
    {
        heading: "Address",
        info: "Hyderabad, India"
    },
    {
        heading: "Phone",
        info: "8130388400",
        link: "tel:+918130388400"
    },
    {
        heading: "Email",
        info: email.emailId,
        link: `mailto:${email.emailId}`
    }
]

export const icons = [
    {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/vinayakaggarwal05/",
        tooltip: "LinkedIn"
    },
    {
        icon: "/images/github.svg",
        link: "https://github.com/vinayak0505",
        tooltip: "GitHub"
    },
    {
        icon: "/images/leetcode.svg",
        link: "https://leetcode.com/u/vinayakaggarwal05/",
        tooltip: "LeetCode",
    },
    {
        icon: "/images/codechef.svg",
        link: "https://www.codechef.com/users/vinayakagg05",
        tooltip: "CodeChef",
    }
]


type SkillTier = "diamond" | "gold" | "silver";
type Skill = { name: string; image?: string; tier?: SkillTier };

export const skills: { type: string; items: Skill[] }[] = [
    {
        type: "Backend & APIs",
        items: [
            { image: "/images/springboot.svg", name: "Spring Boot", tier: "diamond" },
            { image: "/images/nodejs.png", name: "Node.js", tier: "diamond" },
            { image: "/images/express.png", name: "Express", tier: "gold" },
            { name: "WebSockets", tier: "gold" },
            { image: "/images/fastapi.svg", name: "FastAPI", tier: "silver" },
            { image: "/images/graphql.svg", name: "GraphQL" },
            { image: "/images/apachekafka.svg", name: "Kafka" },
        ]
    },
    {
        type: "Programming Languages",
        items: [
            { image: "/images/java.png", name: "Java", tier: "diamond" },
            { image: "/images/javascript.png", name: "JavaScript", tier: "diamond" },
            { image: "/images/typescript.png", name: "TypeScript", tier: "diamond" },
            { image: "/images/dart.svg", name: "Dart", tier: "gold" },
            { image: "/images/cplusplus.png", name: "C++", tier: "gold" },
            { image: "/images/python.svg", name: "Python", tier: "silver" },
            { image: "/images/kotlin.svg", name: "Kotlin", tier: "silver" },
            { image: "/images/c.png", name: "C", tier: "silver" },
            { image: "/images/godotengine.svg", name: "GDScript" },
        ]
    },
    {
        type: "Frontend & UI",
        items: [
            { image: "/images/react.png", name: "React", tier: "diamond" },
            { image: "/images/meteor.svg", name: "Meteor.js", tier: "gold" },
            { name: "Vite", tier: "gold" },
            { image: "/images/mui.svg", name: "Material UI", tier: "gold" },
            { image: "/images/ag-grid-logo.png", name: "AG Grid", tier: "gold" },
            { image: "/images/next.png", name: "Next.js", tier: "gold" },
            { image: "/images/redux.png", name: "Redux", tier: "gold" },
            { image: "/images/html.png", name: "HTML", tier: "gold" },
            { image: "/images/css.png", name: "CSS", tier: "gold" },
            { image: "/images/sass.png", name: "Sass", tier: "silver" },
            { image: "/images/bootstrap.png", name: "Bootstrap", tier: "silver" },
            { image: "/images/tailwind.png", name: "Tailwind CSS", tier: "silver" },
        ]
    },
    {
        type: "Mobile",
        items: [
            { image: "/images/android.svg", name: "Android", tier: "gold" },
            { image: "/images/flutter.svg", name: "Flutter", tier: "gold" },
            { image: "/images/firebase.svg", name: "Firebase Cloud Messaging" },
        ]
    },
    {
        type: "Data & Storage",
        items: [
            { image: "/images/mongo.png", name: "MongoDB", tier: "gold" },
            { image: "/images/firebase.png", name: "Firestore", tier: "gold" },
            { image: "/images/google_cloud.png", name: "BigQuery", tier: "gold" },
            { image: "/images/aws.png", name: "S3", tier: "gold" },
            { image: "/images/azure.svg", name: "Azure DB", tier: "silver" },
            { image: "/images/redis.png", name: "Redis" },
            { image: "/images/sql.png", name: "MySQL" },
            { image: "/images/postgresql.svg", name: "PostgreSQL" },
        ]
    },
    {
        type: "Cloud & Infrastructure",
        items: [
            { image: "/images/aws.png", name: "AWS", tier: "gold" },
            { image: "/images/aws.png", name: "EC2 Spot", tier: "gold" },
            { image: "/images/aws.png", name: "SQS", tier: "gold" },
            { image: "/images/aws.png", name: "Lambda", tier: "gold" },
            { image: "/images/google_cloud.png", name: "Google Cloud (GCP)", tier: "gold" },
            { image: "/images/azure.svg", name: "Azure", tier: "silver" },
            { image: "/images/docker.svg", name: "Docker" },
            { image: "/images/nginx.svg", name: "Nginx" },
            { name: "CI/CD" },
        ]
    },
    {
        type: "Game Development",
        items: [
            { image: "/images/godotengine.svg", name: "Godot" },
        ]
    },
    {
        type: "Tools & Workflow",
        items: [
            { image: "/images/git.png", name: "Git", tier: "gold" },
            { name: "Unit testing", tier: "gold" },
            { image: "/images/postman.svg", name: "Postman", tier: "gold" },
            { name: "Grafana (BigQuery logging)", tier: "gold" },
            { image: "/images/githubcopilot.svg", name: "GitHub Copilot instruction files", tier: "gold" },
            { image: "/images/googlemaps.svg", name: "Google Maps API", tier: "silver" },
            { name: "HLD / LLD" },
        ]
    }
]