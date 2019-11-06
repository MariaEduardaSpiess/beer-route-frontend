import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Brand } from 'src/models/brand';
import { Storage } from '@ionic/storage';
import { BrandService } from '../brand/brand.service';

declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  brands: Array<Brand>;

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private storage: Storage, private brandService: BrandService) {

  }

  async getBrands() {
    await this.brandService.getBrands()
      .then((brands) => {
        this.brands = brands;
        this.storage.set('brands', this.brands);
      });
  }

  async ionViewDidEnter() {
    await this.getBrands();
    this.loadMap();
    let latlng;
    let content;
    this.brands.forEach(brand => {
      latlng = brand.latlng.split(';');
      // content = '<h4>' + brand.description + '</h4><br><img';
      // content = `<h4 style='color: #f2a951'>${brand.description}</h4><br>
      //           <img src='${brand.image}' style='width: 100px; height: 100px'>
      //           <ion-progress-bar value="0.5"></ion-progress-bar>`;
      content = `<ion-card color='secondary'>
                  <img src='${brand.image}' style='height: 150px'>
                  <ion-card-header>
                    <ion-card-title>${brand.description}</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-progress-bar value="0.5"></ion-progress-bar>
                  </ion-card-content>
                </ion-card>`;
      this.addMarker({ lat: Number(latlng[0]), lng: Number(latlng[1]) }, content);
    });
  }

  loadMap() {

    const latLng = new google.maps.LatLng(-26.948680, -49.082827);

    const mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{ color: '#263c3f' }]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#6b9a76' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{ color: '#38414e' }]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#212a37' }]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#9ca5b3' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{ color: '#746855' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{ color: '#1f2835' }]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#f3d19c' }]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{ color: '#2f3948' }]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#d59563' }]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#17263c' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#515c6d' }]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#17263c' }]
        }
      ]
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  addMarker(latLng, content) {

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng,
      icon: '../../assets/images/marker.png'
    });

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, pContent) {

    const infoWindow = new google.maps.InfoWindow({
      content: pContent
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
