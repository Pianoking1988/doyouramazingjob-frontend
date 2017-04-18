import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListFormComponent } from './components/job-list-form/job-list-form.component';

import { Auth } from './services/auth.service';

const appRoutes: Routes = [
  { path: '',     component: UserListComponent },
  { path: 'jobs', component: JobListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    JobListComponent,
    JobListFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
