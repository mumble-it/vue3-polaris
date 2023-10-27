export type ActionListItem = {
    accessibilityLabel?: string;
    // TODO
    // helpText?: React.ReactNode;
    // prefix?: React.ReactNode;
    // suffix?: React.ReactNode;
    active?: boolean;
    content?: string;
    disabled?: boolean;
    destructive?: boolean;
    role?: string;
    truncate?: boolean;
    variant?: 'default' | 'menu' | 'indented';
}