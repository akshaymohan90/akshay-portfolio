export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  icon: { light: string; dark?: string; width: number; height: number };
};

export const educationItems: TimelineItem[] = [
  {
    period: "08/2026 – Present",
    role: "Software Developer • GDMR Foundation (Trivandrum)",
    description:
      "Developed high-performance web applications, improving system efficiency by 25%. Designed and deployed secure REST APIs and database models to support scalable backend services. Automated deployment pipelines using CI/CD tools, reducing weekly release times by 40%.",
    icon: {
      light: "/assets/images/item/edu-dev.svg",
      dark: "/assets/images/item/edu-dev.svg",
      width: 32,
      height: 32,
    },
  },
  {
    period: "03/2025 – 08/2026",
    role: "Junior Web Developer • GDMR Foundation (Trivandrum)",
    description:
      "Built and maintained WordPress-based systems, including an internal HRMS using React, Python, and MongoDB. Utilized AI-assisted tools to speed up development, enhance code quality, and streamline workflows — forming a solid foundation for AI/ML engineering.",
    icon: {
      light: "/assets/images/item/edu-web.svg",
      dark: "/assets/images/item/edu-web.svg",
      width: 32,
      height: 32,
    },
  },
  {
    period: "01/2024 – 03/2025",
    role: "Junior Web Developer • Websorbz Pvt Ltd (Kollam, India)",
    description:
      "Developed and maintained websites using WordPress, HTML, CSS, JavaScript. Integrated APIs, optimized performance, and improved UI/UX. Cultivated strong problem-solving and software engineering fundamentals transferable to ML systems.",
    icon: {
      light: "/assets/images/item/edu-web.svg",
      dark: "/assets/images/item/edu-web.svg",
      width: 32,
      height: 32,
    },
  },
  {
    period: "Ongoing Upskilling",
    role: "Data Science, Machine Learning & MLOps • Skillianz",
    description:
      "Hands-on experience building end-to-end ML pipelines with real-world datasets (20K+ samples), model evaluation, and feature importance analysis. Goal: building scalable AI systems at top product companies.",
    icon: {
      light: "/assets/images/item/edu-ai.svg",
      dark: "/assets/images/item/edu-ai.svg",
      width: 32,
      height: 32,
    },
  },
  {
    period: "08/2019 – 08/2023",
    role: "B.Tech in Computer Science & Engineering • UKF College of Engineering and Technology",
    description:
      "Kollam, India. Core coursework: Programming Fundamentals, Data Structures, Algorithms, Databases, Software Engineering. Strong foundation in problem-solving and computer science fundamentals supporting my transition into AI/ML Engineering.",
    icon: {
      light: "/assets/images/item/edu-degree.svg",
      dark: "/assets/images/item/edu-degree.svg",
      width: 32,
      height: 32,
    },
  },
];
