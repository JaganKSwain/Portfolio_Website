export interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  location: string
  description: string
  activities?: string[]
}

export const educationData: EducationItem[] = [
  {
    id: '1',
    institution: 'National Institute of Science and Technology (NIST)',
    degree: 'Bachelor of Technology (B.Tech)',
    period: '2024 - 2028',
    location: 'Berhampur, Odisha, India',
    description: 'Electronics and Communication Engineering Department',
    activities: [
      'magna cum laude with a CGPA of 9.5',
      'Programming and hardware projects',
      'VLSI Design and Circuit Analysis',
      'Cloud and DevOps',
      'Generative AI Tools',
    ],
  },
  {
    id: '2',
    institution: 'Indian Institute of Technology Madras (IITM)',
    degree: 'Bachelor of Science (B.S): Data Science and Applications',
    period: '2024 - 2028',
    location: 'Chennai, Tamil Nadu, India',
    description: 'Data Science and Applications Department',
    activities: [
      'Achieved a CGPA of 8.8',
      'Data Science and Applications',
      'Data Analysis and Data Visualization',
      'Data Preprocessing and Data Cleaning',
      'Data Modeling and Data Prediction',
      'Data Mining and Data Warehousing',
    ],
  },
  {
    id: '2',
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education: Central Board of Secondary Education (CBSE)',
    period: '2020 - 2022',
    location: 'India',
    description: 'Science Stream with focus on Physics, Chemistry, and Mathematics',
  },
  {
    id: '3',
    institution: 'GyanaJyoti Public School',
    degree: 'Matriculation: Central Board of Secondary Education (CBSE)',
    period: '2020',
    location: 'India',
    description: 'Foundation in Science and Mathematics',
  },
]

