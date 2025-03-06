import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonSelectOption, IonSelect, IonList } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpClientJsonpModule } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-world-universities',
  templateUrl: './world-universities.page.html',
  styleUrls: ['./world-universities.page.scss'],
  standalone: true,
  imports: [IonList, IonSelect, IonSelectOption, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule, HttpClientJsonpModule]
})
export class WorldUniversitiesPage implements OnInit {
  targetUniversity?: string;
  targetCountry?: string;
  responseData: any[] = [];
  countries: string[] = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Andorra', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
  'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
  'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Swaziland',
  'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel',
  'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyzstan', 'Latvia', 'Lebanon', 'Lesotho',
  'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco',
  'Mozambique', 'Myanmar', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay',
  'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
  'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia', 'South Africa', 'South Sudan',
  'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Tajikistan', 'Thailand', 'Togo', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine',
  'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan',
  'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
];
  
  private apiUrl: string = `http://universities.hipolabs.com/search`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getUniversityByCountry(country: string){
    const formattedCountry = encodeURIComponent(country);
    const url = `${this.apiUrl}?country=${formattedCountry}`;

    return this.http.get<any[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  onCountryChange() {
    if (this.targetCountry) {
      this.getUniversityByCountry(this.targetCountry).subscribe(data => {
        this.responseData = data;
        console.log('Universities:', this.responseData);
      });
    }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error);
    return throwError(() => new Error('No se pudo cargar la lista de países.'));
  }
}
