import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet  ],
  templateUrl: './news-layout.component.html',
  styleUrl: './news-layout.component.css'
})
export class NewsLayoutComponent {

}
