const body = document.querySelector("body");
const colors = ["#ecf0f1", "#f1f2f6", "#f5f6fa"];

function value() {
  const result = Math.floor(Math.random() * 3);
  return result;
}

function painting(text) {
  switch (text) {
    case 0:
      body.style.backgroundColor = colors[0];
      break;
    case 1:
      body.style.backgroundColor = colors[1];
      break;
    case 2:
      body.style.backgroundColor = colors[2];
      break;
  }
}

function init() {
  const text = value();
  painting(text);
}
init();
