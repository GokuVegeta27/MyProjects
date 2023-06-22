import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rudhram_task';
  breakpoint: number=6;
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }
  
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }

}
