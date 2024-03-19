document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#image-gallery img");
    
    images.forEach(function(image) {
        // Mouseover event
        image.addEventListener("mouseover", function() {
            image.style.opacity = "0.5";
        });

        // Mouseleave event
        image.addEventListener("mouseleave", function() {
            image.style.opacity = "1";
        });

        // Focus event
        image.addEventListener("focus", function() {
            console.log("Image focused:", image.alt);
            image.style.border = "2px solid blue";
        });

        // Blur event
        image.addEventListener("blur", function() {
            console.log("Image blurred:", image.alt);
            image.style.border = "2px solid black";
        });

        // Load event
        image.onload = function() {
            addTabindex(image);
        };
    });
});

function addTabindex(image) {
    console.log("Adding tabindex to:", image.alt);
    image.setAttribute("tabindex", "0");
}

