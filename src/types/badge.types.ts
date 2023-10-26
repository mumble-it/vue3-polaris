import { Size } from '@/types'

export type BadgeProgress = 'incomplete' | 'partiallyComplete' | 'complete'
export type BadgeSize = Extract<Size, 'medium' | 'large'>
