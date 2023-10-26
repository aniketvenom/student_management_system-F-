import { Component } from '@angular/core';
import { Student } from '../student';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registor-student',
  templateUrl: './registor-student.component.html',
  styleUrls: ['./registor-student.component.css']
})
export class RegistorStudentComponent {

  student: Student=new Student();
  constructor(private authService:AuthService , private router:Router){}

  onSubmit(){
    this.authService.registerStudent(this.student).subscribe(
      data =>{
        console.log("Success",data);
        alert("Students details saved successfully !");
       
      }
    );
  }

}
