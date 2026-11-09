export interface SkillGroup {
  category: string
  iconName: 'code' | 'brain' | 'cpu' | 'microchip' | 'globe' | 'terminal'
  description: string
  skills: {
    name: string
    highlight?: boolean
    context?: string
  }[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'VLSI & Mixed-Signal Design',
    iconName: 'microchip',
    description: 'Custom analog/mixed-signal modeling, SkyWater SKY130 PDK, Compute-In-Memory, and open-source EDA synthesis.',
    skills: [
      { name: 'SkyWater SKY130 PDK', highlight: true, context: '10T SRAM CiM Macro Design' },
      { name: 'SRAM & Compute-In-Memory (CiM)', highlight: true, context: 'Binary/Ternary NNs, Zero Read-Disturb' },
      { name: 'SPICE & Monte Carlo Analysis', highlight: true, context: 'Pelgrom Mismatch, SNM Simulation' },
      { name: 'Yosys Open Synthesis', highlight: true, context: 'sky130_fd_sc_hd, Timing Closure @ 200MHz' },
      { name: 'Cocotb & Icarus Verilog', highlight: true, context: 'Closed-Loop Mixed-Signal Co-Simulation' },
      { name: 'Vivado 2025.2 & RTL Synthesis', highlight: true, context: '16-Op ALU Architecture, FPGA' },
      { name: 'Static Timing Analysis (STA)', highlight: true, context: 'Fmax 648.9 MHz Closure' }
    ]
  },
  {
    category: 'AI & Deep Learning',
    iconName: 'brain',
    description: 'Vision Transformers, multi-label clinical diagnostics, quantization-aware training, and model ensembling.',
    skills: [
      { name: 'PyTorch & timm Framework', highlight: true, context: '15-Architecture Retinal Benchmark' },
      { name: 'Vision Transformers (ViT & Swin)', highlight: true, context: 'ImageNet Pretrained Transfer' },
      { name: 'MaxViT Hybrid Architectures', highlight: true, context: 'Top Single Model RIADD 0.710' },
      { name: 'Quantization-Aware Training (QAT)', highlight: true, context: 'LeNet-5 for CiM Macro (97.62%)' },
      { name: 'Medical Image Analysis (RFMiD)', highlight: true, context: '45-Class Pathological Segmentation' },
      { name: 'Ensemble Learning & Wilcoxon Tests', highlight: true, context: '7-Model Ensemble (AUC 0.933)' },
      { name: 'CNN-LSTM Hybrid Networks', highlight: true, context: 'DeepBeat ECG Classification (96%)' }
    ]
  },
  {
    category: 'Embedded Systems & Drones',
    iconName: 'cpu',
    description: 'Hardware prototyping, autonomous systems, sensor integration, and real-time edge processing.',
    skills: [
      { name: 'Micro Drone Systems', highlight: true, context: 'PE Geometry Bengaluru Internship' },
      { name: 'Arduino Nicla Vision', highlight: true, context: 'GuardX Sentinel Defense System' },
      { name: 'Raspberry Pi', highlight: true, context: 'Edge Compute, Linux SBC' },
      { name: 'Embedded C / C++', highlight: true, context: 'Microcontrollers & Avionics Firmware' },
      { name: 'IoT Systems & Cloud Telemetry', highlight: true, context: 'SIH 2025 SegroBin' },
      { name: 'Digital Signal Processing (DSP)', highlight: false, context: 'ECG Filtering, Signal Chains' }
    ]
  },
  {
    category: 'Programming Languages',
    iconName: 'code',
    description: 'Foundational syntax and system-level languages for algorithms, RTL hardware description, and application logic.',
    skills: [
      { name: 'Python', highlight: true, context: 'PyTorch, Surrogate Models, Data' },
      { name: 'Verilog HDL', highlight: true, context: '10T CiM Periphery, 16-Op ALU' },
      { name: 'C / C++', highlight: true, context: 'Embedded Systems, Microcontrollers' },
      { name: 'Java', highlight: false, context: 'OOP, DSA' },
      { name: 'JavaScript / TypeScript', highlight: true, context: 'Full-Stack, Next.js, Node.js' },
      { name: 'SQL', highlight: false, context: 'Relational Database Queries' }
    ]
  },
  {
    category: 'Full-Stack & Web Engineering',
    iconName: 'globe',
    description: 'Modern reactive web apps, scalable REST microservices, and secure authentication.',
    skills: [
      { name: 'Next.js & React 18', highlight: true, context: 'Server Components, SSR' },
      { name: 'Node.js & Express', highlight: true, context: 'REST APIs, Middleware' },
      { name: 'Flask', highlight: false, context: 'Python Microservices' },
      { name: 'MongoDB', highlight: false, context: 'NoSQL Document Store' },
      { name: 'JWT & Bcrypt Security', highlight: true, context: 'Stateless Auth & Hashing' },
      { name: 'Tailwind CSS', highlight: true, context: 'Design Systems & Responsive UI' }
    ]
  },
  {
    category: 'Cloud, Platforms & Developer Tools',
    iconName: 'terminal',
    description: 'Operating systems, version control, cloud platforms, and engineering analytics.',
    skills: [
      { name: 'Linux', highlight: true, context: 'IIT Kanpur Canonical Conference' },
      { name: 'Git & GitHub Workflows', highlight: true, context: 'PRs, CI/CD, Team Collaboration' },
      { name: 'Google Cloud & Vertex AI', highlight: true, context: 'Google Cloud Skill Badge' },
      { name: 'AWS', highlight: false, context: 'Cloud Hosting & S3' },
      { name: 'MATLAB', highlight: false, context: 'Mathematical Modeling' },
      { name: 'Tableau & Excel', highlight: false, context: 'Deloitte Job Simulation' }
    ]
  }
]

// Backward-compatibility export
export const skills: Skill[] = skillGroups.flatMap((group) =>
  group.skills.map((s) => ({
    name: s.name,
    level: 85,
    category: group.category,
  }))
)
