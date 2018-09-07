var feedback = document.querySelector('.modal-write-us');
    modalMap = document.querySelector('.modal-map');
    modalFeedback = document.querySelector('.modal-feedback');
    modal = document.querySelector('.modal');
    close = document.querySelector('.modal-close');
    userName = modalFeedback.querySelector('#name');
    userMail = modalFeedback.querySelector('#mail');
    form = modalFeedback.querySelector('form');
    openMap = document.querySelector('.modal-open-map');
    modalMap = document.querySelector('.modal-map');
    mapClose = modalMap.querySelector('.modal-close');
    addToBasket = document.querySelectorAll('.btn-buy');
    modalPurchase = document.querySelector('.purchase');
    purchasecClose = modalPurchase.querySelector('.modal-close');

    isStorageSupport = true;
    storageUserName = '';


/* Попап с формой обратной связи */

try {
  storageUserName = localStorage.getItem('userName');
} catch (err) {
  isStorage = false;
}

feedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  userName.focus();
} );

if (storageUserName) {
  userName.value = storageUserName;
} else {
  storageUserName.focus();
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if(!userName.value || !userMail.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('userName', userName.Value);
      localStorage.setItem('userMail', userMali.Value);
    }
  }
}
);

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    if(modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});

/* Попап с картой */

openMap.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
} );

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    if(modalMap.classList.contains('modal-show')) {
      evt.preventDefault();
      modalMap.classList.remove('modal-show');
    }
  }
});


/* Попап: Добавлено в корзину */

addToBasket.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalPurchase.classList.add('modal-show');
} );

purchaseClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalPurchase.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    if(modalPurchase.classList.contains('modal-show')) {
      evt.preventDefault();
      modalPurchase.classList.remove('modal-show');
    }
  }
});
