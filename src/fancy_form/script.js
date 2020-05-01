function validateAddress() {
  let inputAddressValue = document.getElementById("input-address").value;

  let isInputAddressValid = WAValidator.validate(inputAddressValue, "bitcoin");

  if (!isInputAddressValid) {
    document.getElementById("address-validation-msg").innerText =
      "Invalid address";
    document.getElementById("address-validation-msg").style.visibility =
      "visible";
    return false;
  } else {
    document.getElementById("address-validation-msg").style.visibility =
      "hidden";
    document.getElementById("address-validation-msg").innerText = "message";
    return true;
  }
}

function validateForm() {
  let isAddresValid = validateAddress();
  return isAddresValid;
}
