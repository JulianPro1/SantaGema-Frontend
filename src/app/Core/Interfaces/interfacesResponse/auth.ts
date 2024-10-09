import { RolesSend } from "../interfacesSend/roles-send";

export interface Auth {
    message:string,
    user:IobjUser,
    role: RolesSend,
}

interface IobjUser{
    ci:number,
    name:string,
    description:string,
    token:string,
}

export interface Login{
    ci:number,
    password:string
}


