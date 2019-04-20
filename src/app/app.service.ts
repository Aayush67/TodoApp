import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root',
})
export class  TodoService { 
 
    constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get("./assets/moc-todos.json");
  }

  private data;
  private initialState;

  setData(data){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }

  setInitialState(data)
  {
    this.initialState=data
  }
  getInitialState()
  {

  }

}