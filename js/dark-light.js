

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  var fonts = document.body;
  var bg =  document.body.style;
  var scl = document.getElementsByTagName('span').length;
  
  if (checkBox.checked == true){
     bg.background = "#0d0c1d";
     scl.color="#000000";
      fonts.style.color="white";
    } else {
      bg.background = "white";
      fonts.style.color="black";
    }
  }

