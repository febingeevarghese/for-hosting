import { Component, OnInit } from '@angular/core';
import {NgForm} from"@angular/forms";
import {ApiService} from'../api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  readvalues(data:NgForm){
  console.log(data.value);
  this.api.addCourse(data.value).subscribe((Response)=>
  {
    console.log(Response);
  alert('course added successfully')})

}
}
