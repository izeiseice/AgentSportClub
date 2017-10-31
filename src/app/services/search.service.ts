import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class SearchService {

  constructor(private http:Http) { }
  getAllUser(){
    return this.http.get("@ds229435.mlab.com:29435/swusport/student")
    .map((res) => res.json());
    }
  
  
}
