import '../scss/app.scss';

/* Your JS Code goes here */

/* Demo JS */
import home from './home.js';
import './cart.js';

console.log(home);

const productList = document.querySelector('.product--list');
if (productList) {
  home(productList);
}
