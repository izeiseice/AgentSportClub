import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private userList: User[];
  private respone;


  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  getAllUser() {
    this.searchService.getAllUser().subscribe((response) => {
      this.userList = response;
    })

  }
  search(student_id,student_name){
    if(student_id == "" && student_name == ""){
     this.getAllUser();
     }
   }
  
   
}
interface User {
  _id: string;
  name: string;
  nickname: string;
}