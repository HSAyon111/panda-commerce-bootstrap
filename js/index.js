// set color of h2 tags lightblue.
const headings = document.getElementsByTagName('h2');
for (const h2 of headings) {
    h2.style.color = 'lightblue';
}
// set 'backpack' id background color tomato.
document.getElementById('backpack').style.backgroundColor = 'tomato';

// set border radius to 30px of all 'card' class.
const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.borderRadius = '30px';
}

// adding click handler function in a button.
function buyNowBtnClick() {
    console.log('Buy Supply 350 at $120 just now...');
}

// remove buy-now button by using event handler.
const buttons = document.getElementsByClassName('buy-now-button');
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        // button.style.display = 'none';
        event.target.parentNode.removeChild(button);
    });
}

// verifying input value with button enable/disable feature.
//focus
document.getElementById('email-field').addEventListener('focus', function () {
    document.getElementById('subscribe').style.backgroundColor = 'green';
});
//blur
document.getElementById('email-field').addEventListener('blur', function () {
    document.getElementById('subscribe').style.backgroundColor = '#fceae8';
});
//keyup
document.getElementById('email-field').addEventListener('keyup', function () {
    const confirmEmail = document.getElementById('email-field');
    if (confirmEmail.value == 'email') {
        document.getElementById('submit-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit-button').setAttribute('disabled', true);
    }
});
//change
document.getElementById('email-field').addEventListener('change', function (event) {
    if (event.target.value == 'email') {
        document.getElementById('submit-button').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit-button').setAttribute('disabled', true);
    }
});

// change background by using dblclick (double-click) addeventlistener.
document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = '#cbf83e';
    document.getElementById('dbclick-color').style.color = 'red';
});

// swapping 2 images by using 'onmouseover' and 'onmouseout' event handlers.
function newImage() {
    document.getElementById('image').src = 'images/bags/bag-4.png';
}
function originalImage() {
    document.getElementById('image').src = 'images/bags/bag-3.png';
}
