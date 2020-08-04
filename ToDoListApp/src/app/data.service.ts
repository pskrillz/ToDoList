import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  inputItem: string;
  toDoList = ['Change a diaper', 'Make tea', 'Take out the garbage'];

  constructor() {}

  addToDo() {
    this.toDoList.push(this.inputItem);

    console.log(this.toDoList);
  }
  clearList() {}
}
