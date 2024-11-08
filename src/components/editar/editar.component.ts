import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet
  ],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  noticias: IPosts[] = []; 
  selectedNoticia: IPosts | null = null; 

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit(): void {
    this.loadNoticias(); 
  }

  loadNoticias(): void {
    this.noticiaService.getNoticias().subscribe(
      (noticias: IPosts[]) => {
        this.noticias = noticias;
      },
      (error) => {
        console.error('Error al cargar noticias:', error);
      }
    );
  }

  editarNoticia(noticia: IPosts): void {
    this.selectedNoticia = { ...noticia }; 
  }

  actualizarNoticia(): void {
    if (this.selectedNoticia) {
      const confirmacion = confirm('¿Estás seguro de actualizar la noticia?');
      
      if (confirmacion) {
        this.noticiaService.updateNoticia(this.selectedNoticia.id, this.selectedNoticia).subscribe(
          (response: IPosts) => {
            console.log('Noticia actualizada:', response);
            this.loadNoticias(); 
            this.selectedNoticia = null; 
            alert('La noticia se actualizó correctamente.');
          },
          (error) => {
            console.error('Error al actualizar la noticia:', error);
            alert('Hubo un error al actualizar la noticia.');
          }
        );
      } else {
        alert('Actualización cancelada.');
      }
    }
  }
  
}
