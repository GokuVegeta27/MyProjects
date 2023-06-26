import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports:[ MatMenuModule,BrowserAnimationsModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  



  it('should toggle the sidebar when sidebarOpen() is called', () => {
    component.sidebar = false;

    component.sidebarOpen();

    expect(component.sidebar).toBe(true);

    component.sidebarOpen();

    expect(component.sidebar).toBe(false);
  });
});
