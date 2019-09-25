const url_heroku = 'https://beer-route.herokuapp.com';

const API_HEROKU = {
    postBeer: url_heroku + '/beer',
    getBeers: url_heroku + '/beers'
}

export const environment = {
  production: true,
  api: API_HEROKU
};
