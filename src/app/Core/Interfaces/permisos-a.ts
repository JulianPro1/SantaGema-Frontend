export interface PermisosA {
    message:string,
    actions:actionsA[]
}

interface actionsA{
    id: number,
    description: string,
    created_at: string,
    updated_at: string,
    name: string,
    status: string
}