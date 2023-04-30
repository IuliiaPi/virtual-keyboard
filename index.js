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
                    break;
                case '►':
                    textarea.innerHTML += '';
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

