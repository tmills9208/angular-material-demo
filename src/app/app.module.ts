import { MatComponentsModule } from './mat-components.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './pages/app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DarkModeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    MatComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
