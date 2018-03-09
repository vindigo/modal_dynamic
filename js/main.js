
var content =
  '<div class="formContainer">' +
    '<form>' +
      '<div class="row">' +
        '<div class="col-25">' +
          '<label for="fname">First Name</label>' +
        '</div>' +
        '<div class="col-75">' +
          '<input type="text" id="fname" name="firstname" placeholder="Your name..">' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-25">' +
          '<label for="lname">Last Name</label>' +
        '</div>' +
        '<div class="col-75">' +
          '<input type="text" id="lname" name="lastname" placeholder="Your last name..">' +
        '</div>' +
      '</div>' +
      '<div class="row">' +
        '<div class="col-25">' +
          '<label for="subject">Subject</label>' +
        '</div>' +
        '<div class="col-75">' +
          '<textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>' +
        '</div>' +
      '</div>' +
    '</form>' +
  '</div>'

var msg = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"

var config = {
  position: 'middle',
  content: content,
  submitBtn: true
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        var myModal = new objModal(config),
            modalBtn = document.getElementById('modalBtn');

        if (modalBtn){
          modalBtn.addEventListener( 'click', function(){ myModal.openModal(config.position) });
        }
    }
}
