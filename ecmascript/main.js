var shirts = null;

window.addEventListener('load',() => {

    shirts = document.querySelector('#number-of-shirts');

    shirts.addEventListener('keyup',(keyEvent) => {

        console.log(keyEvent.key);

        setWidth(shirts.value);

    });

    shirts.select();

});

function setWidth(value) {

    if (value < 10) shirts.style.width = '1em';
    if (value > 9 && value < 100) shirts.style.width = '2em';
    if (value > 99 && value < 1000) shirts.style.width = '3em';
    if (value > 999 && value < 10000) shirts.style.width = '4em';

    console.log(shirts.style.width);

}