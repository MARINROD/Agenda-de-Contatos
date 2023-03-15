const modalPage = document.querySelector('.all-modal');
const addNewContact = document.querySelector('.add-new-contact');
const close = document.querySelectorAll('.close');
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
const editModal = document.querySelector('.edit-modal');
const nameEdit = document.querySelector('.edit-modal-content #input-name');
const emailEdit = document.querySelector('.edit-modal-content #input-email');
const phoneEdit = document.querySelector('.edit-modal-content #input-phone');
const closeEdit = document.querySelector('.edit-modal-content .close');
const btnEditConfirm = document.querySelector('.edit-confirm');


addNewContact.addEventListener('click', () => {
    modalPage.style.visibility = 'visible';
    inputEmail.value = '';
    inputName.value = '';
    inputPhone.value = '';
})

function btnClose() {
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', () => {
            modalPage.style.visibility = 'hidden';
            editModal.style.visibility = 'hidden';
        })
    }
}
btnClose();


function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (inputName.value.length < 2 || validateEmail(inputEmail.value) === false || inputPhone.value.length !== 11) {
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

    if (phone.textContent[0] + phone.textContent[1] === '71') {
        name.style.color = 'blue';
    }

    deleted.addEventListener('click', () => {
        deleteModal.style.visibility = 'visible';
        btnDeleteYes.addEventListener('click', () => {
            contacts.removeChild(contact);
            deleteModal.style.visibility = 'hidden';
        })
    })

    edit.addEventListener('click', () => {
        btnClose();
        editModal.style.visibility = 'visible';
        nameEdit.value = name.textContent;
        emailEdit.value = email.textContent;
        phoneEdit.value = phone.textContent;

        btnEditConfirm.addEventListener('click', () => {
            if ((nameEdit.value !== name.textContent || emailEdit.value !== email.textContent || phoneEdit.value !== phone.textContent) && nameEdit.value.length > 1 && phoneEdit.value.length === 11 && validateEmail(inputEmail.value) === true) {
                name.textContent = nameEdit.value;
                email.textContent = emailEdit.value;
                phone.textContent = phoneEdit.value;
                editModal.style.visibility = 'hidden';

            } else {
                console.log('deu ruim');
                return;
            }

        })


    })
})

btnDeleteNo.addEventListener('click', () => {
    deleteModal.style.visibility = 'hidden';
})

