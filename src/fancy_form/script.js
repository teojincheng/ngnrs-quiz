function validateForm() {
  let inputAddressValue = document.getElementById("input-address").value;

  let isInputAddressValid = WAValidator.validate(inputAddressValue, "bitcoin");

  if (!isInputAddressValid) {
    alert("Bitcoin address is invalid");
    return false;
  }
  return true;
}
