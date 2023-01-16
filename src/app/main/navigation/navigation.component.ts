import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public logged: string = ''

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.logged = this.authService.isLogged()

  }

}
