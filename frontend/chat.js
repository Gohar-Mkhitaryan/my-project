const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('20micro',input.value )
   input.value = '';
}
});
socket.on('20microBackend', ( inputValue ) => {
    const item = document.createElement('li');
    item.textContent = inputValue;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });