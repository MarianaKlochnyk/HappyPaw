import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }, 
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./pages/login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'createaccount',
    loadChildren: () => import('./pages/createaccount/createaccount.module').then( m => m.CreateaccountPageModule)
  },
  {
    path: 'createaccount2',
    loadChildren: () => import('./pages/createaccount2/createaccount2.module').then( m => m.Createaccount2PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'supportivesrevice',
    loadChildren: () => import('./pages/supportivesrevice/supportivesrevice.module').then( m => m.SupportivesrevicePageModule)
  },
  {
    path: 'walkingapet',
    loadChildren: () => import('./pages/walkingapet/walkingapet.module').then( m => m.WalkingapetPageModule)
  },
  {
    path: 'donationforspecificanimal',
    loadChildren: () => import('./pages/donationforspecificanimal/donationforspecificanimal.module').then( m => m.DonationforspecificanimalPageModule)
  },
  {
    path: 'donationforshelter',
    loadChildren: () => import('./pages/donationforshelter/donationforshelter.module').then( m => m.DonationforshelterPageModule)
  },
  {
    path: 'makeadonate',
    loadChildren: () => import('./pages/makeadonate/makeadonate.module').then( m => m.MakeadonatePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'paymentmethods',
    loadChildren: () => import('./pages/paymentmethods/paymentmethods.module').then( m => m.PaymentmethodsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
