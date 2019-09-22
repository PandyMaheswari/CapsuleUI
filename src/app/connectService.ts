import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TaskVO } from './taskVO';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';



@Injectable()
export class ConnectService {
  constructor(private http: Http) { }
  public addTask(taskVO){
    return this.http.post('http://localhost:3673/taskRestApI',taskVO).pipe(map(response=> response));
  }
}