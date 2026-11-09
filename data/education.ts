export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  location: string
  score?: string
  description: string
  highlights?: string[]
  activities?: string[]
  badge?: string
}

export const educationData: EducationItem[] = [
  {
    id: 'nist-btech',
    institution: 'NIST University',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: '2024 – 2028',
    location: 'Berhampur, Odisha, India',
    score: 'CGPA: 9.1 / 10.0',
    badge: 'Undergraduate Major',
    description: 'Comprehensive core engineering program combining embedded hardware, digital signal processing, VLSI design, and artificial intelligence.',
    highlights: [
      'Academic Excellence: CGPA 9.1',
      'Specialized in Embedded Hardware, Drone Systems, and Edge AI',
      'Advanced coursework in Digital Logic, VLSI Design, Vivado, and Computer Architecture',
      'Awarded ₹50,000 Defence R&D Grant for GuardX Sentinel project'
    ],
    activities: [
      'CGPA: 9.1',
      'Embedded Hardware & Drone Systems',
      'VLSI Design & Vivado 2025.2 Simulation',
      'Defence Research & Development Grant'
    ]
  },
  {
    id: 'iitm-bs',
    institution: 'Indian Institute of Technology (IIT) Madras',
    degree: 'BS in Data Science and Applications',
    period: '2025 – 2028',
    location: 'Chennai, Tamil Nadu, India',
    score: 'CGPA: 8.1 / 10.0',
    badge: 'Dual Degree Program',
    description: 'Rigorous degree program delivered by IIT Madras focusing on computational mathematics, machine learning systems, statistical modeling, and large-scale data architecture.',
    highlights: [
      'Academic Performance: CGPA 8.1',
      'Core focus on Machine Learning, Deep Neural Networks, and Algorithmic Foundations',
      'Data Modeling, Statistical Inference, and Predictive Systems',
      'Practical projects in time-series forecasting, computer vision, and agentic workflows'
    ],
    activities: [
      'CGPA: 8.1',
      'Machine Learning & Deep Neural Networks',
      'Time-Series Forecasting & Model Evaluation',
      'Statistical Modeling & Data Architecture'
    ]
  },
  {
    id: 'kv-school',
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education (Class XII) – CBSE Science',
    period: '2020 – 2022',
    location: 'Rourkela, Odisha, India',
    description: 'Senior secondary science curriculum with Physics, Chemistry, Mathematics, and Computer Science.',
    highlights: [
      'Rigorous foundation in advanced physics, calculus, and analytical problem-solving'
    ],
    activities: [
      'Physics, Chemistry, Mathematics & CS',
      'Foundational Problem Solving'
    ]
  },
  {
    id: 'gjps-school',
    institution: 'GyanaJyoti Public School',
    degree: 'Secondary School Examination (Class X) – CBSE',
    period: '2020',
    location: 'Rourkela, Odisha, India',
    description: 'Foundational secondary school education with distinction in mathematics and natural sciences.',
    activities: [
      'Mathematics & Science Foundation'
    ]
  }
]
