
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

})

$(".card").css({"background-color": "red"})
//==========ALERT ON WRONG PASSWORD ===============

var valid = queryParams.get("valid")
if(valid == 'false'){
    $(".login-form").css({"animation": "shake .3s","border": "1px","border-color": "red"})
    

}