export type BadgeProgress = 'incomplete' | 'partiallyComplete' | 'complete'
export type BadgeSize = 'medium' | 'large'
export type BadgeTone = 'info' | 'success' | 'warning' | 'critical' | 'attention' | 'new'

export enum BadgeProgressValue {
    Incomplete = 'incomplete',
    PartiallyComplete = 'partiallyComplete',
    Complete = 'complete',
}

export enum BadgeToneValue {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Critical = 'critical',
    Attention = 'attention',
    New = 'new',
}
