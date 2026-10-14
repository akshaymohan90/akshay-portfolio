export type Award = {
  name: string;
  publisher: string;
  year: number;
  image: string;
};

export const awards: Award[] = [
  {
    name: "Data Science, ML & MLOps Program",
    publisher: "Skillianz • Professional Certification",
    year: 2026,
    image: "/assets/images/section/work-2.jpg",
  },
  {
    name: "B.Tech in Computer Science & Engineering",
    publisher: "UKF College of Engineering and Technology",
    year: 2023,
    image: "/assets/images/section/work-3.jpg",
  },
  {
    name: "Production RAG & Vector Search System",
    publisher: "AI Engineering Milestone • ChromaDB & Groq LLM",
    year: 2026,
    image: "/assets/images/section/work-1.jpg",
  },
  {
    name: "Enterprise HRMS & Scalable REST APIs",
    publisher: "GDMR Foundation • System Efficiency +25%",
    year: 2025,
    image: "/assets/images/section/work-3.jpg",
  },
  {
    name: "CI/CD Pipeline Automation & 90% Build Reduction",
    publisher: "DevOps & Cloud Deployment Milestone",
    year: 2026,
    image: "/assets/images/section/work-1.jpg",
  },
];
