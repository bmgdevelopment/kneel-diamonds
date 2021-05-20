import { getMetals, setMetal } from './database.js';

const metals = getMetals();

// document.addEventListener('change', (event) => {
//   if (event.target.name === 'metal') {
//     window.alert(`User chose metal ${event.target.value}`); // from below: value="${metal.id
//   }
// }
// );

document.addEventListener('change', (event) => {
  if (event.target.name === 'metal') { //pin points the target with the name 'metal' string
    setMetal(parseInt(event.target.value)); //uses the setMetal function to turn the string of .value into an integer
  } //then the integer is used as an argument for the setMetal function 
});//now database.orderBuilder has a key:value of metalId: 1

export const Metals = () => {
  let html = '<ul>';

  // This is how you have been converting objects to <li> elements
  for (const metal of metals) {
    html += `<li>
            <input id="radio_button" type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`;
  }

  html += '</ul>';
  return html;
};

