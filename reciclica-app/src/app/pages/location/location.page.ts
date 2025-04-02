
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from 'src/service/supabase.service';
import { Geolocation } from '@capacitor/geolocation';
import { IonicModule } from '@ionic/angular';


declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  imports: [IonicModule]
})
export class LocationPage implements OnInit {
  map: any;
  shelterLocations: any[] = [];
  userLocation: { lat: number; lng: number } | null = null;
  nearestShelter: any = null;
  distanceToNearestShelter: number = 0;
  arrivalTimeWalking: string = '';
  arrivalTimeDriving: string = '';
  heading: number | undefined;

  constructor(private router: Router, private supabase: SupabaseService) {}

  async ngOnInit() {
    await this.loadUserLocation();
    await this.loadMap();
    await this.loadShelterLocations();
  }

  async loadUserLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  }

  async loadMap() {
    if (!this.userLocation) {
      console.error("Не вдалося отримати поточне місце розташування");
      return;
    }

    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: this.userLocation,
      zoom: 12
    });

    new google.maps.Marker({
      position: this.userLocation,
      map: this.map,
      title: "Ви тут",
      icon: {
        url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
          <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_1141_4544)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3813 37.6459C31.5271 37.6459 38.9413 30.0395 38.9413 20.6567C38.9413 11.2738 31.5271 3.66748 22.3813 3.66748C13.2354 3.66748 5.82129 11.2738 5.82129 20.6567C5.82129 30.0395 13.2354 37.6459 22.3813 37.6459Z" fill="#A5E2DB" fill-opacity="0.3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3813 37.6459C31.5271 37.6459 38.9413 30.0395 38.9413 20.6567C38.9413 11.2738 31.5271 3.66748 22.3813 3.66748C13.2354 3.66748 5.82129 11.2738 5.82129 20.6567C5.82129 30.0395 13.2354 37.6459 22.3813 37.6459Z" stroke="white" stroke-width="2"/>
          </g>
          <path d="M30.7127 15.5542L23.1039 29.461C22.9603 29.7513 22.7195 29.8964 22.3817 29.8964C22.3395 29.8964 22.2761 29.8881 22.1916 29.8715C22.0058 29.83 21.8559 29.7368 21.7419 29.5916C21.6278 29.4465 21.5708 29.2828 21.5708 29.1004L21.7419 21.735L14.1831 19.6747C13.9973 19.6747 13.8305 19.6188 13.6827 19.5068C13.5349 19.3949 13.4399 19.2477 13.3976 19.0653C13.3554 18.8829 13.3723 18.7087 13.4483 18.5429C13.5243 18.3771 13.6468 18.2527 13.8157 18.1698L29.6231 14.4845C29.7329 14.4265 29.8554 14.3975 29.9905 14.3975C30.2186 14.3975 30.4086 14.4762 30.5607 14.6338C30.6874 14.7499 30.7655 14.8929 30.7951 15.0629C30.8246 15.2329 30.7972 15.3966 30.7127 15.5542Z" fill="white"/>
          <defs>
          <filter id="filter0_d_1141_4544" x="0.821289" y="0.66748" width="43.1201" height="43.9785" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1141_4544"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1141_4544" result="shape"/>
          </filter>
          </defs>
          </svg>
        `),
        scaledSize: new google.maps.Size(44, 45),
        anchor: new google.maps.Point(22, 22)
      }
    });

    // Додаємо коло точності
    new google.maps.Circle({
      strokeColor: "#A5E2DB",
      strokeOpacity: 0.8,
      strokeWeight: 1,
      fillColor: "#A5E2DB",
      fillOpacity: 0.35,
      map: this.map,
      center: this.userLocation,
      radius: 15 // або будь-який радіус точності в метрах
    });
  }

  async loadShelterLocations() {
    this.shelterLocations = await this.supabase.getShelterLocations();
  
    this.shelterLocations.forEach((loc) => {
      new google.maps.Marker({
        position: { lat: loc.latitude, lng: loc.longitude },
        map: this.map,
        title: `Shelter ID: ${loc.shelter_id}`, 
        icon: {
          url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
              <path fill="#AAD5D1" d="M12 2C8 2 5 5 5 9c0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
          `),
          scaledSize: new google.maps.Size(40, 40)
        }
      });
    });
  }

  async findNearestShelter() {
    if (!this.userLocation || this.shelterLocations.length === 0) {
      console.error("Дані відсутні");
      return;
    }

    let minDistance = Infinity;
    let closestShelter: any = null;

    this.shelterLocations.forEach((loc: any) => {
      const distance = this.calculateDistance(this.userLocation!.lat, this.userLocation!.lng, loc.latitude, loc.longitude);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestShelter = loc;
      }
    });

    if (closestShelter) {
      this.nearestShelter = closestShelter;
      this.distanceToNearestShelter = minDistance;
      this.arrivalTimeWalking = await this.calculateArrivalTime(closestShelter.latitude, closestShelter.longitude, 'walking');
      this.arrivalTimeDriving = await this.calculateArrivalTime(closestShelter.latitude, closestShelter.longitude, 'driving');

      // Перемістити карту до найближчого притулку
      this.map.setCenter({ lat: closestShelter.latitude, lng: closestShelter.longitude });
      this.map.setZoom(14);
    }
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // км
    const dLat = this.degToRad(lat2 - lat1);
    const dLon = this.degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  async calculateArrivalTime(destinationLat: number, destinationLng: number, mode: 'driving' | 'walking') {
    const origin = `${this.userLocation!.lat},${this.userLocation!.lng}`;
    const destination = `${destinationLat},${destinationLng}`;
    const apiKey = 'AIzaSyAev_96sTBskpqrg2f5E3tDI92ZEXVRL-o';
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=${mode}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 'OK' && data.rows.length > 0) {
        return data.rows[0].elements[0].duration.text;
      } else {
        console.error('Помилка API:', data);
        return 'N/A';
      }
    } catch (error) {
      console.error('Помилка:', error);
      return 'N/A';
    }
  }

  cancelSearch() {
    if (!this.userLocation) {
      console.error("Поточне місцезнаходження недоступне");
      return;
    }
  
    // Скидаємо дані про найближчий притулок
    this.nearestShelter = null;
    this.distanceToNearestShelter = 0;
    this.arrivalTimeWalking = '';
    this.arrivalTimeDriving = '';
  
    // Повертаємо карту до місцезнаходження користувача
    this.map.setCenter(this.userLocation);
    this.map.setZoom(12);
  }

  degToRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

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
}
