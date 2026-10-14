export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo?: string;
  liveUrl?: string;
  metrics?: string;
};

export const works: Work[] = [
  {
    title: "AI Career Intelligence Platform",
    description:
      "Full-stack web application that matches a user's resume against job postings using skill-extraction and a RAG pipeline (ChromaDB vector search + Groq LLM) with topic-scoped guardrails for AI-driven career guidance.",
    year: "2026 - Present",
    role: "Full-Stack & AI Engineer",
    tags: ["Next.js", "FastAPI", "Groq LLM", "ChromaDB", "Docker", "PostgreSQL"],
    image: "/assets/images/section/work-1.jpg",
    metrics: "90% Docker build time reduction • RAG pipeline • Railway & Vercel deploy",
  },
  {
    title: "California Housing Price Prediction",
    description:
      "End-to-end ML regression pipeline on the California Housing dataset (20,640 rows, 8 features). Evaluated Linear Regression baseline and Random Forest Regressor, achieving R² ≈ 0.81 and identifying Median Income as top predictor.",
    year: "2025 - 2026",
    role: "ML & Data Science Engineer",
    tags: ["Python", "scikit-learn", "pandas", "NumPy", "EDA", "Random Forest"],
    image: "/assets/images/section/work-2.jpg",
    metrics: "R² ≈ 0.81 • MAE ≈ 0.33 • RMSE ≈ 0.50 • 20,640 Samples",
  },
  {
    title: "Enterprise HRMS & Cloud Backend Systems",
    description:
      "High-performance internal Human Resource Management System and web platforms built with React, Python, and MongoDB. Engineered secure REST APIs and automated CI/CD deployment pipelines.",
    year: "2025 - 2026",
    role: "Software Developer • GDMR Foundation",
    tags: ["React", "Python", "MongoDB", "REST APIs", "CI/CD", "Agile"],
    image: "/assets/images/section/work-3.jpg",
    metrics: "25% System efficiency gain • 40% Weekly release time reduction",
  },
];
