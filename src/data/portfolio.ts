export const portfolio = {
  name: 'Satish Chintal',
  role: 'SR DEVOPS ENGINEER',
  eyebrow: '01 / AI DEVOPS ENGINEER • GENPACT',
  taglineTop: 'AI DEVOPS',
  taglineBottom: 'CLOUD SYSTEMS',
  bio: 'Sr DevOps Engineer at Genpact specializing in cloud automation, platform reliability, and AI-native engineering workflows. I help teams move from traditional DevOps into AI DevOps with secure infrastructure, observability, and delivery systems built for scale.',
  principle: 'Bridge traditional DevOps with AI-native delivery. Automate. Observe. Scale. Optimize.',
  seoSummary: 'Sr DevOps Engineer at Genpact helping teams transition from legacy DevOps to AI DevOps through cloud automation, infrastructure design, CI/CD, observability, and AI platform enablement.',
  services: [
    { title: 'AI DevOps Strategy', description: 'Helping engineering teams shift from legacy operations into AI-ready delivery patterns with automation, governance, and scalable platform thinking.' },
    { title: 'Cloud & Infrastructure Engineering', description: 'Designing resilient AWS, Kubernetes, Terraform, and CI/CD systems that support secure, high-performing production workloads.' },
    { title: 'Observability & Reliability', description: 'Building telemetry, monitoring, and operational workflows that improve uptime, reduce incident churn, and support production scale.' },
    { title: 'AI Infrastructure Enablement', description: 'Bridging software delivery and AI adoption using MLOps, model access patterns, toolchain automation, and production-ready AI workflows.' }
  ],
  metrics: [
    { value: 'JUN 2026', label: 'CURRENT ROLE START' },
    { value: 'GENPACT', label: 'CURRENT COMPANY' },
    { value: 'AI', label: 'DEVOPS JOURNEY' },
    { value: 'YOUTUBE', label: 'SATISH AI DEVOPS' }
  ],
  skills: {
    Languages: ['Python', 'Shell', 'TypeScript'],
    Frontend: ['Next.js', 'React', 'Tailwind CSS'],
    Backend: ['FastAPI', 'APIs', 'AI SDKs'],
    Databases: ['Aurora', 'DynamoDB', 'OpenSearch'],
    'Cloud & DevOps': ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'CloudWatch'],
    'Core CS': ['Linux', 'Networking', 'Systems', 'Security', 'Observability', 'FinOps']
  },
  projects: [
    { number:'01', title:'AI DevOps Transformation', description:'Modernizing delivery pipelines and infrastructure practices to enable AI-powered engineering workflows across teams and environments.', stack:['DevOps','AWS','Terraform','CI/CD','Observability','AI Workflows'] },
    { number:'02', title:'Automation + Reliability Engineering', description:'Designing scalable, secure, and resilient platform operations with infrastructure as code, monitoring, and service reliability practices.', stack:['Linux','Python','AWS','Docker','Kubernetes','GitHub Actions'] },
    { number:'03', title:'YouTube AI DevOps Journey', description:'Sharing real-world learnings on the transition from traditional DevOps to AI DevOps, practical systems, and engineering stories.', stack:['AI DevOps','Cloud','Automation','Learning','Engineering'] }
  ],
  journey: [
    { type:'work', date:'JUN 2026 - PRESENT', title:'Sr DevOps Engineer · Genpact', text:'Leading cloud automation, infrastructure reliability, and the shift from traditional DevOps toward AI DevOps within enterprise systems.' },
    { type:'work', date:'DEVOPS FOUNDATION', title:'Cloud Infrastructure & Automation', text:'Designing and operating resilient AWS-based environments with Terraform, CI/CD, deployment automation, and platform standardization.' },
    { type:'work', date:'PLATFORM ENGINEERING', title:'Operations & Reliability', text:'Improving system performance, incident response, monitoring coverage, and deployment predictability across production environments.' },
    { type:'work', date:'AI DEVOPS', title:'AI-Ready Delivery Systems', text:'Extending DevOps practices to AI-enabled platforms through automation, observability, governance, and scalable engineering workflows.' }
  ],
  certifications: [
    { code:'AID-01', title:'AI / LLM FUNDAMENTALS', issuer:'Satish AI DevOps', date:'2026', competencies:['LLMs','Tokens','Inference','Embeddings'] },
    { code:'AID-04', title:'CLOUD ARCHITECTURE', issuer:'Satish AI DevOps', date:'2026', competencies:['AWS','IAM','VPC','S3'] },
    { code:'AID-05', title:'INFRASTRUCTURE AS CODE', issuer:'Satish AI DevOps', date:'2026', competencies:['Terraform','State','Modules','Environments'] },
    { code:'AID-11', title:'GENAI APPLICATION ENGINEERING', issuer:'Satish AI DevOps', date:'2026', competencies:['RAG','Bedrock','OpenSearch','Vector Search'] },
    { code:'AID-14', title:'AI SRE + OBSERVABILITY', issuer:'Satish AI DevOps', date:'2026', competencies:['CloudWatch','IAM','Secrets','Guardrails'] }
  ],
  socials: [
    { label:'GitHub', href:'https://github.com/satishchintal' },
    { label:'YouTube', href:'https://www.youtube.com/@SatishAIDevOps' },
    { label:'Instagram', href:'https://www.instagram.com/satishdevaiops/' },
    { label:'LinkedIn', href:'https://www.linkedin.com/' }
  ]
} as const
