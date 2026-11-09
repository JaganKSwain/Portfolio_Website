export interface Memory {
  id: string
  title: string
  description: string
  type: 'Conference' | 'Hackathon' | 'Competition' | 'Seminar'
  date: string
  location?: string
  role?: string
}

export const memoriesData: Memory[] = [
  {
    id: 'air-defence-conf',
    title: 'International Conference on Air Defence and Security',
    description: 'Demonstrated GuardX Sentinel to senior defense officers and academic dignitaries. Awarded the ₹50,000 Defence R&D Grant by Army AD College and NIST University.',
    type: 'Conference',
    date: 'February 2026',
    location: 'Army AD College & NIST University',
    role: 'Lead Project Presenter',
  },
  {
    id: 'sih-2025-finale',
    title: 'Smart India Hackathon 2025 (Hardware Edition) Grand Finale',
    description: 'Selected as one of the Top 5 national finalists for Govt. of Odisha problem statement SIH25046, engineering the SegroBin IoT smart segregation hardware.',
    type: 'Hackathon',
    date: 'December 2025',
    location: 'National Nodal Centre',
    role: 'Team CtrlOhm Hardware Specialist',
  },
  {
    id: 'chakravyuh-1-0',
    title: 'Chakravyuh 1.0 National Innovation Challenge',
    description: 'Pitched and proved edge computer vision drone tracking under dynamic thermal conditions, securing 1st Prize Best Innovation Award.',
    type: 'Competition',
    date: 'January 2026',
    location: 'NIST University',
    role: 'Hardware & AI Lead',
  },
  {
    id: 'festronix-2k26',
    title: 'Festronix 2K26 Web Development Championship',
    description: 'Clinched 1st Place in the competitive web engineering event after developing a full-stack, high-throughput application within timed sprint parameters.',
    type: 'Competition',
    date: 'February 2026',
    location: 'GIFT Autonomous, Bhubaneswar',
    role: 'First Place Winner',
  },
  {
    id: 'oosc-iit-kanpur',
    title: 'OOSC 3.0 Open-Source Conference @ IIT Kanpur',
    description: 'Participated in technical deep-dives conducted by Canonical and Ubuntu covering Linux system administration, open-source toolchains, and upstream collaboration.',
    type: 'Conference',
    date: 'September 2025',
    location: 'IIT Kanpur',
    role: 'Delegate',
  },
  {
    id: 'indiaai-hackathon',
    title: 'IndiaAI Impact GenAI Hackathon (IISc Bengaluru & MeitY)',
    description: 'Engineered AI Career Agent leveraging IBM open-source agentic workflows for dynamic skill extraction and automated job pathway synthesis.',
    type: 'Hackathon',
    date: '2025',
    location: 'Virtual / IISc Bengaluru & MeitY',
    role: 'AI System Architect',
  },
  {
    id: 'google-intl-summit',
    title: 'Google & GDG International Tech Summit',
    description: 'Explored breakthrough developments in Google Vertex AI, Gemini models, and real-time visualization applications shown at Sphere, Las Vegas.',
    type: 'Seminar',
    date: 'November 2025',
    location: 'Google Developer Groups',
    role: 'Attendee & Tech Enthusiast',
  },
  {
    id: 'code-crusade-4',
    title: 'Code Crusade 4.0 Algorithmic Coding Challenge',
    description: 'Ranked #1 overall in Group 2 (1st and 2nd Year cohort) in algorithmic competitive coding conducted on HackerRank.',
    type: 'Competition',
    date: 'October 2025',
    location: 'Club Excel, NIST University',
    role: 'Winner (1st Place)',
  },
]
