import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { HttpClientModule } from '@angular/common/http';
import {NgRedux,NgReduxModule} from "@angular-redux/store";
// import { ISubjectState, INITIAL_STATE } from '../store/subjectStore';
// import { rootReducer } from '../reducer/reducer';
import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
}
