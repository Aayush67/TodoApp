import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { TodoService } from './app.service';
import { IAppState } from './redux/store';
import { NgRedux } from '@angular-redux/store';
import { INIT_TODO } from './redux/actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  constructor(private todoService: TodoService, private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
    this.todoService.getJSON().subscribe(data => {
      this.ngRedux.dispatch({type: INIT_TODO, todo: data});
    });
  }
}


