// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  // BASE_URL: 'http://localhost:8081/',
  // BookUrl: 'http://localhost:8081/',
  // getallbooksurl: '',
  BASE_URL: 'http://localhost:8080',
  BookUrl: 'http://localhost:8080',
  getallbooksurl: 'books/getAllBooks',


  // BASE_URL: 'http://localhost:8080',
  // BookUrl: 'http://localhost:8080',
  // getallbooksurl: '',
  // BASE_URL: 'http://localhost:8080',
  // BookUrl: 'http://localhost:8080',
  // getallbooksurl: 'books/getAllBooks',


  getbookbyIdurl: 'books/',
  addandupdatecartUrl: 'books/addandupdatecart',
  sorting: 'books/sorting',
  SortNewestArrival: 'books/unsorting',
  cusUrl : 'books/pagewise',

  addbooks: 'books/addbook',
  deleteBook: 'books/deletebook',
  editBook: 'books/editbook',
  verifyBook: 'books/editBookStatus',
  addBookImage: 'books/addBookImage',
  CartUrl: 'http://localhost:8080/',
  addUrl: 'customers/addcustomer',
  addtocart: 'carts/addcart',
  getbookprice: 'getbookprice',
  getReview:'books/getratereviews',

  quantity: 'http://localhost:8080/',
  addbooksquantity: 'addbooksquantity',
  USER_REGISTRATION: 'registration',
  USER_LOGIN: 'login',
  USER_FORGET_PASSWORD: 'forgotpassword',
  USER_RESETPASSWORD: 'update',


  WRITE_REVIEW: "books/ratingreview?bookId=",
  GET_REVIEWS: "books/ratingreviews/?bookId=",


  ratereview: "books/getratereviews/?bookId=",


  adminUrl:"http://localhost:8080/",
  approveBook:"admin/update/",
  rejectBook:"admin/update/",
  unVerifiedBooks:"admin/books",
  rejectedBooks:"admin/books",
  approvedBooks:"admin/books",

  avgrateofbook:"books/avgrate?bookId=",





  getallOrderedBooks:"bookstore/getOrdersByAdmin",
  changeOrderstatus:"bookstore/orderStatusByAdmin",
  getOrdersByseller:"bookstore/getOrdersByseller",

  getSortedBookByRate:"books/sortbyrate",





};


