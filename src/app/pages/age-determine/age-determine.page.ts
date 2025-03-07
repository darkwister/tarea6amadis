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
  imageResult?: string;
  age?: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getData(name: string): any {
    const url = `https://api.agify.io/?name=${name}`;
    this.http.get(url).subscribe((response: any) =>{
      this.age = response.age;
      
      if (this.age !== undefined && this.age < 18) {
        this.imageResult = 'assets/images/age-module/kiddo.png'
      } else if (this.age !== undefined && this.age >= 18 && this.age <= 50) {
        this.imageResult = 'assets/images/age-module/man.png'
      } else if (this.age !== undefined && this.age > 50 && this.age <= 100) {
        this.imageResult = 'assets/images/age-module/elder.png'
      } 
    }
    , error => {
      console.log(error);
    })
  }
}
