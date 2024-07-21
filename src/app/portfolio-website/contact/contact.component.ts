import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      // Handle form submission, e.g., send data to server
    } else {
      console.log('Form is invalid');
    }
  }
}
