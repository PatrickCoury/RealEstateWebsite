<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.12/angular-material.min.css">
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
    <script type="text/javascript" src="../javascript/rental.js" charset="utf-8"></script>
</head>

<body class="body">

<header>
	<div class="header">
		<a class="active" href="HomeAdmin.html"><img src="../logo.png" class="logo"></a>
		<h1 class="headerText">Andrew's Dream LLC.</h1>
	</div>
</header>

	<div id="navbar" class="sticky">
	    <a href="HomeAdmin.html"> HOME</a>
        <a class="active" href="RentalAdmin.html">TURNKEY RENTAL</a>
        <a href="AddRentalAdmin.html">ADD NEW PROPERTY</a>
	</div>

<div>
    <h3 style="text-align:center;font-size:40px;" class="text">Update Rental Property</h3>
    <table align="center" width="97%" >
      <col width="15%">
      <col width="30%">
      <col width="2%">
      <col width="15%">
      <col width="30%">
      <tr>
        <th colspan="3" style="padding-bottom: 10px;">General Information</th>
        <th colspan="2" style="padding-bottom: 10px;">Property Amenities</th>
      </tr>
      <tr>
        <td colspan="5"><hr class="line" style="width: 97%"/></td>
       </tr>
      <tr>
        <td style="padding-top: 20px;">
            <p class="title" id="propertyTitle" style="padding-left: 15px;"></p>
        </td style="padding-top: 20px;">
        <td>
            <div class="checkbox">
                <input id="propertyAvailable" type="checkbox" value="1" checked="true"/>
                <label for="propertyAvailable"></label>
            </div>
        </td>
        <td style="padding-top: 20px;"></td>
        <td class="text" style="padding-top: 20px;">
            Total Square Feet
        </td>
        <td style="padding-top: 20px;"><input type="text" id="propertySqrFt" class="input" tabindex="10" required="required">
        </td>
      </tr>
      <tr>
        <td class="text">
            Property Type
        </td>
        <td><input type="text" list="type" name="type" id="propertyType" class="input" tabindex="2" required="required"> 
                <datalist id="type">
                    <option value="Apartment">
                    <option value="Condo">
                    <option value="House">
                    <option value="Ranch">
                </datalist> 
        </td>
        <td></td>
        <td class="text">
            Total Bed
        </td>
        <td><input type="text" list="bed" id="propertyBed" class="input" tabindex="11" required="required"  onkeypress="return isNumberKey(event)">
                <datalist id="bed">
                    <option value="1">
                    <option value="2">
                    <option value="3">
                    <option value="4">
                    <option value="5">
                </datalist>
        </td>
       </tr>
       <tr>
        <td class="text">
            Street Address 1
        </td>
        <td><input type="text" id="propertyAddress1" class="input" tabindex="3" required="required">
        </td> 
        <td></td>
        <td class="text">
            Total Bath
        </td>
        <td>
            <input type="text" list="bath" id="propertyBath" class="input" tabindex="12" required="required" onkeypress="return isNumberWithDecimal(event)">
                <datalist id="bath">
                    <option value="1">
                    <option value="1.5">
                    <option value="2">
                    <option value="2.5">
                    <option value="3">
                </datalist>
        </td>
       </tr>
       <tr>
        <td class="text">
            Street Address 2
        </td>
        <td><input type="text" id="propertyAddress2" class="input" tabindex="4">
        </td>  
        <td></td>
        <td class="text">
            Parking
        </td>
        <td><input type="text" list="parking" id="propertyParking" class="input" tabindex="13" required="required">
                <datalist id="parking">
                    <option value="Open">
                    <option value="Street">
                    <option value="Garage">
                    <option value="Carport">
                </datalist>
        </td>
       </tr>
       <tr>
        <td class="text">
            City
        </td>
        <td><input type="text" id="propertyCity" class="input" tabindex="5" required="required">
        </td>
        <td></td>
        <td class="text">
            Pet Friendly?
        </td>
        <td>
            <label class="text" style="padding:0px;"><input type="radio" id = "petYes" name="propertyPet" value="yes" tabindex="16">
            YES</label>
            <label class="text"><input type="radio" id = "petNo" name="propertyPet" value="no" tabindex="17">
            No</label>
        </td>
       </tr>
       <tr>
        <td class="text">
            State
        </td>
        <td><input type="text" id="propertyState" class="input" tabindex="6" required="required">
        </td> 
        <td></td>
        <td class="text">
            Electricity
        </td>
        <td>
            <label class="text" style="padding:0px;"><input type="radio" id = "electricityYes" name="propertyElectricity" value="yes" tabindex="16">
            YES</label>
            <label class="text"><input type="radio" id = "electricityNo" name="propertyElectricity" value="no" tabindex="17">
            No</label>
        </td>
       </tr>
       <tr>
        <td class="text">
            Country
        </td>
        <td><input type="text" id="propertyCountry" class="input" value="USA" tabindex="7" required="required">
        </td> 
        <td></td>
        <td class="text">
            Water, Sewage, Trash
        </td>
        <td>
            <label class="text" style="padding:0px;"><input type="radio" id = "WSTYes" name="propertyWST" value="yes" tabindex="16">
            YES</label>
            <label class="text"><input type="radio" id = "WSTNo" name="propertyWST" value="no" tabindex="17">
            No</label>
        </td>
       </tr>
       <tr>
        <td class="text">
            Zip
        </td>
        <td><input type="text" id="propertyZip" class="input" tabindex="8" required="required"  onkeypress="return isNumberKey(event)">
        </td>  
        <td></td>
        <td class="text">
            Lease Period
        </td>
        <td><input type="text" id="propertyMinLease" class="input" style="width:44%;" tabindex="20" placeholder="Min"/> 
        <input type="text" id="propertyMaxLease" class="input" style="width:44%;" tabindex="21" placeholder="Max"/>
        </td>
       </tr>
       <tr>
        <td class="text" valign="top">
            Price (/Month) $
        </td>
        <td valign="top"><input type="text" id="propertyPrice" class="input" tabindex="9" onkeypress="return isNumberWithDecimal(event)">
        </td>
        <td></td>
        <td class="text" valign="top">
            Extra Note
        </td>
        <td><textarea rows="5"  id="propertyNote" class="input" style="resize: none;overflow-y: auto;" tabindex="22"></textarea>
        </td>
       </tr>
       <tr>
        <td colspan="5" align="center">
            <button type="button" id="cancel" class="button" style="width: 120px;" tabindex="24" onClick="location.href='RentalAdmin.html'">Cancel</button>
            <button type="button" id="update" class="button" style="width: 120px;" tabindex="23" onClick="setProperty(<?php echo $_GET['ID']; ?>)">Update</button>
        </td>
       </tr>
     </table>
    <br/>
</div>
<script> 
        

        getProperty(<?php echo $_GET['ID']; ?>); 
</script>
</body>
</html>
