import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { ActivatedRoute } from '@angular/router';
import { Beer } from 'src/models/beer';

@Component({
    selector: 'app-beer-list',
    templateUrl: 'beer-list.page.html'
})
export class BeerListPage implements OnInit {

    beers: Array<Beer>;
    brandId: number;

    constructor(private beerService: BeerService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.brandId = parseInt(this.route.snapshot.paramMap.get('brandId'));
        this.getBeers(null);
    }

    getBeers(event) {
        this.beerService.getBeers(this.brandId)
            .subscribe((beers: Array<Beer>) => {
                this.beers = beers;
                if (event) {
                    event.target.complete();
                }
            });
    }

}
