/* Ventana emergente de Explorar */

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});
close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

/*Ventana emergente de Firma */

const firma = document.getElementById('firma');
const firma_container = document.getElementById('firma_container');
const close1 = document.getElementById('close1');

firma.addEventListener('click', () => {
    firma_container.classList.add('show');
});
close1.addEventListener('click', () => {
    firma_container.classList.remove('show');
});

/*Ventana emergente de options */

const options = document.getElementById('options');
const optionscont = document.getElementById('optionscont');
const close2 = document.getElementById('close2');

options.addEventListener('click', () => {
    optionscont.classList.add('show');
});
close2.addEventListener('click', () => {
    optionscont.classList.remove('show');
});
