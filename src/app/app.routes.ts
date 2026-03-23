import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/notFound/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home.page').then(m => m.HomePageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about.page').then(m => m.AboutPageComponent),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./pages/work.page').then(m => m.WorkPageComponent),
  },
  {
    path: 'process',
    loadComponent: () =>
      import('./pages/process.page').then(m => m.ProcessPageComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact.page').then(m => m.ContactPageComponent),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];