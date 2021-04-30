import { getPaintColor } from "./database.js";

const paints = getPaintColor();

export const colors = () => {
  let html = "<ul>";

  //* .map accesses and iterates the paintColor array and converts it in to a new array and stores it in paintList

  const paintList = paints.map((paint) => {
    return `
        <li>
        <input type="radio" name="paint" value="${paint.id}">${paint.color}
        </li>
        `;
  });

  html += paintList.join("")

  html += "</ul>";
  return html;
};
