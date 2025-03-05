import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gender-predict',
  templateUrl: './gender-predict.page.html',
  styleUrls: ['./gender-predict.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonLabel, IonButton, HttpClientModule]
})
export class GenderPredictPage implements OnInit {
  targetName?: string;
  gender?: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData(name: string): any {
    const url = `https://api.genderize.io/?name=${name}`;
    this.http.get(url).subscribe((response: any) => {
      this.gender = response.gender
      console.log(this.gender);
      console.log(response.probability);
    }, error => {
      console.log(error);
    })
  }
  
}
