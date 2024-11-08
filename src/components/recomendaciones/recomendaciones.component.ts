import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [HeaderComponent,RouterLink,RouterOutlet],
  templateUrl: './recomendaciones.component.html',
  styleUrl: './recomendaciones.component.css'
})
export class RecomendacionesComponent {

}
