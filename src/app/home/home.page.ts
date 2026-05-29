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

ip_local = '';
token_local = '';

ip_publique = '';
  username = '';
  password = '';

  ngOnInit() {
    

  }
      async envoyer_local() {
    this.router.navigate(['/tableau-de-bord'], {
      queryParams: {
        ip_local: this.ip_local,
        token_local: this.token_local
      }
    });
  }

        async envoyer_publique() {
this.authService.login(this.username, this.password).subscribe({

   next: (response: LoginResponse) => {

    console.log(response.token);
    this.dataService.token_publique = response.token;
    this.dataService.ip_publique = this.ip_publique;
    this.router.navigate(['/tableau-de-bord-en-ligne']);

  },

  error: (err: HttpErrorResponse) => {

    console.error(err.status);
    console.error(err.message);

  }

    });
}

}