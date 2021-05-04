import { getInteriorStyles, setInteriorStyles } from "./database.js"

const styles = getInteriorStyles()

document.addEventListener(
  "change",
  (change) => {
    const changeEvent = change.target
    if (changeEvent.name === "interior") {
      // window.alert(`You selected ${changeEvent.value}`)
      
    }
  }
  )

export const interiors = () => {
    let html = "<ul>";
  
  
  
    const interiorList = styles.map((interior) => {
      return `
          <li>
          <input type="radio" name="interior" value="${interior.id}">${interior.style}
          </li>
          `;
    });
  
    html += interiorList.join("")
  
    html += "</ul>";
    return html;
  };