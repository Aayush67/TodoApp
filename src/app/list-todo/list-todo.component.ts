import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { TodoService } from '../app.service';
import { select, NgRedux } from '@angular-redux/store';
import { ISubjectState } from 'src/store/subjectStore';

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

  @select('subjectList') subjectList;

 constructor(private ngRedux:NgRedux<ISubjectState>) {}

  ngOnInit() {
    console.log('aaa',this.subjectList)
  }

}

