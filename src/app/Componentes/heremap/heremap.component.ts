import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var H;

@Component({
  selector: 'app-heremap',
  templateUrl: './heremap.component.html',
  styleUrls: ['./heremap.component.scss']
})
export class HeremapComponent implements OnInit {

  private platform: any;

  @ViewChild("map",{static:true})
  public mapElement: ElementRef;

  constructor() { 
   
  }

  ngOnInit() {
    this.load()
  }

  load() {
    this.platform = new H.service.Platform({
      "app_id": "ktfehdzrA5l2BLg7cSgQ",
      "app_code": "cQwt7wEFOYQGp4MP7xqOzg"
    })
    let defaultLayers = this.platform.createDefaultLayers();
    
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: 11, lng: -73}
      }
    );
  }


}


