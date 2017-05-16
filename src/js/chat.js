import Handlebars from 'handlebars/dist/handlebars.min.js';

const msgInput = document.getElementById('msg-input');

const msgOutput = document.getElementById('msg-output');

const infiniteScroll = document.getElementById('infinite-scroll');

const msgTemplate = Handlebars.compile(document.getElementById('msg-template').innerHTML);

const message = (msg, user) => {
  const timestamp = new Date().toLocaleString();

  const template = document.createElement('template');

  template.innerHTML = msgTemplate({
    message: msg,
    avatar: user.avatar,
    name: user.name,
    date: timestamp
  });

  msgOutput.appendChild(template.content.firstElementChild);
  msgInput.value = '';

  window.setTimeout(() => {
    infiniteScroll.scrollTop = infiniteScroll.scrollHeight;
  }, 100);
}

export default message;
