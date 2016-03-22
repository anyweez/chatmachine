module.exports = function sendMessage() {
    var request = new XMLHttpRequest();
    request.open('POST', endpoint);
    request.send(JSON.stringify({
        name: document.getElementById('username').value,
        message: document.getElementById('message').value,
    }));
};