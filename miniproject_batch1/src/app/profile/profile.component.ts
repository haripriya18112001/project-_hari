import { Component,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  show:boolean=false;
  @Input()
  x:any;
  
 
  @Output()
  back=new EventEmitter;

  
  goBack()
  {
    this.back.emit(this.show);
    console.log();
  }


}
