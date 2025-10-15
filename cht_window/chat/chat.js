const time = document.querySelector('.time');
const input_new_chat = document.querySelector('.new_chat');
const btn_add_chat = document.querySelector('.add_chat');
const warn1 = document.querySelector('#warn_empty_input_newchat');
const chats = document.querySelector('.chats');
let input_msg = document.querySelector('#input_msg');
const btn_msg = document.querySelector('#btn_msg');
const socket = new WebSocket('ws://localhost:8080');
const mychat1 = document.querySelector('.mychat1');


function updateTime() {
    const now = new Date();
    const current_time = now.toLocaleTimeString(); 
    time.textContent = current_time;
}

updateTime();
setInterval(updateTime, 1000); 


btn_add_chat.addEventListener('click', () => {
    if (input_new_chat.value === '') {
        warn1.textContent = 'Enter name of new chat you dinozavr';
        warn1.style.color = 'red';
    } else {
        warn1.textContent = '';
        let name_newchat = input_new_chat.value;
        new_chat = document.createElement('div');
        new_chat.textContent = name_newchat;
        new_chat.style.overflow = 'hidden'
        Object.assign(new_chat.style, {
            margin: '20px 0 0 15px',
            color: '#fff',
            fontSize: '17px',
            fontWeight: '500',
            border: '2px solid rgb(3, 3, 48)',
            borderRadius: '5px',
            width: '200px',
            height: '40px',
            padding: '10px',
            backgroundColor: 'rgba(113, 168, 196, 1)',
        });

        chats.prepend(new_chat);
        input_new_chat.value = '';
        
    }
})


btn_msg.addEventListener('click', function(e) {
    if (input_msg.value.trim() === '') {
        return;
    } else {
        let msg = input_msg.value.trim();
        socket.send(msg);
        input_msg.value = '';
    }
})

socket.addEventListener('message', e => {
    const msg = document.createElement('div');
    msg.textContent = e.data;
    Object.assign(msg.style, {
            marginLeft: '78%',
            float: 'right',
            color: '#fff',
            fontSize: '17px',
            fontWeight: '500',
            border: '2px solid rgb(3, 3, 48)',
            borderRadius: '5px',
            width: '200px',
            height: '40px',
            padding: '10px',
            backgroundColor: 'rgba(175, 146, 96, 1)',
            overflow: 'hidden'
        });
    mychat1.appendChild(msg);
});















