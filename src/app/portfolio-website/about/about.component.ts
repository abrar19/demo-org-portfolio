import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent {
  showEducation:boolean = true;
  showProjects:boolean = true;

  projects = [
    {name: 'Project 1', description: 'Description of project 1'},
    {name: 'Project 2', description: 'Description of project 2'},
    {name: 'Project 3', description: 'Description of project 3'},
  ];
}
