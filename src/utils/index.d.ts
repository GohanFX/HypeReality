export type User = {
    id: number;
    username: string
    password: string
    shoes: Array<shoe>
}

declare module "iron-session" {
    interface IronSessionData {
        user?: User
    }
}

export type RegisterRequest = {
    username: string,
    password: string,
    email: string
}

export type LoginRequest = {
    username: string,
    password: string,
}


export type shoe = {
    id: number
    title: string
    description: string
    condition: shoeCondition
    content?: string
    avaiable: Boolean
    sellerId: number
}
export enum shoeCondition {
    NEW,
    OPENBOX,
    GOOD,
    ACCEPTABLE
}