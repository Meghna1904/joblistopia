
import { Job, JobCategory, JobType } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const generateJobId = () => uuidv4();

export const jobsData: Job[] = [
  {
    id: generateJobId(),
    title: "Senior Frontend Developer",
    company: "TechGlobe Inc.",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    category: "Technology",
    type: "Full-time",
    experience: "5+ years",
    skills: ["React", "TypeScript", "CSS", "HTML", "JavaScript"],
    description: "We are looking for an experienced Frontend Developer to join our team. The ideal candidate should have a strong understanding of React, TypeScript, and modern frontend development practices.",
    responsibilities: [
      "Develop high-quality, responsive user interfaces using React and TypeScript",
      "Collaborate with UX/UI designers to translate wireframes into functional components",
      "Work with backend developers to integrate APIs and services",
      "Optimize applications for maximum speed and scalability",
      "Implement and maintain code quality standards and best practices"
    ],
    requirements: [
      "5+ years of experience in frontend development",
      "Strong proficiency in React, TypeScript, and modern JavaScript",
      "Experience with state management libraries (Redux, MobX, etc.)",
      "Familiarity with modern build tools and workflows",
      "BSc in Computer Science or equivalent practical experience"
    ],
    benefits: [
      "Competitive salary and equity options",
      "Comprehensive health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "Generous paid time off"
    ],
    posted: "2023-09-15",
    featured: true
  },
  {
    id: generateJobId(),
    title: "UX/UI Designer",
    company: "DesignCraft Studio",
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    category: "Design",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Figma", "Sketch", "Adobe Creative Suite", "Prototyping", "User Research"],
    description: "DesignCraft Studio is seeking a talented UX/UI Designer to create intuitive and engaging user experiences for our clients' digital products.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Collaborate with product managers and developers",
      "Design cohesive user interfaces and design systems",
      "Present design concepts to clients and stakeholders"
    ],
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools like Figma, Sketch, and Adobe Creative Suite",
      "Strong portfolio showcasing user-centered design approach",
      "Experience in user research and testing methodologies",
      "Excellent communication and presentation skills"
    ],
    benefits: [
      "Competitive salary",
      "Health benefits package",
      "Flexible work environment",
      "Professional development opportunities",
      "Creative studio space"
    ],
    posted: "2023-09-18",
    featured: true
  },
  {
    id: generateJobId(),
    title: "Data Scientist",
    company: "DataSphere Analytics",
    location: "Remote",
    salary: "$130,000 - $160,000",
    category: "Technology",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
    description: "DataSphere Analytics is looking for a Data Scientist to help extract valuable insights from complex datasets and develop machine learning models.",
    responsibilities: [
      "Analyze complex datasets and extract actionable insights",
      "Develop and implement machine learning models",
      "Create data visualizations and reports",
      "Collaborate with cross-functional teams to identify business opportunities",
      "Present findings to non-technical stakeholders"
    ],
    requirements: [
      "4+ years of experience in data science or related field",
      "Strong programming skills in Python and experience with ML libraries",
      "Proficiency in SQL and database technologies",
      "Experience with data visualization tools",
      "MS or PhD in Computer Science, Statistics, or related field"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive benefits package",
      "Remote work flexibility",
      "Professional development budget",
      "Regular team events and retreats"
    ],
    posted: "2023-09-10",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Marketing Manager",
    company: "GrowthHarbor",
    location: "Boston, MA",
    salary: "$85,000 - $110,000",
    category: "Marketing",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Digital Marketing", "Social Media", "Content Strategy", "SEO", "Analytics"],
    description: "GrowthHarbor is seeking a Marketing Manager to develop and execute strategic marketing initiatives to drive business growth.",
    responsibilities: [
      "Develop and implement comprehensive marketing strategies",
      "Manage digital marketing campaigns across multiple channels",
      "Create compelling content for various platforms",
      "Analyze marketing performance and optimize campaigns",
      "Collaborate with sales and product teams"
    ],
    requirements: [
      "4+ years of experience in marketing",
      "Strong understanding of digital marketing channels",
      "Experience with marketing analytics and tools",
      "Excellent communication and project management skills",
      "Bachelor's degree in Marketing or related field"
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Creative work environment"
    ],
    posted: "2023-09-12",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Financial Analyst",
    company: "Alpine Investments",
    location: "Chicago, IL",
    salary: "$80,000 - $100,000",
    category: "Finance",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Financial Modeling", "Excel", "Data Analysis", "Accounting", "Financial Reporting"],
    description: "Alpine Investments is looking for a Financial Analyst to support investment decision-making through financial analysis and reporting.",
    responsibilities: [
      "Build and maintain financial models",
      "Analyze financial data and prepare reports",
      "Support due diligence processes for investments",
      "Monitor performance of existing investments",
      "Present financial insights to the investment team"
    ],
    requirements: [
      "2+ years of experience in financial analysis or related field",
      "Strong proficiency in Excel and financial modeling",
      "Understanding of accounting principles and financial statements",
      "Analytical mindset and attention to detail",
      "Bachelor's degree in Finance, Accounting, or related field"
    ],
    benefits: [
      "Competitive salary and bonus structure",
      "Comprehensive benefits package",
      "Professional development and certification support",
      "Collaborative work environment",
      "Career advancement opportunities"
    ],
    posted: "2023-09-14",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Backend Engineer",
    company: "CloudScale Systems",
    location: "Seattle, WA",
    salary: "$115,000 - $145,000",
    category: "Technology",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Node.js", "Python", "AWS", "Databases", "API Design"],
    description: "CloudScale Systems is seeking a Backend Engineer to design and develop scalable, high-performance services and APIs.",
    responsibilities: [
      "Design and implement backend services and APIs",
      "Optimize application performance and scalability",
      "Collaborate with frontend developers and DevOps teams",
      "Write clean, maintainable, and testable code",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "3+ years of experience in backend development",
      "Proficiency in Node.js, Python, or similar languages",
      "Experience with cloud services (AWS, GCP, Azure)",
      "Strong understanding of database technologies",
      "BS in Computer Science or equivalent experience"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Generous health benefits",
      "Flexible remote work policy",
      "Learning and development budget",
      "Modern, collaborative workspace"
    ],
    posted: "2023-09-11",
    featured: true
  },
  {
    id: generateJobId(),
    title: "Product Manager",
    company: "InnovateLab",
    location: "Austin, TX",
    salary: "$110,000 - $140,000",
    category: "Technology",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Product Development", "User Research", "Agile Methodologies", "Data Analysis", "Strategic Planning"],
    description: "InnovateLab is looking for a Product Manager to drive the strategy and execution of our digital products from concept to launch.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Conduct user research and gather requirements",
      "Collaborate with design and engineering teams",
      "Prioritize features and manage product backlog",
      "Analyze product metrics and drive continuous improvement"
    ],
    requirements: [
      "4+ years of experience in product management",
      "Experience shipping successful software products",
      "Strong analytical and problem-solving skills",
      "Excellent communication and leadership abilities",
      "Bachelor's degree in a relevant field"
    ],
    benefits: [
      "Competitive salary and equity",
      "Comprehensive health coverage",
      "Flexible work arrangements",
      "Professional development budget",
      "Team offsites and events"
    ],
    posted: "2023-09-09",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Nurse Practitioner",
    company: "Wellness Health Partners",
    location: "Denver, CO",
    salary: "$95,000 - $120,000",
    category: "Healthcare",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Patient Care", "Medical Diagnosis", "Treatment Planning", "Electronic Health Records", "Clinical Procedures"],
    description: "Wellness Health Partners is seeking a Nurse Practitioner to provide compassionate and comprehensive patient care in our primary care clinic.",
    responsibilities: [
      "Perform comprehensive health assessments",
      "Diagnose and treat acute and chronic conditions",
      "Prescribe medications and treatments",
      "Collaborate with physicians and healthcare team members",
      "Educate patients on health maintenance and disease prevention"
    ],
    requirements: [
      "Current NP license in Colorado",
      "3+ years of experience as a Nurse Practitioner",
      "Master's degree in Nursing",
      "Strong clinical skills and patient-centered approach",
      "Experience with electronic health record systems"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Professional liability insurance coverage",
      "Continuing education allowance",
      "Balanced work schedule",
      "Supportive team environment"
    ],
    posted: "2023-09-16",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Elementary School Teacher",
    company: "Bright Horizons Academy",
    location: "Portland, OR",
    salary: "$55,000 - $70,000",
    category: "Education",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Curriculum Development", "Classroom Management", "Student Assessment", "Teaching Methods", "Communication"],
    description: "Bright Horizons Academy is looking for a passionate Elementary School Teacher to inspire and educate our students in grades 3-5.",
    responsibilities: [
      "Develop and implement engaging lesson plans",
      "Create a positive and inclusive learning environment",
      "Assess student performance and provide feedback",
      "Communicate with parents about student progress",
      "Participate in school events and team meetings"
    ],
    requirements: [
      "Valid teaching license",
      "2+ years of elementary teaching experience",
      "Bachelor's degree in Education or related field",
      "Strong classroom management skills",
      "Passion for student growth and development"
    ],
    benefits: [
      "Competitive salary based on experience",
      "Health insurance and retirement plan",
      "Summer break and holidays",
      "Professional development opportunities",
      "Supportive teaching community"
    ],
    posted: "2023-09-13",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Mechanical Engineer",
    company: "Precision Engineering Solutions",
    location: "Detroit, MI",
    salary: "$85,000 - $110,000",
    category: "Engineering",
    type: "Full-time",
    experience: "3+ years",
    skills: ["CAD", "Product Design", "Structural Analysis", "Prototyping", "Manufacturing Processes"],
    description: "Precision Engineering Solutions is seeking a Mechanical Engineer to design innovative products and solutions for our automotive clients.",
    responsibilities: [
      "Design mechanical systems and components",
      "Create 3D models and detailed drawings using CAD software",
      "Conduct structural and thermal analyses",
      "Develop prototypes and conduct testing",
      "Collaborate with cross-functional teams on project execution"
    ],
    requirements: [
      "3+ years of experience in mechanical engineering",
      "Proficiency with CAD software (SolidWorks, AutoCAD)",
      "Knowledge of manufacturing processes and materials",
      "Strong analytical and problem-solving skills",
      "BS in Mechanical Engineering"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Collaborative work environment",
      "Employee recognition programs"
    ],
    posted: "2023-09-17",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Customer Success Manager",
    company: "ClientFirst Solutions",
    location: "Remote",
    salary: "$70,000 - $90,000",
    category: "Customer Service",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Client Relationship Management", "Problem Solving", "Communication", "Software Platforms", "Project Management"],
    description: "ClientFirst Solutions is looking for a Customer Success Manager to ensure our clients achieve their goals using our SaaS platform.",
    responsibilities: [
      "Onboard new clients and provide ongoing support",
      "Develop strong relationships with key stakeholders",
      "Identify opportunities for account growth and expansion",
      "Monitor client health metrics and address concerns",
      "Collaborate with product and sales teams"
    ],
    requirements: [
      "2+ years of experience in customer success or account management",
      "Strong communication and relationship-building skills",
      "Problem-solving ability and proactive approach",
      "Experience with CRM and customer success tools",
      "Bachelor's degree or equivalent experience"
    ],
    benefits: [
      "Competitive base salary plus performance bonuses",
      "Comprehensive benefits package",
      "Remote work flexibility",
      "Career advancement opportunities",
      "Collaborative team culture"
    ],
    posted: "2023-09-08",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Sales Representative",
    company: "GrowthForce Enterprises",
    location: "Miami, FL",
    salary: "$60,000 - $90,000 + Commission",
    category: "Sales",
    type: "Full-time",
    experience: "1+ years",
    skills: ["Negotiation", "Relationship Building", "CRM Software", "Presentation", "Lead Generation"],
    description: "GrowthForce Enterprises is seeking a motivated Sales Representative to identify and secure new business opportunities.",
    responsibilities: [
      "Develop new business through outbound prospecting",
      "Build and maintain relationships with clients",
      "Present product offerings and conduct demonstrations",
      "Negotiate contracts and close deals",
      "Meet and exceed sales targets"
    ],
    requirements: [
      "1+ years of experience in sales",
      "Strong communication and interpersonal skills",
      "Goal-oriented mindset and self-motivation",
      "Familiarity with CRM systems",
      "Bachelor's degree preferred"
    ],
    benefits: [
      "Competitive base salary plus uncapped commission",
      "Comprehensive benefits package",
      "Sales training and professional development",
      "Opportunity for advancement",
      "Dynamic work environment"
    ],
    posted: "2023-09-19",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Office Administrator",
    company: "Pinnacle Professional Services",
    location: "Philadelphia, PA",
    salary: "$45,000 - $55,000",
    category: "Administration",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Office Management", "Administrative Support", "Scheduling", "MS Office", "Communication"],
    description: "Pinnacle Professional Services is looking for an Office Administrator to manage day-to-day operations and provide administrative support.",
    responsibilities: [
      "Manage office operations and procedures",
      "Provide administrative support to executives and staff",
      "Maintain office supplies inventory",
      "Coordinate meetings, travel, and events",
      "Handle correspondence and phone calls"
    ],
    requirements: [
      "2+ years of experience in administrative roles",
      "Proficiency with Microsoft Office Suite",
      "Strong organizational and time management skills",
      "Excellent communication abilities",
      "High school diploma, Associate's degree preferred"
    ],
    benefits: [
      "Competitive salary",
      "Health benefits",
      "Paid time off",
      "Professional development opportunities",
      "Positive work environment"
    ],
    posted: "2023-09-15",
    featured: false
  },
  {
    id: generateJobId(),
    title: "DevOps Engineer",
    company: "CloudNineTech",
    location: "Seattle, WA",
    salary: "$110,000 - $140,000",
    category: "Technology",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Docker", "Kubernetes", "CI/CD", "Cloud Infrastructure", "Automation"],
    description: "CloudNineTech is seeking a DevOps Engineer to design, implement, and maintain our cloud infrastructure and CI/CD pipelines.",
    responsibilities: [
      "Design and implement cloud infrastructure using IaC principles",
      "Maintain and optimize CI/CD pipelines",
      "Automate deployment and operational processes",
      "Monitor system performance and troubleshoot issues",
      "Collaborate with development teams to improve delivery efficiency"
    ],
    requirements: [
      "3+ years of experience in DevOps or similar role",
      "Strong experience with cloud platforms (AWS, GCP, Azure)",
      "Proficiency with containerization and orchestration tools",
      "Scripting and automation skills",
      "BS in Computer Science or equivalent experience"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Professional development budget",
      "Collaborative work environment"
    ],
    posted: "2023-09-10",
    featured: true
  },
  {
    id: generateJobId(),
    title: "Graphic Designer",
    company: "Creative Spark Agency",
    location: "Los Angeles, CA",
    salary: "$65,000 - $85,000",
    category: "Design",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Adobe Creative Suite", "Typography", "Visual Design", "Brand Identity", "Illustration"],
    description: "Creative Spark Agency is looking for a talented Graphic Designer to create visually stunning designs for our diverse client base.",
    responsibilities: [
      "Create compelling visual designs for digital and print media",
      "Develop brand identities and style guides",
      "Design marketing materials and social media content",
      "Collaborate with creative team on client projects",
      "Present design concepts to clients"
    ],
    requirements: [
      "2+ years of professional design experience",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio demonstrating design expertise",
      "Understanding of design principles and trends",
      "Bachelor's degree in Graphic Design or related field"
    ],
    benefits: [
      "Competitive salary",
      "Health and wellness benefits",
      "Creative work environment",
      "Professional development opportunities",
      "Collaborative team culture"
    ],
    posted: "2023-09-14",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Content Writer",
    company: "Narrative Media Group",
    location: "Remote",
    salary: "$55,000 - $75,000",
    category: "Marketing",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Content Creation", "SEO", "Research", "Editing", "Social Media"],
    description: "Narrative Media Group is seeking a Content Writer to create engaging and informative content for our clients across various industries.",
    responsibilities: [
      "Create high-quality written content for websites, blogs, and social media",
      "Research topics and gather information for content creation",
      "Incorporate SEO best practices into content",
      "Edit and proofread content for clarity and accuracy",
      "Collaborate with marketing team on content strategy"
    ],
    requirements: [
      "2+ years of content writing experience",
      "Strong writing and editing skills",
      "Understanding of SEO principles",
      "Research capabilities and attention to detail",
      "Bachelor's degree in English, Journalism, or related field"
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Health benefits package",
      "Professional development opportunities",
      "Collaborative team environment"
    ],
    posted: "2023-09-12",
    featured: false
  },
  {
    id: generateJobId(),
    title: "HR Manager",
    company: "PeopleFirst Inc.",
    location: "Chicago, IL",
    salary: "$80,000 - $100,000",
    category: "Administration",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Recruitment", "Employee Relations", "HR Policies", "Benefits Administration", "Employment Law"],
    description: "PeopleFirst Inc. is looking for an HR Manager to oversee human resources functions and foster a positive workplace culture.",
    responsibilities: [
      "Develop and implement HR strategies and initiatives",
      "Manage recruitment and onboarding processes",
      "Administer employee benefits and compensation programs",
      "Handle employee relations issues and conflicts",
      "Ensure compliance with employment laws and regulations"
    ],
    requirements: [
      "4+ years of HR experience",
      "Knowledge of HR best practices and employment law",
      "Strong interpersonal and communication skills",
      "Problem-solving abilities and discretion",
      "Bachelor's degree in Human Resources or related field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Positive company culture"
    ],
    posted: "2023-09-11",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Mobile App Developer",
    company: "AppNova Technologies",
    location: "Austin, TX",
    salary: "$100,000 - $130,000",
    category: "Technology",
    type: "Full-time",
    experience: "3+ years",
    skills: ["React Native", "Swift", "Kotlin", "Mobile UI/UX", "API Integration"],
    description: "AppNova Technologies is seeking a Mobile App Developer to create innovative and user-friendly mobile applications for iOS and Android platforms.",
    responsibilities: [
      "Develop mobile applications using React Native, Swift, or Kotlin",
      "Collaborate with UI/UX designers to implement app interfaces",
      "Integrate RESTful APIs and backend services",
      "Optimize app performance and responsiveness",
      "Troubleshoot and debug applications"
    ],
    requirements: [
      "3+ years of mobile app development experience",
      "Proficiency in React Native and either Swift or Kotlin",
      "Understanding of mobile UI/UX principles",
      "Experience with RESTful APIs and third-party libraries",
      "BS in Computer Science or equivalent experience"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health benefits",
      "Flexible work arrangements",
      "Professional development budget",
      "Collaborative work environment"
    ],
    posted: "2023-09-13",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Social Media Manager",
    company: "Digital Pulse Marketing",
    location: "Miami, FL",
    salary: "$60,000 - $80,000",
    category: "Marketing",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Social Media Platforms", "Content Creation", "Community Management", "Analytics", "Campaign Planning"],
    description: "Digital Pulse Marketing is looking for a Social Media Manager to develop and implement social media strategies for our clients.",
    responsibilities: [
      "Create and manage content calendars for multiple social platforms",
      "Develop engaging social media content",
      "Grow and manage online communities",
      "Monitor social media metrics and create reports",
      "Stay updated on social media trends and best practices"
    ],
    requirements: [
      "2+ years of experience in social media management",
      "Proficiency with major social media platforms",
      "Experience with social media management tools",
      "Strong content creation and copywriting skills",
      "Understanding of social media analytics"
    ],
    benefits: [
      "Competitive salary",
      "Health benefits package",
      "Remote work flexibility",
      "Professional development opportunities",
      "Creative work environment"
    ],
    posted: "2023-09-16",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Project Manager",
    company: "NexusWorks",
    location: "Dallas, TX",
    salary: "$90,000 - $110,000",
    category: "Technology",
    type: "Full-time",
    experience: "4+ years",
    skills: ["Project Management", "Agile Methodologies", "Stakeholder Management", "Budgeting", "Risk Management"],
    description: "NexusWorks is seeking a Project Manager to lead cross-functional teams in delivering technology projects on time and within budget.",
    responsibilities: [
      "Plan and execute projects from initiation to completion",
      "Coordinate with stakeholders to define project scope and requirements",
      "Manage project timelines, resources, and budgets",
      "Identify and mitigate project risks",
      "Track project progress and provide regular updates"
    ],
    requirements: [
      "4+ years of project management experience",
      "PMP certification or equivalent",
      "Experience with Agile methodologies",
      "Strong leadership and communication skills",
      "Bachelor's degree in a relevant field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Collaborative work environment"
    ],
    posted: "2023-09-09",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Physical Therapist",
    company: "RehabHealth Partners",
    location: "Denver, CO",
    salary: "$75,000 - $95,000",
    category: "Healthcare",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Physical Therapy", "Patient Assessment", "Treatment Planning", "Rehabilitation", "Documentation"],
    description: "RehabHealth Partners is looking for a licensed Physical Therapist to provide high-quality care to patients recovering from injuries and surgeries.",
    responsibilities: [
      "Evaluate patients and develop treatment plans",
      "Provide therapeutic exercises and interventions",
      "Track patient progress and adjust treatment accordingly",
      "Educate patients on proper techniques and home exercises",
      "Maintain accurate patient records"
    ],
    requirements: [
      "Current Physical Therapy license",
      "2+ years of clinical experience",
      "Strong understanding of anatomy and physiology",
      "Excellent communication and interpersonal skills",
      "DPT degree from an accredited program"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Continuing education allowance",
      "Flexible scheduling options",
      "Supportive team environment"
    ],
    posted: "2023-09-18",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Remote",
    salary: "$70,000 - $90,000",
    category: "Technology",
    type: "Full-time",
    experience: "2+ years",
    skills: ["SQL", "Excel", "Data Visualization", "Statistical Analysis", "Python"],
    description: "Insight Analytics is seeking a Data Analyst to transform complex data into actionable insights that drive business decisions.",
    responsibilities: [
      "Collect and analyze large datasets using SQL and other tools",
      "Create visualizations and dashboards to communicate findings",
      "Identify trends and patterns in data",
      "Collaborate with stakeholders to understand business questions",
      "Present findings and recommendations to leadership"
    ],
    requirements: [
      "2+ years of experience in data analysis",
      "Proficiency in SQL and Excel",
      "Experience with data visualization tools (Tableau, Power BI)",
      "Basic programming skills (Python or R)",
      "Bachelor's degree in a quantitative field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Remote work flexibility",
      "Professional development opportunities",
      "Collaborative team environment"
    ],
    posted: "2023-09-15",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Executive Assistant",
    company: "Prestige Enterprises",
    location: "New York, NY",
    salary: "$60,000 - $80,000",
    category: "Administration",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Calendar Management", "Travel Coordination", "Communication", "Organization", "Discretion"],
    description: "Prestige Enterprises is looking for an Executive Assistant to provide high-level administrative support to our executive leadership team.",
    responsibilities: [
      "Manage complex calendars and schedule meetings",
      "Coordinate travel arrangements and prepare itineraries",
      "Handle sensitive information with confidentiality",
      "Prepare correspondence and presentations",
      "Plan and coordinate executive events"
    ],
    requirements: [
      "3+ years of experience as an executive assistant",
      "Strong organizational and time management skills",
      "Excellent written and verbal communication",
      "Proficiency in Microsoft Office Suite",
      "Bachelor's degree preferred"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Dynamic work environment",
      "Employee wellness program"
    ],
    posted: "2023-09-12",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Civil Engineer",
    company: "Structura Engineering",
    location: "Portland, OR",
    salary: "$80,000 - $100,000",
    category: "Engineering",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Structural Analysis", "AutoCAD", "Construction Documents", "Project Management", "Building Codes"],
    description: "Structura Engineering is seeking a Civil Engineer to design and oversee infrastructure projects in the greater Portland area.",
    responsibilities: [
      "Develop civil engineering designs and plans",
      "Perform calculations and analyze engineering data",
      "Prepare construction documents and specifications",
      "Coordinate with contractors and regulatory agencies",
      "Conduct site visits and inspections"
    ],
    requirements: [
      "3+ years of experience in civil engineering",
      "PE license or ability to obtain within 6 months",
      "Proficiency with AutoCAD and engineering software",
      "Knowledge of applicable building codes and regulations",
      "BS in Civil Engineering"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development support",
      "Flexible work schedule",
      "Collaborative team environment"
    ],
    posted: "2023-09-17",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Accountant",
    company: "Precision Financial Services",
    location: "Boston, MA",
    salary: "$65,000 - $85,000",
    category: "Finance",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Accounting Principles", "Financial Reporting", "General Ledger", "Tax Preparation", "Accounting Software"],
    description: "Precision Financial Services is looking for an Accountant to manage financial records, prepare reports, and ensure regulatory compliance.",
    responsibilities: [
      "Maintain accurate financial records and general ledger",
      "Prepare monthly, quarterly, and annual financial statements",
      "Assist with tax preparation and filing",
      "Reconcile accounts and resolve discrepancies",
      "Implement accounting procedures and controls"
    ],
    requirements: [
      "2+ years of accounting experience",
      "Strong knowledge of accounting principles and practices",
      "Proficiency with accounting software",
      "Attention to detail and analytical skills",
      "Bachelor's degree in Accounting or related field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "CPA exam support",
      "Flexible work arrangements"
    ],
    posted: "2023-09-13",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Customer Support Specialist",
    company: "TechAssist Solutions",
    location: "Remote",
    salary: "$45,000 - $60,000",
    category: "Customer Service",
    type: "Full-time",
    experience: "1+ years",
    skills: ["Customer Service", "Problem Solving", "Communication", "Technical Knowledge", "Ticketing Systems"],
    description: "TechAssist Solutions is seeking a Customer Support Specialist to provide exceptional service and technical assistance to our clients.",
    responsibilities: [
      "Respond to customer inquiries via phone, email, and chat",
      "Troubleshoot and resolve technical issues",
      "Document customer interactions in ticketing system",
      "Escalate complex issues to appropriate teams",
      "Contribute to knowledge base documentation"
    ],
    requirements: [
      "1+ years of customer support experience",
      "Strong communication and problem-solving skills",
      "Basic technical knowledge",
      "Ability to work in a fast-paced environment",
      "High school diploma, Associate's degree preferred"
    ],
    benefits: [
      "Competitive salary",
      "Health benefits",
      "Remote work flexibility",
      "Professional development opportunities",
      "Supportive team environment"
    ],
    posted: "2023-09-19",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Quality Assurance Analyst",
    company: "PrecisionSoft",
    location: "Raleigh, NC",
    salary: "$70,000 - $90,000",
    category: "Technology",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Manual Testing", "Automated Testing", "Test Planning", "Bug Tracking", "SDLC"],
    description: "PrecisionSoft is looking for a Quality Assurance Analyst to ensure the quality and reliability of our software products.",
    responsibilities: [
      "Develop and execute test plans and test cases",
      "Identify, document, and track software defects",
      "Perform manual and automated testing",
      "Collaborate with development team on issue resolution",
      "Participate in software release processes"
    ],
    requirements: [
      "2+ years of QA testing experience",
      "Knowledge of testing methodologies and best practices",
      "Experience with bug tracking and test management tools",
      "Basic understanding of programming concepts",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development opportunities",
      "Flexible work arrangements",
      "Collaborative work environment"
    ],
    posted: "2023-09-16",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Warehouse Manager",
    company: "GlobalLogistics Inc.",
    location: "Indianapolis, IN",
    salary: "$60,000 - $80,000",
    category: "Administration",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Inventory Management", "Logistics", "Team Leadership", "Warehouse Operations", "Safety Procedures"],
    description: "GlobalLogistics Inc. is seeking a Warehouse Manager to oversee daily operations and ensure efficient inventory management.",
    responsibilities: [
      "Manage warehouse staff and daily operations",
      "Oversee inventory receiving, storage, and shipping",
      "Implement and maintain safety standards",
      "Optimize warehouse layout and processes",
      "Coordinate with logistics and supply chain teams"
    ],
    requirements: [
      "3+ years of warehouse management experience",
      "Knowledge of inventory management systems",
      "Strong leadership and organizational skills",
      "Familiarity with safety regulations and procedures",
      "High school diploma, Associate's degree preferred"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Performance bonuses",
      "Career advancement opportunities",
      "Employee discount program"
    ],
    posted: "2023-09-14",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Cybersecurity Analyst",
    company: "SecureDefend Technologies",
    location: "Washington, DC",
    salary: "$90,000 - $120,000",
    category: "Technology",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Network Security", "Vulnerability Assessment", "Security Tools", "Incident Response", "Security Frameworks"],
    description: "SecureDefend Technologies is looking for a Cybersecurity Analyst to protect our systems and data from security threats and vulnerabilities.",
    responsibilities: [
      "Monitor systems for security breaches and investigate incidents",
      "Conduct vulnerability assessments and penetration testing",
      "Implement security measures and controls",
      "Develop and maintain security documentation",
      "Provide security awareness training"
    ],
    requirements: [
      "3+ years of experience in cybersecurity",
      "Security certifications (CompTIA Security+, CISSP, etc.)",
      "Experience with security tools and technologies",
      "Understanding of security frameworks and compliance requirements",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Professional development and certification support",
      "Flexible work arrangements",
      "Cutting-edge security environment"
    ],
    posted: "2023-09-11",
    featured: true
  },
  {
    id: generateJobId(),
    title: "Event Coordinator",
    company: "Stellar Events Group",
    location: "Nashville, TN",
    salary: "$45,000 - $65,000",
    category: "Marketing",
    type: "Full-time",
    experience: "2+ years",
    skills: ["Event Planning", "Vendor Management", "Budgeting", "Marketing", "Customer Service"],
    description: "Stellar Events Group is seeking an Event Coordinator to plan and execute successful events for our corporate and private clients.",
    responsibilities: [
      "Plan and coordinate all aspects of events from concept to completion",
      "Manage vendor relationships and contracts",
      "Create and manage event budgets",
      "Coordinate marketing and promotion for events",
      "Provide on-site management during events"
    ],
    requirements: [
      "2+ years of event planning experience",
      "Strong organizational and multitasking abilities",
      "Excellent communication and negotiation skills",
      "Experience with event management software",
      "Bachelor's degree in Event Management or related field"
    ],
    benefits: [
      "Competitive salary",
      "Health benefits package",
      "Flexible work schedule",
      "Professional development opportunities",
      "Dynamic work environment"
    ],
    posted: "2023-09-18",
    featured: false
  },
  {
    id: generateJobId(),
    title: "Research Scientist",
    company: "Innovation Research Labs",
    location: "San Diego, CA",
    salary: "$100,000 - $130,000",
    category: "Healthcare",
    type: "Full-time",
    experience: "5+ years",
    skills: ["Research Methodology", "Data Analysis", "Laboratory Techniques", "Scientific Writing", "Grant Writing"],
    description: "Innovation Research Labs is looking for a Research Scientist to lead investigations in biotechnology and contribute to scientific advancements.",
    responsibilities: [
      "Design and conduct scientific experiments",
      "Analyze research data and interpret results",
      "Publish findings in scientific journals",
      "Write grant proposals for research funding",
      "Mentor junior researchers and lab technicians"
    ],
    requirements: [
      "5+ years of research experience",
      "PhD in a relevant scientific field",
      "Publication record in peer-reviewed journals",
      "Experience with laboratory techniques and equipment",
      "Grant writing and funding acquisition experience"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Research funding opportunities",
      "Conference attendance support",
      "Collaborative research environment"
    ],
    posted: "2023-09-10",
    featured: true
  },
  {
    id: generateJobId(),
    title: "Restaurant Manager",
    company: "Gourmet Hospitality Group",
    location: "Chicago, IL",
    salary: "$55,000 - $70,000",
    category: "Customer Service",
    type: "Full-time",
    experience: "3+ years",
    skills: ["Food Service Management", "Staff Supervision", "Customer Service", "Inventory Management", "Budgeting"],
    description: "Gourmet Hospitality Group is seeking a Restaurant Manager to oversee daily operations and ensure exceptional dining experiences for our guests.",
    responsibilities: [
      "Manage restaurant operations and staff",
      "Ensure high-quality food and service standards",
      "Handle inventory, purchasing, and cost control",
      "Resolve customer concerns and build customer loyalty",
      "Implement marketing and promotional strategies"
    ],
    requirements: [
      "3+ years of restaurant management experience",
      "Strong leadership and customer service skills",
      "Knowledge of food safety regulations",
      "Experience with POS systems and inventory management",
      "Culinary background or education preferred"
    ],
    benefits: [
      "Competitive salary plus bonuses",
      "Health benefits",
      "Meal allowance",
      "Career advancement opportunities",
      "Employee discount program"
    ],
    posted: "2023-09-17",
    featured: false
  }
];

export const getJobs = () => {
  return jobsData;
};

export const getFeaturedJobs = () => {
  return jobsData.filter(job => job.featured);
};

export const getJobById = (id: string) => {
  return jobsData.find(job => job.id === id);
};

export const filterJobs = (options: {
  search?: string;
  categories?: JobCategory[];
  types?: JobType[];
  location?: string;
  experienceLevel?: string;
}) => {
  return jobsData.filter(job => {
    // Search filter (title, company, description)
    if (options.search && !job.title.toLowerCase().includes(options.search.toLowerCase()) && 
        !job.company.toLowerCase().includes(options.search.toLowerCase()) && 
        !job.description.toLowerCase().includes(options.search.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (options.categories && options.categories.length > 0 && !options.categories.includes(job.category)) {
      return false;
    }
    
    // Type filter
    if (options.types && options.types.length > 0 && !options.types.includes(job.type)) {
      return false;
    }
    
    // Location filter
    if (options.location && !job.location.toLowerCase().includes(options.location.toLowerCase())) {
      return false;
    }
    
    // Experience level filter
    if (options.experienceLevel) {
      const years = parseInt(job.experience.split('+')[0]);
      const reqYears = parseInt(options.experienceLevel.split('+')[0]);
      if (isNaN(years) || isNaN(reqYears) || years < reqYears) {
        return false;
      }
    }
    
    return true;
  });
};

export const getCategories = (): JobCategory[] => {
  return [...new Set(jobsData.map(job => job.category))];
};

export const getJobTypes = (): JobType[] => {
  return [...new Set(jobsData.map(job => job.type))];
};

export const getLocations = (): string[] => {
  return [...new Set(jobsData.map(job => job.location))];
};

// Example application storage - in a real app, this would be a database
let applications: { [key: string]: JobApplication[] } = {};

export const submitApplication = (application: JobApplication): boolean => {
  if (!applications[application.jobId]) {
    applications[application.jobId] = [];
  }
  
  applications[application.jobId].push(application);
  return true;
};

// For demonstrating posting a new job
export const addJob = (job: Omit<Job, "id">): Job => {
  const newJob = {
    ...job,
    id: generateJobId(),
    posted: new Date().toISOString().split('T')[0]
  };
  
  jobsData.unshift(newJob);
  return newJob;
};
