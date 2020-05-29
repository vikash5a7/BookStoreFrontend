// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'http://localhost:8081',
  BookUrl: 'http://localhost:8080/',
  getallbooksurl: '',
  getbookbyIdurl: 'books/',
  addandupdatecartUrl: 'books/addandupdatecart',
  sorting: 'books/sorting',
  SortNewestArrival: 'books/unsorting',
  cusUrl : 'books/pagewise',

  CartUrl: 'http://localhost:8081/',
  addUrl: 'customers/addcustomer',
  addtocart: 'carts/addcart',
  getbookprice: 'getbookprice',

  quantity: 'http://localhost:8081/',
  addbooksquantity: 'addbooksquantity',
  USER_REGISTRATION: 'registration',
  USER_LOGIN: 'login',
  USER_FORGET_PASSWORD: 'forgotpassword',
  USER_RESETPASSWORD: 'update'
};


