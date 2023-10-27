export type ActionListItem = {
    accessibilityLabel?: string;
    // TODO
    // helpText?: React.ReactNode;
    // prefix?: string;
    // suffix?: React.ReactNode;
    active?: boolean;
    content?: string;
    disabled?: boolean;
    destructive?: boolean;
    icon?: any;
    role?: string;
    truncate?: boolean;
    variant?: 'default'
        // | 'menu'
        | 'indented';
}