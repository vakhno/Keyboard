let language = `en`; // язык по умолчанию
let carriage; // каретка
const keyboardValues = {
	en: [[
		{ en: [`\``, `~`], char: `symbol`, key: `Backquote` },
		{ en: [`1`, `!`], char: `symbol`, key: `Digit1` },
		{ en: [`2`, `@`], char: `symbol`, key: `Digit2` },
		{ en: [`3`, `#`], char: `symbol`, key: `Digit3` },
		{ en: [`4`, `$`], char: `symbol`, key: `Digit4` },
		{ en: [`5`, `%`], char: `symbol`, key: `Digit5` },
		{ en: [`6`, `^`], char: `symbol`, key: `Digit6` },
		{ en: [`7`, `&`], char: `symbol`, key: `Digit7` },
		{ en: [`8`, `*`], char: `symbol`, key: `Digit8` },
		{ en: [`9`, `(`], char: `symbol`, key: `Digit9` },
		{ en: [`0`, `)`], char: `symbol`, key: `Digit0` },
		{ en: [`-`, `_`], char: `symbol`, key: `Minus` },
		{ en: [`=`, `+`], char: `symbol`, key: `Equal` },
		{ en: [`backspace`], char: `programm`, key: `Backspace` },
	], [
		{ en: [`tab`], char: `programm`, key: `Tab` },
		{ en: [`q`, `Q`], char: `letter`, key: `KeyQ` },
		{ en: [`w`, `W`], char: `letter`, key: `KeyW` },
		{ en: [`e`, `E`], char: `letter`, key: `KeyE` },
		{ en: [`r`, `R`], char: `letter`, key: `KeyR` },
		{ en: [`t`, `T`], char: `letter`, key: `KeyT` },
		{ en: [`y`, `Y`], char: `letter`, key: `KeyY` },
		{ en: [`u`, `U`], char: `letter`, key: `KeyU` },
		{ en: [`i`, `I`], char: `letter`, key: `KeyI` },
		{ en: [`o`, `O`], char: `letter`, key: `KeyO` },
		{ en: [`p`, `P`], char: `letter`, key: `KeyP` },
		{ en: [`[`, `{`], char: `symbol`, key: `BracketLeft` },
		{ en: [`]`, `}`], char: `symbol`, key: `BracketRight` },
		{ en: [`\\`, `|`], char: `symbol`, key: `Backslash` },
	], [
		{ en: [`capslock`], char: `programm`, key: `CapsLock` },
		{ en: [`a`, `A`], char: `letter`, key: `KeyA` },
		{ en: [`s`, `S`], char: `letter`, key: `KeyS` },
		{ en: [`d`, `D`], char: `letter`, key: `KeyD` },
		{ en: [`f`, `F`], char: `letter`, key: `KeyF` },
		{ en: [`g`, `G`], char: `letter`, key: `KeyG` },
		{ en: [`h`, `H`], char: `letter`, key: `KeyH` },
		{ en: [`j`, `J`], char: `letter`, key: `KeyJ` },
		{ en: [`k`, `K`], char: `letter`, key: `KeyK` },
		{ en: [`l`, `L`], char: `letter`, key: `KeyL` },
		{ en: [`;`, `:`], char: `symbol`, key: `Semicolon` },
		{ en: [`\\`, `"`], char: `symbol`, key: `Quote` },
		{ en: [`enter`], char: `programm`, key: `Enter` },
	], [
		{ en: [`shift`], char: `programm`, key: `ShiftLeft` },
		{ en: [`z`, `Z`], char: `letter`, key: `KeyZ` },
		{ en: [`x`, `X`], char: `letter`, key: `KeyX` },
		{ en: [`c`, `C`], char: `letter`, key: `KeyC` },
		{ en: [`v`, `V`], char: `letter`, key: `KeyV` },
		{ en: [`b`, `B`], char: `letter`, key: `KeyB` },
		{ en: [`n`, `N`], char: `letter`, key: `KeyN` },
		{ en: [`m`, `M`], char: `letter`, key: `KeyM` },
		{ en: [`,`, `<`], char: `symbol`, key: `Comma` },
		{ en: [`.`, `>`], char: `symbol`, key: `Period` },
		{ en: [`/`, `?`], char: `symbol`, key: `Slash` },
		{ en: [`shift`], char: `programm`, key: `ShiftRight` },
	], [
		{ en: [`en`], char: `programm`, key: `Language` },
		{ en: [`ctrl`], char: `programm`, key: `ControlLeft` },
		{ en: [`alt`], char: `programm`, key: `AltLeft` },
		{ en: [`space`], char: `programm`, key: `Space` },
		{ en: [`alt`], char: `programm`, key: `AltRight` },
		{ en: [`ctrl`], char: `programm`, key: `ControlRight` },
		{ en: [``], char: `programm`, key: `Hide` },
	]],
	ru: [[
		{ ru: [`ё`, `Ё`], char: `letter`, key: `Backquote` },
		{ ru: [`1`, `!`], char: `symbol`, key: `Digit1` },
		{ ru: [`2`, `"`], char: `symbol`, key: `Digit2` },
		{ ru: [`3`, `№`], char: `symbol`, key: `Digit3` },
		{ ru: [`4`, `;`], char: `symbol`, key: `Digit4` },
		{ ru: [`5`, `%`], char: `symbol`, key: `Digit5` },
		{ ru: [`6`, `:`], char: `symbol`, key: `Digit6` },
		{ ru: [`7`, `?`], char: `symbol`, key: `Digit7` },
		{ ru: [`8`, `*`], char: `symbol`, key: `Digit8` },
		{ ru: [`9`, `(`], char: `symbol`, key: `Digit9` },
		{ ru: [`0`, `)`], char: `symbol`, key: `Digit0` },
		{ ru: [`-`, `_`], char: `symbol`, key: `Minus` },
		{ ru: [`=`, `+`], char: `symbol`, key: `Equal` },
		{ ru: [`backspace`], char: `programm`, key: `Backspace` },
	], [
		{ ru: [`tab`], char: `programm`, key: `Tab` },
		{ ru: [`й`, `Й`], char: `letter`, key: `KeyQ` },
		{ ru: [`ц`, `Ц`], char: `letter`, key: `KeyW` },
		{ ru: [`у`, `У`], char: `letter`, key: `KeyE` },
		{ ru: [`к`, `К`], char: `letter`, key: `KeyR` },
		{ ru: [`е`, `Е`], char: `letter`, key: `KeyT` },
		{ ru: [`н`, `Н`], char: `letter`, key: `KeyY` },
		{ ru: [`г`, `Г`], char: `letter`, key: `KeyU` },
		{ ru: [`ш`, `Ш`], char: `letter`, key: `KeyI` },
		{ ru: [`щ`, `Щ`], char: `letter`, key: `KeyO` },
		{ ru: [`з`, `З`], char: `letter`, key: `KeyP` },
		{ ru: [`х`, `Х`], char: `letter`, key: `BracketLeft` },
		{ ru: [`ъ`, `Ъ`], char: `letter`, key: `BracketRight` },
		{ ru: [`\\`, `/`], char: `symbol`, key: `Backslash` },
	], [
		{ ru: [`capslock`], char: `programm`, key: `CapsLock` },
		{ ru: [`ф`, `Ф`], char: `letter`, key: `KeyA` },
		{ ru: [`ы`, `Ы`], char: `letter`, key: `KeyS` },
		{ ru: [`в`, `В`], char: `letter`, key: `KeyD` },
		{ ru: [`а`, `А`], char: `letter`, key: `KeyF` },
		{ ru: [`п`, `П`], char: `letter`, key: `KeyG` },
		{ ru: [`р`, `Р`], char: `letter`, key: `KeyH` },
		{ ru: [`о`, `О`], char: `letter`, key: `KeyJ` },
		{ ru: [`л`, `Л`], char: `letter`, key: `KeyK` },
		{ ru: [`д`, `Д`], char: `letter`, key: `KeyL` },
		{ ru: [`ж`, `Ж`], char: `letter`, key: `Semicolon` },
		{ ru: [`э`, `Э`], char: `letter`, key: `Quote` },
		{ ru: [`enter`], char: `programm`, key: `Enter` },
	], [
		{ ru: [`shift`], char: `programm`, key: `ShiftLeft` },
		{ ru: [`я`, `Я`], char: `letter`, key: `KeyZ` },
		{ ru: [`ч`, `Ч`], char: `letter`, key: `KeyX` },
		{ ru: [`с`, `С`], char: `letter`, key: `KeyC` },
		{ ru: [`м`, `М`], char: `letter`, key: `KeyV` },
		{ ru: [`и`, `И`], char: `letter`, key: `KeyB` },
		{ ru: [`т`, `Т`], char: `letter`, key: `KeyN` },
		{ ru: [`ь`, `Ь`], char: `letter`, key: `KeyM` },
		{ ru: [`б`, `Б`], char: `letter`, key: `Comma` },
		{ ru: [`ю`, `Ю`], char: `letter`, key: `Period` },
		{ ru: [`.`, `,`], char: `symbol`, key: `Slash` },
		{ ru: [`shift`], char: `programm`, key: `ShiftRight` },
	], [
		{ ru: [`ru`], char: `programm`, key: `Language` },
		{ ru: [`ctrl`], char: `programm`, key: `ControlLeft` },
		{ ru: [`alt`], char: `programm`, key: `AltLeft` },
		{ ru: [`space`], char: `programm`, key: `Space` },
		{ ru: [`alt`], char: `programm`, key: `AltRight` },
		{ ru: [`ctrl`], char: `programm`, key: `ControlRight` },
		{ ru: [``], char: `programm`, key: `Hide` },
	]],
	ua: [[
		{ ua: [`\\`, `₴`], char: `letter`, key: `Backquote` },
		{ ua: [`1`, `!`], char: `symbol`, key: `Digit1` },
		{ ua: [`2`, `"`], char: `symbol`, key: `Digit2` },
		{ ua: [`3`, `№`], char: `symbol`, key: `Digit3` },
		{ ua: [`4`, `;`], char: `symbol`, key: `Digit4` },
		{ ua: [`5`, `%`], char: `symbol`, key: `Digit5` },
		{ ua: [`6`, `:`], char: `symbol`, key: `Digit6` },
		{ ua: [`7`, `?`], char: `symbol`, key: `Digit7` },
		{ ua: [`8`, `*`], char: `symbol`, key: `Digit8` },
		{ ua: [`9`, `(`], char: `symbol`, key: `Digit9` },
		{ ua: [`0`, `)`], char: `symbol`, key: `Digit0` },
		{ ua: [`-`, `_`], char: `symbol`, key: `Minus` },
		{ ua: [`=`, `+`], char: `symbol`, key: `Equal` },
		{ ua: [`backspace`], char: `programm`, key: `Backspace` },
	], [
		{ ua: [`tab`], char: `programm`, key: `Tab` },
		{ ua: [`й`, `Й`], char: `letter`, key: `KeyQ` },
		{ ua: [`ц`, `Ц`], char: `letter`, key: `KeyW` },
		{ ua: [`у`, `У`], char: `letter`, key: `KeyE` },
		{ ua: [`к`, `К`], char: `letter`, key: `KeyR` },
		{ ua: [`е`, `Е`], char: `letter`, key: `KeyT` },
		{ ua: [`н`, `Н`], char: `letter`, key: `KeyY` },
		{ ua: [`г`, `Г`], char: `letter`, key: `KeyU` },
		{ ua: [`ш`, `Ш`], char: `letter`, key: `KeyI` },
		{ ua: [`щ`, `Щ`], char: `letter`, key: `KeyO` },
		{ ua: [`з`, `З`], char: `letter`, key: `KeyP` },
		{ ua: [`х`, `Х`], char: `letter`, key: `BracketLeft` },
		{ ua: [`ї`, `Ї`], char: `letter`, key: `BracketRight` },
		{ ua: [`\\`, `/`], char: `symbol`, key: `Backslash` },
	], [
		{ ua: [`capslock`], char: `programm`, key: `CapsLock` },
		{ ua: [`ф`, `Ф`], char: `letter`, key: `KeyA` },
		{ ua: [`і`, `І`], char: `letter`, key: `KeyS` },
		{ ua: [`в`, `В`], char: `letter`, key: `KeyD` },
		{ ua: [`а`, `А`], char: `letter`, key: `KeyF` },
		{ ua: [`п`, `П`], char: `letter`, key: `KeyG` },
		{ ua: [`р`, `Р`], char: `letter`, key: `KeyH` },
		{ ua: [`о`, `О`], char: `letter`, key: `KeyJ` },
		{ ua: [`л`, `Л`], char: `letter`, key: `KeyK` },
		{ ua: [`д`, `Д`], char: `letter`, key: `KeyL` },
		{ ua: [`ж`, `Ж`], char: `letter`, key: `Semicolon` },
		{ ua: [`є`, `Є`], char: `letter`, key: `Quote` },
		{ ua: [`enter`], char: `programm`, key: `Enter` },
	], [
		{ ua: [`shift`], char: `programm`, key: `ShiftLeft` },
		{ ua: [`я`, `Я`], char: `letter`, key: `KeyZ` },
		{ ua: [`ч`, `Ч`], char: `letter`, key: `KeyX` },
		{ ua: [`с`, `С`], char: `letter`, key: `KeyC` },
		{ ua: [`м`, `М`], char: `letter`, key: `KeyV` },
		{ ua: [`и`, `И`], char: `letter`, key: `KeyB` },
		{ ua: [`т`, `Т`], char: `letter`, key: `KeyN` },
		{ ua: [`ь`, `Ь`], char: `letter`, key: `KeyM` },
		{ ua: [`б`, `Б`], char: `letter`, key: `Comma` },
		{ ua: [`ю`, `Ю`], char: `letter`, key: `Period` },
		{ ua: [`.`, `,`], char: `symbol`, key: `Slash` },
		{ ua: [`shift`], char: `programm`, key: `ShiftRight` },
	], [
		{ ua: [`ua`], char: `programm`, key: `Language` },
		{ ua: [`ctrl`], char: `programm`, key: `ControlLeft` },
		{ ua: [`alt`], char: `programm`, key: `AltLeft` },
		{ ua: [`space`], char: `programm`, key: `Space` },
		{ ua: [`alt`], char: `programm`, key: `AltRight` },
		{ ua: [`ctrl`], char: `programm`, key: `ControlRight` },
		{ ua: [``], char: `programm`, key: `Hide` },
	]],
};


// создание значений для кнопок(по умолчанию lowerCase)
function addValuesToButtons() {
	const button = document.querySelectorAll(`.keyboard__button`);
	let counter = 0;

	keyboardValues[language].forEach(rowKey => {
		rowKey.forEach(buttonKey => {
			button[counter].textContent = ``;
			button[counter].textContent += buttonKey[language][0];
			counter += 1;
		});
	});
};


// создание клавиатуры (IIFE)
(function createKeyboard() {
	let counterOfLines = 1; // счетчик линий клавиатуры
	const keyboard = document.createElement(`div`);
	const keyboardContent = document.createElement(`div`);

	keyboard.classList.add(`keyboard`, `keyboard__hidden`);
	document.querySelector(`.footer`).before(keyboard);

	keyboardContent.classList.add(`keyboard__content`);
	document.querySelector(`.keyboard`).prepend(keyboardContent);
	// пробегаем по каждому массиву, который содержит язык, каждый отдельный массив = ряду кнопок
	keyboardValues[language].forEach(rowKey => {
		// создание ряда для кнопок
		const rowOfButtons = document.createElement(`div`);
		rowOfButtons.classList.add(`keyboard__line`, `lineNumber${counterOfLines}`);
		// проверка для корректного распределения рядов
		if (document.querySelectorAll(`.keyboard__line`).length < 1) {
			document.querySelector(`.keyboard__content`).prepend(rowOfButtons);
		} else {
			document.querySelector(`.lineNumber${counterOfLines - 1}`).after(rowOfButtons);
		}
		// заполнение ряда кнопками
		rowKey.forEach(buttonKey => {
			const keyboardButton = document.createElement(`div`);
			keyboardButton.classList.add(`keyboard__button`, buttonKey.key);
			keyboardButton.dataset.key = buttonKey.key;
			keyboardButton.dataset.char = buttonKey.char;
			document.querySelector(`.lineNumber${counterOfLines}`).append(keyboardButton);
		});
		// нумеруем следующий ряд
		counterOfLines += 1;
	});
	// заполняем пустые кнопки значениями
	addValuesToButtons();
})();



// смена регистра 
function changeValues(pressedButton, whatToChange) {
	document.querySelector(`.${pressedButton}`).classList.toggle(`active`);
	const button = document.querySelectorAll(`.keyboard__button`);
	let counter = 0;

	if (pressedButton === `ShiftRight`) {
		document.querySelector(`.ShiftLeft`).classList.remove(`active`);
	} else if (pressedButton === `ShiftLeft`) {
		document.querySelector(`.ShiftRight`).classList.remove(`active`);
	}

	if (document.querySelector(`.${pressedButton}`).classList.contains(`active`) === true) {
		keyboardValues[language].forEach(rowKey => {
			rowKey.forEach(buttonKey => {
				if (buttonKey.char === whatToChange && button[counter].classList.contains(buttonKey.key)) {
					button[counter].textContent = ``;
					button[counter].textContent += buttonKey[language][1];
				}
				counter += 1;
			});
		});
	} else {
		document.querySelector(`.${pressedButton}`).classList.remove(`active`);
		// если же у капслока отсутствует класс active заполняем кнопки значениями по умолчанию(lowerCase)
		addValuesToButtons();
	}
};

// добавляем символы в инпут
function addToInput(whatToAdd, backspace = false, key) {
	const arr = key.value.split(``);

	if (backspace) {
		if (carriage === 0) {
			carriage = 0;
		} else {
			arr.splice(carriage - 1, 1);
			carriage -= 1;
		}
	} else {
		arr.splice(carriage, 0, whatToAdd);
		carriage += 1;
	}

	key.value = arr.join(``);
	key.selectionStart = carriage;
	key.selectionEnd = carriage;
};

// определяем позицию каретки для коректного добавление текста: в середину предложения, в начало предложения, удаления желаемого символа
function carriagePosition(event) {
	let cursorPos = null;

	if (document.selection) {
		const range = document.selection.createRange();
		range.moveStart(`textedit`, -1);
		cursorPos = range.text.length;
	} else {
		cursorPos = event.target.selectionStart;
	}

	carriage = cursorPos;
	return cursorPos;
};

// события физической клавиатуры
document.onkeydown = function pressPhysicalButton(event) {
	document.querySelectorAll(`.input`).forEach(key => {
		if (key === document.activeElement) {
			if (event.code === `CapsLock`) {
				changeValues(`CapsLock`, `letter`);
			} else if (event.code === `ShiftLeft`) {
				changeValues(`ShiftLeft`, `symbol`);
			} else if (event.code === `ShiftRight`) {
				changeValues(`ShiftRight`, `symbol`);
			} else {
				const item = document.querySelector(`.${event.code}`);

				if (item) {
					document.addEventListener(`keyup`, function onKeyup() {
						document.removeEventListener(`keyup`, onKeyup);
						item.classList.remove(`active`);
					}, false);

					item.classList.add(`active`);
				}
			}
		}
	});
};

// смена языка
function changeLanguage(button) {
	if (document.querySelector(`.CapsLock`).classList.contains(`active`)) {
		changeValues(`CapsLock`, `letter`);
	}
	if (document.querySelector(`.ShiftLeft`).classList.contains(`active`)) {
		changeValues(`ShiftLeft`, `symbol`);
	}
	if (document.querySelector(`.ShiftRight`).classList.contains(`active`)) {
		changeValues(`ShiftRight`, `symbol`);
	}

	language = (language === Object.keys(keyboardValues)[Object.keys(keyboardValues).length - 1]) ? Object.keys(keyboardValues)[0] : Object.keys(keyboardValues)[Object.keys(keyboardValues).indexOf(language) + 1];

	addValuesToButtons();
	button.textContent = language;
};

// клик по клавишам виртуальной клавиатуры
document.querySelector(`.keyboard`).onmousedown = function pressVirtualButton(event) {
	document.querySelectorAll(`.input`).forEach(key => {
		if (key === document.activeElement) {
			if (event.target.dataset.key === `CapsLock`) {
				changeValues(`CapsLock`, `letter`);
			} else if (event.target.dataset.key === `ShiftLeft`) {
				changeValues(`ShiftLeft`, `symbol`);
			} else if (event.target.dataset.key === `ShiftRight`) {
				changeValues(`ShiftRight`, `symbol`);
			} else if (event.target.dataset.key === `Backspace`) {
				addToInput(``, true, key);
			} else if (event.target.dataset.key === `Space`) {
				addToInput(` `, false, key);
			} else if (event.target.dataset.key === `Language`) {
				changeLanguage(event.target);
			} else if (event.target.dataset.key === `Enter`) {
				addToInput(`\r\n`, false, key);
			} else if (event.target.dataset.char === `letter` || event.target.dataset.char === `symbol`) {
				addToInput(event.target.textContent, false, key);
			}
		}
	});
	return false;
};

document.querySelectorAll(`.input`).forEach(input => {
	input.addEventListener(`click`, (event) => {
		carriagePosition(event);
	});

	input.addEventListener(`keyup`, (event) => {
		carriagePosition(event);
	});

	input.addEventListener(`focus`, (event) => {
		document.querySelector(`.keyboard`).classList.remove(`keyboard__hidden`);
	});

	input.addEventListener(`blur`, (event) => {
		document.querySelector(`.keyboard`).classList.add(`keyboard__hidden`);
	});
});