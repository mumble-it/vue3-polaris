import { Action } from '@/types/common.types.ts'

export type BannerTone = 'success' | 'info' | 'warning' | 'critical'

export interface BannerDisableableAction extends Action {
    disabled?: boolean
}

export interface BannerLoadableAction extends Action {
    loading?: boolean
}
