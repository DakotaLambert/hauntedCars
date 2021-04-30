import { getTech } from "./database.js"

const packages = getTech()


export const techPacks = () => {
    let html = "<ul>";
  
    //* .map accesses and iterates the paintColor array and converts it in to a new array and stores it in paintList
  
    const techList = packages.map((tech) => {
      return `
          <li> 
          <input type="radio" name="tech" value="${tech.id}" /> ${tech.package}
          </li>
          `;
    });
  
    html += techList.join("")
  
    html += "</ul>";
    return html;
  };