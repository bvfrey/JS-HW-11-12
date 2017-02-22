$(function(){

    var html = $('#test').html();
    var questionaryTitle = "Тест по программированию";
    var questionary = [
        {
            question: "Quod licet Jovi, non licet bovi",
            answers: [
                "Ювеналий мне друг, но истина дороже",
                "Что позволено Юпитеру, не позволено быку",
                "Слышал голос Иова, да не знал откуда",
            ],
            correct_answer: "1"
        },
        {
            question: "Conditio sine qua non",
            answers: [
                "Сохранился до сих пор",
                "Кондитер от Бога (досл. которого не было (ранее))",
                "Непременное условие",
            ],
            correct_answer: "2"
        },
        {
            question: "Satur venter non studet libenter",
            answers: [
                "Сытое брюхо к ученью глухо",
                "Для изобретений недостаточно только свободы обучения",
                "Сатурн не открывает своих тайн неучам",
            ],
            correct_answer: "0"
        },
        {
            question: "Amicus Plato, sed magis amica est veritas!",
            answers: [
                "Высоко плато Амикус, но вершина истины — выше!",
                "Приятно ходить по равнине, но горы истины зовут!",
                "Платон мне друг, но истина дороже",
            ],
            correct_answer: "2"
        },
        {
            question: "DIXI",
            answers: [
                "C Богом!",
                "Я все сказал (добавить нечего).",
                "611",
            ],
            correct_answer: "1"
        },
        {
            question: "Festina lente!",
            answers: [
                "Спеши медленно!",
                "Не ленись!",
                "Фестиваль лент!",
            ],
            correct_answer: "0"
        },
        {
            question: "Vale!",
            answers: [
                "Валентине!",
                "Будь здоров!",
                "Значительно!",
            ],
            correct_answer: "1"
        },
        {
            question: "Veni, Vidi, Vici",
            answers: [
                "Быстрее, выше, сильнее",
                "Первый, второй, третий",
                "Пришёл, увидел, победил",
            ],
            correct_answer: "2"
        },
        {
            question: "Dura lex, sed lex",
            answers: [
                "Глупое слово выдаёт неуча",
                "Закон суров, но это закон",
                "Длинный язык — язык мертвеца",
            ],
            correct_answer: "1"
        },
        {
            question: "Per aspera ad astra",
            answers: [
                "Правдами и неправдами",
                "Через тернии к звездам",
                "Астры для аспирантки",
            ],
            correct_answer: "1"
        },
        {
            question: "Dum spiro, spero",
            answers: [
                "Дом духа, храм",
                "Слышишь глас, внимай",
                "Пока дышу, надеюсь",
            ],
            correct_answer: "2"
        },
        {
            question: "Si vis pacem, para bellum",
            answers: [
                "Пусть победит сильнейший",
                "Хочешь мира, готовься к войне",
                "Дорогу осилит идущий",
            ],
            correct_answer: "1"
        },
        {
            question: "Feci, quod potui, faciant meliora potentes",
            answers: [
                "Охота пуще неволи",
                "Не будешь заботиться о будущем — оросишь землю слезами",
                "Я сделал всё что мог. Пусть, кто может, сделает лучше",
            ],
            correct_answer: "2"
        },
    ];

    var content = tmpl(html, {
        data: questionary
    });

    $('.test-plaseholder').append(content);
});

$(function(){
    $('.easy_slides').easy_slides();
});
