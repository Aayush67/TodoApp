import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  TodoForm:FormGroup;
  subjectList=[];
  subjectID=1;
  updateFlag=false;
  subjectToUpdateIndex;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit()
  {

  }
  
}
