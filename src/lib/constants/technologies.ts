export const technologies = [
  // Frontend
  { name: "React",        category: "Frontend", slug: "react"        },
  { name: "Next.js",      category: "Frontend", slug: "nextjs"       },
  { name: "Angular",      category: "Frontend", slug: "angular"      },
  { name: "Vue.js",       category: "Frontend", slug: "vuejs"        },
  { name: "TypeScript",   category: "Frontend", slug: "typescript"   },
  { name: "Tailwind CSS", category: "Frontend", slug: "tailwindcss"  },
  // Mobile
  { name: "Flutter",      category: "Mobile",   slug: "flutter"      },
  { name: "React Native", category: "Mobile",   slug: "react native" },
  { name: "Swift",        category: "Mobile",   slug: "swift"        },
  { name: "Kotlin",       category: "Mobile",   slug: "kotlin"       },
  // Backend
  { name: "Node.js",      category: "Backend",  slug: "nodejs"       },
  { name: "Python",       category: "Backend",  slug: "python"       },
  { name: "Java",         category: "Backend",  slug: "java"         },
  { name: "Spring Boot",  category: "Backend",  slug: "springboot"   },
  { name: ".NET",         category: "Backend",  slug: "dotnet"       },
  { name: "Laravel",      category: "Backend",  slug: "laravel"      },
  { name: "PHP",          category: "Backend",  slug: "php"          },
  { name: "Express",      category: "Backend",  slug: "express"      },
  // Database
  { name: "PostgreSQL",   category: "Database", slug: "postgresql"   },
  { name: "MySQL",        category: "Database", slug: "mysql"        },
  { name: "MongoDB",      category: "Database", slug: "mongodb"      },
  { name: "SQL Server",   category: "Database", slug: "sqlserver"    },
  { name: "Oracle",       category: "Database", slug: "oracle"       },
  { name: "Redis",        category: "Database", slug: "redis"        },
  { name: "Firebase",     category: "Database", slug: "firebase"     },
  { name: "Supabase",     category: "Database", slug: "supabase"     },
  // Cloud
  { name: "AWS",          category: "Cloud",    slug: "aws"          },
  { name: "Azure",        category: "Cloud",    slug: "azure"        },
  { name: "Google Cloud", category: "Cloud",    slug: "googlecloud"  },
  { name: "Docker",       category: "Cloud",    slug: "docker"       },
  { name: "Kubernetes",   category: "Cloud",    slug: "kubernetes"   },
  { name: "Vercel",       category: "Cloud",    slug: "vercel"       },
  { name: "Netlify",      category: "Cloud",    slug: "netlify"      },
  // AI
  { name: "TensorFlow",   category: "AI",       slug: "tensorflow"   },
  { name: "LangChain",    category: "AI",       slug: "langchain"    },
  // DevOps
  { name: "GitHub",       category: "DevOps",   slug: "github"       },
  { name: "GitLab",       category: "DevOps",   slug: "gitlab"       },
  { name: "GraphQL",      category: "DevOps",   slug: "graphql"      },
  { name: "Prisma",       category: "DevOps",   slug: "prisma"       },
  { name: "Figma",        category: "DevOps",   slug: "figma"        },
] as const;

export const techCategories = ["All", "Frontend", "Mobile", "Backend", "Database", "Cloud", "AI", "DevOps"] as const;

export type TechCategory = (typeof techCategories)[number];
export type Technology = (typeof technologies)[number];
