import { addCustomerOrder } from "./database.js";

document.addEventListener(
    "click",
(clickEvent) => {
    if(clickEvent.target.id === "submitOrderButton") {
        const customerOrderSuccess = addCustomerOrder()

        if(!customerOrderSuccess){
            window.alert("Please select all options!")
        }
    }
}

)


 export const SubmitOrderButton = () => {
    return `
    <button id="submitOrderButton">Submit Order</button>
    `
}

