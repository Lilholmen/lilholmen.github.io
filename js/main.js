'use strict';

class CalculatorCase {
  constructor({ el, maxNumbers = Infinity }) {
    this.el = {
      main: el,
      numPad: el.querySelector('.num-pad'),
      textDisplay: el.querySelector('.input-display'),
    };

    this.maxNumbers = maxNumbers;
    this.value = '';

    this._generatePad();
  }

  _generatePad() {
    const padLayout = [
      '1',
      '2',
      '3',
      '+',
      '4',
      '5',
      '6',
      '-',
      '7',
      '8',
      '9',
      '*',
      '<',
      '0',
      '=',
      '/',
    ];

    padLayout.forEach((key) => {
      const keyEl = document.createElement('div');

      keyEl.classList.add('button');
      keyEl.textContent = key;
      keyEl.addEventListener('click', () => {
        this._handleKeyPress(key);
      });
      this.el.numPad.appendChild(keyEl);
    });
  }

  _handleKeyPress(key) {
    switch (key) {
      case '=':
        break;
      case '<':
        this.value = this.value.substring(0, this.value.length - 1);
        break;
      default:
        if (this.value.length < this.maxNumbers && !isNaN(key)) {
          this.value += key;
        }
        break;
    }
    this._updateInputDisplay();
  }

  _updateInputDisplay() {
    this.el.textDisplay.value = this.value;
  }
}
