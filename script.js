function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript!'); }
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDeafault();
  ValidateForm();
});

function ValidateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(emai)
}

function ValidateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

if (!validateEmail(email)) {
  alert('Por favor ingrese un correo electrónico válido.');
} else {
  
  alert('Correo electrónico enviado correctamente.');
}
}