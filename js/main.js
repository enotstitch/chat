const settingsBtn = document.querySelector('.chat__settings');
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

closeBtns.forEach((btn) => {
	btn.addEventListener('click', closeModal);
});
