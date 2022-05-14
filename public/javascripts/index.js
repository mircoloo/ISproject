//search params of the query
const queryParams = new URL(document.URL).searchParams;

//====================JQUERY===================
$(document).ready(function () {
  $("#info-modify-btn").click(() => {
    $(".update-info").css({ visibility: "visible" });
    $("#info-confirm-btn").css({ visibility: "visible" });
  });

  $("#info-confirm-btn").click(() => {
    let indirizzo_upd = $("#update-indirizzo-input").val();
    let email_upd = $("#update-email-input").val();
    let telefono_upd = $("#update-telefono-input").val();


    var data = {};

    if(indirizzo_upd != '') data['indirizzo'] = indirizzo_upd;

    if(email_upd != '') data['email'] = email_upd;

    if(telefono_upd != '') data['telefono'] = telefono_upd;
    let email = $("#email-span").text();
    $.ajax({
      url: "/users/" + email,
      type: "PATCH",
      data: data,
      dataType: "json",
      success: () => {},
    });
    $(".update-info").css({ visibility: "hidden" });
    $("#info-confirm-btn").css({ visibility: "hidden" });
    
  });
});

