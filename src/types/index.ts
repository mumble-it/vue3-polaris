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

export type Target = '_blank' | '_self' | '_parent' | '_top';
export interface Action {
    /** A unique identifier for the action */
    id?: string;
    /** Content the action displays */
    content?: string;
    /** Visually hidden text for screen readers */
    accessibilityLabel?: string;
    /** A destination to link to, rendered in the action */
    url?: string;
    /** Forces url to open in a new tab */
    external?: boolean;
    /** Where to display the url */
    target?: Target;
    /** Callback when an action takes place */
    onAction?(): void;
    /** Callback when mouse enter */
    onMouseEnter?(): void;
    /** Callback when element is touched */
    onTouchStart?(): void;
}

export * from './button.types.ts'
export * from './spinner.types.ts'
export * from './text.types.ts'
export * from './text-field.types.ts'
export * from './tokens.types.ts'
export * from './badge.types.ts'

