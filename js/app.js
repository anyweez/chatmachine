/* jslint browser: true */
//var chai = require('chai');     // importing things with npm
var endpoint = 'http://chat.queencityiron.com/messages';

var update = require('./get'); // importing local modules
var send = require('./send'); // importing local modules

window.addEventListener('load', function () {
    update();

    // update()
    document.getElementById('update').addEventListener('click', update /* update() */ );
    document.getElementById('send').addEventListener('click', send /* send() */ );
});