import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/core/local-storage.service';
import { IsAdminLoggedInService } from '../services/core/is-admin-logged-in.service';

export const isAdminLoginGuard: CanActivateFn = (route, state) => {
  const localHost = inject(LocalStorageService);
  const router = inject(Router);
  const isAdminLoggedIn = inject(IsAdminLoggedInService);
  if (!localHost.getItem("adminToken")) {
    router.navigate(["admin/login"]);
    isAdminLoggedIn.setFlag(isAdminLoggedIn.isAdminLoggedInValue);
    return false;
  }else{
    isAdminLoggedIn.setFlag(!isAdminLoggedIn.isAdminLoggedInValue);
    return true;
  }
};
