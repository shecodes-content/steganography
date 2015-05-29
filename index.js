(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports.pkg = PKGJSON={"name":"steganography","version":"1.0.0","description":"how to hide secrets in plain sight","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git@github.com:shecodes-content/steganography.git"},"brain":{"provides":["steganography","Francis-Bacon","baconian-cipher","encryption"],"requires":["message","encoding"],"track":"yellow"},"author":"Jan Bölsche <jan@lagomorph.de> (http://regular.codes)","license":"CC-SA-BY-3.0","bugs":{"url":"https://github.com/shecodes-content/steganography/issues"},"homepage":"https://github.com/shecodes-content/steganography"}/*PKGJSON*/;
getHTML = module.exports.getHTML = function() {
    return "<p>Crypto 01  steganography example:  Baconian Cipher</p>\n<h1><a name=\"steganography_hidden-in-plain-sight\" class=\"anchor\" href=\"#steganography_hidden-in-plain-sight\"><span class=\"header-link\"></span></a>Hidden in plain sight</h1><p>Having a secret code and a seal is an improvement over unsecured messaging. However, if someone can steal the message and discover that it is encrypted, that someone might use a lot of resources to crack the code, because the fact that the message was encoded is an indicator for its importance. Even worse: the recipient might not get the message precisely because that bad person in the middle (typically called ‘man in the middle’) considers it important and therefore holds it back. It would be much more desirable to hide the fact that the message is important by hiding the fact that it is encrypted. That however can only work when the encrypted message looks like a normal, profane message to the uninitiated.</p>\n<p>In 1605, multi-talent Francis Bacon invented a method of doing just that. It is called the Baconian Cipher. (Cipher is another term for ‘method of encryption’’ and encryption is another term for ‘encoding for the purpose of secrecy’)</p>\n<p>Read <a href=\"http://en.wikipedia.org/wiki/Bacon%27s_cipher\">this article</a> to find out how it works.</p>\n";
};
getDocumentFragment = module.exports.getDocumentFragment = function() {
    var html = getHTML();
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    div.innerHTML = html;
    while (div.firstChild) frag.appendChild(div.firstChild);
    
    return frag;
};

// event-based JSONP support
if (typeof(window) !== 'undefined' && window.events) {
    window.events.emit('append_episode', module.exports);
}

},{}]},{},[1]);
