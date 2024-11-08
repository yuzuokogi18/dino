import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news-banner',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './news-banner.component.html',
  styleUrl: './news-banner.component.css'
})
export class NewsBannerComponent {

}
