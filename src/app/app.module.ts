import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePortfolioComponent } from './pages/home-portfolio/home-portfolio.component';
import { ContactPortfolioComponent } from './pages/contact-portfolio/contact-portfolio.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { GalleryPortfolioComponent } from './pages/gallery-portfolio/gallery-portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePortfolioComponent,
    ContactPortfolioComponent,
    GalleryPortfolioComponent,
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePortfolioComponent},
      { path: 'contacts', component: ContactPortfolioComponent },
      { path: 'gallery', component: GalleryPortfolioComponent },
      { path: '**', redirectTo: 'home' }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
