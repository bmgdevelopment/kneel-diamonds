import { getOrders, getMetals, getSizes, getStyles, getAllJewelry } from './database.js';


// Remember that the function you pass to find() must return true/false
// The find() method returns the value of the first element in 
// the provided array that satisfies the provided testing function

const metals = getMetals();
const sizes = getSizes();
const styles = getStyles();
const allJewelry = getAllJewelry();

const buildOrderListItem = (order) => {
  
  
  const foundMetal = metals.find(
    (metal) => {
      return metal.id === order.metalId;
    }
  );
    
  const foundSize = sizes.find(
    (size) => {
      return size.id === order.sizeId;
    }
  );
      
  const foundStyle = styles.find(
    (style) => {
      return style.id === order.styleId;
    }
  );
        
  const foundJewelry = allJewelry.find(
    (jewelry) => {
      return jewelry.id === order.jewelryId;
    }
  );
        
  let totalCost = (foundMetal.price + foundSize.price + foundStyle.price);
  

  if (foundJewelry.id === 1) {
    return `<li>
    Order #${order.id} costs $${totalCost.toFixed(2)}
    </li>`;
  } else if (foundJewelry.id === 2) {
    let total2 = totalCost * 2;
    return `<li>
    Order #${order.id} costs $${total2.toFixed(2)}
    </li>`;
  } else if (foundJewelry.id === 3) {
    let total4 = totalCost * 4;
    return `<li>
    Order #${order.id} costs $${total4.toFixed(2)}
    </li>`;
  } 
  
  // let costString = totalCost.toLocaleString('en-US', {
  //   style: 'currency',
  //   currency: 'USD'
  // });
  
  // return `<li>
  //   Order #${order.id} costs ${costString}
  // </li>`;
  
};

//TIME STAMP LINE
// const buildOrderListItem = (order) => {
//   return `<li>
//       Order #${order.id} was placed on ${order.timestamp}
//   </li>`;
// };

export const Orders = () => {
  /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
        
        Answer: to contain the getOrders() within the scope of this function
        and not allow the const buildOrderListItem function to access it.
    */
   
  const orders = getOrders();

  let html = '<ul>';

  const listItems = orders.map(buildOrderListItem);

  html += listItems.join('');
  html += '</ul>';

  return html;
};

