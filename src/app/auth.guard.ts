import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = this.authService.getToken();

    if (token && this.authService.isTokenValid(token)) {
      const userRoles = this.authService.getUserRoles(token); // Extraia roles do token
      const requiredRoles = route.data['roles'] as Array<string>; // Pega as roles esperadas da rota

      if (!requiredRoles || requiredRoles.some((role) => userRoles.includes(role))) {
        return true;
      }
    }

    // Redireciona para login ou página de erro
    this.router.navigate(['/login?autorized=true']);
    return false;
  }
}
