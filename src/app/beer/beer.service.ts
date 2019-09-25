import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BeerService {
    constructor(private http: HttpClient) { }

    postBeer(payload): Observable<any> {
        return this.http.post<any>(environment.api.postBeer, payload);
    }

    getBeers(): Observable<any> {
        return this.http.get<any>(environment.api.getBeers);
    }
    
}