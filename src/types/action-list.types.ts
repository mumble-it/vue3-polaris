import { Action } from "@/types"

export interface ActionListItem extends Action {
    // TODO
    // helpText?: React.ReactNode;
    // prefix?: string;
    // suffix?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    destructive?: boolean;
    icon?: any;
    role?: string;
    truncate?: boolean;
    variant?: 'default'
        // | 'menu'
        | 'indented';
}