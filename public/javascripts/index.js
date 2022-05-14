
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



    $("#info-modify-btn").click(() => {
        $(".grp").css({ "color": "blue" })
        let email = $("#email-span").text()
        $.ajax({
            url: "/users/" + email,
            type: "PATCH",
            data: {
                nome: 'Emanuele',
                telefono: "3453823432",
            },
            dataType: 'json',
            success: () => {
                
            }
    
        })
      
    })
    
}); 
//========== AJAX MODIFY REQUEST ===============



//==========ALERT ON WRONG PASSWORD ===============
