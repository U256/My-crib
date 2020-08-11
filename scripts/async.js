'use strict';
//callpack
//Event loop
function afterTimeoutFn() {
	let yaPrisvoilsa = "After 2 sec"
}

window.setTimeout(afterTimeoutFn, 2000) // это асинхронная функция из браузерного API, выполнится когда придёт таймер. Остальной код её не ждёт
//она закидывается в call stack, там он регистрирует функцию afterTimeoutFn и выкидывает таймаут из
//стека, а функция ждёт [таймера или действия => callback queue очередь => закид в стек, выполняется]

//Например, click listener при нажатии кучу раз по кнопке добавит нужное кол-во своих действий в call stack, они выполнятся по очереди

setTimeout(() => {
	console.log("выполнится сразу после синхронных операций")
}, 0)

setInterval(() => {
	let bruh = 'bruh'; // каждые 10 сек
}, 1000 * 10)


// AJAX AJAX AJAX
// получаем данные со страницы или формы -> Запрос XMLHttpRequest -> Ответ -> Отображение результатов

// метод GET - запрос в составе URL
// метод POST - запрос в теле HTTP 


var request1 = new XMLHttpRequest();
let ajaxInitButton = document.querySelector('.ajax-init');
ajaxInitButton.addEventListener('click', e => {
	request1.open('GET', 'data-fake.txt', true) //data - в этой же папке
	// false - синхронный. синхр ajax заморозит всю страницу до получения ответа, устарел
	// По правилу ограничения домена(Same Origin Policy), нельзя запрашивать данные источников, у которых домен, протокол и порт не соответствуют моему.
	request1.send();
	request1.status; //200 - кайф, другие цифры - ошибка
	request1.responseText // ответ!!!!
	if (request1.status == 200) {
		document.getElementById("answer").innerHTML = request1.responseText;
	}
});








//Promise - обертка над асинхронностью, добавляет удобства и функционала
setTimeout(() => {
	let firstPartOfWork = "ждём что-то с сервера или действия пользователя.";
	setTimeout(() => {
		let secondPartOfWork = firstPartOfWork + " Дождались, делаем ещё что-то."
		setTimeout(() => {
			let thirdPartOfWork = secondPartOfWork + " Дождались, добавляем новый элемент в html"

		}, 200)
	}, 200)
}, 200)
// чтобы этой вложенности избежать, есть промисы. Аналог:
const prom = new Promise((resolve, reject) => {
	//сюда асинх код
	setTimeout(() => {
		let firstPartOfWork = "Waiting for some server data or event.";
		if (firstPartOfWork == undefined) {
			reject() //промис не удался, catch поймает
		}

		resolve(firstPartOfWork); // это значит, что промис успешно выполнен
	}, 200)
})
prom.then((frstPrtOfWrk) => { //будет вызван сразу после resolve()
	const prom2 = new Promise((resolve, reject) => {
		let horosho = frstPrtOfWrk + '\nFirst promise resolved. Second in run';
		resolve(horosho);
	}, 200)
	prom2.then(horosho => {
		horosho + 'Add something'
	})
})
//НО эту ерунду можно сильно упростить, не создавая prom, а сразу return результат, и
//дальше обращаться сразу к промису }).then(blalala) (chain называется)
const prom2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let firstPartOfWork = "Waiting for some server data or event.";
		resolve(firstPartOfWork);
	}, 200)
})
prom2.then((frstPrtOfWrk) => {
	return new Promise((resolve, reject) => {
		let horosho = frstPrtOfWrk + '\nFirst promise resolved. Second in run';
		resolve(horosho);
	}, 200)
})
	.then(horosho => {  //chain 
		horosho + 'Add something';
		return horosho;
	}).then(hereComesHorosho => {
		console.log(hereComesHorosho);
	}) // всего 1 уровень вложенности
	.catch(err => console.error("error!", err)) // можно ловить ошибки
	.finally(function () { let donee = "gonna work in every case" })



