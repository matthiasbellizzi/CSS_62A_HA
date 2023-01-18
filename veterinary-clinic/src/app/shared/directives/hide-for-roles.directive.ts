import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideForRoles]'
})
export class HideForRolesDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input() set appHideForRoles (hideForRoles: Array<string>){
    const hideFor = hideForRoles || [];
     if(hideFor.length > 0){
      //
      this.roleChecker(hideFor);
     }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef)
     }
  }

  roleChecker(hideFor:Array<string>){
    //current user rolers
    const role = localStorage.getItem('returnedRole')!;
    console.log(role);
    const userRoles: Array<string> = [role] //user logged in roler
    console.log(userRoles);
    if (userRoles.length === 0){
      //
      this.viewContainerRef.clear();
    }else{
      const idx = userRoles.findIndex(role =>hideFor.indexOf(role) !== -1);
      return idx < 0 ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
    }
  }
}
