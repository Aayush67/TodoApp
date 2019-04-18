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
      this.TodoForm=this.formBuilder.group({
        subject:["",Validators.required],
        status:"Done"
      })
  }

  addSubject()
  {
    console.log("aa",this.TodoForm)
    if(this.TodoForm.controls.subject.value=="")
      this.TodoForm.controls.subject.markAsTouched();
    else 
    {
      let data={
        subjectID:this.subjectID,
        name:this.TodoForm.controls.subject.value,
        status:this.TodoForm.controls.status.value,
      }
      this.subjectList.push(data);
      this.subjectID++;
    }
  }

  deleteSubject(subject)
  {
      console.log('Index',subject.subjectID,this.subjectList.indexOf(subject))
      this.subjectList.splice(this.subjectList.indexOf(subject),1);
  }

  updateSubjectRequest(subject)
  {
    console.log('aa',subject)
    this.TodoForm.patchValue({subject:subject.name});
    this.TodoForm.patchValue({status:subject.status});
    this.updateFlag=true;
    this.subjectToUpdateIndex=this.subjectList.indexOf(subject);
  }

  updateSubject()
  {
    this.subjectList[this.subjectToUpdateIndex].name=this.TodoForm.controls.subject.value;
    this.subjectList[this.subjectToUpdateIndex].status=this.TodoForm.controls.status.value;
    this.updateFlag=false;
    this.TodoForm.patchValue({subject:""});
    this.TodoForm.patchValue({status:"Done"});
    this.TodoForm.controls.subject.markAsUntouched();
  }
}
