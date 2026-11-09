export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: 'Research' | 'Industry' | 'Internship'
  supervisor?: string
  department?: string
  description: string
  bullets: string[]
  skills: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'iiser-berhampur',
    role: 'Research Intern – Deep Learning for Medical Imaging',
    company: 'IISER Berhampur',
    department: 'Department of Computer Science',
    location: 'Berhampur, Odisha, India',
    period: 'Jun 2026 – Present',
    type: 'Research',
    supervisor: 'Dr. Anabik Pal',
    description: 'Spearheading research on hybrid deep learning models for automated ophthalmic diagnosis from retinal fundus scans.',
    bullets: [
      'Proposed and secured supervisor approval for the research initiative: "Hybrid Deep Learning Framework for Multi-Retinal Disease Localization, Segmentation and Classification from Fundus Images".',
      'Architecting an integrated deep learning pipeline executing simultaneous multi-disease detection, localization, lesion segmentation, and diagnostic classification.',
      'Curated and standardized candidate public fundus image datasets and instituted collaborative GitHub PR workflows with rigorous version control.',
      'Conducting weekly technical reviews and experimental evaluations to benchmark diagnostic precision against state-of-the-art architectures.'
    ],
    skills: ['Deep Learning', 'PyTorch', 'Computer Vision', 'Medical Imaging', 'Python', 'Git']
  },
  {
    id: 'pe-geometry',
    role: 'Engineering Intern – Micro Drone Project',
    company: 'PE Geometry India Pvt Ltd',
    department: 'Geometry Assurance Engineering',
    location: 'Bengaluru, Karnataka, India',
    period: '05 Jun 2026 – 31 Jul 2026',
    type: 'Industry',
    description: 'Hardware-software co-engineering for advanced autonomous micro drone systems.',
    bullets: [
      'Contributed to end-to-end development of micro drone prototypes, bridging cross-functional mechanical and electronic subsystems.',
      'Applied structured product design methodologies to integrate PCB layouts, flight electronics, and sensor payloads for stable aerodynamics.',
      'Recognized officially in the internship certificate for outstanding learning agility, dedication, and proactive engineering exploration.'
    ],
    skills: ['Drone Systems', 'Embedded Electronics', 'Hardware Prototyping', 'CAD', 'Sensors']
  }
]

