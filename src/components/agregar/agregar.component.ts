import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../service/noticias.service';
import { IPosts } from '../models/iposts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink,RouterOutlet],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  newPost: IPosts = {
    id: 0,
    titulo: '',
    descripcion_breve: '',
    contenido: '',
    categoria_id: 0,
    fecha_publicacion:'',
    origen: '',
    autor: '',
    fuente_publicacion: ''
  };

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit(): void {
    this.newPost.fecha_publicacion = new Date().toISOString()
  }

  agregarNoticia(): void {
    const confirmacion = confirm('¿Estás seguro de agregar la noticia?');

    if (confirmacion) {
      const postToSend: IPosts = { ...this.newPost };
      console.log('Datos a agregar:', postToSend);

      this.noticiaService.addNoticia(postToSend).subscribe(
        (response: IPosts) => {
          console.log('Noticia agregada:', response);
          alert('La noticia se agregó correctamente.'); 
          this.limpiarFormulario();
        },
        (error) => {
          console.error('Error al agregar la noticia:', error);
          alert('Error al agregar la noticia.'); 
        }
      );
    } else {
      alert('Operación cancelada.'); 
    }
  }

  limpiarFormulario(): void {
    this.newPost = {
      id: 0,
      titulo: '',
      descripcion_breve: '',
      contenido: '',
      categoria_id: 0,
      fecha_publicacion: '',
      origen: '',
      autor: '',
      fuente_publicacion: ''
    };
  }
}
