import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange, IonButton } from '@ionic/angular/standalone';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { firstValueFrom } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.page.html',
  styleUrls: ['./tableau-de-bord.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRange, IonButton]
})
export class TableauDeBordPage implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {


   }

  localIp = '';
  localToken = '';

  titre = 'Tableau de bord';
  voyant1 = '';
  voyant2 = '';
  voltage = '-.-- V';
  tension = 0;


  busy = false;
  gpioMessage = '';

  intervalId: any;

  ngOnInit() {

     this.route.queryParams.subscribe(params => {
      this.localIp = params['localIp'];
      this.localToken = params['localToken'];
     });


  this.intervalId = setInterval(async() => {

    if (this.busy) return;

    this.busy = true;

    try {

      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.localToken
      });

      const data: any = await firstValueFrom(

        this.http.post(
          'https://' + this.localIp + '/status',
          {},
          {
            headers: headers
          }
        )

      );

      if (data.gpio == 1) {

        this.gpioMessage = 'La vanne 1 est ouverte';
        this.voyant1 = 'vert';

      } else {

        this.gpioMessage = 'La vanne 1 est fermée';
        this.voyant1 = 'rouge';

      }

      this.voltage = data.voltage + ' V';

    } catch (e: any) {

      console.log('Erreur updateValues:', e.message);

    } finally {

      this.busy = false;

    }

  }, 5000);


    }


  async vanne2(event: any) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.localToken
    });

    this.http.post(
      'https://' + this.localIp + '/togglevanne2',
      {},
      {
        headers: headers
      }
    ).subscribe({

      next: (reponse) => {
        console.log('Toggle vanne2 envoyé', reponse);
      },

      error: (e) => {
        console.log('Erreur vanne2:', e.message);
      }

    });
  }


  async changerTension(event: any) {

    if (!event?.detail) return;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.localToken,
      'X-PWM': this.tension
    });

    this.http.post(
      'https://' + this.localIp + '/pwm',
      {},
      {
        headers: headers
      }
    ).subscribe({

      next: (reponse) => {
        console.log('PWM envoyé', reponse);
      },

      error: (e) => {
        console.log('Erreur PWM:', e.message);
      }

    });

  }

  async retour(){
    clearInterval(this.intervalId);
  this.router.navigate(['/home']);
  }

}