import { Component, OnInit } from '@angular/core';
import { IonContent, IonButton, IonInput, IonItem, IonList, IonInputPasswordToggle } from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService, LoginResponse  } from '../services/auth.service';

import { HttpErrorResponse } from '@angular/common/http';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonButton, IonInput, IonItem, IonList, FormsModule, IonInputPasswordToggle],
})
export class HomePage implements OnInit  {
  constructor(private router: Router, private authService: AuthService, private dataService: DataService) {
  }

  localIp = '';
  localToken = '';

  apiHost = '';
  username = '';
  password = '';

  ngOnInit() {
    

  }
  async connectToLocalDevice() {
    this.router.navigate(['/tableau-de-bord'], {
      queryParams: {
        localIp: this.localIp,
        localToken: this.localToken
      }
    });
  }

  async connectToRemoteDevice() {
    this.dataService.apiHost = this.apiHost;
    this.authService.login(this.username, this.password).subscribe({

    next: (response: LoginResponse) => {

      console.log(response.token);
      this.dataService.jwtToken = response.token;
//      this.dataService.apiHost = this.apiHost;
      this.router.navigate(['/tableau-de-bord-en-ligne']);

  },

    error: (err: HttpErrorResponse) => {

      console.error(err.status);
      console.error(err.message);

  }

    });
}

}