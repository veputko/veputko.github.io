$(document).ready(function () {
    $('[aria-labelledby^="dropdownMenuLink"] a').on("click", function () {
        const e = $(this);
        const id = e.parent().attr("aria-labelledby");
        if (id === "dropdownMenuLink1") {
            if (e.attr("id") === "vegetable") {
                $("#dropdownMenuLink2").removeAttr("disabled");
                $("#searchveg").removeClass("disabled");
            } else {
                $("#dropdownMenuLink2").attr("disabled", "disabled").text("Культура");
                $("#searchveg").addClass("disabled");

            }
        }
        $("#" + id).text(e.text());
    });

});