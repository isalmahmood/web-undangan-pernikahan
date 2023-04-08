function copyBank1() {
  // Get the text field
  var copyText = document.getElementById("inputBank1");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);

  //show toast / popup
  var x = document.getElementById("snackbar1");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 1000);
}

function copyBank2() {
  // Get the text field
  var copyText = document.getElementById("inputBank2");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);

  //show toast / popup
  var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 1000);
}