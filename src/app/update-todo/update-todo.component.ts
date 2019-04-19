import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { TodoService } from '../app.service';
import { UPDATE_TODO } from '../redux/actions';
import { IAppState } from '../redux/store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  TodoForm:FormGroup;
  subject;
  constructor(private ngRedux: NgRedux<IAppState>,private formBuilder:FormBuilder,private todoService:TodoService) {
    this.subject=this.todoService.getData();
   }
// @Input() Subject;
@Input() childMessage: string;

  ngOnInit() {
    this.TodoForm=this.formBuilder.group({
      id:[this.subject.id,Validators.required],
      subject:[this.subject.subject,Validators.required],
      status:this.subject.status?"Done":"Not Done"
    })
      console.log('app',this.subject  )
  }
  updateSubject()
  {

    console.log('aaaaaaa',this.TodoForm);
    let data={
      id:this.TodoForm.controls.id.value,
      subject:this.TodoForm.controls.subject.value,
      status:(this.TodoForm.controls.status.value=="Done")?1:0,
    }
    this.ngRedux.dispatch({type: UPDATE_TODO, todo: data});

  }
}
