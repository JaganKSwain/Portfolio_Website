export interface Skill {
  name: string
  level: number // 0-100
  category: 'Programming' | 'AI & ML' | 'Embedded & Hardware' | 'Tools & Platforms' | 'VLSI Tools' | 'CAD'
  icon?: string
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 85, category: 'Programming' },
  { name: 'C', level: 75, category: 'Programming' },
  { name: 'Java', level: 70, category: 'Programming' },
  { name: 'JavaScript', level: 75, category: 'Programming' },
  { name: 'HTML/CSS', level: 80, category: 'Programming' },
  { name: 'Verilog', level: 70, category: 'Programming' },
  { name: 'SQL', level: 70, category: 'Programming' },

  // AI & Machine Learning
  { name: 'Machine Learning', level: 80, category: 'AI & ML' },
  { name: 'Deep Learning', level: 75, category: 'AI & ML' },
  { name: 'Neural Networks', level: 75, category: 'AI & ML' },
  { name: 'NLP', level: 65, category: 'AI & ML' },
  { name: 'Computer Vision', level: 70, category: 'AI & ML' },
  { name: 'Data Structures & Algorithms', level: 75, category: 'AI & ML' },

  // Embedded & Hardware
  { name: 'Arduino', level: 80, category: 'Embedded & Hardware' },
  { name: 'Raspberry Pi', level: 75, category: 'Embedded & Hardware' },
  { name: 'IoT', level: 80, category: 'Embedded & Hardware' },
  { name: 'FPGA', level: 65, category: 'Embedded & Hardware' },

  // VLSI Tools
  { name: 'Vivado', level: 70, category: 'VLSI Tools' },
  { name: 'EDA Tools', level: 75, category: 'VLSI Tools' },
  { name: 'EasyEDA', level: 80, category: 'VLSI Tools' },
  { name: 'Circuit Design', level: 75, category: 'VLSI Tools' },

  // Tools & Platforms
  { name: 'Linux', level: 75, category: 'Tools & Platforms' },
  { name: 'AWS', level: 60, category: 'Tools & Platforms' },
  { name: 'Google Cloud Platform', level: 65, category: 'Tools & Platforms' },
  { name: 'Google Colab', level: 80, category: 'Tools & Platforms' },
  { name: 'DevOps', level: 60, category: 'Tools & Platforms' },
  { name: 'Git', level: 75, category: 'Tools & Platforms' },

  // CAD
  { name: 'AutoCAD', level: 80, category: 'CAD' },
  { name: '2D Drawing', level: 85, category: 'CAD' },
  { name: '3D Structural Design', level: 75, category: 'CAD' },
]
