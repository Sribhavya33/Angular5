import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template:`<p>This is my first app</p>`,
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

itemCount: number;
btnText: string = 'Add an item';
goalText: string = 'My first life goal parasliding';
goals = [];
  constructor() { }

  ngOnInit() {
    this.itemCount - this.goals.length;
  }
addItem(){
  this.goals.push(this.goalText);
  this.goalText = '';
  this.itemCount = this.goals.length;
}

}
