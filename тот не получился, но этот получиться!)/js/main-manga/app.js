document.querySelector('.search-main').addEventListener('click', function() {
    var inputField = document.querySelector('.input');
    inputField.classList.toggle('active');
  
    // Toggle transform on search button for visual feedback
    var searchButton = document.querySelector('.search-button');
    searchButton.style.transform = inputField.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
  });


var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.querySelector(".btn-close");

// Открываем модальное окно при нажатии на кнопку каталога
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на кнопку с крестиком
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при нажатии вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}