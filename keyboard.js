const keyboard = [
  [
    {
      text: {
        EN: '~', en: '`', RU: '[', ru: ']',
      },
      css: ['btn_dark'],
      keyCode: 'Backquote',
    },
    {
      text: {
        EN: '1', en: '1', RU: '1', ru: '1',
      },
      keyCode: 'Digit1',
    },
    {
      text: {
        EN: '2', en: '2', RU: '2', ru: '2',
      },
      keyCode: 'Digit2',
    },
    {
      text: {
        EN: '3', en: '3', RU: '3', ru: '3',
      },
      keyCode: 'Digit3',
    },
    {
      text: {
        EN: '4', en: '4', RU: '4', ru: '4',
      },
      keyCode: 'Digit4',
    },
    {
      text: {
        EN: '5', en: '5', RU: '5', ru: '5',
      },
      keyCode: 'Digit5',
    },
    {
      text: {
        EN: '6', en: '6', RU: '6', ru: '6',
      },
      keyCode: 'Digit6',
    },
    {
      text: {
        EN: '7', en: '7', RU: '7', ru: '7',
      },
      keyCode: 'Digit7',
    },
    {
      text: {
        EN: '8', en: '8', RU: '8', ru: '8',
      },
      keyCode: 'Digit8',
    },
    {
      text: {
        EN: '9', en: '9', RU: '9', ru: '9',
      },
      keyCode: 'Digit9',
    },
    {
      text: {
        EN: '0', en: '0', RU: '0', ru: '0',
      },
      keyCode: 'Digit0',
    },
    {
      text: {
        EN: '-', en: '-', RU: '-', ru: '-',
      },
      keyCode: 'Minus',
    },
    {
      text: {
        EN: '=', en: '=', RU: '=', ru: '=',
      },
      keyCode: 'Equal',
    },
    {
      text: {
        EN: 'delete', en: 'delete', RU: 'delete', ru: 'delete',
      },
      css: ['btn_wide', 'btn_dark'],
      keyCode: 'delete',
    },
  ],

  [
    { text: { EN: 'tab', en: 'tab', ru: 'tab' }, css: ['btn_wide', 'btn_dark'] },
    { text: { EN: 'Q', en: 'q', ru: 'й' }, css: '' },
    { text: { EN: 'W', en: 'w', ru: 'ц' }, css: '' },
    { text: { EN: 'E', en: 'e', ru: 'у' }, css: '' },
    { text: { EN: 'R', en: 'r', ru: 'к' }, css: '' },
    { text: { EN: 'T', en: 't', ru: 'е' }, css: '' },
    { text: { EN: 'Y', en: 'y', ru: 'н' }, css: '' },
    { text: { EN: 'U', en: 'u', ru: 'г' }, css: '' },
    { text: { EN: 'I', en: 'i', ru: 'ш' }, css: '' },
    { text: { EN: 'O', en: 'o', ru: 'щ' }, css: '' },
    { text: { EN: 'P', en: 'p', ru: 'з' }, css: '' },
    { text: { EN: '{', en: '[', ru: 'х' }, css: '' },
    { text: { EN: '}', en: ']', ru: 'ъ' }, css: '' },
    { text: { EN: '|', en: '\\', ru: 'ё' }, css: '' },
  ], [
    { text: { EN: 'caps lock', en: 'caps lock', ru: 'caps lock' }, css: ['btn_wide', 'btn_dark'], id: 'capsLock' },
    { text: { EN: 'A', en: 'a', ru: 'ф' }, css: '' },
    { text: { EN: 'S', en: 's', ru: 'ы' }, css: '' },
    { text: { EN: 'D', en: 'd', ru: 'в' }, css: '' },
    { text: { EN: 'F', en: 'f', ru: 'а' }, css: '' },
    { text: { EN: 'G', en: 'g', ru: 'п' }, css: '' },
    { text: { EN: 'H', en: 'h', ru: 'р' }, css: '' },
    { text: { EN: 'J', en: 'j', ru: 'о' }, css: '' },
    { text: { EN: 'K', en: 'k', ru: 'л' }, css: '' },
    { text: { EN: 'L', en: 'l', ru: 'д' }, css: '' },
    { text: { EN: ':', en: ';', ru: 'ж' }, css: '' },
    { text: { EN: '"', en: "'", ru: 'э' }, css: '' },
    { text: { EN: 'return', en: 'return', ru: 'return' }, css: ['btn_wide', 'btn_dark'] },
  ], [
    { text: { EN: 'shift', en: 'shift', ru: 'shift' }, css: ['btn_wide', 'btn_dark'] },
    { text: { EN: 'Z', en: 'z', ru: 'я' }, css: '' },
    { text: { EN: 'X', en: 'x', ru: 'ч' }, css: '' },
    { text: { EN: 'C', en: 'c', ru: 'с' }, css: '' },
    { text: { EN: 'V', en: 'v', ru: 'м' }, css: '' },
    { text: { EN: 'B', en: 'b', ru: 'и' }, css: '' },
    { text: { EN: 'N', en: 'n', ru: 'т' }, css: '' },
    { text: { EN: 'M', en: 'm', ru: 'ь' }, css: '' },
    { text: { EN: '<', en: ',', ru: 'б' }, css: '' },
    { text: { EN: '>', en: '.', ru: 'ю' }, css: '' },
    { text: { EN: '?', en: '/', ru: '/' }, css: '' },
    { text: { EN: '▲', en: '▲', ru: '▲' }, css: ['btn_dark'] },
    { text: { EN: 'shift', en: 'shift', ru: 'shift' }, css: ['btn_wide', 'btn_dark'] },
  ], [
    { text: { EN: 'fn', en: 'fn', ru: 'fn' }, css: ['btn_dark'] },
    { text: { EN: 'control', en: 'control', ru: 'control' }, css: ['btn_dark'] },
    { text: { EN: 'option', en: 'option', ru: 'option' }, css: ['btn_dark'] },
    { text: { EN: 'command', en: 'command', ru: 'command' }, css: ['btn_wide', 'btn_dark'] },
    { text: { EN: ' ', en: ' ', ru: ' ' }, css: ['btn_extra-wide', 'btn_dark'] },
    { text: { EN: 'command', en: 'command', ru: 'command' }, css: ['btn_wide', 'btn_dark'] },
    { text: { EN: 'option', en: 'option', ru: 'option' }, css: ['btn_dark'] },
    { text: { EN: '◄', en: '◄', ru: '◄' }, css: ['btn_dark'] },
    { text: { EN: '▼', en: '▼', ru: '▼' }, css: ['btn_dark'] },
    { text: { EN: '►', en: '►', ru: '►' }, css: ['btn_dark'] },
  ]];

export default keyboard;