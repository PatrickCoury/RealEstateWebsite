# Andrew's Dream LLC Website Test Plan

Author: Tim Burtell
Date: April 26 2020

## Test plan

### Home Page

    1. Open HomeAdmin.html
    2. Verify that each text box contains information loaded from the database.
    3. Take note of each entry
    4. Go to Home.html
    5. Verify that the corresponding data fields which HomeAdmin.html shows matches that of Home.html  
        1. The description matches
        2. The Address of the company matches under Contact Us
        3. The Email of the company matches under Contact Us 
        4. The Facebook URL matches 
    6. In HomeAdmin.html, change a data element, then hit the 'Update' button
    7. Verify that a success alert appears upon hitting the 'Update' button
    8. Go to Home.html 
    9. Verify that the data element that you changed is reflected in Home.html
    10. Verify that the data element that you changed is reflected in Rental.html
    11. Repeat steps 5-8 for each data element in HomeAdmin.html

### Add and Delete properties

    11. From HomeAdmin.html, click 'TURNKEY RENTAL' in the navigation pane
    12. Verify the page RentalAdmin.html is loaded
    13. From RentalAdmin.html click 'ADD NEW PROPERTY'
    14. Verify the page AddRentalAdmin.html is loaded
    15. Click the 'Add' button before filling any property fields 
    16. Verify an error message is produced notifying the user of required fields
    17. Click the 'Add More' button before filling any property fields
    18. Verify an error message is produced notifying the user of required fields
    19. Fill each property data field 
    20. Click the 'Clear' button
    21. Verify that each form field is cleared.
    22. Click the 'Add More' button
        1.  The new property should now be added and the page should reload on AddRentalAdmin.html
    23. Fill each property data field with realistic test data, with a unique name for this new property
    24. Click the 'Add' button
    25. The new property should now be added and RentalAdmin.html should be loaded 
    26. Verify that all previous properties and the two new properties have been added.
    27. Click the 'Delete' button on the first property created during the test plan.

### Update properties

    28. Verify that the property was removed from the list and the page was reloaded.
    29. Click the update button on the property created from this test plan. 
    30. Verify that UpdateRentalAdmin.php is loaded 
    31. Verify that the data input from Step 23 is loaded in each field in UpdateRentalAdmin.php
    32. Switch the Availability toggle button to 'Available' and click the Update button

### Properties Rental Display

    33. Open a new web browser tab to Rental.html
    34. Verify that all the property created by the test plan is visible 
    35. Click the 'More' button 
    36. Verify that property amenity information is shown
    37. Switch back to the web browser tab for UpdateRentalAdmin.php
    38. For each field in UpdateRentalAdmin.php, update the element and verify that the change is reflected in Rental.html

### Lenders page

    39. Verify that properties are listed in the Lenders page.
    40. Click the 'View' button to view the Lender property.
    41. Verify that property amenities show up after clicking the 'View' button 
