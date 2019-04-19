import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  TodoForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
// @Input() Subject;
@Input() childMessage: string;

  ngOnInit() {
    this.TodoForm=this.formBuilder.group({
      id:"",
      subject:["",Validators.required],
      status:"Done"
    })

  }
  updateSubject()
  {
    console.log('aaaaaaa',this.childMessage);

  }
}
