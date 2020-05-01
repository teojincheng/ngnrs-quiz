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

function validateEmptyElement(elementId) {
  let elementValue = document.getElementById(elementId).value;
  if (elementValue === "") {
    return true;
  } else {
    return false;
  }
}

function validateAmount() {
  let isAmountEmpty = validateEmptyElement("input-amount");
}

function validateOTP() {
  let isOTPEmpty = validateEmptyElement("input-otp");
  if (isOTPEmpty) {
    document.getElementById("otp-validation-msg").innerText = "Cannot be empty";
    document.getElementById("otp-validation-msg").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("otp-validation-msg").style.visibility = "hidden";
    document.getElementById("otp-validation-msg").innerText = "message";
    return true;
  }
}

function validateForm() {
  let isAddresValid = validateAddress();
  let isOTPNotEmpty = validateOTP();
  return isAddresValid;
}
