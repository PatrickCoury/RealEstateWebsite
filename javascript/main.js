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
            document.getElementById("homeDescription").innerHTML = obj.DESCRIPTION;
            document.getElementById("add").innerHTML = obj.ADDRESS;
            document.getElementById("contact").innerHTML = obj.CONTACT_NUMBER;
            document.getElementById("email").innerHTML = obj.EMAIL_ADDRESS;
            document.getElementById("facebook").innerHTML = obj.FACEBOOK;
        }
    };
    xmlhttp.open("GET", "../php/GetAboutUs.php", true);
    xmlhttp.send();
}



function addImagesClicked()
{
    // PROPERTY_MEDIA table 
    // PROPERTY_KEY
    // PRPERTY_IMAGE
    // PRIMARY_VIDEO


    var inputElement = document.getElementById('files');
    var c = document.getElementById('count');

    var payload = [];
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() 
    {
        for (var i = 0; i < inputElement.files.length; i++)
        {
            payload.push(inputElement.files[i])
        }
        c.innerHTML = payload.length.toString() + " Images Selected";
    }

    

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            // Request finished. Do processing here.
            // Success message
        }   
    }
    jpayload = JSON.encode(payload);
    xhr.send(jpayload);
      
}
function setHome()
{

    var payload = {};

    payload.DESCRIPTION = document.getElementById('description').value;
    payload.COMPANY_ADDRESS = document.getElementById('address').value;
    payload.COMPANY_CONTACT_NUMBER = document.getElementById('contactNumber').value;
    payload.COMPANY_FAX_NUMBER = document.getElementById('fax').value;
    payload.COMPANY_EMAIL_ADDRESS = document.getElementById('email').value;
    payload.COMPANY_FACEBOOK = document.getElementById('facebook').value;
    console.log(payload.DESCRIPTION);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/UpdateAboutUs.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            alert("Home page successfully updated")
        }   
    }
    jpayload = 'DESCRIPTION='+payload.DESCRIPTION+'&COMPANY_ADDRESS='+payload.COMPANY_ADDRESS+'&COMPANY_CONTACT_NUMBER='+payload.COMPANY_CONTACT_NUMBER+'&COMPANY_FAX_NUMBER='+payload.COMPANY_FAX_NUMBER+'&COMPANY_EMAIL_ADDRESS='+payload.COMPANY_EMAIL_ADDRESS+'&COMPANY_FACEBOOK='+payload.COMPANY_FACEBOOK;
    //jpayload = 'DESCRIPTION='+document.getElementById('description').value+'&COMPANY_ADDRESS='+document.getElementById('address').value+'&COMPANY_CONTACT_NUMBER='+document.getElementById('contactNumber').value+'&COMPANY_FAX_NUMBER='+document.getElementById('fax').value+'&COMPANY_EMAIL_ADDRESS='+document.getElementById('email').value+'&COMPANY_FACEBOOK='+document.getElementById('facebook').value
    xhr.send(jpayload);
}


function newProperty()
{

    // Populates the AddRentalAdmin page with a new property which has a unique ID 
    // Calls a backend script which puts a new property into the SQL database then returns it back
    // Populate corresponding html input boxes with the default values

}

function setProperty()
{

    var payload = {};
    payload.PROPERTY_KEY = null;
    
    payload.PROPERTY_NAME = propertyTitle.value;
    payload.PROPERTY_PRICE = propertyPrice.value;
    payload.PROPERTY_TYPE = propertyType.value;
    payload.PROPERTY_STREET_ADDRESS1 = propertyAddress1.value;
    payload.PROPERTY_STREET_ADDRESS2 = propertyAddress2.value;
    payload.PROPERTY_CITY = propertyCity.value;
    payload.PROPERTY_STATE = propertyState.value;
    payload.PROPERTY_COUNTRY = propertyCountry.value;
    payload.PROPERTY_ZIP = propertyZip.value;
    payload.PROPERTY_AVAILABLE = null; 
    payload.PROPERTY_DATE = null; // Set in backend

    payload.PROPERTY_SQUARE_FEET = propertySqrFt.value;
    payload.PROPERTY_BED = propertyBed.value;
    payload.PROPERTY_BATH = propertyBath.value;
    payload.PROPERTY_PARKING = propertyParking.value;
    payload.PROPERTY_PET_FRIENDLY = propertyPetYes.value;
    payload.PROPERTY_ELECTRICITY = propertyElectricityYes.value;
    payload.PROPERTY_WATER_SEWAGE_TRASH =  propertyWSTYes.value;
    payload.PROPERTY_LEASE_MIN = propertyMinLease.value;
    payload.PROPERTY_LEASE_MAX = propertyMaxLease.value;
    payload.PROPERTY_NOTE = propertyNote.value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/InsertProperty', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            alert("Property successfully added")
        }   
    }
    jpayload = JSON.encode(payload);
    xhr.send(jpayload);
}




function addImagesClicked()
{
    // PROPERTY_MEDIA table 
    // PROPERTY_KEY
    // PRPERTY_IMAGE
    // PRIMARY_VIDEO


    var inputElement = document.getElementById('files');
    var c = document.getElementById('count');

    var payload = [];
    inputElement.addEventListener("change", handleFiles, false);
    function handleFiles() 
    {
        for (var i = 0; i < inputElement.files.length; i++)
        {
            payload.push(inputElement.files[i])
        }
        c.innerHTML = payload.length.toString() + " Images Selected";
    }

    

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            // Request finished. Do processing here.
            // Success message
        }   
    }
    jpayload = JSON.encode(payload);
    xhr.send(jpayload);
      
}

//var loadFile = function(event) {
  //  var output = document.getElementById('image');
    //output.src = URL.createObjectURL(event.target.files[0]);
    //output.onload = function() {
      //URL.revokeObjectURL(output.src) // free memory
    //}
//};