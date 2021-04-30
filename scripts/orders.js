import { getCustomerOrders } from "./database.js"

const orders = getCustomerOrders()

export const Orders = () => {
    let html = "<ul>";
  
  
    const orderList = orders.map((order) => {
      return `
          <li> Order #${order.id} was ordered on ${order.timestamp}
          </li>
          `;
    });
  
    html += orderList.join("")
  
    html += "</ul>";
    return html;
  };