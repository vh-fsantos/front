$(function() {
    $("body").on("click", ".faqHeader", function() {
        const description = $(this).parent().find(".faqDescription");
        if (description.is(":visible")) {
            $(this).find(".faqOpen").css({ transform: "rotate(0deg)" });
        } else {
            $(this).find(".faqOpen").css({ transform: "rotate(180deg)" });
        }
        description.slideToggle();
    });
    const workAround = [{
            id: 1,
            titulo: "O catálogo é grátis?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 2,
            titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 3,
            titulo: "Como funciona o pagamento dos produtos?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 4,
            titulo: "O PagOk é seguro?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 5,
            titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 6,
            titulo: "Como funciona o pagamento dos produtos?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 7,
            titulo: "O PagOk é seguro?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 8,
            titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 9,
            titulo: "Como funciona o pagamento dos produtos?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
        {
            id: 10,
            titulo: "O PagOk é seguro?",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
        },
    ];
    $.getJSON("duvidas.json", function(data) {
        data.lista_tarefas.map((faq) => {
            $(".faqWrapper").append(`<div class="faqItem" id="${faq.id}">
            <div class="faqHeader">
                <h2 class="faqTitle">${faq.titulo}</h2>
                <div class="faqLine"></div>
                <img src="img/seta.png" alt="" class="faqOpen">
            </div>
            <p class="faqDescription">${faq.descricao}</p>
        </div>`);
        });
    }).fail(function() {
        console.log(
            "GET do JSON falhou por causa do cors, atualmente trazendo os dados de uma constante."
        );
        workAround.map((faq) => {
            $(".faqWrapper").append(`<div class="faqItem" id="${faq.id}">
            <div class="faqHeader">
                <h2 class="faqTitle">${faq.titulo}</h2>
                <div class="faqLine"></div>
                <img src="img/seta.png" alt="" class="faqOpen">
            </div>
            <p class="faqDescription">${faq.descricao}</p>
        </div>`);
        });
    });
});