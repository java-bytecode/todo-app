import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id: 1, description: 'Become an Angular Expert'},
    {id: 2, description: 'Hard Work Pays Off!'},
    {id: 3, description: 'Cook chicken this weekend'}
  ]

  // todo = {
  //   id: 1,
  //   description: 'Become an Angular Expert'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
