// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const URL_LOCAL = 'http://localhost:8080';

const API_LOCAL = {
    postBeer: URL_LOCAL + '/beer',
    getBeers: URL_LOCAL + '/beers',
    postBrand: URL_LOCAL + '/brand',
    getBrands: URL_LOCAL + '/brands'
};

const URL_HEROKU = 'https://beer-route.herokuapp.com';

const API_HEROKU = {
    postBeer: URL_HEROKU + '/beer',
    getBeers: URL_HEROKU + '/beers',
    postBrand: URL_HEROKU + '/brand',
    getBrands: URL_HEROKU + '/brands'
};

const API_MOCK = {
    postBeer: URL_HEROKU + '/beer',
    getBeers: URL_HEROKU + '/beers',
    postBrand: URL_HEROKU + '/brand',
    getBrands: 'http://www.mocky.io/v2/5dd2efe133000075007a3f55'

};

export const environment = {
    production: false,
    api: API_MOCK
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
