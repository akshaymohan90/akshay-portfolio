export type Service = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  expanded: boolean;
};

export const services: Service[] = [
  {
    id: "service-1",
    title: "Machine Learning & Data Science",
    description:
      "Design and implement end-to-end ML regression and classification pipelines. Proficient in exploratory data analysis (EDA), feature importance analysis, hyperparameter tuning, model evaluation metrics (R², RMSE, MAE), and deploying models on real-world datasets.",
    tags: ["End-to-End ML Pipelines", "Feature Engineering", "Scikit-Learn", "EDA", "Random Forest Regressor"],
    images: ["/assets/images/section/work-2.jpg", "/assets/images/section/work-1.jpg"],
    expanded: true,
  },
  {
    id: "service-2",
    title: "RAG Pipelines & GenAI Integration",
    description:
      "Architect Retrieval-Augmented Generation (RAG) pipelines using vector databases (ChromaDB) and fast LLM inference (Groq, Gemini). Ground AI-driven advice with curated knowledge bases, structured JSON outputs, and topic-scoped guardrails.",
    tags: ["RAG Architecture", "Vector Search (ChromaDB)", "Groq LLM", "Prompt Engineering", "Guardrails"],
    images: ["/assets/images/section/work-1.jpg", "/assets/images/section/work-2.jpg"],
    expanded: false,
  },
  {
    id: "service-3",
    title: "Full-Stack Web & Scalable REST APIs",
    description:
      "Build robust, high-performance web systems and microservices. Layered router/service/repository backends with FastAPI and Python, paired with modern responsive Next.js & React frontends, secure JWT authentication, and SQL/NoSQL databases.",
    tags: ["FastAPI", "Next.js / React", "PostgreSQL / MongoDB", "REST APIs", "System Architecture"],
    images: ["/assets/images/section/work-3.jpg", "/assets/images/section/work-1.jpg"],
    expanded: false,
  },
  {
    id: "service-4",
    title: "Docker Containerization & CI/CD",
    description:
      "Automate delivery workflows and containerize full-stack applications with Docker. Optimize container build times by up to 90%, configure production environment splits, and automate CI/CD pipelines to slash weekly release times by 40%.",
    tags: ["Docker", "CI/CD Pipelines", "Railway & Vercel", "Build Optimization", "Production Triage"],
    images: ["/assets/images/section/work-3.jpg", "/assets/images/section/work-2.jpg"],
    expanded: false,
  },
];
