import { KneelDiamonds } from './KneelDiamonds.js';

const mainContainer = document.querySelector('#container'); 
//targets and places all info into container id area

const renderAllHTML = () => {
  mainContainer.innerHTML = KneelDiamonds(); //the kneel diamonds function will be displayed in the mainContainer area of the HTML
};

renderAllHTML(); //calling/invoking the function

