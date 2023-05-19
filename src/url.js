// This can be read from an env file
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = 'https://pizza-backend-production-feff.up.railway.app';
//const BASE_URL = "http://localhost:4000/" 

export const API_URLS = {
    BASE_URL,
    SHOP: BASE_URL + '/shop',
    USER: BASE_URL + '/user',
    CART: BASE_URL + '/cart',
    MENU: BASE_URL + '/menu',
}
// console.log('this is suppose to be a url ' + BASE_URL)
// console.log('env ' + process.env.REACT_APP_BASE_URL)