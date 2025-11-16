export interface Memory {
  id: string
  title: string
  description: string
  type: 'Seminar' | 'Conference' | 'Workshop' | 'Event'
  date: string
  location?: string
  role?: string
  imageUrl?: string
}

export const memoriesData: Memory[] = [
  // Add your professional memories here
  // Example structure:
  // {
  //   id: '1',
  //   title: 'VLSI Design Workshop',
  //   description: 'Attended comprehensive workshop on VLSI design principles',
  //   type: 'Workshop',
  //   date: '2024-03-10',
  //   location: 'IIT Delhi',
  //   role: 'Participant',
  // },
]

