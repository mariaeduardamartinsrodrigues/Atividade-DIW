function validateCRBio() {
  const crbioInput = document.getElementById('crbio').value;
  // Simulating a JSON response from a server
  const jsonResponse = { isValid: true };

  const validationResultElement = document.getElementById('validationResult');

  if (jsonResponse.isValid) {
    validationResultElement.textContent = 'Validação bem-sucedida!';
    validationResultElement.style.color = 'green';
  } else {
    validationResultElement.textContent = 'Falha na validação. CRBio inválido.';
    validationResultElement.style.color = 'red';
  }
}