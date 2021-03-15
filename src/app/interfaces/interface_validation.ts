export interface ValidationOk {
    S?: string
}

export interface ValidationError {
    E?: string
}

export interface Validation extends ValidationError, ValidationOk { }