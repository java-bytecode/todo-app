import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    if (username == "cyber" && password == "abcd12345"){
      return true;
    } else {
      return false;
    }
  }
}
