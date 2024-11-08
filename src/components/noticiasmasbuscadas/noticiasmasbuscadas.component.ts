import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-noticiasmasbuscadas',
  standalone: true,
  imports: [HeaderComponent,RouterLink,RouterOutlet],
  templateUrl: './noticiasmasbuscadas.component.html',
  styleUrl: './noticiasmasbuscadas.component.css'
})
export class NoticiasmasbuscadasComponent {

}
