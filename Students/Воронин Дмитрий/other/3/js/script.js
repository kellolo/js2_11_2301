'use strict';
const input = document.getElementById('textVal');
const button = document.getElementById('btnGetVal');

document.addEventListener("DOMContentLoaded", _init);

function _init() {
    button.addEventListener('click', refactorStr);
}

function refactorStr() {
    let clearStr = input.value;
    clearStr = clearStr.replace(/[\s|;]'\b/gm, ' \`');
    clearStr = clearStr.replace(/\b'(?=[\s|;])|^'|'$|\b'(?=[\.|\,])/gm, '\"');
    return alert(`Результат: ${clearStr}`);
}