console.log('Welcome to the 2025 Hackathon!');

let sayhiButton = document.getElementById('sayhi-button');

sayhiButton.addEventListener('click', sayusersname);

function sayusersname() {
  let nametextbox = document.getElementById('users-name');
  let username = nametextbox.value;

  let greeting = document.getElementById('greeting');
  greeting.innerText = 'Hello, ' + username;
}
