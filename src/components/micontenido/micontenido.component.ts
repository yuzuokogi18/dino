import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts'; 

@Component({
  selector: 'app-micontenido',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './micontenido.component.html',
  styleUrls: ['./micontenido.component.css']
})
export class MicontenidoComponent implements OnInit {
  noticias: IPosts[] = [
    {
      id: 1,
      titulo: 'Dodgers confirman lesión de Shohei Ohtani tras el Juego 2 de la Serie Mundial',
      descripcion_breve: 'El japonés quedó adolorido luego de una jugada en la que intentó robar una base y su continuidad en el Serie Mundial es una incógnita',
      contenido: '',
      categoria_id: 0,
      fecha_publicacion: '',
      origen: '',
      autor: '',
      fuente_publicacion: ''
    },
    {
      id: 2,
      titulo: 'Registran 389 asesinatos en el país en los últimos 5 días; 38 son víctimas de enfrentamientos en Sinaloa y Guerrero',
      descripcion_breve: 'Al menos 389 asesinatos se registraron en el país en los últimos cinco días, de los cuales 38 víctimas...',
      contenido: '',
      categoria_id: 0,
      fecha_publicacion: '',
      origen: '',
      autor: '',
      fuente_publicacion: ''
    }
  ];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getNoticias().subscribe((nuevasNoticias) => {
      // Solo agrega las propiedades que necesitas de IPosts
      this.noticias = [
        ...this.noticias,
        ...nuevasNoticias.map(noticia => ({
          id: noticia.id,
          titulo: noticia.titulo,
          descripcion_breve: noticia.descripcion_breve,
          contenido: noticia.contenido,
          categoria_id: noticia.categoria_id,
          fecha_publicacion: noticia.fecha_publicacion,
          origen: noticia.origen,
          autor: noticia.autor,
          fuente_publicacion: noticia.fuente_publicacion
        }))
      ];
    });
  }
}
