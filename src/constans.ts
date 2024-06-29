export const about = "I'm Vinayak Agarwal, a software developer with a knack for crafting innovative solutions. With a strong foundation in MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on building engaging and scalable applications. My passion lies in user experience, and I've demonstrably boosted engagement by 40% through features like AMAs and notifications.  Beyond the code, I'm a 4-star rated CodeChef and have tackled over 1000 problems on LeetCode, showcasing my problem-solving prowess.";
export const about2 = "I can help you build a product, feature or website. I can provide full stack design services or just the right amount of them. I can help you with SEO, SMM, and more.";

const exp1about = "During my time at Idreamcareer, I was deeply committed to empowering students through innovative solutions. I played a key role in crafting engaging features like AMAs and notifications, leading to a remarkable 40% increase in user engagement. This wasn't just about keeping students entertained; it translated to them actively participating in the platform, exploring career options, and ultimately making informed decisions. Furthermore, I leveraged my data analysis skills to contribute to a more personalized experience. This involved collaborating on projects like the Manager dashboard, which provided real-time insights into student progress, enabling a more targeted approach to career guidance. My contributions at Idreamcareer exemplify my passion for using technology to bridge the gap between students and their career aspirations.";
const exp2about = "At RenewBuy, Artivatic.ai, I thrived in a cross-platform development environment, building an insurance lead generation application for web, Android, and iOS. My focus on clean code practices and efficient development methodologies ensured the app's long-term maintainability.  This project honed my ability to adapt to different frameworks and collaborate effectively, as evidenced by optimizing background sync and database operations (reducing wait time by 80%), ultimately streamlining the user experience.";
// const exp3about = "As a Software Developer Intern at The Indian Mom, I gained valuable experience in user experience design. I implemented a login/signup system to personalize user data, enhancing the user journey. Additionally, I created animations that helped reduce users' perceived waiting time, leading to a more engaging and efficient user experience.";
const exp4about = "During my internship at Petuk Ji, I honed my Java skills by contributing to their application built with Firebase. My focus was on improving user experience by implementing Firebase Search, a feature that allows users to easily find restaurants that cater to their preferences. This contribution empowered users with a more efficient and personalized way to navigate the platform.";
export const experience = [
    {
        company: "IdreamCareer",
        duration: "Jul 2022 - Current",
        color: "var(--secondary-color-1)",
        designation: "Full Stack Developer",
        about: exp1about
    },
    {
        company: "Artivatic.ai",
        duration: "Feb 2021 - Jul 2022",
        color: "var(--secondary-color-2)",
        designation: "Software Developer Intern",
        about: exp2about
    },
    // {
    //     company: "The Indian Mom",
    //     duration: "Oct 2020 - Dec 2020",
    //     color: "var(--secondary-color-3)",
    //     designation: "FrontEnd Developer Intern",
    //     about: exp3about
    // },
    {
        company: "PetukJi",
        duration: "Sep 2020 - Oct 2020",
        color: "var(--secondary-color-3)",
        designation: "FrontEnd Developer Intern",
        about: exp4about
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