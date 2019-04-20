import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { TodoService } from './app.service';
import { IAppState } from './redux/store';
import { NgRedux } from '@angular-redux/store';
import { INIT_TODO } from './redux/actions';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
  constructor(private loginService:LoginService,private todoService: TodoService, private ngRedux: NgRedux<IAppState>) {
    loginService.setValidUserList();

  }

  ngOnInit() {
    this.todoService.getJSON().subscribe(data => {
      this.ngRedux.dispatch({type: INIT_TODO, todo: data});
    });
  }
}


