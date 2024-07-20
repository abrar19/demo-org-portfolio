import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public router: Router){

  }

  onHome(){
    window.scrollTo({top: 0, behavior:'smooth'})
  }

  onContact(){
    this.router.navigate(['./portfolio-website/contact'])
  }

  onAbout(){
    this.router.navigate(['./portfolio-website/about'])
  }
}
