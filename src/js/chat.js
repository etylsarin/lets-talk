import Handlebars from 'handlebars/dist/handlebars.min.js';

const msgInput = document.getElementById('msg-input');

const msgOutput = document.getElementById('msg-output');

const infiniteScroll = document.getElementById('infinite-scroll');

const iframe = document.getElementById('framed-content');

const msgTemplate = Handlebars.compile(document.getElementById('msg-template').innerHTML);

const parseUrl = (text = '') => {
  var urlRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/,
    url = text.match(urlRegex);
  return {
    url: url ? url[0] : null,
    text: text.replace(/<\/?[^>]+(>|$)/g, '')
  }
}

const message = (msg, user) => {
  const timestamp = new Date().toLocaleString();

  const template = document.createElement('template');

  const parsedMsg = parseUrl(msg);

  if (parsedMsg.url) {
    iframe.src = parsedMsg.url;
  }

  template.innerHTML = msgTemplate({
    message: parsedMsg.text,
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
