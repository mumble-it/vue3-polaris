import { BadgeProgress } from '@/types'
import { Tone } from '@/types'
import { ToneValue as BadgeToneValue } from '@/types'

export function getDefaultAccessibilityLabel(progress?: BadgeProgress, tone?: Tone): string {
    let progressLabel = ''
    let toneLabel = ''

    if (!progress && !tone) {
        return ''
    }

    switch (progress) {
        case 'incomplete':
            progressLabel = 'Incomplete'
            break
        case 'partiallyComplete':
            progressLabel = 'Partially complete'
            break
        case 'complete':
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
