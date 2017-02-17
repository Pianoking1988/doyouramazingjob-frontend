import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { JobListComponent } from './components/job-list/job-list.component';

const appRoutes: Routes = [
  { path: '',        component: UserListComponent },
  { path: 'jobs', component: JobListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    JobListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
