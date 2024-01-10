
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'angular-ng-stepper';
import { ReactiveFormsModule } from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PostTripComponent } from './post-trip/post-trip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import {HomeComponent} from './home/home.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    NgStepperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PostTripComponent,
    SearchTripComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/