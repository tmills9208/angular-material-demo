import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatComponentsModule } from './../mat-components.module';

import {
  HomePageComponent,
  ServicesPageComponent,
  PricingPageComponent,
  EventsPageComponent,
  ComponentsPageComponent
} from '.';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'components', component: ComponentsPageComponent },
];

@NgModule({
  declarations: [
    HomePageComponent,
    ServicesPageComponent,
    PricingPageComponent,
    EventsPageComponent,
    ComponentsPageComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes), MatComponentsModule, FormsModule],
  exports: [
    RouterModule, 
    HomePageComponent,
    ServicesPageComponent,
    PricingPageComponent,
    EventsPageComponent,
    ComponentsPageComponent],
})
export class AppRoutingModule {}
