export default function passwordValidate(password: string): {isValid: boolean, errors?: string[]} {
    const error: string[] = []

    if (password.length < 8) {
        error.push("Password length must be more than 8 characters")
    }

    if (!/[~`!@#$%^&*()\-_+={}\[\]|\\;:"<>,.\/?]/g.test(password)) {
        error.push("Password must contain at least one of these character ~`! @#$%^&*()-_+={}[]|\\;:\"<>,./?")
    }

    return {
        isValid: error.length === 0 ,
        errors: error.length === 0? undefined : error
    }
}
