import { getAllJewelry, setJewelry } from './database.js';

const allJewelry = getAllJewelry();

document.addEventListener(
  'change', (event) => {
    if (event.target.name === 'jewelry') {
      setJewelry(parseInt(event.target.value));
    }
  }
);

export const AllJewelry = () => {
  let html = '<ul>';

  // Use .map() for converting objects to <li> elements
  const listItems = allJewelry.map(jewelry => {
    return `<li>
    <input class="jewelry" type="radio" name="jewelry" value="${jewelry.id}" /> ${jewelry.type}
    </li>
    `;
  });

  // Join all of the strings in the array into a single string
  html += listItems.join('');
  html += '</ul>';

  return html;
}; 

