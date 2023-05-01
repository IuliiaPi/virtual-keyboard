import keyboard from './keyboard.js';

document.body.setAttribute('class', 'page');

const container = document.createElement('div');
container.setAttribute('class', 'page__inner');
document.body.append(container);

const header = document.createElement('header');
header.setAttribute('class', 'header');
container.append(header);

const title = document.createElement('h1');
title.setAttribute('class', 'title');
title.innerText = `Virtual Keyboard`;
header.append(title);

const sectionInput = document.createElement('section');
sectionInput.setAttribute('class', 'section-input');
container.append(sectionInput);

const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'input-textarea');
textarea.placeholder = `Tap on the virtual keyboard to start`;
sectionInput.append(textarea);

textarea.focus();
textarea.addEventListener('blur', () => textarea.focus());

let cursorStart = 0;
let cursorEnd = 0;
let isShift = false;

textarea.addEventListener('click', () => {
    cursorStart = textarea.selectionStart;
    cursorEnd = textarea.selectionEnd;
});

const sectionKeyboard = document.createElement('section');
sectionKeyboard.setAttribute('class', 'section-keyboard');
container.append(sectionKeyboard);

const sectionMessage = document.createElement('section');
sectionMessage.setAttribute('class', 'section-message');
sectionMessage.textContent = `This virtual keyboard was created in Mac. To switch ENG/UA input methods, press Ctrl+Alt on Windows or Cmd+Alt on Mac.`;
container.append(sectionMessage);

keyboard.forEach((row) => {
    const rows = document.createElement('div');
    rows.setAttribute('class', 'row');
    sectionKeyboard.append(rows);

    row.forEach((key) => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.setAttribute('type', 'button');
        rows.append(btn);

        btn.innerHTML = key.text.en;

        if (key.css) {
            key.css.forEach((clazz) => {
                btn.classList.add(clazz);
            });
        }

        document.addEventListener('keydown', function (event) {
            if ((event.ctrlKey && event.altKey) || (event.metaKey && event.altKey)) {
                btn.innerHTML = key.text.ru;
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.code === 'CapsLock') {
                if (btn.innerHTML = key.text.en) {
                    btn.innerHTML = key.text.EN;
                } else {
                    btn.innerHTML = key.text.en;
                }
            }
        });

        btn.addEventListener('click', () => {
            switch (key.text.en) {
                case 'delete':
                    deleteLastCharacter();
                    break;
                case 'tab':
                    textarea.innerHTML += '   ';
                    break;
                case 'caps lock':
                    textarea.innerHTML += '';
                    btn.classList.toggle('btn_active');
                    break;
                case 'return':
                    textarea.innerHTML += '\n';
                    break;
                case 'shift':
                    textarea.innerHTML += '';
                    break;
                case 'fn':
                    textarea.innerHTML += '';
                    break;
                case 'control':
                    textarea.innerHTML += '';
                    break;
                case 'option':
                    textarea.innerHTML += '';
                    break;
                case 'command':
                    textarea.innerHTML += '';
                    break;
                case ' ':
                    textarea.innerHTML += ' ';
                    break;
                case '▲':
                    textarea.innerHTML += '';
                    break;
                case '▼':
                    textarea.innerHTML += '\n';
                    break;
                case '◄':
                    textarea.innerHTML += '';
                    if (cursorStart !== 0) cursorStart -= 1;
                    if (!isShift) cursorEnd = cursorStart;
                    changeTextareaSelected();
                    break;
                case '►':
                    textarea.innerHTML += '';
                    if (cursorEnd !== textarea.length) cursorEnd += 1;
                    if (!isShift) cursorStart = cursorEnd;
                    changeTextareaSelected();
                    break;
                default:
                    textarea.innerHTML += btn.innerText;
                    break;
            }
        });

    });

});

function deleteLastCharacter() {
    let string = textarea.innerHTML;
    textarea.innerHTML = string.substring(0, string.length - 1);
}

function changeTextareaSelected() {
    textarea.selectionStart = cursorStart;
    textarea.selectionEnd = cursorEnd;
}

