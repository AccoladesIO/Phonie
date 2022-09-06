'use strict';


document.querySelector('.check').addEventListener('click', function(){
    const phone = String(document.querySelector('.guess').value);
    if (!phone || phone.length < 11) {
        document.querySelector('.text').textContent = '⛔ Unapproved Input!!'
        document.querySelector('.text').style.color = 'red';
        document.querySelector('.text').style.fontWeight = 'bolder';
        document.querySelector('.text').style.letterSpacing = '2px';
    }else if (phone.startsWith('0706') || phone.startsWith('0703') || phone.startsWith('0813') || phone.startsWith('0816') || phone.startsWith('0906') || phone.startsWith('0916') || phone.startsWith('0814') || phone.startsWith('0810') || phone.startsWith('0806')) {
        document.querySelector('.text').textContent = `Your Number ${phone} uses MTN network service provider✨`;
        document.querySelector('.box').style.background = 'url(../img/mtn.jpg)';
        document.querySelector('.box').style.backgroundPosition = 'center';
        document.querySelector('.box').style.backgroundSize = 'cover';
        document.querySelector('.text').style.fontWeight = 'bolder';
        document.querySelector('.text').style.letterSpacing = '2px';
        document.querySelector('.text').style.color = '#e67e22';
    }else if (phone.startsWith('0909') || phone.startsWith('0908') || phone.startsWith('0818') || phone.startsWith('0809') || phone.startsWith('0817')) {
        document.querySelector('.text').textContent = `Your Number ${phone} uses ETISALAT network service provider✨`;
        document.querySelector('.box').style.background = 'url(../img/etisalat.jpg)';
        document.querySelector('.box').style.backgroundPosition = 'center';
        document.querySelector('.box').style.backgroundSize = 'cover';
        document.querySelector('.text').style.fontWeight = 'bolder';
        document.querySelector('.text').style.letterSpacing = '2px';
        document.querySelector('.text').style.color = '#e67e22';
    }else if (phone.startsWith('0907') || phone.startsWith('0708') || phone.startsWith('0802') || phone.startsWith('0902') || phone.startsWith('0812') || phone.startsWith('0808') || phone.startsWith('0701') || phone.startsWith('0912')) {
        document.querySelector('.text').textContent = `Your Number ${phone} uses AIRTEL network service provider✨`;
        document.querySelector('.box').style.background = 'url(../img/airtel.jpg)';
        document.querySelector('.box').style.backgroundPosition = 'center';
        document.querySelector('.box').style.backgroundSize = 'cover';
        document.querySelector('.text').style.fontWeight = 'bolder';
        document.querySelector('.text').style.letterSpacing = '2px';
        document.querySelector('.text').style.color = '#e67e22';
    }else if (phone.startsWith('0811') || phone.startsWith('0805') || phone.startsWith('0905') || phone.startsWith('0807') || phone.startsWith('0811') || phone.startsWith('0705') || phone.startsWith('0815') ||phone.startsWith('0915') ) {
        document.querySelector('.text').textContent = `Your Number ${phone} uses GLO network service provider✨`;
        document.querySelector('.box').style.background = 'url(../img/glo.jpg)';
        document.querySelector('.box').style.backgroundPosition = 'center';
        document.querySelector('.box').style.backgroundSize = 'cover';
        document.querySelector('.text').style.fontWeight = 'bolder';
        document.querySelector('.text').style.letterSpacing = '2px';
        document.querySelector('.text').style.color = '#e67e22';
    }
})
