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
    title: 'IVEAID',
    description: 'Intelligent Video Examiner and Analyser AI',
    technologies: ['Python', 'Yolo v5', 'OpenCV'],
    category: 'Data Analysis and Labeller',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/IVEAID'
  },
  {
    id: '2',
    title: 'AICA',
    description: 'An autonomous Web Based system designed to help individuals find jobs and navigate their career paths by bridging the gap between their skills and industry demands.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    category: 'Web Development and AI Integration',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/AICA'
  },
  {
    id: '3',
    title: 'Predicting the Formula 1 Race Winner: A Machine Learning Project',
    description: 'Model trained on previous years datasests of Formula 1 and predicts the next race winner percentages.',
    technologies: [],
    category: 'Ai amd Machine Learning, Data Analysis and Prediction',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/F1_Winners_Prediction_Model'
  },
  {
    id: '4',
    title: 'DeepBeat',
    description: 'ECG Arrhythmia Classification using a Hybrid CNN-LSTM',
    technologies: ['Python', 'CNN', 'LSTM'],
    category: 'AI Healthcare',
    featured: true,
    githubUrl: 'https://github.com/JaganKSwain/DeepBeat'
  },
  {
    id: '5',
    title: 'Scientific Calculator',
    description: 'Advanced calculator with scientific functions',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    featured: false,
    githubUrl: 'https://github.com/JaganKSwain/ScientificCalculator'
  },
  {
    id: '6',
    title: 'Happy Diwali',
    description: 'Interactive Diwali celebration project',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    featured: false,
  },
]
