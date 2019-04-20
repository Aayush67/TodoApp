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
export class ListTodoComponent implements OnInit {

  @select() subjectList;
  filterData;

 constructor(private ngRedux: NgRedux<IAppState>,private router: Router,private todoService:TodoService) {}

  ngOnInit() {
    console.log('aaa',this.subjectList)
  }

deleteSubject(subject)
{
  this.ngRedux.dispatch({type: REMOVE_TODO, id: subject.id});
  console.log(this.subjectList.length)
}

//Set subject to update in update Component
  updateSubjectRequest(subject)
  {
    this.todoService.setData(subject)
    console.log('aaaa',subject);
  }
  search(value)
  {
    // console.log('aaa',event)
    this.filterData=value;
  }

}

