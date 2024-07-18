import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cards = [
    {
      title: 'Expertise in SEO',
      imageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Image 1'
    },
    {
      title: 'Expertise in UI/UX',
      imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      altText: 'Image 2'
    },
    {
      title: 'Expertise in OpenAI models',
      imageUrl: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg',
      altText: 'Image 2'
    }
    // Add more cards as needed
  ];

}
