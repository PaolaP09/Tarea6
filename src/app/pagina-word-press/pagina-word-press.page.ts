import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pagina-word-press',
  templateUrl: './pagina-word-press.page.html',
  styleUrls: ['./pagina-word-press.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class PaginaWordPressPage implements OnInit {
  noticias!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.http.get<any[]>('https://www.angrybirds.com/wp-json/wp/v2/posts')
      .subscribe(response => {
        this.noticias = response.slice(0, 3);
      });
  }
}
