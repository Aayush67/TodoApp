import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { TodoService } from '../app.service';
import {NgRedux,select} from "@angular-redux/store";
import { ISubjectState } from 'src/store/subjectStore';
import { subjectTodoAction } from 'src/action/subjectAction';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title = 'TodoApp';
  TodoForm:FormGroup;
  subjectList=[];
  subjectID=1;
  updateFlag=false;
  subjectToUpdateIndex;
  constructor(private ngRedux:NgRedux<ISubjectState>,private todoService:TodoService,private formBuilder:FormBuilder,private http: HttpClient){
    // this.todoService.getJSON().subscribe(data => {
    //   this.subjectList=data
  // });
}


  ngOnInit()
  {
      this.TodoForm=this.formBuilder.group({
        subject:["",Validators.required],
        status:"Done"
      })
  }

  addSubject()
  {
    // console.log("aa",this.TodoForm)
    if(this.TodoForm.controls.subject.value=="")
      this.TodoForm.controls.subject.markAsTouched();
    else 
    {
      let data={
        // id:this.subjectID,
        subject:this.TodoForm.controls.subject.value,
        status:this.TodoForm.controls.status.value,
      }
      this.ngRedux.dispatch({type:subjectTodoAction.Add_NewSubject,todo:data});
      // this.subjectID++;
    }
  }

  // deleteSubject(subject)
  // {
  //     console.log('Index',subject.subjectID,this.subjectList.indexOf(subject))
  //     this.subjectList.splice(this.subjectList.indexOf(subject),1);
  // }

  // updateSubjectRequest(subject)
  // {
  //   console.log('aa',subject)
  //   this.TodoForm.patchValue({subject:subject.name});
  //   this.TodoForm.patchValue({status:subject.status});
  //   this.updateFlag=true;
  //   this.subjectToUpdateIndex=this.subjectList.indexOf(subject);
  // }

  // updateSubject()
  // {
  //   this.subjectList[this.subjectToUpdateIndex].name=this.TodoForm.controls.subject.value;
  //   this.subjectList[this.subjectToUpdateIndex].status=this.TodoForm.controls.status.value;
  //   this.updateFlag=false;
  //   this.TodoForm.patchValue({subject:""});
  //   this.TodoForm.patchValue({status:"Done"});
  //   this.TodoForm.controls.subject.markAsUntouched();
  // }

}