// Удаляется в классе ._animation-done
//_anim-no-hide - не будет анимироваться при повторном скроле

let animItemsArr = document.querySelectorAll("._appear--custom, ._appear--up, ._appear--down, ._appear--left, ._appear--right, ._appear--jump-out, ._appear--zoom-in, ._appear--cascade-wrapper, ._appear--lean, ._appear--impend");
let animItemsArrLength = animItemsArr.length;

if (animItemsArrLength > 0) {

	//слушает всё окно на скролл
	window.addEventListener('scroll', animOnScroll);


	function animOnScroll() {
		for (let index = 0; index < animItemsArrLength; index++) {
			const animItem = animItemsArr[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;

			//Родителю overflow-hidden, чтобы не вылезал скролл до и во время анимации
			animItem.parentNode.classList.add("ov-hidden");

			//коэффициент момента старта анимации
			const animStart = 4;

			//момент начала анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			//если высота объекта больше высоты окна браузера
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_appeared');
			} else {
				if (!animItem.classList.contains('_appear-once')) {
					animItem.classList.remove('_appeared');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

