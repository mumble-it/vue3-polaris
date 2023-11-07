import { Breakpoints } from '@/types'

export const getClassesFromBreakpoints = <T>(obj: { [Breakpoint in Breakpoints]?: T }, base: string, half = false) => {
    const breakpoints = Object.keys(obj)
    let classes = ''

    for (const breakpoint of breakpoints) {
        // @ts-ignore
        classes += `${breakpoint}:${base}-${half ? (parseInt(obj[breakpoint]) / 2).toString() : obj[breakpoint]} `
    }

    return classes
}