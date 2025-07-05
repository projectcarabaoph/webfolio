import { IProjectList, TExperienceList, TSocialList, TStackList } from "./_types";
import { appConfig } from "@/utils/configs/app.config";

const { github, daily, email } = appConfig()

export const socialList: TSocialList[] = [
    {
        id: '1',
        name: 'Github',
        social_url: github,
        icon: "mdi:github",
    },
    {
        id: '2',
        name: 'Daily.dev',
        social_url: daily,
        icon: "simple-icons:dailydotdev",
    },
    {
        id: '3',
        name: 'Gmail',
        social_url: `mailto:${email}`,
        icon: "carbon:email",
    },
]


export const stackList: TStackList[] = [
    { id: 1, icon: "skill-icons:javascript", name: "Javascript", layer: "Frontend" },
    { id: 2, icon: "skill-icons:typescript", name: "Typescript", layer: "Frontend" },
    { id: 3, icon: "skill-icons:react-dark", name: "React.js", layer: "Frontend" },
    { id: 4, icon: "skill-icons:nextjs-light", name: "Next.js", layer: "Frontend" },
    { id: 5, icon: "skill-icons:nodejs-dark", name: "Node.js", layer: "Backend" },
    { id: 6, icon: "skill-icons:expressjs-light", name: "Express.js", layer: "Backend" },
    { id: 7, icon: "vscode-icons:file-type-expo", name: "React Native", layer: "Frontend" },
    { id: 8, icon: "skill-icons:postgresql-dark", name: "Postgres", layer: "Database" },
    { id: 9, icon: "skill-icons:html", name: "HTML", layer: "Frontend" },
    { id: 10, icon: "skill-icons:css", name: "CSS", layer: "Frontend" },
    { id: 11, icon: "skill-icons:tailwindcss-dark", name: "Tailwind", layer: "Frontend" },
    { id: 12, icon: "skill-icons:supabase-dark", name: "Supabase", layer: "Backend" },
]



export const projectList: IProjectList[] = [
    {
        id: '1',
        title: 'E-commerce Website',
        description: 'A fully responsive e-commerce platform built with React and Node.js. Features include product browsing, cart functionality, user authentication, and payment processing integration. The project demonstrates advanced state management with Redux and server-side rendering for improved performance.',
        category: 'Web Development',
        date: 'April 2025',
        technologies: [
            { icon: "material-icon-theme:react", name: 'React.js' },
            { icon: "vscode-icons:file-type-node", name: 'Node.js' },
            { icon: "skill-icons:expressjs-light", name: 'Express.js' },
            { icon: "vscode-icons:file-type-mongo", name: 'MongoDB' },
            { icon: "material-icon-theme:redux-action", name: 'Redux' },
            { icon: "logos:stripe", name: 'Stripe API' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
        demo_url: 'https://example.com',
        repo_url: ['https://github.com']
    },
    {
        id: '2',
        title: 'Finance Dashboard',
        description: 'An interactive dashboard for financial data visualization. Includes real-time data updates, interactive charts, and customizable widgets. This project showcases advanced data visualization techniques and responsive design principles.',
        category: 'Data Visualization',
        date: 'March 2025',
        technologies: [
            { icon: "material-icon-theme:react", name: 'React.js' },
            { icon: "", name: 'D3.js' },
            { icon: "", name: 'TypeScript' },
            { icon: "", name: 'Firebase' },
            { icon: "", name: 'Tailwind CSS' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
        demo_url: 'https://example.com',
        repo_url: ['https://github.com']
    },
    {
        id: '3',
        title: 'Task Management App',
        description: 'A productivity application for managing tasks and projects with team collaboration features. Includes drag-and-drop functionality, task assignments, deadline tracking, and notification system.',
        category: 'Productivity',
        date: 'February 2025',
        technologies: [
            { icon: "material-icon-theme:react", name: 'React.js' },
            { icon: "", name: 'Firebase' },
            { icon: "", name: 'Material UI' },
            { icon: "", name: 'Redux' },
            { icon: "", name: 'React DnD' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
        demo_url: 'https://example.com',
        repo_url: ['https://github.com']
    },
    {
        id: '4',
        title: 'Social Media Platform',
        description: 'A social networking platform with real-time messaging, post creation, user profiles, and content discovery. Features responsive design for mobile and desktop users.',
        category: 'Social Media',
        date: 'January 2025',
        technologies: [
            { icon: "material-icon-theme:react", name: 'React.js' },
            { icon: "vscode-icons:file-type-node", name: 'Node.js' },
            { icon: "", name: 'Socket.io' },
            { icon: "vscode-icons:file-type-mongo", name: 'MongoDB' },
            { icon: "", name: 'AWS S3' },
        ],
        thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'],
        demo_url: 'https://example.com',
        repo_url: ['https://github.com']
    },
];

export const experienceList: TExperienceList[] = [
    {
        id: 1,
        position: "Freelance Frontend Developer",
        company: "Codebility",
        duration: "Apr 2024 - Oct 2024",
        description: "Contributed to various web and mobile projects utilizing React.js, Next.js, React Native and Supabase, with a primary focus on transforming Figma designs into responsive and functional UI components."
    },

]

export const educationList: TExperienceList[] = [
    {
        id: 1,
        position: "Information Technology",
        company: "Quezon City University",
        duration: "Jun 2018 - Jun 2022",
        description: "Studied programming, web development, databases, and networking."
    },
    {
        id: 2,
        position: "Web Development Trainee",
        company: "Accenture",
        duration: "Oct 2023 - May 2024",
        description: "Completed hands-on training in web development, focusing on building responsive and user-friendly applications. Gained practical experience with front-end technologies such as HTML, CSS, JavaScript and SQL."
    }
]
