import { Injectable } from '@angular/core';
import { Http } from '@capacitor/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  private apiKey: string = 'dYRxIcszt3bO2a7y';
  private apiUrl: string = 'https://cors-anywhere.herokuapp.com/https://my.meteoblue.com/packages/basic-1h';

  constructor() {}

  getWeatherData(latitude: number, longitude: number): Observable<any> {
    const params = new URLSearchParams({
      lat: latitude.toString(),
      lon: longitude.toString(),
      apikey: this.apiKey
    }).toString();

    const urlWithParams = `${this.apiUrl}?${params}`;

    const request = Http.request({
      method: 'GET',
      url: urlWithParams
    });

    return from(request).pipe(
      catchError(error => {
        console.error('Error al obtener datos del clima:', error);
        return throwError(() => new Error('No se pudo obtener el clima.'));
      }),
      map(response => {
        const weatherData = response.data.data_1h;
        const currentTime = weatherData.time[0]; 
        const temperature = weatherData.temperature[0]; 
        const humidity = weatherData.relativehumidity[0]; 
        const windSpeed = weatherData.windspeed[0]; 

        return {
          time: currentTime,
          temperature: temperature,
          humidity: humidity,
          windSpeed: windSpeed
        };
      })
    );
  }
}
