import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FusionComponent } from './fusion/fusion.component';

export const routes: Routes = [
    { path: 'app-home', component: HomeComponent },
    { path: 'app-about', component: AboutComponent },
    { path: 'app-fusion', component: FusionComponent },
    { path: 'app-contact', component: ContactComponent },
    { path: 'app-services', component: ServicesComponent },
    { path: 'app-gallery', component: GalleryComponent },
    { path: '', redirectTo: '/app-home', pathMatch: 'full' }

];
