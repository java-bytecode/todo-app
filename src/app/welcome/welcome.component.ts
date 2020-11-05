import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

// Similar to `public class WelcomeComponent implements OnInit {}` in Java
export class WelcomeComponent implements OnInit {

  message = 'Hello World!';
  message1 : string = 'I like Angular!'; // TS is intelligent enough to know what the type of the variable is from the value provided.

  constructor() { }

  ngOnInit(): void {
    // Compilation Error: this.message = 10;
    console.log(this.message)
  }

}
