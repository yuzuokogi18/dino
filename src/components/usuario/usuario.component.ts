import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CartComponent } from "../cart/cart.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [HeaderComponent, CartComponent, FooterComponent, RouterLink, RouterOutlet,FormsModule,CommonModule],
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  noticias: IPosts[] = [];
  tituloBuscado: string = '';  

  constructor(private noticiasService: NoticiasService) {}

  buscarNoticias() {
    this.noticiasService.searchNoticias(this.tituloBuscado).subscribe(
      (data) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error buscando noticias:', error);
      }
    );
  
}
}
