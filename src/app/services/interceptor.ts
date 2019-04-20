import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';

// import { AuthService } from './auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
// import { tap} from "rxjs/operators/tap";



@Injectable(
  // {providedIn:'root'}
)
export class APIInterceptor implements HttpInterceptor {
  @BlockUI() blockUI: NgBlockUI;
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepted", request)


    this.blockUI.start('Loading...'); // Start blocking

    // setTimeout(() => {
    //   this.blockUI.stop(); // Stop blocking
    // }, 2000);

      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            this.blockUI.stop();//Stops Loader On Success
          }
          return event;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log('event--->>>', error);
          // if (error.status === 401) 
          this.blockUI.stop();//Stops Loader On Error
          return throwError(error);
        }));


  }
}