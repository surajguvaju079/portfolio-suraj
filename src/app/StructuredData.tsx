// src/components/StructuredData.tsx
// Drop this anywhere in your layout — it injects all JSON-LD schemas.
// Already included in layout.tsx above, but kept here as a standalone component
// so you can extend or swap schemas independently.

const BASE_URL = "https://surajguvaju.com.np";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Suraj Guvaju",
  givenName: "Suraj",
  familyName: "Guvaju",
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-Stack Engineer from Nepal with 5+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, TypeScript, and AWS.",
  email: "mailto:surajguvaju079@gmail.com", // update if needed
  sameAs: [
    "https://github.com/surajguvaju079",
    "https://np.linkedin.com/in/surajguvaju",
    BASE_URL,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressRegion: "Bagmati",
    addressCountry: "NP",
  },
  nationality: {
    "@type": "Country",
    name: "Nepal",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Terraform",
    "CI/CD",
    "Tailwind CSS",
    "Framer Motion",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Remote / Worldwide",
    },
    skills:
      "React, Next.js, TypeScript, Node.js, Python, Go, AWS, Docker, Kubernetes",
  },
  workExample: [
    {
      "@type": "CreativeWork",
      name: "NexusAI Platform",
      description:
        "Enterprise-grade AI platform processing 10M+ requests daily with real-time analytics.",
      url: BASE_URL,
    },
    {
      "@type": "CreativeWork",
      name: "FinFlow Pro",
      description:
        "Real-time financial analytics dashboard serving Fortune 500 companies.",
      url: BASE_URL,
    },
    {
      "@type": "CreativeWork",
      name: "CloudSync Engine",
      description: "Distributed file sync system handling petabytes of data globally.",
      url: BASE_URL,
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Suraj Guvaju",
  alternateName: "Suraj Guvaju Portfolio",
  url: BASE_URL,
  description:
    "Portfolio of Suraj Guvaju – Full-Stack Engineer from Nepal. React, Next.js, Node.js, TypeScript, AWS.",
  author: { "@id": `${BASE_URL}/#person` },
  inLanguage: "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${BASE_URL}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Experience",
      item: `${BASE_URL}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Blog",
      item: `${BASE_URL}/#blog`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: `${BASE_URL}/#contact`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Suraj Guvaju?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suraj Guvaju is a Full-Stack Software Engineer from Nepal with 5+ years of experience building scalable web applications for startups and enterprises worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Suraj Guvaju specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suraj specializes in React, Next.js, TypeScript, Node.js, Python, Go, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, and GraphQL.",
      },
    },
    {
      "@type": "Question",
      name: "Is Suraj Guvaju available for freelance or remote work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Suraj is open to remote opportunities worldwide. You can reach him through his portfolio at surajguvaju.com.np or via LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Suraj Guvaju based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suraj Guvaju is based in Kathmandu, Nepal, and works remotely with clients and teams worldwide.",
      },
    },
  ],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
