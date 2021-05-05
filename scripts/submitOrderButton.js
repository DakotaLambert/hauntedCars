import { addCustomerOrder } from "./database.js";

document.addEventListener(
    "click",
(clickEvent) => {
    if(clickEvent.target.id === "submitOrderButton") {
        const customerOrderSuccess = addCustomerOrder()

        if(!customerOrderSuccess){
            window.alert("Get that boopity back to the options and select ALL!")
        }
    }
}

)


 export const SubmitOrderButton = () => {
    return `
    <button id="submitOrderButton">Submit Order</button>
    `
}