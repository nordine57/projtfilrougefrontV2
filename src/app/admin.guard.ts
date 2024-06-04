import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from './authentification.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authentification = inject(AuthentificationService);
  const router = inject(Router);

  return authentification.utilisateur?.role == 1
    ? true
    : router.parseUrl('/connexion');
};
