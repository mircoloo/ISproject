





//====================JQUERY===================
$(document).ready(function () {

    const prevcolor = $("#accedi-submit").css("background-color")

    $("#accedi-submit").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", prevcolor)
    });

})