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
import { IAppState, rootReducer, INITIAL_STATE } from './redux/store';
import { FilterTable } from './list-todo/data.filter';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './services/interceptor';
import { BlockUIModule } from 'ng-block-ui';



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    UpdateTodoComponent,
    ListTodoComponent,
    FilterTable,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    BlockUIModule.forRoot()
  ],
  providers: [AuthGuardService,AuthService,{provide: HTTP_INTERCEPTORS,useClass: APIInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux:NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer,INITIAL_STATE);
  }
}
