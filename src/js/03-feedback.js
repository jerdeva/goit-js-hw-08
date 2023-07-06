import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', _.throttle(handlerInput, 500));

let data = JSON.parse(localStorage.getItem('feedback-form-state') || '{}');

function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

window.addEventListener('load', handlerLoad);

function handlerLoad() {
  Object.keys(data).forEach(name => {
    const inp = form.querySelector(`[name="${name}"]`);
    if (inp) inp.value = data[name];
  });
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  data = {};
}
