import { Action, Tone } from '@/types'

export type BannerTone = Extract<Tone, 'success' | 'info' | 'warning' | 'critical'>

export interface BannerDisableableAction extends Action {
    disabled?: boolean
}

export interface BannerLoadableAction extends Action {
    loading?: boolean
}
