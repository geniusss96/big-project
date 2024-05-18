// Toggle search input on click
document.querySelector('.search-button').addEventListener('click', function() {
  var searchContainer = this.parentElement;
  var inputField = searchContainer.querySelector('.input');
  inputField.classList.toggle('active');
});
