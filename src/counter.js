function Counter(element, digits, value) {
  this.el = element;

  this.el.classList.add('counter');

  this.digits = new Array(digits)
    .join(',')
    .split(',')
    .map(function (_, idx) {
      var digitContainer = document.createElement('div');

      for (var i = 0; i < 10; i += 1) {
        digitContainer.appendChild(document.createElement('span'));
        digitContainer.lastChild.innerText = i;
      }

      return digitContainer;
    });

  this.setValue(value || 0);

  this.digits.forEach(function (digitContainer) {
    element.appendChild(digitContainer);
  });

  var self = this;

  setInterval(function () {
    self.setValue(Math.round(Math.random() * Math.pow(10, 5)));
  }, 2000);
}

Counter.prototype = {
  setValue: function (value) {
    value = Math.floor(Number(value));
    this.digits.forEach(function (digit, idx) {
      var rotation = Math.floor(value / Math.pow(10, idx)) * 36;

      digit.style.transform = `translateZ(-2em) rotateX(-${rotation}deg)`;
    });

    this.value = value;
  }
}
