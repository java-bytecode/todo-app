import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  // Angular takes in the built-in router and make it available here.
  // This is called "Dependency Injection".
  // When a component wants to use another component. Then it is called a dependency.
  constructor(private router: Router,
    private hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  // handleLogin(){
  //   console.log(this.username)
  // }

  handleLogin(){
    if (this.hardCodedAuthenticationService.authenticate(this.username, this.password)){
      // navigate() helps us to route to a specific page. The first argument of the array is the page you want to navigate to.
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    console.log(this.username)
  }

}
