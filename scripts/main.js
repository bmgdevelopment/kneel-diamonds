/* eslint-disable no-console */
import { KneelDiamonds } from './KneelDiamonds.js';
import { addCustomOrder } from './database.js'; 

const mainContainer = document.querySelector('#container'); 
//targets and places all info into container id area

const renderAllHTML = () => {
  mainContainer.innerHTML = KneelDiamonds(); //the kneel diamonds function will be displayed in the mainContainer area of the HTML
};

renderAllHTML(); //calling/invoking the function needed for initial display


//PLACED HERE FOR BETTER FLOW
const buttonClick = document.querySelector('#orderButton');

buttonClick.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;
  
  if (itemClicked.id.startsWith('order')) {
    console.log('Order button has been pushed');
    addCustomOrder();
  }
});

document.addEventListener('stateChanged', event => {
  
  console.log('State of data has changed. Regenerating HTML...');
  renderAllHTML();
  
});

//BELOW CODE LISTENS FOR STATECHANGED EVENT 
//When it is dispatched by the database module, the main module will 
//generate all the HTML again and display it.