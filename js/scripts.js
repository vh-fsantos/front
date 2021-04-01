$(function() {
    $.getJSON('duvidas.json', function(data) {

        data.lista_tarefas.map(faq => {
            $('.faqWrapper').append(`<div class="faqItem" id="${faq.id}">
                           <div class="faqHeader">
                               <h2 class="faqTitle">${faq.titulo}</h2>
                               <div class="faqLine"></div>
                               <img src="img/seta.png" alt="" class="faqOpen">
                           </div>
                           <p class="faqDescription">${faq.descricao}</p>
                       </div>`)
        })

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
});