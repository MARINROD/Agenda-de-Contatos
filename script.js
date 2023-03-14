const modalPage = document.querySelector('.all-modal');
const addNewContact = document.querySelector('.add-new-contact');
const close = document.querySelector('.close');
const form = document.querySelector('form');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputPhone = document.querySelector('#input-phone');
const contacts = document.querySelector('.contacts');
const edit = document.querySelector('.edit');
const deleteContact = document.querySelector('.delete');
const deleteModal = document.querySelector('.delete-modal');
const btnDeleteYes = document.querySelector('#yes');
const btnDeleteNo = document.querySelector('#no');
const btnAdd = document.querySelector('.add-confirm');


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

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (inputName.length < 3 || validateEmail(inputEmail.value) === false || inputPhone.length < 8) {
        return;
    }

    const contact = document.createElement('div');
    const name = document.createElement('span');
    const email = document.createElement('span');
    const phone = document.createElement('span');
    const edit = document.createElement('span');
    const deleted = document.createElement('span');
    const editIonIcon = document.createElement('ion-icon');
    const deleteIonIcon = document.createElement('ion-icon');

    contact.classList.add('card');
    name.textContent = inputName.value;
    email.textContent = inputEmail.value;
    phone.textContent = inputPhone.value;
    editIonIcon.name = 'settings-outline';
    deleteIonIcon.name = 'trash-outline';
    edit.appendChild(editIonIcon);
    deleted.appendChild(deleteIonIcon);
    contact.appendChild(name);
    contact.appendChild(email);
    contact.appendChild(phone);
    contact.appendChild(edit);
    contact.appendChild(deleted);
    contacts.appendChild(contact);
    modalPage.style.visibility = 'hidden';

    deleted.addEventListener('click', () => {
        deleteModal.style.visibility = 'visible';
        btnDeleteYes.addEventListener('click', () => {
            contacts.removeChild(contact);
            deleteModal.style.visibility = 'hidden';
        })
    })

})

btnDeleteNo.addEventListener('click', () => {
    deleteModal.style.visibility = 'hidden';
})


