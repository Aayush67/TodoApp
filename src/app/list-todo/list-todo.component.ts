import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { TodoService } from '../app.service';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../redux/store';
import { REMOVE_TODO} from '../redux/actions';
import { Router } from '@angular/router';

// import moc from '../../assets/moc-todos.json';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
// export class ListTodoComponent implements OnInit {

//   subjectList=[];
//  constructor(private todoService:TodoService) {
//   this.todoService.getJSON().subscribe(data => {
//     this.subjectList=data
// });
//  }
//   ngOnInit() {
//   }
//   search(event)
//   {
//     let filteredSubject;
//     if(event.data="")
//       filteredSubject=this.subjectList
//     else
//       {

//       }
//     console.log('aa',event.data)
//   }
// }
export class ListTodoComponent implements OnInit {

  @select() subjectList;
// @Output() Subject;
// @Output() messageEvent = new EventEmitter<Object>();

 constructor(private ngRedux: NgRedux<IAppState>,private router: Router,private todoService:TodoService) {}

  ngOnInit() {
    console.log('aaa',this.subjectList)
  }

deleteSubject(subject)
{
  this.ngRedux.dispatch({type: REMOVE_TODO, id: subject.id});
  console.log(this.subjectList.length)
  // if(this.subjectList.length==1)
  // {
  //   this.router.navigate(['/add'])
  //   console.log('length o')
  // }
}
  updateSubjectRequest(subject)
  {
    // this.Subject=subject
    this.todoService.setData(subject)
    console.log('aaaa',subject);
    // this.messageEvent.emit(subject)


  }

}

