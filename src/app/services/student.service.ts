import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Student} from '../models/student'
import {Observable} from 'rxjs'
import {retry, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:string="http//localhost:9090/api/category"

  httpOptions={
    header:new HttpHeaders({
      'Content-type':'application/json',
      'accept':'application/json'
    })
  };
  constructor() { }
}
