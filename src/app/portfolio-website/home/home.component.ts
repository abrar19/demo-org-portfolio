import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from "../card/card.component";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

}
