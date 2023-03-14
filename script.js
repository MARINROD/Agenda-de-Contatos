const modalPage = document.querySelector('.all-modal');
const addNewContact = document.querySelector('.add-new-contact');
const close = document.querySelector('.close');
const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputPhone = document.querySelector('#input-phone');

addNewContact.addEventListener('click', () => {
    modalPage.style.visibility = 'visible';
})
close.addEventListener('click', () => {
    modalPage.style.visibility = 'hidden';
})

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (inputName.length < 3 || validateEmail(inputEmail.value) === false || inputPhone.length < 8) {
        console.log('deu ruim');
        return;
    }
})

