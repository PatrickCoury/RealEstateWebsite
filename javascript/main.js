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

}