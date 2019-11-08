import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand } from '../../models/brand';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

declare var google;
@Injectable()
export class BrandService {

    userPosition;

    constructor(private http: HttpClient, private geolocation: Geolocation, private storage: Storage) { }

    postBrand(payload: Brand): Observable<any> {
        return this.http.post<Brand>(environment.api.postBrand, payload);
    }

    getBrands(): Promise<Array<Brand>> {
        return this.http.get<Array<Brand>>(environment.api.getBrands).toPromise();
    }

    async getUserPosition() {
        await this.geolocation.getCurrentPosition().then((resp) => {
            this.userPosition = resp.coords.latitude + ',' + resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

    getDistances(pDestinations: Array<any>) {
        const service = new google.maps.DistanceMatrixService();
        return service.getDistanceMatrix(
            {
                origins: [this.userPosition],
                destinations: pDestinations,
                travelMode: 'DRIVING'
            }, (response, status) => {
                if (status === 'OK') {
                    this.storage.get('brands').then((brandsJSON: Array<Brand>) => {
                        brandsJSON.forEach((brand, index) => {
                            brand.distance = (response.rows[0].elements[index].distance.value / 1000).toFixed(1) + 'km';
                        });
                        this.storage.set('brands', brandsJSON);
                    });
                }
            });
    }
}
