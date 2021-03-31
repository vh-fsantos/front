$(function() {
    console.log("ready!");
});

$(".faqDescription").hide();

var counter = 0;

$(".faqHeader").on('click', function() {
    counter++;
    const description = $(this).parent().find(".faqDescription");
    description.toggle();

    if (counter % 2 != 0) {
        $(this).find(".faqOpen").css({ transform: "rotate(180deg)" });
    } else {
        $(this).find(".faqOpen").css({ transform: "rotate(0deg)" });
    }
})