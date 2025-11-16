export interface Achievement {
  id: string
  title: string
  description: string
  type: 'Award' | 'Certification' | 'Competition' | 'Publication'
  date: string
  issuer?: string
  imageUrl?: string
}

export const achievementsData: Achievement[] = [
  // Add your achievements here
  // Example structure:
  // {
  //   id: '1',
  //   title: 'Hackathon Winner',
  //   description: 'Won first place in regional hackathon',
  //   type: 'Competition',
  //   date: '2024-01-15',
  //   issuer: 'Tech Fest 2024',
  // },
  {
  id: '1',
  title: 'Opportunity Open Source Conference 3.0',
  description: 'Got my first international certificate in the field of Open Source Development at IIT Kanpur',
  type: 'Certification',
  date: '2025-09-07',
  issuer: 'Cannonical and OpenPrinting',
  imageUrl: '/images/oscc3.0.png',
  },
  {
    id: '2',
    title: 'DevOps Webinar',
    description: 'Participated in the DevOps Webinar conducted by GDG on Campus Malla Reddy Engineering College, deepened my understanding of DevOps principles, CI/CD pipelines, and modern development practices that bridge the gap between software development and operations.',
    type: 'Certification',
    date: '2025-09-30',
    issuer: 'GDG on Campus: Malla Reddy Engineering College',
    imageUrl: '/images/devops.png',
  },
  {
    id: '3',
    title: ' IoT and Mechatronics Internship',
    description: 'I had the opportunity to dive deep into IoT systems, embedded hardware, and automation technologies, gaining valuable hands-on experience with Arduino, sensors, and cloud platforms. ',
    type: 'Certification',
    date: '2025-07-31',
    issuer: 'National Institute of Science and Technology(NIST University)',
    imageUrl: '/images/iot.png',
  },
  {
    id: '4',
    title: 'Data Analytics ',
    description: 'I Completed a Deloitte job simulation involving data analysis and forensic technology Created a data dashboard using Tableau Used Excel to classify data and draw business conclusions',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Deloitte Australia',
    imageUrl: '/images/data.png',
  },
  {
    id: '5',
    title: 'Blender and AR Workshop:',
    description: 'I had the opportunity to learn about Blender and AR, gaining valuable hands-on experience with Blender and AR. The basics of Blender was spot on and was insightful, and the hands on experience on Unity and building an AR Application that could project a 3D model on a surface virtually was a something too exciting.',
    type: 'Certification',
    date: '2025-04-30',
    issuer: 'AR/VR Workshop',
    imageUrl: '/images/blender.png',
  },
  {
    id: '6',
    title: 'IoT and Robotics Internship',
    description: 'Learned Skills like Blynk, TinkerCAD and Arduino Cloud and IDE to put Things in proper work with Over The Air data transfers by Wi-Fi and various other communication techniques',
    type: 'Certification',
    date: '2025-05-05',
    issuer: 'LaunchED Global',
    imageUrl: '/images/iotrobotics.png',
  },
  {
    id: '7',
    title: 'SensoTech: A 2 Day Workshop Completion Certificate',
    description: 'Completed a 2 day workshop on Sensors and Actuators, gaining valuable hands-on experience with sensors and actuators, building small project like RFID Scanner based Gateway System.',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Renewable Energy Club: NIST University',
    imageUrl: '/images/sensotech.png',
  },
  {
    id: '8',
    title: 'AI Cloudwave',
    description: 'Skills learned: Artificial Intelligence (AI), Amazon Web Services (AWS), Generative AI Tools, Claude, Sonnet, Google Gemini, Haiku',
    type: 'Certification',
    date: '2025-09-07',
    issuer: 'Cloud Computing Club: NIST University',
    imageUrl: '/images/sensotech.png',
  }
]
