
import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit {
  noticias: IPosts[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.cargarNoticias();
  }

  cargarNoticias(): void {
    this.noticiasService.getNoticias().subscribe(
      (data) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
      }
    );
  }

  eliminarNoticia(id: number): void {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar esta noticia?');
    
    if (confirmacion) {
      this.noticiasService.deleteNoticia(id).subscribe(
        () => {
          this.noticias = this.noticias.filter(noticia => noticia.id !== id);
          console.log('Noticia eliminada:', id);
          alert('La noticia ha sido eliminada correctamente.');
        },
        (error) => {
          console.error('Error al eliminar la noticia:', error);
          alert('Hubo un error al intentar eliminar la noticia.');
        }
      );
    } else {
      alert('Eliminación cancelada.');
    }
}
}