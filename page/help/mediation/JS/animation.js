function pageonload(callback) {
    // Флаг для отслеживания первой загрузки
    let isFirstLoad = true;

    // Основная функция инициализации
    function init() {
        if (typeof callback === 'function') {
            callback();
        }
    }

    // Обычная загрузка страницы
    document.addEventListener('DOMContentLoaded', init);

    // Обработка случая, когда страница загружается из кэша (включая history.back())
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || !isFirstLoad) {
            // Сначала убиваем все текущие анимации GSAP
            gsap.killTweensOf();
            // Затем переинициализируем
            init();
        }
        isFirstLoad = false;
    });

    // Дополнительно обрабатываем popstate (навигация вперед/назад)
    window.addEventListener('popstate', function() {
        gsap.killTweensOf();
        init();
    });
}

// Пример использования:
pageonload(function() {
    let tl = gsap.timeline();

    tl.from('.cell_1, .cell_2, .cell_3, .cell_4, .cell_5, .cell_6, .cell_7, .cell_8, .cell_9, .cell_10, .cell_11, .cell_12, .cell_13, .cell_14,' +
        ' .cell_15, .cell_16, .cell_17, .cell_18, .cell_19, .cell_20, .cell_21, .cell_22, .cell_23, .cell_24, .cell_25, .cell_26,  .button-back', {
        opacity:0,
        duration:0.15,
        y:50,
        stagger:0.2
    })

});
