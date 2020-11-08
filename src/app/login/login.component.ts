import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'cyber'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  // handleLogin(){
  //   console.log(this.username)
  // }

  handleLogin(){
    if (this.username == "cyber" && this.password == "abcd12345"){
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    console.log(this.username)
  }

}
