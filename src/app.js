require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./css/chat.css');
require('./images/user.png');
require('./images/bot.png');

import recognizer from './js/recognition.js';
import talk from './js/synthesis.js';
import message from './js/chat.js';
import communicate from './js/ai.js';

// Get the text input element.
const msgInput = document.getElementById('msg-input');

// Get the voice control toggle.
const voiceControl = document.getElementById('voice-control');

// Get the whole form.
const chatForm = document.getElementById('chat-form');

const user = {
  type: 'user',
  name: 'Unknown user',
  avatar: 'images/user.png'
};

const bot = {
  type: 'bot',
  name: 'Monster',
  avatar: 'images/bot.png'
};

const botSays = response => {
  talk(response);
  message(response, bot);
};

// Set up an event listener for when the chat form is submitted.
chatForm.addEventListener('submit', (e) => {
  const msg = msgInput.value;

  e.preventDefault();

  if (msg.length > 0) {
    message(msg, user);
    communicate(msg).then(
      function (responseText) {
        const response = JSON.parse(responseText);
        botSays(response.text);
      }, function (error) {
        botSays('I am sorry, but I have a serious brain injury.');
      }
    );
  }
});

// Set up an event listener for when the chat form is submitted.
voiceControl.addEventListener('change', (e) => {
  if (e.target.checked) {
    recognizer.start();
  } else {
    recognizer.stop();
  }
});
