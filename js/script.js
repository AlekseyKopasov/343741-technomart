var feedback = document.querySelector('.modal-write-us');
var  modalMap = document.querySelector('.modal-map');
var  modalFeedback = document.querySelector('.modal-feedback');
var  modal = document.querySelector('.modal');
var  close = document.querySelector('.modal-close');
var  userName = modalFeedback.querySelector('#name');
var userMail = modalFeedback.querySelector('#mail');
var form = modalFeedback.querySelector('form');
var openMap = document.querySelector('.modal-open-map');
var modalMap = document.querySelector('.modal-map');
var mapClose = modalMap.querySelector('.modal-close');
var addToBasket = document.querySelectorAll('.btn-buy');
var modalPurchase = document.querySelector('.purchase');


var isStorageSupport = true;
var storageUserName = '';


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


if (modalPurchase) {
    var purchasecClose = modalPurchase.querySelector('.modal-close');

		for (var i = 0; i < addToBasket.length; i++) {
			addToBasket[i].addEventListener('click', function (evt) {
				evt.preventDefault();
				modalPurchase.classList.add('modal-show');
			});
		}

  purchasecClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalPurchase.classList.remove('modal-show');
  });

  window.addEventListener('keydown', function (evt) {
			if (evt.keyCode === 27) {
				evt.preventDefault();
				if (modalPurchase.classList.contains('modal-show')) {
					modalPurchase.classList.remove('modal-show');
				}
			}
		});
  }
