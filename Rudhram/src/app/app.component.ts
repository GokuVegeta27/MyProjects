import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private DatePipe:DatePipe){

  }
  title = 'rudhram_task';

  shouldRun=true;
  menuList = [
  {
      "text": "MS & LES Gate",
      "icon": "shield",
      "children": [{
              "text": "Dashboard",      
              "routerLink": "/product/category"
          },
          {
              "text": "GatePass",
              "routerLink": "/product/sub-category"
          },
          {
              "text": "Reports",
              "routerLink": "/product/manage"
          },
          {
            "text": "Admin Signup",
            "routerLink": "/product/manage"
        },
        {
          "text": "History",
          "routerLink": "/product/manage"
      }
      ]
  },
  {
    "text": "Settings",
    "icon": "settings",
    "children": [{
            "text": "Support ",      
            "routerLink": "/product/category"
        },
        {
            "text": "Change Password",
            "routerLink": "/product/sub-category"
        },

    ]
}
  ];

  toggleSubmenu(item: any) {
    item.isOpen = !item.isOpen;
  }
  filePreview: string | ArrayBuffer | null='';
  seletImaeg(e:any){
console.log(e)
const file = e.target.files[0];
if (file) {
  const reader = new FileReader();
      reader.onload = () => {
        this.filePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
}
}
  
  getSubmenuIcon(item: any): string {
    return item.isOpen ? 'expand_less' : 'expand_more';
  }
  ngOnInit() {
console.log(this.DatePipe.transform(new Date(),'dd/MM/yyyy'))
console.log(this.DatePipe.transform(new Date(),'HH:mm:ss '))

  }
  
  onResize(event:any) {
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
