export type Testimonial = {
  text: string;
  authorName: string;
  authorRole: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "Akshay engineered secure, high-performance REST APIs that significantly accelerated our development cycles and improved overall system efficiency by 25%. His discipline with CI/CD and clean architecture is exceptional.",
    authorName: "Rajesh Varma",
    authorRole: "Technical Lead, GDMR Foundation",
    image: "/assets/images/section/tes-1.jpg",
  },
  {
    text: "Akshay's transition into AI/ML is backed by rigorous hands-on problem solving. From deep correlation analysis to production RAG pipeline deployments, his work demonstrates both analytical precision and end-to-end engineering excellence.",
    authorName: "Dr. Ananya Nair",
    authorRole: "Lead Mentor, Skillianz AI & MLOps",
    image: "/assets/images/section/tes-2.jpg",
  },
  {
    text: "At Websorbz, Akshay consistently delivered fast, reliable web implementations. He has a rare ability to bridge solid software engineering fundamentals with forward-looking machine learning systems.",
    authorName: "Marcus Vance",
    authorRole: "Engineering Manager, Websorbz Pvt Ltd",
    image: "/assets/images/section/tes-3.jpg",
  },
];
