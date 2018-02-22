
// elements
var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutsideModal)

// functions
function openModal(){
  modal.style.display = 'block';
}

function closeModal(){
  modal.style.display = 'none';
}

function clickOutsideModal(e){
  if (e.target.classList.contains('middle')){
      modal.style.display = 'none';
  }
}
