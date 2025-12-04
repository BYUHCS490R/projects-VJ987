const form = document.getElementById("visitorForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event){
  event.preventDefault();
  form.style.display = "none";
  successMessage.style.display = "block";
});
