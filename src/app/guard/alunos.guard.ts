import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      // console.log(childRoute);
      // console.log(state);

      console.log('AlunosGuard: Guarda de rota filha');

      if(state.url.includes('editar')){
        // alert('Usuário sem acesso');
        // return false;
      }
    return true;
  }
  
}
