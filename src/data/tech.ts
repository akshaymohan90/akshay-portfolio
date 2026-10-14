export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Python (pandas, NumPy)",
    duty: "Data Science, Scripting & ML Workflows",
    image: { light: "/assets/images/section/tech-python.svg", width: 28, height: 28 },
    progress: 95,
  },
  {
    name: "Machine Learning & Scikit-Learn",
    duty: "Regression, Random Forest, Feature Engineering & EDA",
    image: { light: "/assets/images/section/tech-ml.svg", width: 28, height: 28 },
    progress: 90,
  },
  {
    name: "FastAPI & REST APIs",
    duty: "High-performance backend services & RAG pipelines",
    image: { light: "/assets/images/section/tech-fastapi.svg", width: 28, height: 28 },
    progress: 88,
  },
  {
    name: "React & Next.js",
    duty: "Full-stack frontend architecture & TypeScript interfaces",
    image: { light: "/assets/images/section/tech-react.svg", width: 28, height: 28 },
    progress: 85,
  },
  {
    name: "SQL & Databases (PostgreSQL, MongoDB)",
    duty: "Relational schemas, NoSQL document stores & data modeling",
    image: { light: "/assets/images/section/tech-sql.svg", width: 28, height: 28 },
    progress: 85,
  },
  {
    name: "Docker & CI/CD Pipelines",
    duty: "Containerized deployments, Railway/Vercel & release automation",
    image: { light: "/assets/images/section/tech-docker.svg", width: 28, height: 28 },
    progress: 82,
  },
];
