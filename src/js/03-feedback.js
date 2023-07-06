import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', _.throttle(handlerInput, 500));

const data = {};

function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

const dataSaver = localStorage.getItem('feedback-form-state');

window.addEventListener('load', handlerLoad);

function handlerLoad() {
  let data = JSON.parse(localStorage.getItem('feedback-form-state') || '{}');
  Object.keys(data).forEach(name => {
    const inp = form.querySelector(`[name="${name}"]`);
    if (inp) inp.value = data[name];
  }); 
  console.log();
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit() {
  console.log(localStorage.getItem('feedback-form-state'));
  localStorage.removeItem('feedback-form-state');
}
