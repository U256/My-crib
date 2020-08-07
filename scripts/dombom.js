//Фазы события: События погружаются до нужного элемента, а потом возвращаются до браузера

let elemToChange = document.getElementById("currentElem");
console.log(elemToChange)
elemToChange.classList.add('hero__form'); //add, remove and toggle (switcher)
//toggle returns true if class was added and false if removed
elemToChange.classList.remove('hero__form');

elemToChange.getAttribute('src'); //значение
elemToChange.getAttribute('src', 'images/another-pic.jpg');

//EVENTS:

elemToChange.addEventListener("click", function (e) {
    elemToChange.classList.toggle('newClass');
});
//e - событие. У него куча полей и функицй ДОПОЛНИТЬ
// this - конкретный объект, даже если выбран весь класс

//более старая форма. Отличается тем, что не работает до объявл:
document.getElementById('currentElem').onclick = () => { };


//document.body.appendChild(info); //установить info потомком док бади


//чтобы получить доступ к глобальной переменной при наличии локальной - window.myVar
//чтобы получить доступ к глобальному контексту при наличии локального - myFunk.bind(window)

//divID.innerHTML - контент с тегами, наприм <p>Text</p>
//divID.innerContent - просто контент Text



