import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
declare var Tesseract: { recognize: (arg0: string) => Promise<any>; };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private DatePipe: DatePipe) {

  }
  title = 'rudhram_task';

  shouldRun = true;
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
  filePreview: string | ArrayBuffer | null = '';
  picturePreview: string | ArrayBuffer | null = '';
  seletImage(e: any) {
    console.log(e)
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.picturePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  seletDocImage(e: any) {
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
  @ViewChild('videoElement', { static: false }) videoElement: ElementRef<HTMLVideoElement> | undefined;
  video: HTMLVideoElement| undefined;
  mediaStream!: MediaStream;
  capturedImage: string | undefined;
  ngOnInit() {
    console.log(this.DatePipe.transform(new Date(), 'dd/MM/yyyy'))
    console.log(this.DatePipe.transform(new Date(), 'HH:mm:ss '))
    Tesseract.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png').then(function(result:any){         
      console.log(result)   
      for(let word of result.words)   
      console.log(/^[a-zA-Z]*[0-9]+[a-zA-Z]*$/.test(word.text) && word.text.length === 8)     
      });    

  }

  ngAfterViewInit(): void {
    this.video = this.videoElement?.nativeElement;
    
  }
 
  async startCamera(): Promise<void> {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (this.video) {
        this.video.srcObject = this.mediaStream;
        this.video.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  captureImage(): void {
    this.startCamera();
      if (this.video) {
        const canvas = document.createElement('canvas');
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
  
        const context = canvas.getContext('2d');
    
          context?.drawImage(this.video, 0, 0, canvas.width, canvas.height);
  
          this.capturedImage = canvas.toDataURL('image/png');
          console.log('Captured image:', this.capturedImage);
         
             Tesseract.recognize(canvas.toDataURL('image/png')).then(function(result:any){      
              for(let word of result.words)  {
                console.log(/^[a-zA-Z]*[0-9]+[a-zA-Z]*$/.test(word.text) && word.text.length === 8) 
              } 
         
              }); 
          // Perform further actions with the captured image (e.g., upload or process it)
      
        // Append canvas to the DOM
        // document.body.appendChild(canvas);
      }
    
  
  }
  async onResize(img:any) {
    console.log('Captured image:', img);
   await Tesseract.recognize(img).then(function(result:any){      
      for(let word of result.words)  {
        console.log(/^[a-zA-Z]*[0-9]+[a-zA-Z]*$/.test(word.text) && word.text.length === 8) 
      } 
 
      }); 
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
