import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'contact', component: ContactComponent}
    
];