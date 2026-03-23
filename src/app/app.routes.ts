import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/notFound/not-found.component';

export const routes: Routes = [
  { path: '**', component: NotFoundComponent }
];