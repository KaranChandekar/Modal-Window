// 'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

for (i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closeMOdal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeMOdal);

overlay.addEventListener('click', closeMOdal);
