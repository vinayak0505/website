export const about = "I'm Vinayak Agarwal, a software developer with a knack for crafting innovative solutions. With a strong foundation in MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on building engaging and scalable applications. My passion lies in user experience, and I've demonstrably boosted engagement by 40% through features like AMAs and notifications.  Beyond the code, I'm a 4-star rated CodeChef and have tackled over 1400 problems on LeetCode, showcasing my problem-solving prowess.";
export const about2 = "I can help you build a product, feature or website. I can provide full stack design services or just the right amount of them. I can help you with SEO, SMM, and more.";

const goldmanSachsAbout = "Led frontend development as the team's sole frontend developer and delivered my ETF platform work end to end across the stack. This included ETF building, portfolio manager reminders, and a pro rata calculator, for which I handled the technical spike, Spring Boot backend, and frontend. I also wrote backend jobs and gathered requirements. Created reusable GitHub Copilot instruction files adopted across the team to help developers build UI consistent with shared conventions.";
const indigoAbout = "Fixed table-rendering issues in the customer-facing 6Eskai UI. Also took over and fixed 6e Engineering GPT, an internal AI search tool for maintenance documents, combining semantic vector search with keyword/full-text search; debugged its Python code, re-ran its models, and deployed fixes. On a separate internal weather-prediction tool, built the UI using the Google Maps API to display weather at each airport while teammates handled the prediction model and backend. Used React, Python/FastAPI, Azure, and Databricks-hosted models.";
const exp1about = "Built student-facing features including onboarding and a paid learning module, and contributed to a Manager dashboard and BigQuery ETL with the team. The dashboard provided real-time operational metrics for schools and firms through MongoDB and Meteor, while research analytics were batch-processed into BigQuery with about a four-hour delay. Added Flutter push notifications and dynamic links to open chats. Proposed and implemented moving assessment generation from Lambda to an EC2 Spot Instance to reduce cost.";
const exp2about = "Worked across Android and Flutter insurance applications. Added a calendar feature to Mio, led development of an HSBC Flutter app for agents working in areas with limited connectivity, and built responsive layouts and offline data handling with Cloud Firestore.";
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
        company: "iDreamCareer (AASMAN FOUNDATION)",
        duration: "Jul 2022 - Mar 2025",
        color: "var(--secondary-color-3)",
        designation: "Software Engineer - Full Stack",
        about: exp1about
    },
    {
        company: "Artivatic.ai",
        duration: "Feb 2021 - Jun 2022",
        color: "var(--secondary-color-1)",
        designation: "Software Engineer Intern",
        about: exp2about
    },
]

export interface Project {
    title: string
    image: string
    link: string
    about: string
}

const proabout1 = `This ambitious personal project showcases my full-stack development capabilities. Built with React, Redux, and TypeScript, it presents a dynamic grid-based user interface where exploration takes center stage. Users can navigate freely in any direction, encountering various elements like cyclocinemas, interludes, and epilogues. The interactive map with clickable points reveals captivating content like images, videos, and galleries. Login functionality allows users to curate playlists and share specific pages.  This project further integrates "Textgraphy" – a user-generated content feature displaying user-written text on a shared page.  "The Map Maker From Baghdad" demonstrates my passion for crafting immersive user experiences and leveraging technology for creative storytelling.`;
const proabout2 = `LazyEngineer, my personal project, boasts a powerful backend built with Node.js, JavaScript, TypeScript, Express.js, and MongoDB. This tech stack ensures a seamless experience. A well-designed RESTful API facilitates communication, allowing students to browse, download, and upload a variety of learning materials – notes, practice files, past papers, and even textbooks. Secure login and profile creation personalize the experience and track content ownership. Efficient file management ensures secure storage and quick retrieval. LazyEngineer goes beyond content. A notification system keeps students informed, while user profiles allow them to showcase skills and online profiles (LeetCode, Github). The backend tracks uploads, motivating students to contribute and enrich the platform's knowledge base. This robust backend empowers LazyEngineer, creating a collaborative learning environment for students.`;
const proabout3 = `In a company project, I built a learning & support platform using a powerful backend (Node.js, JavaScript, TypeScript, Express.js, MongoDB) with a RESTful API for seamless data flow. Secure logins, efficient file handling, and features like chat and meetings run smoothly on this foundation. The user-facing side, built with React.js, Redux, Tailwind, and Redux Toolkit, offers an intuitive interface for browsing, building resumes, and tracking progress. Engaging quizzes and a clean design round out the platform. This project showcases my ability to bridge frontend and backend for user-centric development.`;
const proabout4 = `This React application showcases my ability to build user-friendly e-commerce experiences. Using React.js, I crafted an intuitive interface for browsing products, searching by name, and filtering by type. Firebase serves as the secure backend, storing product data and facilitating user accounts. With a user-friendly shopping cart and checkout process, users can seamlessly add items and proceed to purchase. While the application doesn't track actual warehouse inventory (allowing unlimited purchases for demonstration purposes), it offers a persistent user experience. Login functionality allows users to access their carts and previous bills from any computer, fostering repeat purchases and building customer loyalty. This project highlights my ability to bridge frontend development with Firebase integration, resulting in a functional and user-centric e-commerce platform.`;
const proabout5 = `In a personal project, I built a user-friendly image gallery web application. This platform empowers anyone to share their photos and organize them into folders, all without requiring login credentials. This open approach fosters a collaborative and easily accessible space for sharing visual content. Users can upload images, browse existing ones, and explore various folders to discover diverse collections. This project demonstrates my understanding of user experience and my ability to leverage web technologies to create a platform that encourages open sharing and fosters a vibrant online community.`;
const proabout6 = `Take a fantastical leap into "Knight-In-Floating-Forest," a 2D platformer game I built using Godot and GDScript. Explore whimsical landscapes, collecting coins and mastering challenging levels.  This web-playable adventure unlocks new levels as you progress, keeping you engaged and eager to conquer the next floating realm.  Whether you prefer the precision of keyboard controls or the ease of on-screen touch buttons, "Knight-In-Floating-Forest" offers a captivating and accessible experience.  Local storage ensures your progress is saved, so you can continue your journey as the valiant knight, conquering each level and uncovering the secrets of the floating forest.`;

export const projects: Project[] = [
    {
        title: "The Map Maker From Baghdad",
        image: "/images/mapmaker.png",
        link: "https://test.themapmakerfrombaghdad.com/",
        about: proabout1
    },
    {
        title: "Lazy Engineer",
        image: "/images/lazyengineer.png",
        link: "https://lazyengineer.in/",
        about: proabout2
    },
    {
        title: "IDreamCarrer",
        image: "/images/idreamcareer.png",
        link: "https://app.idreamcareer.com/",
        about: proabout3
    },
    {
        title: "Apna Bazaar",
        image: "/images/ecommerce.png",
        link: "https://github.com/vinayak0505/ecommerce-react",
        about: proabout4
    },
    {
        title: "Peekaboo",
        image: "/images/gallery.png",
        link: "https://vinayak0505.github.io/Gallery-Template/",
        about: proabout5
    },
    {
        title: "Knigh In Floating Forest",
        image: "/images/knigh_in_floting_forest.png",
        link: "https://vinayak0505.github.io/Knight-In-Floating-Forest/",
        about: proabout6
    },
]

export interface Certificate {
    title: string
    image: string
    link: string
}

export const certificates: Certificate[] = [
    {
        title: "MongoDb Certified Associate Developer",
        image: "/images/mongo.jpg",
        link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/5392bda6-ad8e-4c52-871a-71dc83ba3d04-vinayak-agarwal-c3fa3317-086e-45bb-b14a-1d50630c2ce2-certificate.pdf"
    },
    {
        title: "Back End | Full Stack Web Development in Node.js",
        image: "/images/node.jpg",
        link: "http://certificate.codingninjas.com/verify/b946d63ff75aa1b8"
    },
    {
        title: "Redis | RU101 Certificate | Redis University",
        image: "/images/redis.jpg",
        link: "https://university.redis.com/certificates/5436c2cc10794d638d619de5de4c57df"
    },
    {
        title: "Advance Front-End Web Development with React - Full Stack",
        image: "/images/react.jpg",
        link: "http://certificate.codingninjas.com/verify/ad2698902163bc51"
    },
    {
        title: "Advance Graph Theory",
        image: "/images/graph.jpeg",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS26S4463027803132777"
    }
]

export const email = {
    emailId: "vinayakaggarwal05@gmail.com",
    subject: "Hi, I would like to create something awesome with you",
};

export const info = [
    {
        heading: "Address",
        info: "Gurgaon, Haryana, India"
    },
    {
        heading: "Phone",
        info: "8130388400"
    },
    {
        heading: "Email",
        info: email.emailId
    }
]

export const icons = [
    {
        icon: "/images/linkdin.svg",
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
        tooltip: "Leetcode",
    },
    {
        icon: "/images/codechef.svg",
        link: "https://www.codechef.com/users/vinayakagg05",
        tooltip: "CodeChef",
    }
]


export const skills = [
    {
        type: "Frontend",
        items: [
            {
                image: "/images/html.png",
                name: "HTML",
            },
            {
                image: "/images/css.png",
                name: "CSS",
            },
            {
                image: "/images/react.png",
                name: "React",
            },
            {
                image: "/images/sass.png",
                name: "SASS",
            },
            {
                image: "/images/bootstrap.png",
                name: "Bootstrap",
            },
            {
                image: "/images/javascript.png",
                name: "Javascript",
            },
            {
                image: "/images/next.png",
                name: "NextJS",
            },
            {
                image: "/images/tailwind.png",
                name: "Tailwind",
            },
            {
                image: "/images/redux.png",
                name: "Redux",
            }
        ]
    },
    {
        type: "Backend",
        items: [
            {
                image: "/images/nodejs.png",
                name: "Node",
            },
            {
                image: "/images/express.png",
                name: "Express",
            },
            {
                image: "/images/typescript.png",
                name: "Typescript",
            },
            {
                image: "/images/mongo.png",
                name: "MongoDB",
            },
            {
                image: "/images/redis.png",
                name: "Redis",
            },
            {
                image: "/images/sql.png",
                name: "MySQL",
            },
            {
                name: "C",
                image: "/images/c.png"
            },
            {
                name: "C++",
                image: "/images/cplusplus.png"
            },
            {
                name: "Java",
                image: "/images/java.png"
            },
        ]
    },
    {
        type: "Others",
        items: [
            {
                image: "/images/git.png",
                name: "Git",
            },
            {
                image: "/images/aws.png",
                name: "AWS",
            },
            {
                image: "/images/google_cloud.png",
                name: "GCP",
            }
        ]
    }
]