import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
  export class UserService{
    public url: string;

    constructor(private _http: HttpClient){
      this.url = GLOBAL.url;
    }
  
    register(user_to_register){
      //OBJETO JSON into a String.
      let params = JSON.stringify(user_to_register);
      let headers = new HttpHeaders({'Content-Type':'application/json'})

      return this._http.post(this.url+'register', params, {headers: headers})
      .map((res:any) => res);
    }
  }
