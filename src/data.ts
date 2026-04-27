export const resumeData = {
  name: "Abdul Karim Ansari",
  title: "Node.js Backend Engineer (SDE-2)",
  tagline: "Specializing in Distributed Systems & Agentic AI Workflows",
  contact: {
    email: "abdulkarimansari2000@gmail.com",
    phone: "+91 9799528774",
    location: "Remote, India",
    github: "github.com/ak-ansari",
    linkedin: "linkedin.com/in/ak-ansari",
    availability: "30 Days"
  },
  summary: "Node.js Backend Engineer (SDE-2) with 4+ years of experience building high-throughput distributed systems. Expert in NestJS, Kafka-based event-driven architecture, and Redis-driven performance optimization. Currently scaling agentic AI workflows and LLM-powered backend systems.",
  skills: [
    { category: "Languages", items: ["Node.js", "TypeScript", "Go", "JavaScript"] },
    { category: "Frameworks", items: ["NestJS", "Express.js", "REST APIs", "WebSockets", "gRPC"] },
    { category: "Frontend", items: ["React", "Next.js", "Angular", "Tailwind CSS"] },
    { category: "Architecture", items: ["Microservices", "Event-Driven", "Clean Architecture", "CQRS", "API Gateway", "Load Balancing"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis (Caching, Rate Limiting)", "TypeORM"] },
    { category: "Messaging", items: ["Kafka", "BullMQ", "RabbitMQ"] },
    { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS (EC2, S3)", "GitLab CI/CD", "Nginx", "Linux", "MinIO"] },
    { category: "Emerging", items: ["Agentic AI", "LLM API Integration", "AI Workflow Orchestration", "LangChain"] }
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Solar Square",
      period: "Jul 2025 – Present",
      location: "Remote, India",
      highlights: [
        "Architected migration of legacy monolith into NestJS/Node.js microservices using Clean Architecture and Dependency Inversion — achieving 30% system performance improvement.",
        "Engineered backend services handling ~1,000 req/sec with optimised DB access patterns and Redis caching.",
        "Implemented Redis-based rate limiting and horizontal scaling strategies for ~1M users.",
        "Designed micro-frontend architecture with API Gateway layer, reducing release cycle times."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "IDCLE Tech LLP",
      period: "Aug 2022 – Jul 2025",
      location: "Remote, India",
      highlights: [
        "Led a 4-member engineering pod delivering 3+ enterprise applications with 25% faster development cycles.",
        "Designed Kafka-based event-driven systems using NestJS microservices for decoupled high-throughput services.",
        "Built real-time features using WebSockets for live notifications and collaborative experiences.",
        "Optimised MongoDB schemas and SQL queries across ~3M records, improving retrieval speeds by 30%."
      ]
    }
  ],
  projects: [
    {
      title: "AI Clinical Agent",
      client: "Ongoing Research",
      tech: ["Go", "Node.js", "OpenAI API", "LangChain", "JWT", "Context Management"],
      description: "An agentic diagnostic system that iteratively asks follow-up questions to refine medical diagnoses.",
      details: [
        "Designed a multi-step agent orchestration backend with complex context state management.",
        "Implemented intelligent tool routing for specialized medical knowledge retrieval.",
        "Engineered an explainability-first output structure to provide clinical reasoning for every recommendation."
      ]
    },
    {
      title: "MyTube — Distributed Video Pipeline",
      client: "Personal Project",
      tech: ["Go", "FFmpeg", "Goroutines", "Redis", "Distributed Systems"],
      description: "A YouTube-style video processing system engineered for high concurrency and horizontal scale.",
      details: [
        "Leveraged Go goroutines and worker-pool patterns for parallel video encoding and transcoding.",
        "Implemented a queue-based architecture to handle decoupled processing of large media files.",
        "Demonstrated practical implementation of dynamic concurrency management under heavy loads."
      ]
    },
    {
      title: "SIMS — School Information Management System",
      client: "IDCLE Tech LLP",
      tech: ["NestJS", "TypeScript", "Kafka", "PostgreSQL", "Redis", "React", "SSO", "RBAC"],
      description: "Multi-tenant SaaS platform where each school operates on an isolated PostgreSQL database.",
      details: [
        "Architected the tenant resolution layer ensuring zero cross-tenant data leakage.",
        "Designed and implemented SSO and RBAC from scratch, supporting granular permission management.",
        "Built an event-driven notification service using Kafka for async inter-service communication."
      ]
    },
    {
      title: "OMS — Order Management System",
      client: "Solar Square",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Go", "MongoDB", "React", "Next.js"],
      description: "Led the migration of legacy OMS modules to a modern, redesigned microservices architecture.",
      details: [
        "Optimised critical API response times, significantly reducing P95 latency for high-traffic endpoints.",
        "Built 'go-ferry', a Go-based data service that streams MongoDB change streams into PostgreSQL relational tables."
      ]
    },
    {
      title: "MongoDB Audit Log Plugin",
      highlight: "Solo Design & Build",
      tech: ["NestJS", "TypeScript", "Kafka", "MongoDB", "Mongoose"],
      description: "Enterprise-grade audit logging system securing 200+ APIs without code duplication.",
      details: [
        "Built a plug-and-play Mongoose plugin using pre/post hooks for seamless integration.",
        "Streaming architecture: state changes captured → Kafka → worker computes diffs → structured logs."
      ]
    }
  ],
  education: {
    degree: "B.Tech — Computer Science",
    institution: "Rajasthan Technical University",
    period: "2016 – 2020"
  }
};
