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
    category: 'Programming Languages',
    iconName: 'code',
    description: 'Foundational syntax and system-level languages for algorithms, RTL hardware description, and application logic.',
    skills: [
      { name: 'Python', highlight: true, context: 'AI/ML, PyTorch, Flask, Data' },
      { name: 'C', highlight: true, context: 'Embedded Systems, Microcontrollers' },
      { name: 'Verilog HDL', highlight: true, context: 'Digital Logic, ALU, Vivado' },
      { name: 'Java', highlight: false, context: 'OOP, DSA' },
      { name: 'JavaScript / TypeScript', highlight: true, context: 'Full-Stack, Next.js, Node.js' },
      { name: 'SQL', highlight: false, context: 'Relational Database Queries' },
      { name: 'HTML5 / CSS3', highlight: false, context: 'Modern Web Interfaces' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    iconName: 'brain',
    description: 'Theoretical models and practical frameworks spanning deep neural networks, computer vision, and medical imaging.',
    skills: [
      { name: 'PyTorch', highlight: true, context: 'CNN-LSTM, Fundus Segmentation' },
      { name: 'Deep Learning', highlight: true, context: 'IISER Berhampur Research' },
      { name: 'Computer Vision', highlight: true, context: 'YOLO, Nicla Vision, OpenCV' },
      { name: 'Medical Image Analysis', highlight: true, context: 'Retinal Fundus Screening' },
      { name: 'Convolutional Neural Networks (CNN)', highlight: true, context: 'Feature Extraction' },
      { name: 'LSTM & Time-Series', highlight: true, context: 'Arrhythmia & F1 Forecasting' },
      { name: 'Scikit-learn', highlight: false, context: 'Ensemble & Supervised Models' },
      { name: 'Natural Language Processing (NLP)', highlight: false, context: 'Skill Extraction' },
      { name: 'AI Agents', highlight: true, context: 'IndiaAI Hackathon (IISc/MeitY)' }
    ]
  },
  {
    category: 'Embedded Systems & Drones',
    iconName: 'cpu',
    description: 'Hardware prototyping, autonomous systems, sensor integration, and real-time edge processing.',
    skills: [
      { name: 'Micro Drone Systems', highlight: true, context: 'PE Geometry Internship' },
      { name: 'Arduino Nicla Vision', highlight: true, context: 'GuardX Sentinel Defence System' },
      { name: 'Raspberry Pi', highlight: true, context: 'Edge Compute, Linux SBC' },
      { name: 'Arduino Microcontrollers', highlight: false, context: 'Sensors, Actuators, I2C/SPI' },
      { name: 'IoT Systems & Cloud Telemetry', highlight: true, context: 'SIH 2025 SegroBin' },
      { name: 'Edge AI Acceleration', highlight: true, context: 'Low-latency constrained inference' },
      { name: 'Digital Signal Processing (DSP)', highlight: false, context: 'ECG Filtering, Signal Chains' }
    ]
  },
  {
    category: 'VLSI & Digital Hardware Design',
    iconName: 'microchip',
    description: 'RTL architecture, logic synthesis, hardware verification, and FPGA workflows.',
    skills: [
      { name: 'Verilog RTL Design', highlight: true, context: '16-Operation ALU Architecture' },
      { name: 'Vivado 2025.2', highlight: true, context: 'Synthesis, Implementation, Timing' },
      { name: 'FPGA Prototyping', highlight: true, context: 'Configurable Logic' },
      { name: 'Digital Circuit Analysis', highlight: false, context: 'Combinational & Sequential' },
      { name: 'EDA Tools & EasyEDA', highlight: false, context: 'Schematic Capture & PCB Layout' },
      { name: 'Waveform Simulation', highlight: true, context: 'Testbench Verification' }
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
      { name: 'Tableau & Excel', highlight: false, context: 'Deloitte Job Simulation' },
      { name: 'Google Colab', highlight: false, context: 'GPU Accelerated Training' }
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
