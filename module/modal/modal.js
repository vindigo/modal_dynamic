var objModal = function(config){

  var modal = document.createElement("div"),
      modalStyle = document.createElement("link"),
      outer = document.createElement("div"),
      middle = document.createElement("div"),
      inner = document.createElement("div"),

      theBody = document.getElementsByTagName('body')[0],
      theHead = document.getElementsByTagName('head')[0];

      modal.id = "modal";
      modal.className = "modal";
      modalStyle.id = "modalStyle"
      modalStyle.setAttribute("rel", "stylesheet");
      modalStyle.setAttribute("href", "module/modal/modal.css");

      outer.className = "outer";
      middle.className = "middle";
      inner.className = "inner";

      inner.innerHTML = '<div class="modalContainer"><i id="defaultCloseBtn" class="fa fa-close"></i></div><div>' + config.message + '</div>';
      middle.append(inner);
      outer.append(middle);
      modal.append(outer);
      theBody.append(modal);
      theHead.appendChild(modalStyle);


      // elements
      var defaultCloseBtn = document.getElementById('defaultCloseBtn');
      var modalClose = document.querySelector("#cancelBtn");
      var modalSubmit = document.querySelector("#submitBtn");


      // events
      modalBtn.addEventListener( 'click', function(){
        openModal(objConfig.position)
      });
      defaultCloseBtn.addEventListener( 'click', closeModal );
      if (modalClose){
        modalClose.addEventListener( 'click', closeModal );
      }

      if (modalSubmit){
        modalSubmit.addEventListener( 'click', closeModal );
      }


      // functions
      function openModal(){
        middle.style.verticalAlign = objConfig.position;
        showModal();
      }

      function showModal(){
        modal.style.display = 'block';
      }

      function closeModal(){
        modal.style.display = 'none';
        removeModal();
      }

      function clickOutsideModal(e){
        if (e.target.classList.contains('middle')){
            removeModal();
        }
      }

      function removeModal(){
            modal.remove();
            modalStyle.remove();
      }

}
