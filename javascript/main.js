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

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var obj = JSON.parse(this.responseText);
            
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '../php/UpdateProperty', true);

            //Send the proper header information along with the request
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function() { // Call a function when the state changes.
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
                {
                    var obj = JSON.parse(this.responseText);
                    
                    // Populate corresponding html input boxes with the default values
                    // propertyTitle.value = 
                    // propertyPrice.value = 
                    // propertyType.value = 
                    // propertyAddress1.value = 
                    // propertyAddress2.value = 
                    // propertyCity.value = 
                    // propertyState.value = 
                    // propertyCountry.value = 
                    // propertyZip.value = 
                    // propertySqrFt.value = 
                    // propertyBed.value = 
                    // propertyBath.value = 
                    // propertyParking.value = 
                    // propertyPetYes.value = 
                    // propertyElectricityYes.value = 
                    // propertyWSTYes.value = 
                    // propertyMinLease.value = 
                    // propertyMaxLease.value = 
                    // propertyNote.value = 

                }   
            }
            xhr.send(obj );
        }
    };
    xmlhttp.open("GET", "../php/InsertProperty.php", true);
    xmlhttp.send();
    // Calls a backend script which puts a new property into the SQL database then returns it back

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
    xhr.open("POST", '../php/UpdateProperty', true);

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

function getProperties()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var properties = JSON.parse(this.responseText);
            properties.forEach(createProperty);
            
            function createProperty(property, index)
            {
               property_key = property['KEY'];
               property_name = property['NAME'];
               property_address = property['STREET1_ADDRESS'];

               tr_tag = document.createElement("tr");

               img_td_tag = document.createElement("td");
               img_tag = document.createElement("img");
               img_tag.src = "..\\images\\property_icon.png";
               img_tag.width = "100";
               img_tag.height = "100";
               img_tag.align = "center";
               img_td_tag.appendChild(img_tag); 
               tr_tag.appendChild(img_td_tag); 

               title_td_tag = document.createElement("td");
               title_td_tag.padding = "10px 30px";
               title_p_tag = document.createElement("p");
               title_p_tag.class = "title";
               title_p_tag.innerHTML = property_name;
               address_p_tag = document.createElement("p");
               address_p_tag.class = "title";
               address_p_tag.fontSize - "20px";
               address_p_tag.innerHTML = property_address;
               title_td_tag.appendChild(title_p_tag); 
               title_td_tag.appendChild(document.createElement("br")); 
               title_td_tag.appendChild(address_p_tag); 
               tr_tag.appendChild(title_td_tag); 

               menu_td_tag = document.createElement("td");
               menu_td_tag.padding = "10px";
               menu_td_tag.align = "center";
               update_button = document.createElement("button");
               update_button.type = "button";
               update_button.id="rentalPropertyUpdate" 
               update_button.className = "button"
               update_button.style="width: 100px;margin-top: 0px;";
               update_button.onClick = "location.href='UpdateRentalAdmin.html/?'" + property_key; // UpdateRentalAdmin.html should be a php page or have inline php to facilitate providing property_key to the page
               update_button.innerHTML = "Update";
               delete_button = document.createElement("button");
               delete_button.type = "button";
               delete_button.id="rentalPropertyUpdate";
               delete_button.className = "button";
               delete_button.style="width: 100px;margin-top: 0px;";
               delete_button.innerHTML = "Delete";
               menu_td_tag.appendChild(update_button); 
               menu_td_tag.appendChild(delete_button); 
               tr_tag.appendChild(menu_td_tag); 

               document.getElementById("propertiesTable").appendChild(tr_tag);
               
  
            }
            



        }
    };
    xmlhttp.open("GET", "../php/GetProperties.php", true);
    xmlhttp.send();

}
//var loadFile = function(event) {
  //  var output = document.getElementById('image');
    //output.src = URL.createObjectURL(event.target.files[0]);
    //output.onload = function() {
      //URL.revokeObjectURL(output.src) // free memory
    //}
//};