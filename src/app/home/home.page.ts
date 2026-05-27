import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonList, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eye, lockClosed } from 'ionicons/icons';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonList, IonIcon, FormsModule],
})
export class HomePage implements OnInit  {
  constructor(private router: Router) {
        addIcons({ eye, lockClosed });
  }

ip_local = '';
token_local = '';

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
}