import { Component, OnInit } from '@angular/core';

// Javascript Module

export class todo {
  constructor(public id: number,
              public description: string,
              public targetDate: Date,
              public done: boolean){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new todo(1, 'Become an Angular Expert', new Date(), false),
    new todo(2, 'Hard Work Pays Off!', new Date(), false),
    new todo(3, 'Cook chicken this weekend', new Date(), false)
  ]


  // Unstructured
  // todos = [
  //   {id: 1, description: 'Become an Angular Expert'},
  //   {id: 2, description: 'Hard Work Pays Off!'},
  //   {id: 3, description: 'Cook chicken this weekend'}
  // ]

  // todo = {
  //   id: 1,
  //   description: 'Become an Angular Expert'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
