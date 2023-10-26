import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, observable } from 'rxjs';

const Student_Api = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAllStudent(): Observable<Student[]>
  {
    return this.http.get<Student[]>(Student_Api+"getAllStudents");
  }

  registerStudent(student:Student): Observable<Object>
  {
    return this.http.post<any>(Student_Api+"saveStudent",student);
  }
}
