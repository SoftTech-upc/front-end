import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  type: any
  currentId: any
  constructor(private router: Router) {
    this.type = localStorage.getItem('type')
    this.currentId = localStorage.getItem('id')
  }

  logOut() {
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('type')
    this.router.navigate(['/login'])
  }
}
