/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { KneelDiamonds } from './KneelDiamonds.js';
import { addCustomOrder } from './database.js'; 

const mainContainer = document.querySelector('#container'); 
//targets and places all info into container id area

const renderAllHTML = () => {
  mainContainer.innerHTML = KneelDiamonds(); //the kneel diamonds function will be displayed in the mainContainer area of the HTML
};

renderAllHTML(); //calling/invoking the function needed for initial display


document.addEventListener('click', e => {
  if (e.target.id === ('orderButton')) {
    console.log('The order button has been pushed');
    addCustomOrder();
  }
});

//BELOW CODE LISTENS FOR STATECHANGED EVENT 
//When it is dispatched by the database module, the main module will 
//generate all the HTML again and display it.
document.addEventListener('stateChanged', () => {
  
  console.log('State of data has changed. Regenerating HTML...');
  renderAllHTML();
});


//CHECK WHY SOLUTIONS BELOW DIDN'T WORK (2 OPTIONS BELOW)

// document.addEventListener('click', e => {
//   if (e.target.id === 'orderButton') {
//     if (document.getElementById('radio_button').checked === true) {
//       console.log('Order button has been pushed');
//       addCustomOrder();
//     }
//   }
// });

// document.addEventListener('click', e => {
//   if (e.target.id === 'radio_button') {
//     if (e.target.id === 'orderButton') {
//       console.log('Order button has been pushed');
//       addCustomOrder();
//     }
//   }
// });