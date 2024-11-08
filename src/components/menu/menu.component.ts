import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HeaderComponent,RouterLink,RouterOutlet], 
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  noticiasDeTecnologia: IPosts[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    // Cargar las noticias de tecnología al iniciar el componente
    this.obtenerNoticiasDeTecnologia();
  }

  obtenerNoticiasDeTecnologia(): void {
    this.noticiasService.getNoticiasDeTecnologia().subscribe((noticias) => {
      console.log('Noticias de Tecnología:', noticias); // Esto muestra que se están recibiendo datos
      this.noticiasDeTecnologia = noticias;
    });
  }
  
  
}

