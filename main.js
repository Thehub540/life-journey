console.log("Life journey website loaded successfully.");

document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("main h1");
    if (heading) {
        heading.style.position = "relative";
        heading.style.left = "0";
        heading.style.transition = "left 2s";
        setTimeout(() => {
            heading.style.left = "60%";
        }, 300);
        setTimeout(() => {
            heading.style.left = "0";
        }, 2500);
    }

    
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                alert("Thank you for contacting me, " + name + "! Your message has been received.");
                form.reset(); 
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
