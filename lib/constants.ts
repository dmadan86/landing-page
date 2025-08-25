// lib/constants.ts
export const COMPANY_NAME = "CoreSight";
export const COMPANY_DOMAIN = "digitalagents.ai";

export const EXTERNAL_LINKS = {
  community: "https://community.coresight.net",
};

export const CONTACT_INFO = {
  email: {
    sales: "hello@coresight.net",
    support: "support@coresight.net",
  },
  phone: "",
  address: {
    company: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  },
};

export const FEATURES = [
  {
    "title": "Rapid Reskill Initiative",
    "description": "Empowering cities and workforce boards to quickly upskill job seekers with in-demand AI and tech skills.",
    "icon": "backpack",
    "imagePath": "/images/features/feature1.png",
    "benefits": [
      "Accelerates job readiness for in-demand roles",
      "Supports economic development and workforce transformation",
      "Customizable learning paths tailored to local industry needs",
      "Partnership-driven reskilling programs"
    ]
  },
  {
    "title": "AI Sales Coach",
    "description": "An AI-powered coaching tool to help startups and revenue teams boost sales performance through real-time feedback and training.",
    "icon": "databasezap",
    "imagePath": "/images/features/feature2.png",
    "benefits": [
      "Real-time performance insights and coaching",
      "Improves sales efficiency and team productivity",
      "Enables personalized skill development",
      "Integrates easily with existing CRM tools"
    ]
  },
  {
    "title": "Voice Agent Accelerator",
    "description": "Accelerate onboarding and improve performance of call center agents with AI-driven voice training and analytics.",
    "icon": "audiolines",
    "imagePath": "/images/features/feature3.png",
    "benefits": [
      "Reduces onboarding time for new agents",
      "Enhances customer experience with better agent performance",
      "Provides actionable feedback through voice analytics",
      "Scales training across multiple teams and locations"
    ]
  }
]

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$299",
    priceDetail: "/month",
    description:
      "Perfect for small teams just getting started with AI assistance.",
    features: [
      "Up to 1,000 interactions per month",
      "Basic knowledge base integration",
      "Email & chat support",
      "Standard analytics dashboard",
      "2 team members",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$699",
    priceDetail: "/month",
    description: "Ideal for growing businesses with expanding teams.",
    features: [
      "Up to 5,000 interactions per month",
      "Advanced knowledge base integration",
      "Priority email & chat support",
      "Advanced analytics & reporting",
      "10 team members",
      "Custom workflows",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceDetail: "",
    description:
      "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited interactions",
      "Full knowledge base integration",
      "Dedicated support manager",
      "Custom analytics & reporting",
      "Unlimited team members",
      "Custom AI model training",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];
