declare global {
    interface InputNumberEvent extends Event {
        target: HTMLInputElement & { value: number }
    }
    interface InputEvent extends Event {
        target: HTMLInputElement & { value: number | string }
    }
    interface InputSelectEvent extends Event {
        target: HTMLSelectElement & { value: number | string }
    }
}

export * from './action-list.types.ts'
export * from './badge.types.ts'
export * from './banner.types.ts'
export * from './button.types.ts'
export * from './common.types.ts'
export * from './spinner.types.ts'
export * from './text.types.ts'
export * from './text-field.types.ts'
export * from './tokens.types.ts'
export * from './icon.types.ts'
export * from './button-group.types.ts'
