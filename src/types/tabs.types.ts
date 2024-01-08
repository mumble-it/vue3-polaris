export interface Tab {
    id: string
    content: string
    panelID?: string
    accessibilityLabel?: string
    badge?: string
    icon?: any
    url?: string
    isLocked?: boolean
    disabled?: boolean
    viewNames?: string[]
    isModalLoading?: boolean
    focused?: boolean
    siblingTabHasFocus?: boolean
    selected?: boolean
    measuring?: boolean
    tabIndexOverride?: 0 | -1
    onFocus?(): void
    onAction?(): void
}
