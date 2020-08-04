import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  inputItem: string;
  toDoList = [];

  constructor() { }

  addToDo() {
    this.toDoList.push(this.inputItem)

    console.log(this.toDoList)
  }

}


