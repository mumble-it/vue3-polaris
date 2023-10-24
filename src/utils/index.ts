export const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const countDecimals = (value: number) => {
    if (Math.floor(value) === value) return 0
    return value.toString().split('.')[1].length || 0
}

export const debounce = (func: any, duration?: number) => {
    let timeout: any
    return function (...args: any) {
        const effect = () => {
            timeout = null
            // @ts-ignore
            return func.apply(this, args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(effect, duration)
    }
}


export * from './breakpoints.ts'
