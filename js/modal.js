var myModal = (function(){

  // elements
  var modal = document.getElementById('modal');
  var modalMiddle = document.getElementsByClassName('middle')[0];

  var modalTopBtn = document.getElementById('modalTopBtn');
  var modalMiddleBtn = document.getElementById('modalMiddleBtn');
  var modalBottomBtn = document.getElementById('modalBottomBtn');

  var submitBtn = document.getElementById('submitBtn');
  var closeBtn = document.getElementById('cancelBtn');  

  // events
  modalTopBtn.addEventListener( 'click', openModalTop );
  modalMiddleBtn.addEventListener( 'click', openModalMiddle );
  modalBottomBtn.addEventListener( 'click', openModalBottom );

  submitBtn.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);
  // window.addEventListener('click', clickOutsideModal) optional

  // functions
  function openModalTop(){
    modalMiddle.style.verticalAlign = "top";
    openModal();
  }

  function openModalMiddle(){
    modalMiddle.style.verticalAlign = "middle";
    openModal();
  }

  function openModalBottom(){
    modalMiddle.style.verticalAlign = "bottom";
    openModal();
  }

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

  return {
    openModalTop: openModalTop
  }
})();
