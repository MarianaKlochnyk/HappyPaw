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
  },
  {
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
  {
    path: 'confirm-3',
    loadChildren: () => import('./pages/confirm-3/confirm-3.module').then( m => m.Confirm3PageModule)
  },
  {
    path: 'history-of-donation',
    loadChildren: () => import('./pages/history-of-donation/history-of-donation.module').then( m => m.HistoryOfDonationPageModule)
  },
  {
    path: 'detailed-info',
    loadChildren: () => import('./pages/detailed-info/detailed-info.module').then( m => m.DetailedInfoPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'filter-2',
    loadChildren: () => import('./pages/filter-2/filter-2.module').then( m => m.Filter2PageModule)
  },  
  {
    path: 'usefull-information',
    loadChildren: () => import('./pages/usefull-information/usefull-information.module').then( m => m.UsefullInformationPageModule)
  },
  {
    path: 'suportive-service',
    loadChildren: () => import('./pages/suportive-service/suportive-service.module').then( m => m.SuportiveServicePageModule)
  },
  {
    path: 'walking-pet',
    loadChildren: () => import('./pages/walking-pet/walking-pet.module').then( m => m.WalkingPetPageModule)
  },
  {
    path: 'walking-pet-animal',
    loadChildren: () => import('./pages/walking-pet-animal/walking-pet-animal.module').then( m => m.WalkingPetAnimalPageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'donate-for-pet',
    loadChildren: () => import('./pages/donate-for-pet/donate-for-pet.module').then( m => m.DonateForPetPageModule)
  },
  {
    path: 'donate-for-shelter',
    loadChildren: () => import('./pages/donate-for-shelter/donate-for-shelter.module').then( m => m.DonateForShelterPageModule)
  },
  {
    path: 'adopted-pet',
    loadChildren: () => import('./pages/adopted-pet/adopted-pet.module').then( m => m.AdoptedPetPageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'payment-1',
    loadChildren: () => import('./pages/payment-1/payment-1.module').then( m => m.Payment1PageModule)
  },
  {
    path: 'make-donate-1',
    loadChildren: () => import('./pages/make-donate-1/make-donate-1.module').then( m => m.MakeDonate1PageModule)
  },
  {
    path: 'addnewcard',
    loadChildren: () => import('./pages/addnewcard/addnewcard.module').then( m => m.AddnewcardPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

