document.body.setAttribute('class', 'page');

const container = document.createElement('div');
container.setAttribute('class', 'page__inner');
document.body.append(container);

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