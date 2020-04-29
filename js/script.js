$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".modal-content").show();
  })

  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
  });


  toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-center',
    'preventDuplicates': false,
    'showDuration': '0',
    'hideDuration': '0',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut',
  }

  $("#submit").click(function(e){
    $("#submit").append('<i class="fas fa-spinner fa-spin"></i>')
    $('.fa-spinner').fadeIn();
    e.preventDefault();
    var $fullname = $('#name').val();
    var $email = $('#email').val();
    var data = {
      fullname: $fullname,
      email: $email
    };
    
      if ($fullname && $email) {
          $.ajax({
          type:'POST',
          url: 'http://api.ebook.talcube.com/register.php',
          data: JSON.stringify(data),
          success: function(success){
            console.log(success);
            toastr.success('Thank you for registering, the ebook has been sent to your mail, kindly check your spam folder if you can’t see it in your inbox.');
            $('.fa-spinner').fadeOut();
          },
          error: function(xhr, status, error) {
            var err = JSON.parse(xhr.responseText);
            console.log(err);
          }
      });
      } else {
        toastr.error('All fields are required');
        $('.fa-spinner').hide();
      }
      
  });
    

  // $("#submit").click(function(){
  //   alert("hello");s
  // })


});


// const fullName = document.getElementById('#name');
// const email = document.getElementById('#email');

// function mySubmitFunction(e) {
//   e.preventDefault();
//   var infomation = {
//     fullName: fullName.val(),
//     email: email.val()
//   }
//   const info = {
//     method: 'POST',
//     data: infomation,
//   }
//   fetch('http://api.ebook.talcube.com/register.php', info)
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonObject) => {
//       console.log(jsonObject)
//       document.write(`ID ${jsonObject.id} was created!`);
//     })
//     .catch((error) => {
//       document.write(error);

//     }
// }


