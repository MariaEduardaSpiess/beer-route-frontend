// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url_local = 'http://localhost:8080';

const API_LOCAL = {
    postBeer: url_local + '/beer',
    getBeers: url_local + '/beers',
    postBrand: url_local + '/brand',
    getBrands: url_local + '/brands'
}

const url_heroku = 'https://beer-route.herokuapp.com';

const API_HEROKU = {
    postBeer: url_heroku + '/beer',
    getBeers: url_heroku + '/beers',
    postBrand: url_heroku + '/brand',
    getBrands: url_heroku + '/brands'
}

export const environment = {
  production: false,
  api: API_LOCAL
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
