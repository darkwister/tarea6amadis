import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonLabel } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-age-determine',
  templateUrl: './age-determine.page.html',
  styleUrls: ['./age-determine.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class AgeDeterminePage implements OnInit {
  targetName?: string;
  age?: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData(name: string): any {
    const url = `https://api.agify.io/?name=${name}`;
    this.http.get(url).subscribe((response: any) =>{
      this.age = response.age;
      console.log(response.age);
      console.log(response);
    }
    , error => {
      console.log(error);
    })
  }
}
