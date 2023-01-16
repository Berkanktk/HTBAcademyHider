document.addEventListener("DOMContentLoaded", initCode());


function initCode() {

    /****************************************** Variables ******************************************/
    const sortDiv = "#module-page > div:nth-child(4)"; // location of the button  
    const finished = ".btn-light.btn-sm" // finished modules

    /****************************************** Methods ******************************************/

    function hider() {
        const element = document.querySelector(finished);

        if (element !== null) {
            let parent = element;

            for (let i = 0; i < 6; i++) {
                parent = parent.parentNode;
            }

            if (parent !== null) {
                parent.remove();
            }
        }
        requestAnimationFrame(hider);
    }

    /****************************************** Label ******************************************/

    // Create label element
    const label = document.createElement("label");
    label.className = "btn btn-light";

    // Create input element
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "status");
    input.setAttribute("value", "unfinished");

    // Create text node for the label
    const text = document.createTextNode("Unfinished");

    // Append the input and text to the label
    label.appendChild(input);
    label.appendChild(text);

    // Append the label to the desired location in the DOM
    const parent = document.querySelector(sortDiv);
    parent.appendChild(label);

    // Attach event listener to the label
    label.addEventListener("click", hider);

}
