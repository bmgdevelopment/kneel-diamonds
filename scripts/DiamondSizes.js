import { getSizes, setSize } from './database.js';

const sizes = getSizes();

// document.addEventListener('change', (event) => {

//   let sizeSelected;

//   for (const size of sizes) { 
//     if (event.target.name === 'size' && event.target.value === size.id.toString()) { //the size.id needs to be created into a string to properly match the event.target.value statement
//       sizeSelected = size.carets; 
//       window.alert(`You chose ${sizeSelected} carets`); 
//     }
//   }
// }
// );

document.addEventListener('change', (event) => {
  if (event.target.name ==='size') {
    setSize(parseInt(event.target.value));
  }
});

export const DiamondSizes = () => {
  let html = '<ul>';

  // Use .map() for converting objects to <li> elements
  const listItems = sizes.map(size => { //.map() is a method that creates a new array by calling results by the parameter provided
    //.map() iterates over the array and takes the current object at the current location and passes it as an argument to the function
    //the size.id value below is a STRING so above the reference needs to be the same
    return `<li>
            <input id="radio_button" type="radio" name="size" value="${size.id}" /> ${size.carets} 
        </li>`;
  });

  html += listItems.join(''); //.join() will join the listItems and then the '' tells how they should be joined
  html += '</ul>';

  return html;
};

