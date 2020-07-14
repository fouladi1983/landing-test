import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'landing-test';
  stickyHeader: boolean = false;
  constructor() { }

  @HostListener('window:scroll', ['$event']) 
  scroll = (event) => {
    if(window.pageYOffset > 600){
      this.stickyHeader = true;
      console.log(`it's fixed`);
      console.log(this.stickyHeader);
    }else{
      this.stickyHeader = false;
      console.log(this.stickyHeader);
    }
      
  }

}
