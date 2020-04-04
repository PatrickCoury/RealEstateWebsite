function unhide(clickedButton, divID)
{
    var item = document.getElementById(divID);

    if(item.className=='hidden')
    {
        item.className = 'unhidden';
        clickedButton.value = 'hide';
    }
    else if(item.className=='unhidden')
    {
        item.className = 'hidden';
        clickedButton.value = 'unhide';
    }
}

function loadHomePage() 
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var obj = JSON.parse(this.responseText);
            document.getElementById("homeDescription").innerHTML = obj.PARAGRAPH_TEXT;
            document.getElementById("homeVideo").innerHTML = obj.VIDEO_URL.trim();
        }
    };
    xmlhttp.open("GET", "../php/GetHomePage.php", true);
    xmlhttp.send();

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var obj = JSON.parse(this.responseText);
            document.getElementById("add").innerHTML = obj.ADDRESS;
            document.getElementById("contact").innerHTML = obj.CONTACT_NUMBER;
            document.getElementById("email").innerHTML = obj.EMAIL_ADDRESS;
            document.getElementById("facebook").innerHTML = obj.FACEBOOK;
        }
    };
    xmlhttp.open("GET", "../php/GetAboutUs.php", true);
    xmlhttp.send();
}

//var loadFile = function(event) {
  //  var output = document.getElementById('image');
    //output.src = URL.createObjectURL(event.target.files[0]);
    //output.onload = function() {
      //URL.revokeObjectURL(output.src) // free memory
    //}
//};

window.onload=function(){
const inputElement = document.getElementById('files');
var fileSRC = [];
var c = document.getElementById('count');
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  for (var i = 0; i < inputElement.files.length; i++){
    fileSRC.push(inputElement.files[i])
    console.log(i.toString());
    console.log(fileSRC);
  }
  console.log(fileSRC.length.toString());
  c.innerHTML = fileSRC.length.toString() + " Images Selected";
}
}
