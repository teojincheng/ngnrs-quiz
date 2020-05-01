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

function validateEmptyNumber(elementId) {
  let elementValue = document.getElementById(elementId).value;
  if (elementValue <= 0) {
    return true;
  } else {
    return false;
  }
}

function validateAmount() {
  let isAmountEmpty = validateEmptyElement("input-amount");
  let isEmptyNumber = validateEmptyNumber("input-amount");

  if (isAmountEmpty || isEmptyNumber) {
    document.getElementById("amount-validation-msg").innerText =
      "Amount cannot be empty";
    document.getElementById("amount-validation-msg").style.visibility =
      "visible";
    return false;
  } else {
    document.getElementById("amount-validation-msg").style.visibility =
      "hidden";
    document.getElementById("amount-validation-msg").innerText = "message";
    return true;
  }
}

function validateOTP() {
  let isOTPEmpty = validateEmptyElement("input-otp");
  if (isOTPEmpty) {
    document.getElementById("otp-validation-msg").innerText =
      "OTP cannot be empty";
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
  let isAmountValid = validateAmount();

  if (isAddresValid && isOTPNotEmpty && isAmountValid) {
    return true;
  }
  return false;
}
