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

    });

});

