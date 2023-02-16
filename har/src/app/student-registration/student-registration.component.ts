import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  MyArrayType:any[];

  constructor(private route: ActivatedRoute ,private router: Router) { }
  studentdetail(data)
  {
    this.router.navigate(['/viewstudent',{id: data.id,name: data.name, lastname: data.lastname, m1: data.mark1, m2: data.mark2, m3: data.mark3}])
  }
  ngOnInit() {
  }

}
