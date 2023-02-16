import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
{path:'home', component:HomepageComponent},
{path:'studentreg', component:StudentRegistrationComponent},
{path:'viewstudent', component:ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
