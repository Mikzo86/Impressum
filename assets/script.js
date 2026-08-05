document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".hero, .card, .buttons");

    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
    });


    setTimeout(() => {

        elements.forEach((element) => {

            element.style.transition = "all 0.8s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        });

    }, 200);

});