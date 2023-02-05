import Cookies from 'js-cookie';

const settingsBtn = document.querySelector('.chat__settings');
const enterCodeBtn = document.querySelector('.chat__send--enter');
const closeBtns = document.querySelectorAll('.modal__close');
let modal;
let modalWrap;

function openModal(id) {
	modal = document.getElementById(id);
	modalWrap = modal.querySelector('.modal__wrap');

	modal.classList.add('open');
	modalWrap.classList.add('open');
}

function closeModal() {
	modal.classList.remove('open');
	modalWrap.classList.remove('open');
}

settingsBtn.addEventListener('click', () => {
	openModal('settings');
});

enterCodeBtn.addEventListener('click', () => {
	openModal('confirmation');
});

closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal);
});

// !

const chatForm = document.querySelector('.chat__form');

function sendMessage() {
	const dialogue = document.querySelector('.dialogue');
	const message = document.getElementById('myMessage');
	let messageBlock = document.createElement('div');
	const messageInput = document.querySelector('.chat__message');

	if (messageInput.value === '') {
		return;
	}

	let messageText = messageInput.value;

	messageBlock.className =
		'dialogue__message dialogue__message--my message message--sent';

	messageBlock.append(message.content.cloneNode(true));

	dialogue.append(messageBlock);
	let messageBlockText = messageBlock.querySelector('.message__text');
	messageBlockText.textContent = messageText;
	messageInput.value = '';
}

chatForm.addEventListener('submit', (event) => {
	event.preventDefault();
	sendMessage();
});

// !

const menuOpenBtn = document.querySelector('.chat__menu-btn');

function openMenu() {
	const menu = document.querySelector('.chat__menu');
	menu.classList.toggle('menu-open');
	event.target.classList.toggle('chat__menu-btn--active');
}

menuOpenBtn.addEventListener('click', openMenu);

// !

const url = 'https://edu.strada.one/api/user';
let user;

async function getCode() {
	const emailInput = document.querySelector('.modal__email');
	user.email = emailInput.value;

	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(user),
	});

	let result = await response.json();
	console.log(result);
}

let btnCode = document.querySelector('.chat__send--code');

btnCode.addEventListener('click', (event) => {
	event.preventDefault();
	getCode();
});

// !

async function login() {
	const tokenInput = document.querySelector('.chat__send--enter-code');
	const token = tokenInput.value;
	Cookies.set('token', token);

	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
			'Authorization': `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	});

	let result = await response.json();
	console.log(result);
}

const authorizationBtn = document.querySelector('.chat__send--authorization');

authorizationBtn.addEventListener('click', (event) => {
	event.preventDefault();
	login();
});
