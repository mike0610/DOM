//                      TASK 4
// ================================================================

window.onload = function () {
	document.querySelector('#chips-show').onclick = () => {

		let chips = document.createElement('div');
		// chips.classList.add('chips');
		chips.innerText = "I was pressed!";
		document.body.appendChild(chips);
	}

	document.querySelector('#chips-show').onmouseenter = () => {

		let chips = document.createElement('div');
		// chips.classList.add('chips');
		chips.innerText = "Mouse on me!";
		document.body.appendChild(chips);
	}

	document.querySelector('#chips-show').onmouseleave = () => {

		let chips = document.createElement('div');
		// chips.classList.add('chips');
		chips.innerText = "Mouse is not on me!";
		document.body.appendChild(chips);
	}
}

