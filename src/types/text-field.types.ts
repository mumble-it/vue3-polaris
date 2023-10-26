export type TextFieldType =
    'text'
    | 'email'
    | 'number'
    | 'integer'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'time'
    | 'week'
    | 'currency';

export type TextFieldAutocomplete =
    | 'on'
    | 'name'
    | 'given-name'
    | 'family-name'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'organization'
    | 'organization-title'
    | 'tel'
    | string

export type TextFieldInputMode = 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';