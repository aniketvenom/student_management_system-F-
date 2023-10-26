import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RegistorStudentComponent } from './registor-student/registor-student.component';

const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"studentList", component:StudentListComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"registorStudent",component:RegistorStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
