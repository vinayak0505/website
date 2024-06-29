export const about = "I'm Vinayak Agarwal, a software developer with a knack for crafting innovative solutions. With a strong foundation in MERN stack (MongoDB, Express.js, React.js, Node.js), I thrive on building engaging and scalable applications. My passion lies in user experience, and I've demonstrably boosted engagement by 40% through features like AMAs and notifications.  Beyond the code, I'm a 4-star rated CodeChef and have tackled over 1000 problems on LeetCode, showcasing my problem-solving prowess.";
export const about2 = "I can help you build a product, feature or website. I can provide full stack design services or just the right amount of them. I can help you with SEO, SMM, and more.";


export const experience = [
    {
        company: "IdreamCareer",
        duration: "Jul 2022 - Current",
        color: "var(--secondary-color-1)",
        designation: "Full Stack Developer",
        about: about
    },
    {
        company: "Artivatic.ai",
        duration: "Feb 2021 - Jul 2022",
        color: "var(--secondary-color-2)",
        designation: "Software Developer Intern",
        about: about
    },
    {
        company: "PetukJi",
        duration: "Sep 2020 - Oct 2020",
        color: "var(--secondary-color-3)",
        designation: "FrontEnd Developer Intern",
        about: about
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
        icon: "./images/leetcode.png",
        link: "https://www.linkedin.com/in/vinayakaggarwal05/",
        tooltip: "LinkedIn"
    },
    {
        icon: "./images/leetcode.png",
        link: "https://github.com/vinayakaggarwal05",
        tooltip: "GitHub"
    },
    {
        icon: "./images/leetcode.png",
        link: "https://twitter.com/vinayakaggarwal05",
        tooltip: "Leetcode",
    },
    {
        icon: "./images/leetcode.png",
        link: "https://twitter.com/vinayakaggarwal05",
        tooltip: "CodeChef",
    }
]