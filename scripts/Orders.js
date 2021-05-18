import { getOrders } from './database.js';

const buildOrderListItem = (order) => {
  return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`;
};

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

