import { getStyles } from "./database.js"

const styles = getStyles()


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