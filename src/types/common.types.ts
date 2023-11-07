export type Size = 'small' | 'medium' | 'large'

export type Tone = 'info' | 'success' | 'warning' | 'critical' | 'attention' | 'new'
export enum ToneValue {
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Critical = 'critical',
    Attention = 'attention',
    New = 'new',
}

export type Target = '_blank' | '_self' | '_parent' | '_top'

export interface Action {
    /** A unique identifier for the action */
    id?: string
    /** Content the action displays */
    content?: string
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string
    /** A destination to link to, rendered in the action */
    url?: string
    /** Forces url to open in a new tab */
    external?: boolean
    /** Where to display the url */
    target?: Target
    disabled?: boolean
    /** Callback when an action takes place */
    onAction?(): void
    /** Callback when mouse enter */
    onMouseEnter?(): void
    /** Callback when element is touched */
    onTouchStart?(): void
}