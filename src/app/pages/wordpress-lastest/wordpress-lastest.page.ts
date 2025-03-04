import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-wordpress-lastest',
  templateUrl: './wordpress-lastest.page.html',
  styleUrls: ['./wordpress-lastest.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WordpressLastestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
