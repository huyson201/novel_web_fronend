import { DefaultApiResponse } from './common';
export interface Auth {
    id: number,
    uid: string,
    email: string,
    name: string,
    createdAt?: string,
    updatedAt?: string
}
export interface RegisterInput {
    name: string,
    email: string,
    password: string
}

export interface LoginInput {
    email: string,
    password: string
}

export interface ChangePasswordInput {
    oldPasswd: string,
    newPasswd: string,
    reNewPasswd: string
}

export interface AuthProfile {
    id: number,
    uid: String,
    email: String,
    name: String,
}



