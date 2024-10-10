export interface Roles {
  message:string,
  roles: arrayRoles[],
  role?: arrayRoles 
}

export interface arrayRoles{
    id: number,
    name:string,
    description:string
    create_at?:string,
    status?:string,
    updated_at?:string
    actions: Permisos[]
}

export interface Rol{
  actions:Permisos[],
  description:string,
  name:string 
}
 export interface Permisos{
    id:number
    name:string,
    description:string,
    status:string
}