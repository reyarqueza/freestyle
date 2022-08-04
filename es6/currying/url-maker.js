const urlMaker = (baseUrl) => (path) => () => `${baseUrl}/${path}`;

// const urlMaker = function (baseUrl) {
//   return function (path) {
//     return function () {
//       return `${baseUrl}/${path}`;
//     };
//   };
// };

const myWebsite = urlMaker("https://www.google.com");
const homePage = myWebsite("home");
const aboutPage = myWebsite("about");

console.log(homePage());
console.log(aboutPage());

const yahooAboutPage = urlMaker("https://www.yahoo.com")("about");

console.log(yahooAboutPage());
