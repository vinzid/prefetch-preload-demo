let button = document.createElement('button');
button.innerHTML = 'Add Script';
button.addEventListener('click', e => {
  let script = document.createElement("script");
  script.src = "script.js";
  document.head.appendChild(script);
});
document.body.appendChild(button);