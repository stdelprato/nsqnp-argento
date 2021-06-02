const writeEvent = (text) => {
    // <ul> element
    const parent = document.querySelector('#mensajes');
    
    // <li> element
    const el = document.createElement('li');
    el.innerText = text;
    
    parent.appendChild(el);
};

const onFormSubmitted = e => {
    e.preventDefault();

    const input = document.querySelector('#message-input');
    const text = input.value;
    input.value = '';

    sock.emit('message', text);
};

writeEvent('buenass')

const sock = io();
sock.on('message', writeEvent)

document.querySelector('#chat-form').addEventListener('submit', onFormSubmitted);