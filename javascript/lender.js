function getAllProperties()
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
               var property_name = property['NAME'].charAt(0).toUpperCase() + property['NAME'].substr(1).toLowerCase();
               var property_type = property['TYPE'];
               var property_address = property['STREET_ADDRESS1'];
               var property_address2 = property['STREET_ADDRESS2'];
               var city = property['CITY'];
               var state = property['STATE'];
               var country = property['COUNTRY'];
               var zip = property['ZIP'];

               var property_sqr_feet = property['PROPERTY_SQUARE_FEET'];
               var property_parking = property['PROPERTY_PARKING'];
               var property_bed = property['PROPERTY_BED'];
               var property_bath = property['PROPERTY_BATH'];


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

               title_p_tag = document.createElement("p");
               title_p_tag.class = "title";
               title_p_tag.style.padding = "0px 0px";
               title_p_tag.style.color = "#800000";
               title_p_tag.innerHTML = property_name + " - " +property_type;
               title_td_tag.appendChild(title_p_tag);

               address_p_tag = document.createElement("p");
               address_p_tag.class = "title";
               address_p_tag.style.padding = "0px 0px";
               address_p_tag.style.fontSize = "20px";
               address_p_tag.innerHTML = property_address + ", " + property_address2 + ", " + city + ", "+ state + "-" + zip + ", " + country; 
               title_td_tag.appendChild(address_p_tag);  

               tr_tag.appendChild(title_td_tag); 

               menu_td_tag = document.createElement("td");
               menu_td_tag.padding = "10px";
               menu_td_tag.align = "center";
               more_button = document.createElement("button");
               more_button.type = "button";
               more_button.id="rentalPropertyUpdate" 
               more_button.className = "button"
               more_button.style="width: 100px;margin-top: 0px;margin-right: 5px;";
               more_button.onclick = function(){
                    var property = document.getElementById("propertyPopup");
                    property.style.display = "block";

                    document.getElementById("propTitle").innerHTML =  property_name;
                    document.getElementById("sqft").innerHTML = "Total Area: " + property_sqr_feet + " Sq ft.";
                    document.getElementById("parking").innerHTML = "Parking: " + property_parking;
                    document.getElementById("bed").innerHTML = "Total Bed: " + property_bed;
                    document.getElementById("bath").innerHTML = "Total Bath: " + property_bath;

                    var span = document.getElementsByClassName("close")[0];

                    span.onclick = function() {
		                property.style.display = "none";
		            };

                    window.onclick = function(event) {
		                if (event.target == property) {
			                property.style.display = "none";
		                } 
		            };
               };
               more_button.innerHTML = "View";
               menu_td_tag.appendChild(more_button); 
               tr_tag.appendChild(menu_td_tag);

               document.getElementById("propertiesTable").appendChild(tr_tag);  
            }
        }
    };
    xmlhttp.open("GET", "../php/GetPropertiesForInvesters.php", true);
    xmlhttp.send();
}