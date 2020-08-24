// Check Off Specific To-Dos By Clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});

// Click on X to delete To-Do
$("span").click(function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});