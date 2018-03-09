var objModal = function(config){

  var modal = document.createElement("div"),
      modalStyle = document.createElement("link"),
      outer = document.createElement("div"),
      middle = document.createElement("div"),
      inner = document.createElement("div"),

      theBody = document.getElementsByTagName('body')[0],
      theHead = document.getElementsByTagName('head')[0],
      buttons = "";

  modal.id = "modal";
  modal.className = "modal";
  modalStyle.id = "modalStyle"
  modalStyle.setAttribute("rel", "stylesheet");
  modalStyle.setAttribute("href", "module/modal/modal.css");

  outer.className = "outer";
  middle.className = "middle";
  inner.className = "inner";

  config.submitBtn = config.submitBtn || false;
  inner.innerHTML = '<div class="content">' + config.content + '</div>' +
    '<div id="buttons" class="row">' +
    '<button type="button" id="cancel" class="btn btn-secondary right">Cancel</button>' +
    '</div>';

  middle.append(inner);
  outer.append(middle);
  modal.append(outer);
  theBody.append(modal);
  theHead.appendChild(modalStyle);

  addButtons();

  // elements
  var modalClose = document.querySelector("#cancel");
  var modalSubmit = document.querySelector("#submit");


  // events
  // if (modalBtn){
  //   modalBtn.addEventListener( 'click', function(){ openModal(config.position) });
  // }

  if (modalClose){
    modalClose.addEventListener( 'click', closeModal );
  }

  if (modalSubmit){
    modalSubmit.addEventListener( 'click', closeModal );
  }


  // functions
  function openModal(){
    middle.style.verticalAlign = config.position;
    showModal();
  }

  function showModal(){
    modal.style.display = 'block';
  }

  function closeModal(){
    modal.style.display = 'none';
    // removeModal();
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

  function addButtons(){
    if (config.submitBtn){
      buttons = '<button type="button" id="submit" class="btn btn-primary right">Submit</button>' +
        '<button type="button" id="cancel" class="btn btn-secondary right">Cancel</button>'
    } else {
      buttons = '<button type="button" id="cancel" class="btn btn-secondary right">Cancel</button>';
    };

    var row = document.getElementById("buttons");
    row.innerHTML = buttons;
  }

  return { openModal: openModal};
}
