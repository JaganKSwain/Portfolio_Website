import { educationData, EducationItem } from './education'
import { achievementsData, Achievement } from './achievements'

export interface JourneyItem {
    id: string
    title: string
    subtitle: string
    date: string
    description: string
    type: 'Education' | 'Achievement' | 'Experience'
    tags?: string[]
    imageUrl?: string
}

// Helper to parse date strings like "2024 - 2028" or "2025-09-07"
const parseDate = (dateStr: string): number => {
    // If it's a range, take the start year
    if (dateStr.includes('-')) {
        const parts = dateStr.split('-')
        // Check if the first part is a year (4 digits)
        if (parts[0].trim().length === 4) {
            return parseInt(parts[0].trim())
        }
        // Try to parse as full date
        return new Date(dateStr).getTime()
    }
    return new Date(dateStr).getTime()
}

export const getJourneyData = (): JourneyItem[] => {
    const education: JourneyItem[] = educationData.map((item) => ({
        id: `edu-${item.id}`,
        title: item.degree,
        subtitle: item.institution,
        date: item.period,
        description: item.description,
        type: 'Education',
        tags: item.activities,
    }))

    const achievements: JourneyItem[] = achievementsData.map((item) => ({
        id: `ach-${item.id}`,
        title: item.title,
        subtitle: item.issuer || '',
        date: item.date,
        description: item.description,
        type: 'Achievement',
        imageUrl: item.imageUrl,
    }))

    // Combine and sort by date (descending)
    const allItems = [...education, ...achievements].sort((a, b) => {
        // Simple string comparison for now as dates are mixed formats
        // For a real timeline, we'd need robust date parsing
        return b.date.localeCompare(a.date)
    })

    return allItems
}
