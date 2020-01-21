import {Component, OnInit} from '@angular/core';

@Component({
  selector : 'navbar-demo',
  templateUrl : 'navbar.demo.html'
})
export class NavbarDemo {
    topMenuData:any;
constructor() {
   this.topMenuData = JSON.parse(`[{
      "text": "Products",
      "submenus": [{
        "text": "Amexio Canvas",
        "link": "https://amexio.tech/amexio-canvas"
      }, {
        "text": "Amexio Themes",
        "link": "https://amexio.tech/amexio-themes"
      }]
    }]
`);
}
  externalLink(event:any){

  }
}