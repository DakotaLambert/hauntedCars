//*Why this module? Why house HTML here instead of main.js?

//* this module builds the html frame, to later be rendered in another module

import { interiors } from "./interior.js";
import { colors } from "./paint.js"
import { techPacks } from "./tech.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";
import { SubmitOrderButton } from "./submitOrderButton.js";

export const hauntedCarsHTML = () => {
  return ` 
  
  <h1>Haunted Light-Cars</h2>


<article class="options">
    <section id="choiceBoxes">
    <h2 id="choiceHeaders">Paint Color</h2>
        ${ colors() }
    </section>
    
    
    <section id="choiceBoxes">
    <h2 id="choiceHeaders">Interior Style</h2>
        ${ interiors() }
    </section>
    
    
    <section id="choiceBoxes">
    <h2 id="choiceHeaders">Tech Package</h2>
        ${ techPacks() }
    </section>
    
    
    <section id="choiceBoxes">
    <h2 id="choiceHeaders">Wheels</h2>
    ${ Wheels() }
    </section>
  
</article>


    ${ SubmitOrderButton() }
    

    <article class="orderButton">
    <h2> Orders </h2>
    ${ Orders ()}
</article>
`;
};
