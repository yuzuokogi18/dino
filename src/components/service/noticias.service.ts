import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPosts } from '../models/iposts'; 

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private url = 'http://localhost:3000/api/v1/noticias';

  constructor(private http: HttpClient ) {}
  

  searchNoticias(titulo: string): Observable<IPosts[]> {
    return this.http.get<{ status: boolean; data: IPosts[] }>(`${this.url}?titulo=${titulo}`).pipe(
      map(response => response.data || [])
    );
  }
  
  getNoticiaById(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(`${this.url}/${id}`);
  }

  getNoticiasDeTecnologia(): Observable<IPosts[]> {
    return this.http.get<{ status: boolean; data: IPosts[] }>(this.url).pipe(
      map(response => {
        return response.data.filter(noticia => noticia. categoria_id === 1);
      })
    );
  }
  getNoticias(): Observable<IPosts[]> {
    return this.http.get<{ status: boolean; data: IPosts[] }>(this.url).pipe(
      map((response) => {
        console.log('Respuesta de la API:', response);
        return response.data || [];
      })
    );
  }

  addNoticia(post: IPosts): Observable<IPosts> {
    return this.http.post<IPosts>(this.url, post);
  }


  updateNoticia(id: number, noticia: IPosts): Observable<IPosts> {
    return this.http.put<IPosts>(`${this.url}/${id}`, noticia);
  }

  
  deleteNoticia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
