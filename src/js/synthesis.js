// Pre-defined voice of choice
var voice = 'Google UK English Male';

// return a voice from list
const getVoice = value => window.speechSynthesis.getVoices().filter(
  voice => voice.name.toUpperCase() == value.toUpperCase()
)[0];

// say a sentence
const talk = msg => {
  // Create a new instance of SpeechSynthesisUtterance.
  var sentence = new SpeechSynthesisUtterance();

  // Set the message.
  sentence.text = msg;

  // Set the attributes.
  sentence.volume = 1;
  sentence.rate = 1;
  sentence.pitch = 1;

  // Set the voice.
  sentence.voice = getVoice(voice);

  // Queue this utterance.
  window.speechSynthesis.speak(sentence);
};

// Force to load browser voices
window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
};

export default talk;
