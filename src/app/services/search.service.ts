import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class SearchService {

  constructor(private http:Http) { }
  getAllUser(){
    return this.http.get("")
    .map((res) => res.json());
    }
  
  
}
