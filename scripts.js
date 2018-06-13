document.addEventListener("DOMContentLoaded", function () { /*dobrą praktyką jest czekanie aż załaduje się cały HTML i przeglądarka da znak, document własnie to robi żeby uruchomić te napisane tutaj funkcje */
    var button = document.querySelector(".header .header__button");
    /* zmienna o nazwie button. Szuka w całym dokumencie (stronie) lub np. tylko w body ale to trzeba napisać*/
    var menu = document.querySelector(".header .header__menu");
    if (button !== null && menu !== null) { /* jeśli przycisk i menu nie są nullem. Jeśli istnieje */
        /* w java script te zółte z kropką to są metody np: .addEventListener*/
        button.addEventListener("click", function (event) /* event - zmienna funkcji, można ją nazwać jak się chce*/ {
            event.preventDefault();
            /*zapobiega domyślnie przypisanej akcji do obiektu. Tu przycisk nie ma się zachowywać jak standardowy przycik*/
            menu.classList.toggle("active");
            /* classList - obiekt który ma wszystkie klasy tego elementu. Tu 2. Toggle - funkcja działa jak przełącznik. Dodaje klasę jeśli jej nie ma, a usunie jeśli jest */

        })
    }
});
