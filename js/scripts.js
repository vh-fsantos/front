$(function() {
    console.log("ready!");
});

$(".faqDescription").hide();

$(".faqHeader").on('click', function() {
    const description = $(this).parent().find(".faqDescription");
    description.toggle();

})