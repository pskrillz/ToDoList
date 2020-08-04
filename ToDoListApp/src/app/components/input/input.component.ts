import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})


export class InputComponent implements OnInit {


  constructor(public _data: DataService) { }

  ngOnInit(): void {
  }

  onClick(){
    this._data.addToDo();
    console.log(this._data.inputItem)
  }

}
