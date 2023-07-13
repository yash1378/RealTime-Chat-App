
const socket = io();
// let name1="yash";
// do {
// let name1 = prompt('Please enter your name: ')
let name1="Yash";
// } while(!name1)


let element = document.getElementById('btn');
let textarea = document.getElementById('messageinp');
let messagearea = document.getElementById('container202');

// function myFunction() {
//   sendMessage(textarea.value);
//   textarea.value = '';
// }
const sendForm = document.getElementById("sendcontainer");
sendForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  sendMessage(textarea.value);
  textarea.value = '';
})

function sendMessage(mess) {
  let msg = {
    user: name1,
    message: mess.trim()
  };

  // Append the message
  appendMessage(msg, 'message_right');

  // Send to server
  socket.emit('message', msg);
  console.log("sent to server")
}

function appendMessage(msg, type) {
  let maindiv = document.createElement('div')
  let className = type;
  maindiv.classList.add(className)

  let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
  `;

  maindiv.innerHTML = markup
  messagearea.appendChild(maindiv)
}

socket.on('message', (msg) => {
  console.log(msg);
  appendMessage(msg, 'message_left');
});

