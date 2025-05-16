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
    let tl2 = gsap.timeline();

    tl.from('#menu1, #menu3, #menu5, #menu7, #menu9', {
        opacity:0,
        duration:0.5,
        x:-100,
        stagger:0.2
    })

    tl2.from('#menu2, #menu4, #menu6, #menu8, #menu10', {
        opacity:0,
        duration:0.5,
        x:100,
        stagger:0.2
    })
});
