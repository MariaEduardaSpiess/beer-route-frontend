import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { Router } from '@angular/router';
import { Brand } from 'src/models/brand';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-brand-list',
    templateUrl: 'brand-list.page.html',
    styleUrls: ['brand-list.page.scss']
})
export class BrandListPage implements OnInit {

    brands: Array<Brand>;

    constructor(private brandService: BrandService, private router: Router, private storage: Storage) { }

    ngOnInit() {
        this.getBrands(null);
    }

    getBrands(event) {
        this.brandService.getBrands()
            .then((brands) => {
                this.brands = brands;
                this.storage.set('brands', this.brands);
                this.calculateDistances();
                if (event) {
                    event.target.complete();
                }
            });
    }

    selectBrand(brandId) {
        this.router.navigate(['/beer', { brandId: brandId }]);
    }

    async calculateDistances() {
        await this.brandService.getUserPosition();
        const destinations = [];
        this.brands.forEach((brand) => {
            destinations.push(brand.latlng);
        });
        await this.brandService.getDistances(destinations);
        this.storage.get('brands').then(brands => {
            this.brands = brands;
        });
    }

}
