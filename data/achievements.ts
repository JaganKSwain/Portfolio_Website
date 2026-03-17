export interface Achievement {
  id: string
  title: string
  description: string
  type: 'Award' | 'Certification' | 'Competition' | 'Publication'
  date: string
  issuer?: string
  imageUrl?: string
}

export const achievementsData: Achievement[] = [
  // === Awards & Competitions ===
  {
    id: '1',
    title: 'Rs.50,000 Defence R&D Grant',
    description: 'Awarded a Defence Research & Development Grant for the project GuardX Sentinel at the International Conference on Air Defence and Security.',
    type: 'Award',
    date: '2026-02-13',
    issuer: 'Army AD College & NIST University',
  },
  {
    id: '2',
    title: 'Best Innovation Award — Chakravyuh 1.0',
    description: 'Won the Best Innovation Award for GuardX Sentinel, a drone-based human activity detection system for defence surveillance.',
    type: 'Competition',
    date: '2026-01-31',
    issuer: 'Chakravyuh 1.0',
  },
  {
    id: '3',
    title: 'Grand Finalist — Smart India Hackathon (SIH) 2025',
    description: 'Reached the Grand Finals of SIH 2025 (Hardware Edition) as part of Team CtrlOhm, B.Tech 2nd Year cohort.',
    type: 'Competition',
    date: '2025-12-08',
    issuer: 'Smart India Hackathon',
  },
  {
    id: '4',
    title: '1st Place — Web Development Competition, Festronix 2K26',
    description: 'Secured first place in the Web Development Competition at Festronix 2K26, demonstrating outstanding technical and development skills.',
    type: 'Competition',
    date: '2026-02-27',
    issuer: 'GIFT Autonomous, Bhubaneswar',
  },
  {
    id: '5',
    title: 'Winner — Code Crusade 4.0',
    description: 'Won Code Crusade 4.0 (Group 2: 1st & 2nd Years), a competitive coding contest conducted on HackerRank.',
    type: 'Competition',
    date: '2025-10-15',
    issuer: 'Club Excel, NIST University',
  },

  // === Certifications & Training ===
  {
    id: '6',
    title: 'OOSC 3.0 — Open-Source Software Conference',
    description: 'Attended the Open-Source Software Conference at IIT Kanpur conducted by Canonical and Ubuntu. Gained exposure to Linux, open-source ecosystems, and collaborative development practices.',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Canonical and Ubuntu, IIT Kanpur',
    imageUrl: '/images/oscc3.0.png',
  },
  {
    id: '7',
    title: 'DevOps Webinar',
    description: 'Participated in the DevOps Webinar conducted by GDG on Campus Malla Reddy Engineering College. Learned DevOps principles, CI/CD pipelines, and modern development workflows bridging development and operations.',
    type: 'Certification',
    date: '2025-09-30',
    issuer: 'GDG on Campus: Malla Reddy Engineering College',
    imageUrl: '/images/devops.png',
  },
  {
    id: '8',
    title: 'IoT and Mechatronics Internship',
    description: 'Hands-on experience with Arduino-based embedded systems, sensors, automation, and cloud-integrated IoT solutions.',
    type: 'Certification',
    date: '2025-07-31',
    issuer: 'NIST University',
    imageUrl: '/images/iot.png',
  },
  {
    id: '9',
    title: 'Build and Deploy ML Solutions on Vertex AI',
    description: 'Practical experience in building, training, and deploying ML models using Google Vertex AI. Earned Google Cloud Skill Badge.',
    type: 'Certification',
    date: '2025-10-01',
    issuer: 'Google Cloud',
  },
  {
    id: '10',
    title: 'Data Analytics Job Simulation',
    description: 'Completed a professional simulation involving data analysis and forensic technology. Built dashboards using Tableau and derived business insights using Excel.',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Deloitte Australia (Forage)',
    imageUrl: '/images/data.png',
  },
  {
    id: '11',
    title: 'Blender and AR Workshop',
    description: 'Hands-on experience with Blender fundamentals, Unity, and AR application development. Built an AR application that projects 3D models on surfaces virtually.',
    type: 'Certification',
    date: '2025-04-30',
    issuer: 'Club Multimedia, NIST University',
    imageUrl: '/images/blender.png',
  },
  {
    id: '12',
    title: 'Internet of Things Internship',
    description: 'Worked with sensors and actuators, Arduino Cloud, Blynk, TinkerCAD, OTA updates, and Wi-Fi-based IoT communication.',
    type: 'Certification',
    date: '2025-05-05',
    issuer: 'LaunchED Global',
    imageUrl: '/images/iotrobotics.png',
  },
  {
    id: '13',
    title: 'SensoTech Workshop',
    description: 'Two-day workshop on IoT sensors and actuators. Implemented mini-projects including RFID-based attendance system and rain detection alert system.',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Renewable Energy Club, NIST University',
    imageUrl: '/images/sensotech.png',
  },
  {
    id: '14',
    title: 'International Tech Event — Vertex AI & Gemini',
    description: 'Gained insights into Vertex AI and Gemini applications, including real-world visualization projects showcased at Sphere, Las Vegas.',
    type: 'Certification',
    date: '2025-11-01',
    issuer: 'Google & Google Developer Groups',
  },
  {
    id: '15',
    title: 'AI Cloudwave',
    description: 'Exposure to AI and cloud technologies including AWS, Generative AI tools, Google Gemini, Claude, Sonnet, and Haiku.',
    type: 'Certification',
    date: '2024-11-01',
    issuer: 'Cloud Computing Club, NIST University',
    imageUrl: '/images/sensotech.png',
  },
]
