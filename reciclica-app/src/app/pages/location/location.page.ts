/// <reference types="@types/google.maps" />
declare var google: any;

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { Router } from '@angular/router';


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  imports: [
    IonicModule
  ]
})
export class LocationPage implements  AfterViewInit {

  constructor(private router: Router) { }
     goHomepage() {
            this.router.navigate(['/homepage']);
    }
    
     goNotification() {
            this.router.navigate(['/notification']);
    }
    
      goStatistic() {
              this.router.navigate(['/statistics']);
  }
  
  goLocation() {
              this.router.navigate(['/location']);
    }

  async ngAfterViewInit() {
  const position = await Geolocation.getCurrentPosition();
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat, lng },
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: { lat, lng },
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: '#00aaff',
      fillOpacity: 0.6,
      strokeWeight: 0,
    }
  });

  const circle = new google.maps.Circle({
    strokeColor: '#00aaff',
    strokeOpacity: 0.2,
    strokeWeight: 1,
    fillColor: '#00aaff',
    fillOpacity: 0.1,
    map,
    center: { lat, lng },
    radius: 50,
  });
}

}
