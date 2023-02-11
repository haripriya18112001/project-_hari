import { Component, IterableDiffers } from '@angular/core';
import { doctor } from 'src/model/profile';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  show:boolean=false;
  datas:doctor[]= [
    {
      image:'assets/images/d1.jpg',
      name:'ABIRAM SHENOY',
      depart:'Cardiology'
    },
    {
      image:'assets/images/D2.jpg',
      name:'HARIPRIYA S NAIR',
      depart:'Pediatrician'
    },
    {
      image:'assets/images/D3.jpg',
      name:'JOTHIKA PAVI',
      depart:'Dietician'
    },
    {
      image:'assets/images/D5.jpg',
      name:'ABDUL MUHAMMED',
      depart:'Endocrinology'
    }
  ]

  data:doctor[]=[
    {
      image:'assets/images/D4.jpg',
      name:'ANJALI MENON TS',
      depart:'Endocrinology'
    },
    {
      image:'assets/images/D6.jpg',
      name:'SHALINI CHERIAN',
      depart:'Dietician'
    },
    {
      image:'assets/images/D7.jpg',
      name:'RAVI THARAKAN ON',
      depart:'Endocrinology'
    },
    {
      image:'assets/images/D8.jpg',
      name:'GEORGR MATHEW KURIEN',
      depart:'Endocrinology'
    }
    
  ]
  store:doctor= new doctor;

  doctorDep(item:any){
    this.show=true;
    this.store=item;
  }

}

    
