$(function () {
    setTimeout(loadCamelontaLogo, 300);
});


var camelontaLogoLoaded = false;

function loadCamelontaLogo() {

    if ($("#applications .sections").length) {

        $("#applications .sections").prepend("<li class='camelonta-logo'><a href='/umbraco'><img src='../App_Plugins/Camelonta.UI/camelontacms.png'/></a></li>");

        $("li.avatar").detach().insertBefore('li.help');

        camelontaLogoLoaded = true;
    }

    if (!camelontaLogoLoaded)
        setTimeout(loadCamelontaLogo, 300);
}