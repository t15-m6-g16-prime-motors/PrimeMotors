export interface IUserRequest {
    full_name: string,
    email: string,
    password: string
}

export interface IEmailRequest {
    to: string,
    subject: string,
    text: string
}