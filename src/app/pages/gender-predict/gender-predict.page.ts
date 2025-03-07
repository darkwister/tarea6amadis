import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController,IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonLabel, IonButton } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gender-predict',
  templateUrl: './gender-predict.page.html',
  styleUrls: ['./gender-predict.page.scss'],
  standalone: true,
  imports: [ IonAlert, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonLabel, IonButton, HttpClientModule]
})
export class GenderPredictPage implements OnInit {
  targetName?: string; 
  gender?: string;
  imageResult?: string;
  constructor(private http: HttpClient, private alertController: AlertController) { }

  ngOnInit() {
  }

  getData(name: string): any {
    const url = `https://api.genderize.io/?name=${name}`;
    this.http.get(url).subscribe((response: any) => {
      this.gender = response.gender
      let alertMessage = '';
      if (this.gender === 'male') {
        alertMessage = 'Es masculino';
        this.imageResult = 'assets/images/gender-module/blue.png'
      } else if (this.gender === 'female') {
        alertMessage = 'Es femenino';
        this.imageResult = 'assets/images/gender-module/pink.png'
      } else {
        alertMessage = 'Sexo no identificado';
      }

      this.presentAlert(alertMessage, 'Nombre procesado: ' + name);
    }, error => {
      console.log(error);
      this.presentAlert('Error al obtener el sexo', 'Nombre procesado: ' + name);
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [] 
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }
  
}
