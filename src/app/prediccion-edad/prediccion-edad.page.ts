import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prediccion-edad',
  templateUrl: './prediccion-edad.page.html',
  styleUrls: ['./prediccion-edad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class PrediccionEdadPage implements OnInit {
  nombre!: string;
  edad!: number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  determinarEdad() {
    this.http.get<any>(`https://api.agify.io/?name=${this.nombre}`)
      .subscribe(response => {
        this.edad = response.age;
      });
  }
}
