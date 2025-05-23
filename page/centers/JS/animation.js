document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        markers: false, // Включить для отладки (показывает линии триггеров)
        once: false      // Анимация сработает только один раз
    });

    // Анимация для центров
    gsap.utils.toArray('.center').forEach((center) => {
        gsap.from(center, {
            opacity: 0,
            x: -50,
            duration: 0.6,
            delay: 0.5,
            scrollTrigger: {
                trigger: center,
                start: "top 90%",
                end: "bottom 60%"
            },
            stagger: true
        });
    });

    // Анимация для back-mini элементов
    gsap.from('.button-back', {
        opacity: 0,
        x: 50,
        duration: 0.6,
        delay: 0.5,
        stagger: true
    })
});
