//*Why this module? Why house HTML here instead of main.js?

//* this module builds the html frame, to later be rendered in another module

import { interiors } from "./interior.js";
import { colors } from "./paint.js"
import { techPacks } from "./tech.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";


export const hauntedCarsHTML = () => {
  return ` 
  
  <h1>Haunted Lit-Cars</h2>


<article class="options">
    <section>
    <h2>Paint Color</h2>
        ${ colors() }
    </section>
    
    
    <section>
    <h2>Interior Style</h2>
        ${ interiors() }
    </section>
    
    
    <section>
    <h2>Tech Package</h2>
        ${ techPacks() }
    </section>
    
    
    <section>
    <h2>Wheels</h2>
    ${ Wheels() }
    </section>
  
</article>

<article>
    <button> Submit </button>
    </article>

    <article>
    <h2> Orders </h2>
    ${Orders()}
</article>
`;
};
