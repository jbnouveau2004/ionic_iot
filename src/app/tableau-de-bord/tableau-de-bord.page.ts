import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRange, IonButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.page.html',
  styleUrls: ['./tableau-de-bord.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRange, IonButton]
})
export class TableauDeBordPage implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

@Input() titre = 'Tableau de bord';
@Input() voyant1 = '';
@Input() voyant2 = '';
@Input() voltage = '-.-- V';

}