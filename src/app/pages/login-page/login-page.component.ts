import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  email: string = "admin@edifybrokers.com";
  emails: string= "customer@gmail.com"
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getValue(val: string) {
    if (this.email == val) {
      this.router.navigateByUrl('/admin-selector');
    }
    else if(this.emails==val){
      this.router.navigateByUrl('/customer-selector')
    }
    else {
      this.router.navigateByUrl('/signup');
    }
  }

}
