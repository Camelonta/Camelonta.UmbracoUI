$(function () {
    setTimeout(loadCamelontaLogo, 300);
    setTimeout(loadHelpLink, 400);
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


var helpLinkLoaded = false;

function loadHelpLink() {

    if ($("a.help").length) {


        $("a.help").click(function () {
            setTimeout(loadHelpSection, 300);
        });

        helpLinkLoaded = true;
    }

    if (!helpLinkLoaded)
        setTimeout(loadHelpLink, 300);
}

var helpSectionLoaded = false;

function loadHelpSection() {

    if ($("div[ng-controller='Umbraco.Dialogs.HelpController']").length) {

        $("div[ng-controller='Umbraco.Dialogs.HelpController'] .tab-content > .umb-pane:first-child").prepend("<iframe height='240' src='../App_Plugins/Camelonta.UI/help.html'/>");

        helpSectionLoaded = true;
    }

    if (!helpSectionLoaded)
        setTimeout(loadHelpSection, 300);
}