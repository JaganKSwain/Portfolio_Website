export interface Skill {
  name: string
  level: number // 0-100
  category: 'Programming' | 'VLSI Tools' | 'Circuit Design' | 'CAD' | 'Other'
  icon?: string
}

export const skillsData: Skill[] = [
  // Programming
  { name: 'Python', level: 80, category: 'Programming' },
  { name: 'C', level: 75, category: 'Programming' },
  { name: 'SQL', level: 70, category: 'Programming' },
  { name: 'JavaScript', level: 65, category: 'Programming' },
  { name: 'HTML/CSS', level: 70, category: 'Programming' },
  
  // VLSI Tools
  { name: 'MATLAB', level: 75, category: 'VLSI Tools' },
  { name: 'EasyEDA', level: 80, category: 'VLSI Tools' },
  { name: 'Circuit Design', level: 75, category: 'VLSI Tools' },
  
  // Circuit Design
  { name: 'Arduino Programming', level: 75, category: 'Circuit Design' },
  { name: 'PCB Design', level: 70, category: 'Circuit Design' },
  { name: 'Circuit Simulation', level: 75, category: 'Circuit Design' },
  
  // CAD
  { name: 'AutoCAD', level: 80, category: 'CAD' },
  { name: '2D Drawing', level: 85, category: 'CAD' },
  { name: '3D Structural Design', level: 75, category: 'CAD' },
]

