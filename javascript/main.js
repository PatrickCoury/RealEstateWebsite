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