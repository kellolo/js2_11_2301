'use strict';
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const textarea = document.getElementById('textarea');
const button = document.getElementById('btnGetVal');
const rgName = /^[A-zА-я]+$/;
const rgPhone = /^\+[7|8]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
const rgEmail = /^([A-zА-я0-9_-]+\.)*[A-zА-я0-9_-]+@[A-zА-я0-9_-]+(\.[A-zА-я0-9_-]+)*\.[A-zА-я]{2,6}$/;
const rgText = /^[а-яА-ЯёЁa-zA-Z]+$/;


document.addEventListener("DOMContentLoaded", _init);

function _init() {
    button.addEventListener('click', refactorForm);
}

function refactorForm() {
    let validName = name.value;
    let validPhone = phone.value;
    let validEmail = email.value;
    let validTextarea = textarea.value;

    if (validName.search(rgName) === -1) {
        name.classList.add('falser');
    } else {
        name.classList.add('success');
    }
    if (validPhone.search(rgPhone) === -1) {
        phone.classList.add('falser');
    } else {
        phone.classList.add('success');
    }
    if (validEmail.search(rgEmail) === -1) {
        email.classList.add('falser');
    } else {
        email.classList.add('success');
    }
    if (validTextarea.search(rgText) === -1) {
        textarea.classList.add('falser');
    } else {
        textarea.classList.add('success');
    }
}