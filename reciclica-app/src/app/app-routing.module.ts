import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./pages/splash-screen/splash-screen.module').then(m => m.SplashScreenPageModule)
  },
  {
    path: 'forgot-password-1',
    loadChildren: () => import('./pages/forgot-password-1/forgot-password-1.module').then(m => m.ForgotPassword1PageModule)
  },
  {
    path: 'create-account-1',
    loadChildren: () => import('./pages/create-account-1/create-account-1.module').then(m => m.CreateAccount1PageModule),
    data: { animation: 'none' }
  },
  {
    path: 'forgot-password-2',
    loadChildren: () => import('./pages/forgot-password-2/forgot-password-2.module').then(m => m.ForgotPassword2PageModule)
  },
  {
    path: 'forgot-password-3',
    loadChildren: () => import('./pages/forgot-password-3/forgot-password-3.module').then(m => m.ForgotPassword3PageModule)
  },
  {
    path: 'forgot-password-4',
    loadChildren: () => import('./pages/forgot-password-4/forgot-password-4.module').then( m => m.ForgotPassword4PageModule)
  },
  {
    path: 'confirm-1',
    loadChildren: () => import('./pages/confirm-1/confirm-1.module').then( m => m.Confirm1PageModule)
  },
  {
    path: 'confirm-2',
    loadChildren: () => import('./pages/confirm-2/confirm-2.module').then( m => m.Confirm2PageModule)
  },  {
    path: 'sign-in-1',
    loadChildren: () => import('./pages/sign-in-1/sign-in-1.module').then( m => m.SignIn1PageModule)
  },
  {
    path: 'sign-in-2',
    loadChildren: () => import('./pages/sign-in-2/sign-in-2.module').then( m => m.SignIn2PageModule)
  },
  {
    path: 'create-account-2',
    loadChildren: () => import('./pages/create-account-2/create-account-2.module').then( m => m.CreateAccount2PageModule)
  },
  {
    path: 'create-account-3',
    loadChildren: () => import('./pages/create-account-3/create-account-3.module').then( m => m.CreateAccount3PageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
