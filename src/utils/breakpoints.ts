import {Breakpoints} from "@/types";

export const getClassesFromBreakpoints = <T>(obj: { [Breakpoint in Breakpoints]?: T }, base: string) => {
    const breakpoints = Object.keys(obj);
    let classes = ''

    for (let breakpoint of breakpoints) {
        // @ts-ignore
        classes +=  `${breakpoint}:${base}-${obj[breakpoint]} `
    }

    return classes
}