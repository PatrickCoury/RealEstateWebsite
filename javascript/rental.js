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

var allFilled;
function required(){
    allFilled = 1;
    if(document.getElementById('propertyTitle').value == ''){
        document.getElementById('propertyTitle').style.borderWidth = "2px";
        document.getElementById('propertyTitle').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyTitle').style.borderWidth = "1px";
        document.getElementById('propertyTitle').style.borderColor = "#800000";
    }

    if(document.getElementById('propertySqrFt').value == ''){
        document.getElementById('propertySqrFt').style.borderWidth = "2px";
        document.getElementById('propertySqrFt').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertySqrFt').style.borderWidth = "1px";
        document.getElementById('propertySqrFt').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyType').value == ''){
        document.getElementById('propertyType').style.borderWidth = "2px";
        document.getElementById('propertyType').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyType').style.borderWidth = "1px";
        document.getElementById('propertyType').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyBed').value == ''){
        document.getElementById('propertyBed').style.borderWidth = "2px";
        document.getElementById('propertyBed').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyBed').style.borderWidth = "1px";
        document.getElementById('propertyBed').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyAddress1').value == ''){
        document.getElementById('propertyAddress1').style.borderWidth = "2px";
        document.getElementById('propertyAddress1').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyAddress1').style.borderWidth = "1px";
        document.getElementById('propertyAddress1').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyBath').value == ''){
        document.getElementById('propertyBath').style.borderWidth = "2px";
        document.getElementById('propertyBath').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyBath').style.borderWidth = "1px";
        document.getElementById('propertyBath').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyParking').value == ''){
        document.getElementById('propertyParking').style.borderWidth = "2px";
        document.getElementById('propertyParking').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyParking').style.borderWidth = "1px";
        document.getElementById('propertyParking').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyCity').value == ''){
        document.getElementById('propertyCity').style.borderWidth = "2px";
        document.getElementById('propertyCity').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyCity').style.borderWidth = "1px";
        document.getElementById('propertyCity').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyState').value == ''){
        document.getElementById('propertyState').style.borderWidth = "2px";
        document.getElementById('propertyState').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyState').style.borderWidth = "1px";
        document.getElementById('propertyState').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyCountry').value == ''){
        document.getElementById('propertyCountry').style.borderWidth = "2px";
        document.getElementById('propertyCountry').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyCountry').style.borderWidth = "1px";
        document.getElementById('propertyCountry').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyZip').value == ''){
        document.getElementById('propertyZip').style.borderWidth = "2px";
        document.getElementById('propertyZip').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyZip').style.borderWidth = "1px";
        document.getElementById('propertyZip').style.borderColor = "#800000";
    }

    if(document.getElementById('propertyPrice').value == ''){
        document.getElementById('propertyPrice').style.borderWidth = "2px";
        document.getElementById('propertyPrice').style.borderColor = "red";
        allFilled = 0;
    }else{
        document.getElementById('propertyPrice').style.borderWidth = "1px";
        document.getElementById('propertyPrice').style.borderColor = "#800000";
    }
}

function oneMore(){
    required();
    if (allFilled == 0){
        alert("Please Fill Required Inputs.");
	}else{
        newProperty();
        window.location.replace("../html/AddRentalAdmin.html");
    }
}

function addProperty(){
    required();
    if (allFilled == 0){
        alert("Please Fill Required Inputs.");
	}else{
        newProperty();
        window.location.replace("../html/RentalAdmin.html");
    }
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

    payload.PROPERTY_SQUARE_FEET = propertySqrFt.value;
    payload.PROPERTY_BED = propertyBed.value;
    payload.PROPERTY_BATH = propertyBath.value;
    payload.PROPERTY_PARKING = propertyParking.value;
    payload.PROPERTY_LEASE_MIN = propertyMinLease.value;
    payload.PROPERTY_LEASE_MAX = propertyMaxLease.value;
    payload.PROPERTY_NOTE = propertyNote.value;

    //Radio Values
    var ele = document.getElementsByTagName('input');
    var pet, electricity, WST;
    var flag = 1;
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].type="radio") { 
            if(ele[i].checked){
                if(flag == 1){
                    pet = ele[i].value;
                    flag ++;
                } else if(flag == 2){
                    electricity = ele[i].value;
                    flag ++;
                } else if(flag == 3){
                    WST = ele[i].value;
                    flag ++;
                }                    
            }
        } 
    }

    if(pet == "yes")
        payload.PROPERTY_PET_FRIENDLY = 1;   
    else
        payload.PROPERTY_PET_FRIENDLY = 0;

    if(electricity == "yes")
        payload.PROPERTY_ELECTRICITY = 1;   
    else
        payload.PROPERTY_ELECTRICITY = 0;

    if(WST == "yes")
        payload.PROPERTY_WATER_SEWAGE_TRASH = 1;   
    else
        payload.PROPERTY_WATER_SEWAGE_TRASH = 0;

    // Populates the AddRentalAdmin page with a new property which has a unique ID 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/InsertProperty.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            alert("New Preprty Added");
        }
    };
    xhr.send('PAYLOAD=' + JSON.stringify(payload));
}

var propertyID;
function getRentalUpdatePage(){
    var url = window.location.search;
    var urlParams = new URLSearchParams(url);
    propertyID = urlParams.get('ID');
    getProperty(propertyID)
}

//getProperty to Update
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
            propertyTitle.innerHTML = obj.NAME;
            propertyPrice.value = obj.PRICE;
            propertyType.value = obj.TYPE;
            propertyAddress1.value = obj.STREET_ADDRESS1;
            propertyAddress2.value = obj.STREET_ADDRESS2;
            propertyCity.value = obj.CITY;
            propertyState.value = obj.STATE;
            propertyCountry.value = obj.COUNTRY;
            propertyZip.value = obj.ZIP;

            if(obj.AVAILABLE == 1)
                propertyAvailable.checked=true;
            else
                propertyAvailable.checked=false;

            propertySqrFt.value = obj.SQUARE_FEET;
            propertyBed.value = obj.BED;
            propertyBath.value = obj.BATH;
            propertyParking.value = obj.PARKING;
            propertyMinLease.value = obj.LEASE_MIN;
            propertyMaxLease.value = obj.LEASE_MAX;
            propertyNote.value = obj.NOTE;

            //Set Radio Buttons 
            if(obj.PET_FRIENDLY == 1)
                petYes.checked=true;
            else
                petNo.checked=true;

            if(obj.ELECTRICITY == 1)
                electricityYes.checked=true;
            else
                electricityNo.checked=true;
            
            if(obj.WATER_SEWAGE_TRASH == 1)
                WSTYes.checked=true;
            else
                WSTNo.checked=true;

        }   
    }
    xhr.send('PROPERTY_KEY=' + propertyKey);
}

function propertyUpdate(){
    required();
    if (allFilled == 0){
        alert("Please Fill Required Inputs.");
	}else{
        setProperty(propertyID)
        window.location.replace("../html/RentalAdmin.html");
    }
}

function setProperty(propertyKey)
{    
    var payload = {};
    payload.PROPERTY_KEY = propertyKey;
    
    payload.PROPERTY_PRICE = propertyPrice.value;
    payload.PROPERTY_TYPE = propertyType.value;
    payload.PROPERTY_STREET_ADDRESS1 = propertyAddress1.value;
    payload.PROPERTY_STREET_ADDRESS2 = propertyAddress2.value;
    payload.PROPERTY_CITY = propertyCity.value;
    payload.PROPERTY_STATE = propertyState.value;
    payload.PROPERTY_COUNTRY = propertyCountry.value;
    payload.PROPERTY_ZIP = propertyZip.value;

    if(propertyAvailable.checked)
        payload.PROPERTY_AVAILABLE = 1;
    else
        payload.PROPERTY_AVAILABLE = 0;

    payload.PROPERTY_SQUARE_FEET = propertySqrFt.value;
    payload.PROPERTY_BED = propertyBed.value;
    payload.PROPERTY_BATH = propertyBath.value;
    payload.PROPERTY_PARKING = propertyParking.value;
    payload.PROPERTY_LEASE_MIN = propertyMinLease.value;
    payload.PROPERTY_LEASE_MAX = propertyMaxLease.value;
    payload.PROPERTY_NOTE = propertyNote.value;

    //Radio Values
    if(petYes.checked)
        payload.PROPERTY_PET_FRIENDLY = 1;   
    else
        payload.PROPERTY_PET_FRIENDLY = 0;

    if(electricityYes.checked)
        payload.PROPERTY_ELECTRICITY = 1;   
    else
        payload.PROPERTY_ELECTRICITY = 0;

    if(WSTYes.checked)
        payload.PROPERTY_WATER_SEWAGE_TRASH = 1;   
    else
        payload.PROPERTY_WATER_SEWAGE_TRASH = 0;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '../php/UpdateProperty.php', true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) 
        {
            alert("Successfully Updated");
        }   
    }    
    xhr.send('PAYLOAD=' + JSON.stringify(payload));
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
               address_p_tag.fontSize = "20px";
               address_p_tag.innerHTML = property_address;
               title_td_tag.appendChild(title_p_tag); 
               title_td_tag.appendChild(address_p_tag); 
               tr_tag.appendChild(title_td_tag); 

               menu_td_tag = document.createElement("td");
               menu_td_tag.padding = "10px";
               menu_td_tag.align = "center";
               update_button = document.createElement("button");
               update_button.type = "button";
               update_button.id="rentalPropertyUpdate" 
               update_button.className = "button"
               update_button.style="width: 100px;margin-top: 0px;margin-right: 5px;";
               update_button.onclick = function(){document.location.href='UpdateRentalAdmin.php?ID=' +  property_key;}; // UpdateRentalAdmin.html should be a php page or have inline php to facilitate providing property_key to the page
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
    xmlhttp.open("GET", "../php/GetAllProperties.php", true);
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

    xmlhttp.open("GET", "../php/GetPropertiesUserRentals.php", true);
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

function addImagesClicked()
{
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

var files;
function imageSelection(evt){
    files = Array.from(event.target.files);
    console.log("Original");
    console.log(files);
    imageList(files);
}

function onDelete(j){
    var node1 = document.getElementById('list');
    node1.innerHTML = "";
    var node2 = document.getElementById('deletelist');
    node2.innerHTML = "";

    files.splice(j,1);
    console.log("Removed");
    console.log(files);
    imageList(files);
}

function imageList(files){
    var count = 0;
    for (var i = 0, f; f = files[i]; i++) {

        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        reader.onload = (function(theFile) {
            return function(e) {
            var span1 = document.createElement('span');
            span1.id = 'span1';
            span1.innerHTML = ['<img id="',count,'" class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
            
            var span2 = document.createElement('span');
            span2.id = 'span2';
            span2.innerHTML = ['<button type="button" id="',count,'" class="button" style="width: 70px;margin:5px;padding:0px;" onclick="onDelete(',count,')">X</button>'].join('');
            
            document.getElementById('list').insertBefore(span1, null);
            document.getElementById('deletelist').insertBefore(span2, null);
            
            count = count+1;
            };
        })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
}