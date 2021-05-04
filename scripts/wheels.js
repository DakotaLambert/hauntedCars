import { getWheels, setWheel } from "./database.js" 

const wheels = getWheels()

document.addEventListener(
  "change",
  (change) => {
    const changeEvent = change.target
    if (changeEvent.name === "wheel") {
      // window.alert(`You selected ${changeEvent.value}`)
      
    }
  }
  )


export const Wheels = () => {
    let html = "<ul>";
  
    //* .map accesses and iterates the paintColor array and converts it in to a new array and stores it in paintList
  
    const wheelList = wheels.map((wheel) => {
      return `
          <li>
          <input type="radio" name="wheel" value="${wheel.id}">${wheel.style}
          </li>
          `;
    });
  
    html += wheelList.join("")
  
    html += "</ul>";
    return html;
  };