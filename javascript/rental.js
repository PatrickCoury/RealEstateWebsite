function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if ((charCode < 48 || charCode > 57))
        return false;
        
    return true;
}

function isNumberWithDecimal(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;

    if ( charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        
    return true;
}

function oneMore(element){
    newProperty();
    element.form.reset();
}

function addProperty(element){
    newProperty();
    window.location.replace("../html/RentalAdmin.html");
}

function setProperty(propertyKey)
{
    
    var payload = {};
    payload.PROPERTY_KEY = propertyKey;
    
    payload.PROPERTY_NAME = propertyTitle.value;
    payload.PROPERTY_PRICE = propertyPrice.value;
    payload.PROPERTY_TYPE = propertyType.value;
    payload.PROPERTY_STREET_ADDRESS1 = propertyAddress1.value;
    payload.PROPERTY_STREET_ADDRESS2 = propertyAddress2.value;
    payload.PROPERTY_CITY = propertyCity.value;
    payload.PROPERTY_STATE = propertyState.value;
    payload.PROPERTY_COUNTRY = propertyCountry.value;
    payload.PROPERTY_ZIP = propertyZip.value;
    payload.PROPERTY_AVAILABLE = propertyAvailable.value; 
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
    xhr.open("POST", '../php/UpdateProperty.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            alert(this.responseText);
            // Request finished. Do processing here.
            // Success message
        }   
    }
    
    xhr.send('PAYLOAD=' + JSON.stringify(payload));
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

function newProperty()
{
    // this function should not add if the property key already exists
    var payload = {};
    
    payload.PROPERTY_NAME = propertyTitle.value;
    payload.PROPERTY_PRICE = propertyPrice.value;
    payload.PROPERTY_TYPE = propertyType.value;
    payload.PROPERTY_STREET_ADDRESS1 = propertyAddress1.value;
    payload.PROPERTY_STREET_ADDRESS2 = propertyAddress2.value;
    payload.PROPERTY_CITY = propertyCity.value;
    payload.PROPERTY_STATE = propertyState.value;
    payload.PROPERTY_COUNTRY = propertyCountry.value;
    payload.PROPERTY_ZIP = propertyZip.value;
    payload.PROPERTY_AVAILABLE = 1; 
    // payload.PROPERTY_DATE = null; // Set in backend

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

        // Populates the AddRentalAdmin page with a new property which has a unique ID 

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/InsertProperty.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            alert(this.responseText);
        }
    };
    xhr.send('PAYLOAD=' + JSON.stringify(payload));
}

function getProperty(propertyKey)
{
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/GetProperty.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            var obj = JSON.parse(this.responseText);
            propertyTitle.value = obj.NAME;
            propertyPrice.value = obj.PRICE;
            propertyType.value = obj.TYPE;
            propertyAddress1.value = obj.STREET_ADDRESS1;
            propertyAddress2.value = obj.STREET_ADDRESS2;
            propertyCity.value = obj.CITY;
            propertyState.value = obj.STATE;
            propertyCountry.value = obj.COUNTRY;
            propertyZip.value = obj.ZIP;
             propertyAvailable.value = obj.AVAILABLE;
            //propertyDate.value = obj.DATE;

            propertySqrFt.value = obj.SQUARE_FEET;
            propertyBed.value = obj.BED;
            propertyBath.value = obj.BATH;
            propertyParking.value = obj.PARKING;
            propertyPetYes.value = obj.PET_FRIENDLY;
            propertyElectricityYes.value = obj.ELECTRICITY;
            propertyWSTYes.value = obj.WATER_SEWAGE_TRASH;
            propertyMinLease.value = obj.LEASE_MIN;
            propertyMaxLease.value = obj.LEASE_MAX;
            propertyNote.value = obj.NOTE;

        }   
    }
    xhr.send('PROPERTY_KEY=' + propertyKey);
}


function getPropertiesAdmin()
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
               var property_key = property['KEY'];
               var property_name = property['NAME'];
               var property_address = property['STREET_ADDRESS1'];

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
               update_button.onclick = function(){document.location.href='UpdateRentalAdmin.php?ID=' +  property_key;}; 
               update_button.innerHTML = "Update";
               delete_button = document.createElement("button");
               delete_button.type = "button";
               delete_button.id="rentalPropertyUpdate";
               delete_button.onclick = function(){
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.open("GET", "../php/DeleteProperty.php?ID=" +  property_key, true);
                    xmlhttp.send();
                    location.reload();
                }; 
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

function getPropertiesUser()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {

        if (this.readyState == 4 && this.status == 200) 
        {
            var properties = JSON.parse(this.responseText);
            properties.forEach(createPropertyEntry);

            function createPropertyEntry(property, index)
            {
                //DEBUG since images don't work yet
                property.images = [];

                document.write('<table align="center" width="100%">');
                document.write('<col width="25%">');
                document.write('<col width="10%">');
                document.write('<col width="65%">');
                if(index > 0)
                {
                    document.write('<tr>');
                    document.write('<td colspan="3"><hr class="line" style="width: 100%"/></td>');
                    document.write('</tr>');
                }
                document.write('<tr>');
                document.write('<td>  <div id="myCarousel" data-ride="carousel"> <div class="carousel-inner">');
                for(var j =0; j < property.images.length; j++)
                {
                    if(j==0)
                        document.write('<div class="item active">');
                    else
                        document.write('<div class="item">');

                    document.write('<a href="'+ property.images[j]+'" target="_blank"><img src="' + houses[i].images[j] + '"></a>');
                    document.write('</div>');
                }
                document.write('</div>');
                document.write('</div>');
                document.write('</td>');
                document.write('<td></td>');
                document.write('<td valign="top"> <p class="title" style="font-size:30px;">' + property['NAME'] +  '</p>'
                    +'</br><label class="title" style="font-size:20px;">Type - ' + property['TYPE'] 
                    +'</br>Address - ' + property['STREET_ADDRESS1'] + ', '+ property['STREET_ADDRESS2'] + ', ' + property['CITY'] +', '+ property['STATE'] + ' - ' + property['ZIP']
                    +'</br>Price - $' + property['PRICE'] +  ' per Month</label>'
                    +'</br><button tag="more" type="button" id="'+ index +'" class="button" style="width: 80px;padding:2px;" onclick="displayPopup(this)">More</button>'
                    +'</td>');
                document.write('</tr>');
                document.write('</table>');
            };
        }
    }

    xmlhttp.open("GET", "../php/GetProperties.php", true);
    xmlhttp.send();
}

function loadContactInfo() 
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var obj = JSON.parse(this.responseText);
            document.getElementById("add").innerHTML = obj.ADDRESS;
            document.getElementById("contact").innerHTML = obj.CONTACT_NUMBER;
            document.getElementById("email").innerHTML = obj.EMAIL_ADDRESS;
            document.getElementById("facebook").href = obj.FACEBOOK;
        }
    };
    xmlhttp.open("GET", "../php/GetAboutUs.php", true);
    xmlhttp.send();
}