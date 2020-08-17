'use strict';

// прямо во вставке документа в html можно добавить атрибуты async i defer
// async => такие загрузятся асинх между собой. DOMContentLoaded не учитывается.Может загрузиться и выполниться до того, как страница полностью загрузится.Такое случается, если скрипты маленькие или хранятся в кеше, а документ достаточно большой. хорош для независимых скриптов, например счётчиков и рекламы

// defer => такие загрузятся в порядке документа (как расположены).Выполняется после того, как документ загружен и обработан(ждёт), непосредственно перед DOMContentLoaded. для скриптов, которым требуется доступ ко всему DOM и/или важен их относительный порядок выполнения


const requestURLforSomeUsers = 'https://jsonplaceholder.typicode.com/users/1';
const requestURLforSomePosts = 'https://jsonplaceholder.typicode.com/posts';
const requestURLforSomeAlbums = 'https://jsonplaceholder.typicode.com/albums';
const requestURLforSomeComments = 'https://jsonplaceholder.typicode.com/comments';
const requestURLforSomePhotos = 'https://jsonplaceholder.typicode.com/photos';

//formData
// cookies - 4кб летят на сервер

function afterTimeoutFn() {
	let yaPrisvoilsa = "After 2 sec"
}

setTimeout(afterTimeoutFn, 2000) // это асинхронная функция из браузерного API, выполнится когда придёт таймер. Остальной код её не ждёт


// JS однопоточный. Поток - call stack
// main() -стандартная функция документа, основное действие. На него ставятся остальные
// Таймауты и лисенеры - вызываются в стаке и попадают в WebAPI, вызвыватор выходит из стака
// При действии или по таймеру WebAPI закидывает действие не в стак (он может быть занят), а в Task queue. Event loop проверят, пустой ли стак и закидывает действия по очереди в стак

//Например, click listener при нажатии кучу раз по кнопке добавит нужное кол-во своих действий в Task queue, они выполнятся по очереди

setTimeout(() => {
	let wattah = "выполнится сразу после синхронных операций"
}, 0)

setInterval(() => {
	let bruh = 'bruh'; // каждые 10 сек
}, 1000 * 10)


// AJAX AJAX AJAX
// получаем данные со страницы или формы -> Запрос XMLHttpRequest -> Ответ -> Отображение результатов

let request1 = new XMLHttpRequest();

document.querySelector('.ajax-init').addEventListener('click', e => {
	request1.open('GET', requestURLforSomeUsers);
	// Get  для получения данных. запрос в составе URL
	// Post  для создания.  запрос в теле HTTP 
	// Delete удаления
	// Put  для полного обновления элемента
	// Patch для частичного обновления элемента

	// По правилу ограничения домена(Same Origin Policy), нельзя запрашивать данные источников, у которых домен, протокол и порт не соответствуют моему.
	request1.readyState; //1
	// 0 - open не вызван
	// 1 - вызван
	// 2 - получены заголовки
	// 3 - идёт приём
	// 4 - приём завершен
	request1

	request1.responseType = 'json' // иначе получим ТЕКСТ. все запросы по умолч в виде текста, а не JSON
	//request1.responseText //- теперь не работает

	request1.onload = () => {
		console.log(request1.response); // теперь JSON
		document.querySelector("#answer").innerHTML = JSON.stringify(request1.response);
	}


	request1.send(); // отправили запрос на сервер
	// при POST запросе нужно вложить (данные)

	request1.status;

});


fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json()) //{userId: 1, id: 1, title: "delectus aut autem", completed: false}



setTimeout(() => {
	let firstPartOfWork = "ждём что-то с сервера или действия пользователя.";
	setTimeout(() => {
		let secondPartOfWork = firstPartOfWork + " Дождались, делаем ещё что-то."
		setTimeout(() => {
			let thirdPartOfWork = secondPartOfWork + " Дождались, добавляем новый элемент в html"
		}, 200)
	}, 200)
}, 200)

// чтобы этой вложенности избежать, есть промисы.
//Promise - обертка над асинхронностью, добавляет удобства и функционала
const prom2 = new Promise((resolve, reject) => {
	//сюда асинх код
	setTimeout(() => {
		let firstPartOfWork = "Waiting for some server data or event.";

		if (firstPartOfWork == undefined) {
			reject(new Error('Запрос не получен')) //промис не удался, catch поймает
		}
		resolve(firstPartOfWork); // это значит, что промис успешно выполнен
	}, 200)
})
	.then((frstPrt) => {
		return new Promise((resolve) => { // можно возвр не так, а уже присвоенный. Наприм return prom2(10). 10 будет аргументом в следующем then
			setTimeout(() => {
				let horosho = frstPrt + '\nFirst promise resolved. Second in run';
				resolve(horosho);
			}, 300)
		})
	})
	.then(horosh => {  //chain 

		horosh += '\nAdd something in last then';

	})// всего 1 уровень вложенности
	.catch(err => console.error(err.toString())) // можно ловить ошибки
	.finally(function () { let donee = "gonna work in every case" })



	
// async await - упрощает синтаксис промисов
async function asyncFnc11() { //async перед объявлением функции Обязывает её всегда возвращать промис
	return 1; //return Promise.resolve(1);
}

async function asyncFnct() {  // вернёт промис
	try {

		await new Promise((resolve, reject) => { //ТОЛЬКО в async функции можно исп await
			setTimeout(() => resolve("След функции ждут эту"), 2000)
		});
		//await перед промисом заставит JavaScript дождаться его выполнения, после чего:
		// Если промис завершается с ошибкой, будет сгенерировано исключение, как если бы на этом месте находилось throw.
		// Иначе вернётся результат промиса.
		let hehhhe = 'сюда можно воткнуть синхр штуки, они тоже будут ждать!'
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve("Следующий await"), 7000)
		});

		return true; //Promise.resolve(true)

	} catch (err) {
		console.log(err);
		return false;

	} finally {
		let aaaa = 'all done'
	}

	let results = await Promise.all([ //all ждёт оба
		fetch(url1),
		fetch(url2),
	]);

}
asyncFnct().then((result) => { //венулся промис, мы его использовали с then
	result; //true
});


async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200) {
		let json = await response.json();
		return json;
	}

	throw new Error();
}

loadJson('https://jsonplaceholder.typicode.com/users/1')
	.then();


