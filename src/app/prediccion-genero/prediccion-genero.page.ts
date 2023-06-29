import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prediccion-genero',
  templateUrl: './prediccion-genero.page.html',
  styleUrls: ['./prediccion-genero.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class PrediccionGeneroPage implements OnInit {
  nombre!: string;
  genero!: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  predecirGenero() {
    this.http.get<any>(`https://api.genderize.io/?name=${this.nombre}`)
      .subscribe(response => {
        this.genero = response.gender;
      });
  }
}
