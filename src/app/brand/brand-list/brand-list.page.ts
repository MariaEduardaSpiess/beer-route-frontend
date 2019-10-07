import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-brand-list',
    templateUrl: 'brand-list.page.html'
})
export class BrandListPage implements OnInit {

    brands;

    constructor(private brandService: BrandService, private router: Router) { }

    ngOnInit() {
        this.getBrands(null);
    }
    
    getBrands(event) {
        this.brandService.getBrands()
            .subscribe((brands) => {
                this.brands = brands;
                if (event) {
                    event.target.complete();
                }
            });
    }

    selectBrand(brand) {
        this.router.navigate(['/beer', brand]);
    }

}
