const open = document.querySelector('#btn_open');
const close = document.querySelector('#btn_close');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const btn_login = document.querySelector('.login');
const checkbox0 = document.querySelector('.checkbox');
const warn0 = document.querySelector('.warn');


function Open_modal() {
    setTimeout(() => {
        console.log('timeout is over')

        modal.style.display = 'block';
        modal.style.zIndex = 500;
        body.style.backdropFilter = 'blur(5px)';
    }, 1000)
}

function Close_modal() {
    modal.style.display = 'none';
}

btn_login.addEventListener('click', function(e) {
    e.preventDefault();
    if (!checkbox0.checked) {
        warn0.style.display = 'block';
    } else {
        warn0.style.display = 'none';
        alert('form sent')
        setTimeout(() => {
            location = '../chat/chat.html';
        }, 1000)
    }
})






