$(document).foundation();
$("#mainboxes").find(".box").onhover(
    function () {
        $(this).css("background", "#008cba"),
            $(this).css("color", "#fff")
    },
    (function () {
        $(this).css("background", "#white"),
            $(this).css("color", "#black");
    }),
    $("#login-button").on('click', function () {
        $("#login-box").toggle();
    })
