module.exports = function updateMessages() {
    var request = new XMLHttpRequest();
    request.open('GET', endpoint);
    request.onload = function () {
        var data = JSON.parse(request.responseText);
        var messages = document.getElementById('messages');

        while (messages.firstChild) {
            messages.removeChild(messages.firstChild);
        }

        for (var i = 0; i < data.length; i++) {
            var element = document.createElement('li');
            element.textContent = '[From ' + data[i].user + '] ' + data[i].message;
            messages.appendChild(element);
        }
    };
    request.send();
};