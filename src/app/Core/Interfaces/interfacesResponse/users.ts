import { Roles, Rol } from "../interfacesResponse/roles";

export interface Users {
    message:string,
    users: User[],
    user?:User | undefined
}

interface User{
    name:string,
    ci: number,
    lastname: string,
    created_at?:string,
    role: Roles,
    role_id?:number
}

export interface UsersGet{
    message:string,
    users: UserGet[],
    user?:UserGet
}

interface UserGet{
    ci: number,
    name:string,
    lastname: string,
    created_at?:string,
    role: Rol,
}

