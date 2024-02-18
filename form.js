function setError(id, error) {
  let element = document.getElementById(id);
  element.innerHTML = error;
}
function clearErrors() {
  errors = document.getElementsByClassName("formError");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function validateForm() {
  let returnVal = true;
  clearErrors();
  let fname = document.forms["myForm"]["fname"].value;
  let numbers = /[0-9]/g;
  if (fname.length < 5) {
    setError("error-fname", "* Length of Name is Too Short. ");
    returnVal = false;
  } else if (numbers.test(fname)) {
    setError("error-fname", "* Name shouldn't contain Digits. ");
    returnVal = false;
  }
  let lname = document.forms["myForm"]["lname"].value;
  if (lname.length < 5) {
    setError("error-lname", "* Length of Name is Too Short. ");
    returnVal = false;
  } else if (numbers.test(lname)) {
    setError("error-lname", "* Name shouldn't contain Digits. ");
    returnVal = false;
  }
  let email = document.forms["myForm"]["usermail"].value;
  if (email.length > 15) {
    setError("error-email", "* Length of Email is Too Long. ");
    returnVal = false;
  }
  let confusermail = document.forms["myForm"]["confusermail"].value;

  if (email !== confusermail) {
    setError("error-confmail", "* Email Dosen't Match.");
    returnVal = false;
  }
  let passcode = document.forms["myForm"]["passcode"].value;
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (!regex.test(passcode)) {
    setError(
      "error-password",
      "*Password Must Contain 1 Special Character,Capital Letter,Lowercase Letter and Digits. "
    );
    returnVal = false;
  }
  return returnVal;
}
