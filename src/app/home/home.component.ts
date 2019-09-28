import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'my-app';
  name ="Febin";
  course="Full Stack Development"
  active=false
  constructor(){
    setTimeout(()=>{
      this.active=true;
    },10000);
    


  }
  ngOnInit() {
  }

}
