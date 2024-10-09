import { CanActivateFn } from "@angular/router";

export const AuthGuard:CanActivateFn = (route,state) =>{
    let permission = false;
    if (localStorage.getItem('token')) {
        permission = true;
    }

    return permission;
}