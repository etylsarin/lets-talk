import Speech from 'speechjs';

// Get the text input element.
const msgInput = document.getElementById('msg-input');

// Get the voice control toggle.
const voiceControl = document.getElementById('voice-control');

// Get the whole form.
const chatForm = document.getElementById('chat-form');

const recognizer = new Speech({});

recognizer
  .on('start', () => {
    console.log('started');
  })
  .on('end', () => {
    console.log('ended');
  })
  .on('error', e => {
    console.log(e.error);
  })
  .on('interimResult', msg => {
    msgInput.value = msg;
  })
  .on('finalResult', msg => {
    const submitEvent = new Event('submit');

    msgInput.value = msg;
    voiceControl.checked = false;

    // deffer form submition
    window.setTimeout(() => {
      chatForm.dispatchEvent(submitEvent);
    }, 500);
  });

export default recognizer;
