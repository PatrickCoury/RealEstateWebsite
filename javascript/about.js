function getAbout()
{
    var request = new XMLHttpRequest();
    request.open('GET', 'GetAboutUs.php', true);
    request.onload = function()
    {
        var data = JSON.parse(this.response);
        var description = data.About_us[0].DESCRIPTION;
        var address = data.About_us[0].ADDRESS;
        var contactNum = data.About_us[0].CONTACT_NUMBER;
        var faxNum = data.About_us[0].FAX_NUMBER;
        var email = data.About_us[0].EMAIL_ADDRESS;
        var facbook = data.About_us[0].FACEBOOK;
    }
    request.send();
}

function populatePage(des, add, con, fax, ema, fac)
{
    var abt = document.getElementById('aboutDATA');
    abt.createTextNode(des);
}
