export interface Achievement {
  id: string
  title: string
  description: string
  type: 'Award' | 'Grant' | 'Competition' | 'Certification'
  date: string
  issuer?: string
  highlight?: string
  imageUrl?: string
}

export const achievementsData: Achievement[] = [
  // === Grants & Major Awards ===
  {
    id: 'defence-grant',
    title: '₹50,000 Defence R&D Grant',
    description: 'Awarded a coveted Defence Research & Development Grant for the GuardX Sentinel drone-integrated threat detection system at the International Conference on Air Defence and Security.',
    type: 'Grant',
    date: 'February 2026',
    issuer: 'Army AD College & NIST University',
    highlight: '₹50,000 Grant'
  },
  {
    id: 'chakravyuh-award',
    title: 'Best Innovation Award — Chakravyuh 1.0',
    description: 'Secured the 1st prize Best Innovation Award for GuardX Sentinel, recognized for exceptional hardware-software edge AI implementation under strict latency limits.',
    type: 'Award',
    date: 'January 2026',
    issuer: 'Chakravyuh 1.0 Innovation Challenge',
    highlight: 'Best Innovation'
  },
  {
    id: 'sih-finalist',
    title: 'Grand Finalist — Smart India Hackathon (SIH 2025)',
    description: 'Ranked among the Top 5 Finalists nationwide for Govt. of Odisha problem statement SIH25046 in the Hardware Edition with SegroBin smart waste system as Team CtrlOhm.',
    type: 'Competition',
    date: 'December 2025',
    issuer: 'Ministry of Education & AICTE, Govt. of India',
    highlight: 'Top 5 National Finalist'
  },
  {
    id: 'festronix-first',
    title: '1st Place — Web Development Competition',
    description: 'Clinched 1st place at Festronix 2K26 web engineering competition, building a responsive, high-performance web architecture under timed evaluation.',
    type: 'Competition',
    date: 'February 2026',
    issuer: 'GIFT Autonomous, Bhubaneswar',
    highlight: '1st Prize Winner'
  },
  {
    id: 'code-crusade',
    title: 'Winner — Code Crusade 4.0',
    description: 'Won 1st place in Code Crusade 4.0 algorithmic coding competition (1st & 2nd Year category) organized on HackerRank.',
    type: 'Competition',
    date: 'October 2025',
    issuer: 'Club Excel, NIST University',
    highlight: '1st Place Algorithm Contest'
  },

  // === Certifications & Training ===
  {
    id: 'vertex-ai-badge',
    title: 'Build & Deploy ML Solutions on Vertex AI',
    description: 'Earned official Google Cloud Skill Badge for machine learning workflow design, pipeline orchestration, model tuning, and cloud deployment on Google Cloud Platform.',
    type: 'Certification',
    date: 'October 2025',
    issuer: 'Google Cloud Platform',
    highlight: 'Google Cloud Skill Badge'
  },
  {
    id: 'deloitte-analytics',
    title: 'Data Analytics Job Simulation',
    description: 'Completed enterprise simulation by Deloitte Australia via Forage. Developed interactive Tableau visual dashboards and quantitative analysis spreadsheets.',
    type: 'Certification',
    date: 'September 2025',
    issuer: 'Deloitte Australia (Forage)',
    highlight: 'Tableau & Forensic Analytics'
  },
  {
    id: 'oosc-iitk',
    title: 'OOSC 3.0 Open-Source Conference',
    description: 'Participated in the Open-Source Software Conference hosted at IIT Kanpur by Canonical and Ubuntu, mastering Linux system internals and upstream open-source workflows.',
    type: 'Certification',
    date: 'September 2025',
    issuer: 'IIT Kanpur & Canonical / Ubuntu',
    highlight: 'Linux & Open Source'
  },
  {
    id: 'iot-internship',
    title: 'Internet of Things Industrial Training',
    description: 'Practical IoT engineering with Arduino Cloud, Blynk, TinkerCAD, OTA firmware updates, and Wi-Fi telemetric communication protocols.',
    type: 'Certification',
    date: 'May 2025',
    issuer: 'LaunchED Global',
    highlight: 'IoT & Telemetry'
  },
  {
    id: 'mechatronics-nist',
    title: 'IoT & Mechatronics Internship',
    description: 'Hands-on hardware development program with embedded Arduino systems, industrial sensors, electromechanical actuators, and cloud-integrated control circuits.',
    type: 'Certification',
    date: 'July 2025',
    issuer: 'NIST University',
    highlight: 'Embedded Automation'
  },
  {
    id: 'devops-webinar',
    title: 'DevOps & Cloud Pipelines Certification',
    description: 'Intensive engineering seminar on modern CI/CD pipelines, containerization principles, and developer operations.',
    type: 'Certification',
    date: 'September 2025',
    issuer: 'Google Developer Groups & Malla Reddy Engg College',
    highlight: 'CI/CD & DevOps'
  },
  {
    id: 'vertex-gemini-intl',
    title: 'International Tech Summit: Vertex AI & Gemini',
    description: 'Explored frontier generative AI applications, multimodal Gemini pipelines, and real-time visualization frameworks shown at Sphere, Las Vegas.',
    type: 'Certification',
    date: 'November 2025',
    issuer: 'Google & Google Developer Groups',
    highlight: 'Multimodal AI'
  }
]
