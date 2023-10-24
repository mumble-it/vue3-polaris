import { BadgeProgress, BadgeProgressValue, BadgeTone, BadgeToneValue } from '@/types'

export function getDefaultAccessibilityLabel(progress?: BadgeProgress, tone?: BadgeTone): string {
    let progressLabel = ''
    let toneLabel = ''

    if (!progress && !tone) {
        return ''
    }

    switch (progress) {
        case BadgeProgressValue.Incomplete:
            progressLabel = 'Incomplete'
            break
        case BadgeProgressValue.PartiallyComplete:
            progressLabel = 'Partially complete'
            break
        case BadgeProgressValue.Complete:
            progressLabel = 'Complete'
            break
    }

    switch (tone) {
        case BadgeToneValue.Info:
            toneLabel = 'Info'
            break
        case BadgeToneValue.Success:
            toneLabel = 'Success'
            break
        case BadgeToneValue.Warning:
            toneLabel = 'Warning'
            break
        case BadgeToneValue.Critical:
            toneLabel = 'Critical'
            break
        case BadgeToneValue.Attention:
            toneLabel = 'Attention'
            break
        case BadgeToneValue.New:
            toneLabel = 'New'
            break
    }

    if (!tone && progress) {
        return progressLabel
    } else if (tone && !progress) {
        return toneLabel
    } else {
        return `${toneLabel} ${progressLabel}`
    }
}
