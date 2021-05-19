/* eslint-disable no-console */
import { DiamondSizes } from './DiamondSizes.js';
import { JewelryStyles } from './JewelryStyles.js';
import { Metals } from './Metals.js';
import { Orders } from './Orders.js';
// import { addCustomOrder } from './database.js'; //ADDED FOR BOOK 4, CHAPTER 8


//CREATE A CLICK ON BUTTON LISTENER?


//SO HAPPY IT WORKS!!! This was a missing piece
// document.addEventListener('click', (clickEvent) => {
//   const itemClicked = clickEvent.target;

//   if (itemClicked.id.startsWith('order')) {
//     console.log('The order button has been pushed');
//     addCustomOrder();
//   }
// });

export const KneelDiamonds = () => {
  return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <section class="options">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </section>
        </article>
    `;
};

// const buttonClick = document.querySelector('#orderButton');

// buttonClick.addEventListener('click', (clickEvent) => {
//   const itemClicked = clickEvent.target;

//   if (itemClicked.id.startsWith('order')) {
//     console.log('order button has been pushed');
//     addCustomOrder();
//   }
// });