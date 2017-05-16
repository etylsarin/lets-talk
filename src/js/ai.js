import chatbotJSON from './chatbot.json';

const makeRequest = (method = 'GET', url, data = '') => {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.onload = function() {
            if (xhr.status == 200) {
                resolve(xhr.response);
            }
            else {
                reject(Error(xhr.statusText));
            }
        };

        xhr.onerror = function() {
            reject(Error("Something went wrong ... "));
        };

        xhr.send(data);
    });
};

const communicate = msg => makeRequest('POST', 'http://localhost:3978/api/messages', JSON.stringify(Object.assign({}, chatbotJSON, {text: msg})));

export default communicate;
