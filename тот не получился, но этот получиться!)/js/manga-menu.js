document.addEventListener("DOMContentLoaded", function() {
    var spisok = document.getElementById("spisok");
    var cardGlav = document.querySelector(".card-glav");
    var overlay = document.querySelector(".overlay");

    spisok.addEventListener("click", function(event) {
        event.stopPropagation();

        if (cardGlav.style.display === "none" || cardGlav.style.display === "") {
            cardGlav.style.display = "block";
            overlay.classList.add("dark-background"); // Добавляем класс для затемнения фона
        } else {
            cardGlav.style.display = "none";
            overlay.classList.remove("dark-background"); // Удаляем класс для затемнения фона
        }
    });
});
