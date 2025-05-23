const centers = [
    {
        name: "Отрадное",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Декабристов, д. 22А",
        metro: "Отрадное",
        metroColor: "gray",
        phone: "8 (499) 907-57-90",
        email: "srcotradnoe@social.mos.ru",
        director: "Ирина Павловна Гончарова"
    },
    {
        name: "Кризисный центр <br> помощи женщинам и детям",
        type: "КРИЗИСНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Дубки, д. 9А",
        metro: "Тимирязевская",
        metroColor: "gray",
        phone: "8 (499) 977-17-05",
        email: "kcpz@mos.ru",
        director: "Наталья Борисовна Завьялова"
    },
    {
        name: "Алтуфьево",
        type: "СОЦИАЛЬНО-РЕАБИЛИТАЦИОННЫЙ ЦЕНТР",
        special: false,
        address: "Алтуфьевское шоссе, д. 13, корп. 4, стр. 4",
        metro: "Владыкино",
        metroColor: "gray",
        phone: "8 (499) 903-82-47",
        email: "src-altufevo@mos.ru",
        director: "Марина Владимировна Опарина"
    },
    {
        name: "Возрождение",
        type: "СОЦИАЛЬНО-РЕАБИЛИТАЦИОННЫЙ ЦЕНТР",
        special: false,
        address: "Ул. Проходчиков, д.6",
        metro: "ВДНХ",
        metroColor: "orange",
        phone: "8 (495) 656-15-32",
        email: "src-vozrozhdeniye@mos.ru",
        director: "Боярских Артем Викторович"
    },
    {
        name: "Семья",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Новорогожская д.4 стр.1",
        metro: "ВДНХ",
        metroColor: "salad",
        phone: "8 (495) 671-12-61",
        email: "cpsid-family@social.mos.ru",
        director: "Татьяна Викторовна Троицкая"
    },
    {
        name: "Диалог",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "Дмитровское шоссе, д. 169В",
        metro: "Физтех",
        metroColor: "salad",
        phone: "8 (499) 975-71-46",
        email: "msc-dialog@mos.ru",
        director: "Юлия Валентиновна Гримальская"
    },
    {
        name: "Ориентир",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "Измайловский проезд, д.4А",
        metro: "Измайловская",
        metroColor: "blue",
        phone: "8 (495)-603-96-06",
        email: "msc-orientir@social.mos.ru",
        director: "Наталия Владимировна Рыбакова"
    },
    {
        name: "Притяжение",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "Шоссейная улица, д.39, корп.1",
        metro: "Печатники",
        metroColor: "salad",
        phone: "8 (495) 353-01-53",
        email: "msc-prityagenie@social.mos.ru",
        director: "Федотов Владислав Кириллович"
    },
    {
        name: "Планета Семьи",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "Борисовский проезд, д.15, корп.3",
        metro: "Борисово",
        metroColor: "salad",
        phone: "8 (495) 390-53-54",
        email: "planetas@social.mos.ru",
        director: "Евгения Владимировна Скуратова"
    },
    {
        name: "Согласие",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Василия Петушкова, д. 19, корп. 1",
        metro: "Сходненская",
        metroColor: "purple",
        phone: "8 (495) 948-50-10",
        email: "msc-soglasie@social.mos.ru",
        director: "Ветчинникова Ирина Ивановна"
    },
    {
        name: "Оберег",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Азовская, д. 33, корп. 3",
        metro: "Севастопольская",
        metroColor: "gray",
        phone: "8 (495) 310-34-00",
        email: "obereg@social.mos.ru",
        director: "Александр Иванович Яковлев"
    },
    {
        name: "Преображение",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Зеленоградская, д.35Б",
        metro: "Ховрино",
        metroColor: "green",
        phone: "8 (495) 707-70-17",
        email: "msc-preobragenie@social.mos.ru",
        director: "Пономарёва Ирина Николаевна"
    },
    {
        name: "Горизонт",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "ул. Зеленоградская, д.35Б",
        metro: "Выхино",
        metroColor: "purple",
        phone: "8 (495) 370-01-19",
        email: "msc-gorizont@social.mos.ru",
        director: "Маковеева Валентина Николаевна"
    },
    {
        name: "Зеленоград",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "Зеленоград, корпус 1426",
        metro: "Ховрино",
        metroColor: "green",
        phone: "8 (499) 717-04-95",
        email: "cpsid-zelenograd@social.mos.ru",
        director: "Емельянов Борис Борисович"
    },
    {
        name: "ТиНАО",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "г. Москва, г.о. Троицк, ул. Пушковых, д. 2А",
        metro: "Теплый стан",
        metroColor: "orange",
        phone: "8 (495) 788-05-80",
        email: "msc-tinao@social.mos.ru",
        director: "Сальников Илья Владимирович"
    },
    {
        name: "Молодая гвардия",
        type: "МОЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: false,
        address: "г. Москва, пос. Внуковское,<br> п. Детского дома «Молодая гвардия», двлд.1, стр.1",
        metro: "Пыхтино",
        metroColor: "yellow",
        phone: "8 (495) 788-05-80",
        email: "msc-tinao@social.mos.ru",
        director: "Сальников Илья Владимирович"
    },
    {
        name: "Роза ветров",
        type: "МОЙ ОСОБЫЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: true,
        address: "ул. Южнобутовская, д.19",
        metro: "Бульвар Адмирала Ушакова",
        metroColor: "light-purple",
        phone: "8 (499) 743-48-63",
        email: "cspr-rv@mos.ru",
        director: "Голованова Елена Николаевна"
    },
    {
        name: "Дом детей",
        type: "МОЙ ОСОБЫЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: true,
        address: "ул. Академика Павлова, д.15, стр. 1",
        metro: "Молодежная",
        metroColor: "blue",
        phone: "8 (499) 141-45-13",
        email: "dom-detey@social.mos.ru",
        director: "Цветкова Елена Евгеньевна"
    },
    {
        name: "Формула роста",
        type: "МОЙ ОСОБЫЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: true,
        address: "Талдомская ул., д. 4",
        metro: "Селигерская",
        metroColor: "salad",
        phone: "8 (499) 487-58-45",
        email: "formula-rosta@social.mos.ru",
        director: "Дорофеева Ирина Владимировна"
    },
    {
        name: "Семь-Я",
        type: "МОЙ ОСОБЫЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: true,
        address: "Борисовский проезд, д.3, корп.3",
        metro: "Домодедовская",
        metroColor: "green",
        phone: "8 (495) 394-93-11",
        email: "mosc-family@social.mos.ru.",
        director: "Каньшина Наталия Владимировна"
    },
    {
        name: "имени Г.И. Россолимо",
        type: "МОЙ ОСОБЫЙ СЕМЕЙНЫЙ ЦЕНТР",
        special: true,
        address: "1-й Красковский проезд, д.38 б",
        metro: "Лухмановская",
        metroColor: "pink",
        phone: "8 (499) 721-72-57",
        email: "mosc-rossolimo@social.mos.ru",
        director: "Елена Игоревна Возжаева"
    }
];

export default centers
