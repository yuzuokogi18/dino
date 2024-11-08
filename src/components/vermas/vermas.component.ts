import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-vermas',
  standalone: true,
  imports: [HeaderComponent,RouterLink,RouterOutlet],
  templateUrl: './vermas.component.html',
  styleUrl: './vermas.component.css'
})
export class VermasComponent {

}
