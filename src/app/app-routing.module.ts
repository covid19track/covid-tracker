import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; // Home Page
import { ListComponent } from './list/list.component'; // Countries List Page
import { SearchComponent } from './search/search.component';
import { ProgrammersComponent } from './programmers/programmers.component';
// import { RatingComponent } from "./rating/rating.component"; // Countries Rating Page

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'programmers', component: ProgrammersComponent },
  // { path: 'rating', component: RatingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
