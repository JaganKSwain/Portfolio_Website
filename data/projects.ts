export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'AI & ML' | 'Embedded & Drones' | 'VLSI & Hardware' | 'Full-Stack'
  metric?: string
  award?: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'sram-cim-macro',
    title: '10T SRAM Compute-In-Memory Macro',
    subtitle: 'SkyWater 130nm Mixed-Signal CiM Accelerator for BNNs/TNNs',
    description: 'Designed an open-source 32×32 differential 10T SRAM compute-in-memory macro on SkyWater 130nm. Features a decoupled read stack with 790 mV static noise margin and zero read-disturb (ΔSNM = 0 mV). Integrated a 16-tap delay line, 4-bit Flash ADC with Wallace tree decoder, and closed timing at 200 MHz via Yosys (Fmax 648.9 MHz). Achieved 97.62% accuracy on quantization-aware LeNet-5 across a 15-point PVT grid.',
    technologies: ['SkyWater SKY130', '10T SRAM', 'Yosys', 'Cocotb', 'Mixed-Signal', 'Flash ADC', 'SPICE', 'Verilog'],
    category: 'VLSI & Hardware',
    metric: 'SkyWater 130nm • 200 MHz Timing',
    award: 'Research Manuscript in Preparation (IEEE TCAS-I Format)',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: true,
  },
  {
    id: 'guardx-sentinel',
    title: 'GuardX Sentinel',
    subtitle: 'Drone-Based Human Activity & Threat Detection System',
    description: 'Indigenous drone-integrated surveillance system engineered for real-time human activity detection and threat recognition in defense scenarios. Combines Arduino Nicla Vision, thermal and optical sensors, and low-latency edge AI algorithms.',
    technologies: ['Arduino Nicla Vision', 'Computer Vision', 'Edge AI', 'IoT', 'Python', 'Embedded Systems'],
    category: 'Embedded & Drones',
    metric: '₹50,000 Grant • Best Innovation',
    award: 'Best Innovation Award (Chakravyuh 1.0) & Rs. 50,000 Defence R&D Grant (Army AD College & NIST)',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: true,
  },
  {
    id: 'retinal-benchmark',
    title: 'Multi-Retinal Disease DL Framework',
    subtitle: '15-Architecture Benchmarking & MaxViT Ensemble on RFMiD',
    description: 'First author of multi-architecture benchmark evaluating 15 deep learning networks (CNN, ViT, Swin, MaxViT) on the RFMiD dataset (3,200 images, 45 labels). Built a 7-architecture probability-averaging ensemble achieving RIADD 0.756, mean AUC 0.933, and mAP 0.543 on hold-out testing under stratified 5-fold cross-validation.',
    technologies: ['PyTorch', 'timm', 'MaxViT', 'Vision Transformers', 'RFMiD', 'Medical Imaging'],
    category: 'AI & ML',
    metric: '0.933 AUC • 15 Architectures',
    award: 'IISER Berhampur Research Initiative & Manuscript in Preparation',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: true,
  },
  {
    id: 'deepbeat',
    title: 'DeepBeat',
    subtitle: 'ECG Arrhythmia Classification with Hybrid CNN-LSTM',
    description: 'Clinical-grade deep learning screening tool for cardiac arrhythmia detection built with PyTorch. Trained on over 87,000 ECG records from the MIT-BIH Arrhythmia benchmark with high sensitivity on critical ventricular arrhythmias.',
    technologies: ['PyTorch', 'CNN-LSTM', 'Time-Series', 'Deep Learning', 'Python', 'NumPy'],
    category: 'AI & ML',
    metric: '96% Accuracy • 87K+ ECG Records',
    githubUrl: 'https://github.com/JaganKSwain/DeepBeat',
    featured: true,
  },
  {
    id: 'segrobin',
    title: 'SegroBin',
    subtitle: 'Smart Waste Management System (SIH 2025 Finalist)',
    description: 'Engineered for Government of Odisha problem statement SIH25046 at Smart India Hackathon 2025. Built an automated IoT-enabled waste segregation bin with cloud telemetry and a companion mobile app providing Green Credits for recyclers.',
    technologies: ['IoT', 'Arduino', 'Sensors', 'App Development', 'Cloud Telemetry'],
    category: 'Embedded & Drones',
    metric: 'Top 5 Finalist • Govt. of Odisha SIH',
    award: 'Grand Finalist (Hardware Edition), Smart India Hackathon 2025',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: true,
  },
  {
    id: '16-op-alu',
    title: '16-Operation ALU Design',
    subtitle: 'Digital Hardware Architecture in Verilog HDL',
    description: 'Designed and synthesized a 16-operation Arithmetic Logic Unit executing full 16-bit arithmetic (+, -, *, /), logical (AND, OR, XOR, NOT), shift (LSL, LSR, ASR), and comparison operations with status flags (Carry, Zero, Overflow, Negative). Validated via timing simulation in Vivado 2025.2.',
    technologies: ['Verilog HDL', 'Vivado 2025.2', 'Digital Logic', 'FPGA', 'RTL Simulation'],
    category: 'VLSI & Hardware',
    metric: '16 Operations • Vivado Verified',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: true,
  },
  {
    id: 'f1-predictor',
    title: 'Formula 1 Race Winner Predictor',
    subtitle: 'Machine Learning & Time-Series Racing Forecaster',
    description: 'High-precision predictive pipeline modeling Grand Prix outcomes from historical F1 telemetry. Formulated custom feature representations for driver form, season momentum, circuit affinity, and grid positions with time-aware neural network cross-validation.',
    technologies: ['Python', 'Scikit-learn', 'Neural Networks', 'Pandas', 'Feature Engineering'],
    category: 'AI & ML',
    metric: '95.6% Accuracy • Neural Network',
    githubUrl: 'https://github.com/JaganKSwain/F1_Winners_Prediction_Model',
    featured: false,
  },
  {
    id: 'ai-career-agent',
    title: 'AI Career Agent',
    subtitle: 'Agentic Career Guidance & Learning Pathway Generator',
    description: 'Multi-agent decision system engineered for the IndiaAI Impact GenAI Hackathon (IISc Bengaluru & MeitY). Extracts resume competencies, maps candidate capabilities to dynamic industry profiles, and synthesizes step-by-step personalized skill roadmaps.',
    technologies: ['Python', 'Flask', 'AI Agents', 'IBM Open Source', 'REST APIs', 'JavaScript'],
    category: 'AI & ML',
    metric: 'IISc & MeitY Hackathon',
    githubUrl: 'https://github.com/JaganKSwain/AICA',
    featured: false,
  },
  {
    id: 'fullstack-auth',
    title: 'Enterprise Authentication System',
    subtitle: 'Secure Multi-Factor Access & Role-Based Control',
    description: 'Production-ready authentication and authorization microservice featuring cryptographic bcrypt password hashing, JWT bearer tokens with refresh rotations, request validation schemas, and real-time frontend security guards.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Bcrypt', 'TypeScript'],
    category: 'Full-Stack',
    metric: 'Production-Ready Security',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: false,
  },
  {
    id: 'smart-blind-stick',
    title: 'Smart Assistive Stick & 3D Scanner',
    subtitle: 'Assistive Ultrasonic Navigation & Hardware 3D Capture',
    description: 'Two-part embedded robotics project: an ultrasonic obstacle detection cane providing haptic and auditory proximity alerts, paired with an Arduino-driven stepper-motor rotating turntable synchronized with camera acquisition for photogrammetric 3D modeling.',
    technologies: ['Arduino', 'Ultrasonic Sensors', 'Stepper Motors', 'Computer Vision', 'C++'],
    category: 'Embedded & Drones',
    metric: 'Assistive Tech & 3D Reconstruction',
    githubUrl: 'https://github.com/JaganKSwain',
    featured: false,
  },
]
