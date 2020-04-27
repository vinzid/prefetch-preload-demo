let button = document.createElement('button');
button.innerHTML = 'Add Script';
document.body.appendChild(button);
button.addEventListener('click', e => {
  import(/* webpackChunkName: "script" */ './script.js');
});