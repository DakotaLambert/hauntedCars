import {
  getCustomerOrders,
  getInteriorStyles,
  getPaintColor,
  getTech,
  getWheels,
} from "./database.js";

const interiorStyles = getInteriorStyles();
const paintColor = getPaintColor();
const techPackage = getTech();
const wheelOption = getWheels();


const buildOrderListItem = (order) => {
  const selectedPaint = paintColor.find((paint) => {
    return paint.id === order.paintColorId;
  });

  const selectedInterior = interiorStyles.find((interior) => {
    return interior.id === order.interiorStyleId;
  });

  const selectedTech = techPackage.find((tech) => {
    return tech.id === order.techId;
  });

  const selectedWheel = wheelOption.find((wheel) => {
    return wheel.id === order.wheelId;
  });

  const totalCost =
    selectedPaint.price +
    selectedInterior.price +
    selectedTech.price +
    selectedWheel.price;

  return `<div class="order">
  Order #${order.id} cost ${totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })}
    </div>
    `;
};

export const Orders = () => {
  const orders = getCustomerOrders();

  let html = "<ul>";

  const orderList = orders.map(buildOrderListItem);

  html += orderList.join("");
  html += "</ul>";

  return html;
};

// return `
//         <li> Order #${order.id} was ordered on ${order.timestamp}
//         </li>
//         `;

// const orderList = orders.map((order) => {
//   const orders = getCustomerOrders()

//   let html = "<ul>";

//   });

//   html += orderList.join("")
//   html += "</ul>";

//   return html;
