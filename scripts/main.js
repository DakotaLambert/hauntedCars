import { hauntedCarsHTML } from "./carsHTML.js" 

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = hauntedCarsHTML()
}

renderAllHTML()


document.addEventListener("stateHasChanged", () => {
        renderAllHTML()
    }
)