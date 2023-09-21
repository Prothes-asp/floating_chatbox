//This Part only open chat button and close button purpose
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";

    swal({
      title: "Cancle",
      text: "Cancle the write message",
      icon: "error",
      dangerMode: true,
    })
}


// Form needs-validation js
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()



// Form Validation Send Button with Sweet alert 
// This Script you can uses when you jquary cdn link in head tag
// This cdn is    :  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
$("#submit").click(function(){
  var message = $("#message").val();

  if(message == ''){
      swal({
          title: "Fields Empty",
          text: "Please write a message",
          icon: "warning",
          button: "Ok",
        });
  }
  else{
      swal({
          title: "Success",
          text: "Successfully Send",
          icon: "success",
          button: "Ok",
        });
  }
});