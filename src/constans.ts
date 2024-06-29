export const about = "I'm Vinayak Agarwal, a software developer with a knack for crafting innovative solutions. With a strong foundation in MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on building engaging and scalable applications. My passion lies in user experience, and I've demonstrably boosted engagement by 40% through features like AMAs and notifications.  Beyond the code, I'm a 4-star rated CodeChef and have tackled over 1000 problems on LeetCode, showcasing my problem-solving prowess.";
export const about2 = "I can help you build a product, feature or website. I can provide full stack design services or just the right amount of them. I can help you with SEO, SMM, and more.";

const exp1about = "During my time at Idreamcareer, I was deeply committed to empowering students through innovative solutions. I played a key role in crafting engaging features like AMAs and notifications, leading to a remarkable 40% increase in user engagement. This wasn't just about keeping students entertained; it translated to them actively participating in the platform, exploring career options, and ultimately making informed decisions. Furthermore, I leveraged my data analysis skills to contribute to a more personalized experience. This involved collaborating on projects like the Manager dashboard, which provided real-time insights into student progress, enabling a more targeted approach to career guidance. My contributions at Idreamcareer exemplify my passion for using technology to bridge the gap between students and their career aspirations.";
const exp2about = "At RenewBuy, Artivatic.ai, I thrived in a cross-platform development environment, building an insurance lead generation application for web, Android, and iOS. My focus on clean code practices and efficient development methodologies ensured the app's long-term maintainability.  This project honed my ability to adapt to different frameworks and collaborate effectively, as evidenced by optimizing background sync and database operations (reducing wait time by 80%), ultimately streamlining the user experience.";
const exp3about = "As a Software Developer Intern at The Indian Mom, I gained valuable experience in user experience design. I implemented a login/signup system to personalize user data, enhancing the user journey. Additionally, I created animations that helped reduce users' perceived waiting time, leading to a more engaging and efficient user experience.";
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

export const projects: Project[] = [
    {
        title: "The Map Maker",
        image: "./images/1.png",
        link: "testing",
        about: about2
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing",
        about: about2 + about2
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing",
        about: about2
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing",
        about: about2
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing",
        about: about2
    },
]

export interface Certificate {
    title: string
    image: string
    link: string
}

export const certificates: Certificate[] = [
    {
        title: "Mongo Db Certified Associate Developer",
        image: "./images/1.png",
        link: "testing"
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing"
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing"
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing"
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing"
    },
    {
        title: "First",
        image: "./images/1.png",
        link: "testing"
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
        icon: "./images/linkdin.svg",
        link: "https://www.linkedin.com/in/vinayakaggarwal05/",
        tooltip: "LinkedIn"
    },
    {
        icon: "./images/github.svg",
        link: "https://github.com/vinayak0505",
        tooltip: "GitHub"
    },
    {
        icon: "./images/leetcode.svg",
        link: "https://leetcode.com/u/vinayakaggarwal05/",
        tooltip: "Leetcode",
    },
    {
        icon: "./images/codechef.svg",
        link: "https://www.codechef.com/users/vinayakagg05",
        tooltip: "CodeChef",
    }
]