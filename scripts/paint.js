import { getPaintColor, setPaintColor } from "./database.js";

const paints = getPaintColor();


// listening for a change on the DOM 
document.addEventListener("change", (change) => {
  const changeEvent = change.target;

// checks if the change occured on a specific target
  if (changeEvent.name === "paint") {

// splits the targeted value at the specified argument, stores it in an array
    const [, paintId] = changeEvent.value.split("--");  ["paint", "id"]

    setPaintColor(parseInt(paintId));
  }
});



export const colors = () => {
  let html = "<ul>";
  
  //* .map accesses and iterates the paintColor array and converts it in to a new array and stores it in paintList
  
  const paintList = paints.map((paint) => {
    return `
    <li>
    <input type="radio" name="paint" value="paint--${paint.id}">${paint.color}
    
    </li>
    `;
  });
  
  html += paintList.join("");
  
  html += "</ul>";
  return html;
};

// window.alert(`You selected ${changeEvent.value}`)
// window.alert(`${changeEvent.value}`)
// <input type="radio" name="paint" value="${paint.color} is $${paint.price}">${paint.color}
