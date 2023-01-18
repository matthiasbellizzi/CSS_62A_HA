import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AppointmentViewGuardService implements CanActivate {
    
    constructor(private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        const id: any = route.paramMap.get('id');
        console.log(id);
        if (isNaN(id) || id < 1) {
            alert("Invalid product id");
            this.router.navigate(['/appointment-list']);
            return false;
        }
        
        return true;
    }

}