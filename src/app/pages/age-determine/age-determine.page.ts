import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-age-determine',
  templateUrl: './age-determine.page.html',
  styleUrls: ['./age-determine.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AgeDeterminePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
