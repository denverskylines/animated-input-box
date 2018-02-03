var isEmpty = true;
var shirts;
var animatedText;
var customInput;
var mockCursor;

window.addEventListener('load',() => {

    mockCursor = document.querySelector('#mock-cursor');
    customInput = document.querySelector('#custom-input');
    shirts = document.querySelector('#number-of-shirts');
    animatedText = document.querySelector('#animated-text');

    mockCursor.addEventListener('click',(event) => {

        shirts.focus();

        if (isEmpty) {

            emptyInputField();

        }

        zoomIn();

    });

    shirts.addEventListener('keyup', (keyEvent) => {

        setWidth(shirts.value);
        isEmpty = shirts.value.length == 0;
        isEmpty ? shirts.style.color = 'rgba(255, 255, 255, 0.2)' : shirts.style.color = 'white';

    });

    shirts.addEventListener('keydown', (keyEvent) => {

        isEmpty = shirts.value.length == 0;

    });

    shirts.addEventListener('focus', (event) => {

        if (isEmpty) {

          emptyInputField();

        }

        zoomIn();

    });

    shirts.addEventListener('blur', (event) => {

        isEmpty = shirts.value.length == 0;

        if (isEmpty) {

            setDefaultValue();

        }

        zoomOut();

    });

});

function emptyInputField() {

    shirts.value = '';
    shirts.style.width = '1.2em';

    isEmpty = true;

}

function zoomIn() {

    if (! window.matchMedia("(max-width: 780px)").matches) {

        animatedText.style.transform = 'scale(1.2,1.2)';

    }

}

function zoomOut() {

    animatedText.style.transform = 'scale(1,1)';

}

function setDefaultValue() {

    shirts.style.width = '2.1em';
    shirts.value = '100';
    shirts.style.color = 'rgba(255, 255, 255, 0.2)';

}

function setWidth(value) {

    shirts.style.width = shirts.value.length == 0 ? shirts.value.length = '0.5em' : (shirts.value.length * 0.8) + 'em';

}