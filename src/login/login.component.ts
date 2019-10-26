import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  login(username, password) {
    if (username && password) {
      console.log(username);
      console.log(password);
    } else {
      console.log('Enter something');
    }

  }
}
