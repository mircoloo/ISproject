
//search params of the query
const queryParams = new URL(document.URL).searchParams

//====================JQUERY===================
$(document).ready(function () {

    const prevcolor = $("#accedi-submit").css("background-color")

    $("#accedi-submit").hover(function () {
        $(this).css("background-color", "red")
    }, function () {
        $(this).css("background-color", prevcolor)
    }); 



    $("#info-modify-btn").click( () => {
        $(".grp").css({"color": "blue"})
    });


})


//==========ALERT ON WRONG PASSWORD ===============

