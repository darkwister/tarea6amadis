import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonProgressBar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-wordpress-lastest',
  templateUrl: './wordpress-lastest.page.html',
  styleUrls: ['./wordpress-lastest.page.scss'],
  standalone: true,
  imports: [IonProgressBar, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WordpressLastestPage implements OnInit {
  isLoading = false;
  lastestNotice: any[] = [];
  sanitizedContent: any;
  url = 'https://kinsta.com/wp-json/wp/v2/posts';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchNotices();
  }


  getNotices() : Observable<any> {
    this.isLoading = true;
    return this.http.get<any[]>(this.url);
  }

  fetchNotices() {
    this.getNotices().subscribe(
      (data) => {
        this.isLoading = true;
        this.lastestNotice = data.slice(0,3); 

        this.lastestNotice.forEach((notice) => {
          let content = notice.content.rendered;
          let paragraphs = content.split('</p>');
          let firstParagraph = paragraphs.slice(0,2).join('</p>');

          notice.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(firstParagraph);
        })
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener las noticias:', error);
        this.isLoading = false;
      }
    );
  }
}
