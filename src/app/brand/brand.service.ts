import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand } from '../../models/brand';

@Injectable()
export class BrandService {

    constructor(private http: HttpClient) { }

    postBrand(payload: Brand): Observable<any> {
        return this.http.post<Brand>(environment.api.postBrand, payload);
    }

    getBrands(): Promise<Array<Brand>> {
        return this.http.get<Array<Brand>>(environment.api.getBrands).toPromise();
    }
}
