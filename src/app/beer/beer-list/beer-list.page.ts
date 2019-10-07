import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-beer-list',
    templateUrl: 'beer-list.page.html'
})
export class BeerListPage implements OnInit {

    beers;
    brandId: number;

    constructor(private beerService: BeerService, private route: ActivatedRoute) { }

    ngOnInit() {
        debugger
        this.brandId = parseInt(this.route.snapshot.paramMap.get('id'));
        this.getBeers(null);
    }

    getBeers(event) {
        this.beerService.getBeers(this.brandId)
            .subscribe((beers) => {
                this.beers = beers;
                if (event) {
                    event.target.complete();
                }
            });
    }

}
