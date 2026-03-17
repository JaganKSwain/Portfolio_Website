export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'GuardX Sentinel',
    description: 'Drone-based Human Activity Detection System for real-time surveillance. Integrated Raspberry Pi, camera modules, and onboard sensors for efficient edge processing. Awarded Best Innovation Award at Chakravyuh 1.0 and received Rs.50,000 Defence R&D Grant.',
    technologies: ['Python', 'Computer Vision', 'IoT', 'Raspberry Pi', 'Machine Learning'],
    category: 'AI & Embedded Systems',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '2',
    title: 'SegroBin',
    description: 'Smart Waste Management System designed for SIH 2025 (Government of Odisha problem statement SIH25046). IoT-enabled smart dustbin with companion app for real-time waste tracking and Green Credits incentive mechanism.',
    technologies: ['IoT', 'Arduino', 'App Development', 'Embedded Systems'],
    category: 'IoT & Embedded Systems',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '3',
    title: '16-Operation ALU Design',
    description: 'Designed and implemented a 16-operation Arithmetic Logic Unit using Verilog HDL. Supports arithmetic (+, -, *, /), logical (AND, OR, XOR), shift operations, and comparison functionalities with Carry and Zero status flags. Verified using Vivado 2025.2.',
    technologies: ['Verilog HDL', 'Vivado', 'Digital Design', 'VLSI'],
    category: 'VLSI Design',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '4',
    title: 'Predicting the Formula 1 Race Winner',
    description: 'Built predictive models using historical F1 race data. Performed extensive feature engineering capturing driver form, season momentum, circuit affinity, and grid position. Achieved up to 95.6% cross-validated accuracy using Neural Networks with time-aware validation.',
    technologies: ['Python', 'Scikit-learn', 'Neural Networks', 'Pandas', 'Machine Learning'],
    category: 'AI & Machine Learning',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/F1_Winners_Prediction_Model'
  },
  {
    id: '5',
    title: 'DeepBeat',
    description: 'ECG Arrhythmia Classification System using a hybrid CNN–LSTM model in PyTorch. Trained on the MIT-BIH Arrhythmia dataset with over 87,000 ECG samples. Achieved 96% overall accuracy with high recall for critical ventricular and supraventricular classes.',
    technologies: ['Python', 'PyTorch', 'CNN', 'LSTM', 'Deep Learning'],
    category: 'AI Healthcare',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/DeepBeat'
  },
  {
    id: '6',
    title: 'AI Career Agent',
    description: 'AI-driven career guidance agent built for the IndiaAI Impact GenAI Hackathon (IISC Bengaluru in collaboration with MeitY, Govt. of India). Implements skill extraction, job-role matching, and personalized learning path generation using IBM open-source technologies.',
    technologies: ['Python', 'Flask', 'AI Agents', 'JavaScript', 'Full-Stack'],
    category: 'AI & Web Development',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/AICA'
  },
  {
    id: '7',
    title: 'Full-Stack Authentication System',
    description: 'Secure authentication system built from scratch with JWT-based authentication, bcrypt password hashing, input validation, and a responsive frontend with real-time form validation and user feedback.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'JavaScript'],
    category: 'Web Development',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '8',
    title: 'IVEAID',
    description: 'Intelligent Video Examiner and Analyser AI for real-time video analysis and object detection.',
    technologies: ['Python', 'YOLOv5', 'OpenCV'],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/IVEAID'
  },
  {
    id: '9',
    title: 'Smart Blind Stick',
    description: 'Assistive navigation device using ultrasonic sensors and Arduino for obstacle detection. Implements real-time alert mechanisms including buzzer and vibration feedback to enhance user safety.',
    technologies: ['Arduino', 'Sensors', 'IoT', 'Embedded Systems'],
    category: 'IoT & Embedded Systems',
    featured: false,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '10',
    title: 'Arduino-Based 3D Scanner',
    description: 'Rotating scanning platform using stepper motors and microcontroller control. Coordinates hardware motion with camera-based image acquisition for 3D object reconstruction.',
    technologies: ['Arduino', 'Stepper Motors', 'Computer Vision', 'Embedded Systems'],
    category: 'Embedded Systems & CV',
    featured: false,
    githubUrl: 'https://github.com/JaganKSwain'
  },
  {
    id: '11',
    title: 'Scientific Calculator',
    description: 'Advanced calculator with scientific functions including trigonometry, logarithms, and more.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    featured: false,
    githubUrl: 'https://github.com/JaganKSwain/ScientificCalculator'
  },
  {
    id: '12',
    title: 'Happy Diwali',
    description: 'Interactive Diwali celebration project with animations and festive visuals.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    featured: false,
  },
]
