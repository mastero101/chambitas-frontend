import { CanActivateFn } from '@angular/router';

export const professionalGuard: CanActivateFn = (route, state) => {
  return true;
};
