import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NewsLayoutComponent } from "../news-layout/news-layout.component";
import { CartComponent } from "../cart/cart.component";
import { NewsBannerComponent } from '../news-banner/news-banner.component';
import { FooterComponent } from "../footer/footer.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NewsLayoutComponent, CartComponent, NewsBannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
