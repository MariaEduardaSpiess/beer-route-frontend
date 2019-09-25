import { Component, OnInit } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
    selector: 'app-beer-list',
    templateUrl: 'beer-list.page.html'
})
export class BeerListPage implements OnInit {

    beers;

    constructor(private beerService: BeerService) { }

    ngOnInit() {
        this.getBeers(null);
    }
    
    getBeers(event) {
        this.beerService.getBeers()
            .subscribe((beers) => {
                this.beers = beers;
                if (event) {
                    event.target.complete();
                }
            });
    }

}
