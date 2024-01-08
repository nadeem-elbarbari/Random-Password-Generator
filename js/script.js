'use strict';

const passwordBox = document.getElementById('password');
const copyBtn = document.getElementById('copy');
const generateBtn = document.getElementById('generate');

let chars =
	'0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let length = 12;

function passwordGenerator() {
	let password = '';
	for (let i = 0; i < length; i++) {
		password += chars[Math.floor(Math.random() * chars.length)];
	}
	// if password not coantain special character then repeat the process until it contains one
  while (!/[!@#$%^&*()]/.test(password)) {
    password = '';
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }
  }
	passwordBox.value = password;
  document.querySelector('.copied').style = 'visibility: hidden';
}

generateBtn.addEventListener('click', passwordGenerator);

copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordBox.value);
	document.querySelector('.copied').style = 'visibility: visible';
});
