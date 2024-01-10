import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostTripComponent } from './post-trip/post-trip.component';
import { SearchTripComponent } from './search-trip/search-trip.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: "contact", component: ContactComponent},
  { path: "postTrips", component: PostTripComponent},
  { path: "searchTrips", component: SearchTripComponent},
  { path: "home", component: HomeComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/