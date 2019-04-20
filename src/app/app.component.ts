import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { TodoService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  constructor(private formBuilder:FormBuilder,private todoService:TodoService){
    let data=this.todoService.getJSON();
    this.todoService.setInitialState(data);
  }

  ngOnInit()
  {

  }
  
}
