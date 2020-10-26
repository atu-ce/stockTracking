import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model = new Model();
  isDisplay = false;

  getUser() {
    return this.model.user;
  }

  getItems() {
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action); // filter() kodunu anlamadım :(
  }

  addItem(value) {
    if(value != ""){
      this.model.items.push(new TodoItem(value, false));
    }
  }
}
