$(function() {
    $(".faqHeader").on("click", function() {
        const description = $(this).parent().find(".faqDescription");
        if (description.is(":visible")) {
            $(this).find(".faqOpen").css({ transform: "rotate(0deg)" });
        } else {
            $(this).find(".faqOpen").css({ transform: "rotate(180deg)" });
        }
        description.slideToggle();
    });
});