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
  constructor(private http: HttpClient, private alertController: AlertController) { }

  ngOnInit() {
  }

  getData(name: string): any {
    const url = `https://api.genderize.io/?name=${name}`;
    this.http.get(url).subscribe((response: any) => {
      this.gender = response.gender
      let alertColor = '';
      let alertMessage = '';
      
      if (this.gender === 'male') {
        alertMessage = 'Es masculino';
        alertColor = 'primary';
        
      } else if (this.gender === 'female') {
        alertMessage = 'Es femenino';
        alertColor = 'tertiary';
                
      } else {
        alertMessage = 'Sexo no identificado';
        alertColor = 'medium';
      }

      this.presentAlert(alertMessage, 'Nombre procesado: ' + name, alertColor);
    }, error => {
      console.log(error);
      this.presentAlert('Error al obtener el sexo', 'Nombre procesado: ' + name, 'danger');
    })
  }

  async presentAlert(header: string, message: string, color: string) {
    const alert = await this.alertController.create({
      header,
      message,
      cssClass: 'my-custom-alert', 
      buttons: [] 
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 2000);
  }
  
}
