import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit,OnDestroy, AfterViewInit  {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  sidebar: boolean = false;

  constructor( private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,) { 
    // to detect the screen change
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges()
      if (!this.mobileQuery.matches) {
        this.sidebar = true
      } else {
        this.sidebar = false;
      }
    }

    this.mobileQuery.addListener(this._mobileQueryListener);
    if (!this.mobileQuery.matches) {
      this.sidebar = true
    } else {
      this.sidebar = false;
    }
  }

  ngOnInit(): void {
  }

  // sidebar toggle
  sidebarOpen() {
    this.sidebar = !this.sidebar
  }

 


  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}
