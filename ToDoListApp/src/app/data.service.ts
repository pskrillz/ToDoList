import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  inputItem: string;
  toDoList = [
    'Change a diaper',
    'Make tea',
    'Take out the garbage',
    'Ask Peter a quick question',
  ];

  constructor() {}

  addToDo() {
    this.toDoList.push(this.inputItem);

    console.log(this.toDoList);
  }
  clearList(item) {
    this.toDoList.splice(this.toDoList.indexOf(item), 1);
  }
}
