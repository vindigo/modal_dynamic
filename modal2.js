var objModal = function(config){
  // build modal openModalNode
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
      modalStyle.setAttribute("href", "modal.css");

      outer.className = "outer";
      middle.className = "middle";
      inner.className = "inner";

      inner.innerHTML = '<span id="defaultCloseBtn">&times;</span>' + config.message;
      middle.append(inner);
      outer.append(middle);
      modal.append(outer);
      theBody.append(modal);



      // Add the modal styles dynamically
      // if (modalStyle.styleSheet){
      //     modalStyle.styleSheet.cssText = modalCSS;
      // } else {
      //     modalStyle.appendChild(document.createTextNode(modalCSS));
      // }
      theHead.appendChild(modalStyle);

      // elements
      var modalBtn = document.getElementById('modalBtn');
      var defaultCloseBtn = document.getElementById('defaultCloseBtn');
      var modalClose = document.querySelector("#cancelBtn");
      var modalSubmit = document.querySelector("#submitBtn");


      // events
      modalBtn.addEventListener( 'click', function(){
        openModal(objConfig.position)
      });
      defaultCloseBtn.addEventListener( 'click', closeModal );
      modalClose.addEventListener( 'click', closeModal );
      modalSubmit.addEventListener( 'click', closeModal );

      // functions
      function openModal(){
        middle.style.verticalAlign = objConfig.position;
        showModal();
      }

      // function openModalMiddle(){
      //   console.log("middle");
      //   middle.style.verticalAlign = "middle";
      //   openModal();
      // }
      //
      // function openModalBottom(){
      //   console.log("bottom");
      //   middle.style.verticalAlign = "bottom";
      //   openModal();
      // }

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

  return {

  }

}

var content = '<form action="" id="form" class="form">' +
    '<div>' +
    '<label for="firstname">First Name</label>' +
    '<input type="text" name="firstname">' +
    '</div>' +
    '<div>' +
    '<label for="lastname">Last Name</label>' +
    '<input type="text" name="lastname">' +
    '</div>' +
    '<div class="button">' +
    '<button id="cancelBtn" class="btn btn-secondary">Cancel</button>' +
    '<button id="submitBtn" type="submit" class="btn btn-success">Submit</button>' +
    '</div>' +
  '</form>'

var objConfig = {
  position: 'middle',
  message: content
}

var myModal = new objModal(objConfig);






  // <div id="modal" class="modal">
  //   <div class="outer">
  //     <div class="middle">
  //       <div class="inner">
  //
  //         <span class="closeBtn">&times;</span>
  //
  //         <form action="" id="form" class="form">
  //           <div>
  //             <label for="firstname">First Name</label>
  //             <input type="text" name="firstname">
  //           </div>
  //           <div>
  //             <label for="lastname">Last Name</label>
  //             <input type="text" name="lastname">
  //           </div>
  //           <div class="button">
  //             <button id="cancelBtn" class="btn btn-secondary">Cancel</button>
  //             <button id="submitBtn" type="submit" class="btn btn-success">Submit</button>
  //           </div>
  //         </form>
  //
  //       </div>
  //     </div>
  //   </div>
  // </div>
