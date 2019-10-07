import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BrandService {
    constructor(private http: HttpClient) { }

    postBrand(payload): Observable<any> {
        return this.http.post<any>(environment.api.postBrand, payload);
    }

    getBrands(): Observable<any> {
        return this.http.get<any>(environment.api.getBrands);
    }
    
}