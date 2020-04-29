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

  $("#submit").on('click',function(e){
    $('.fa-spinner').fadeIn();
    e.preventDefault();
    var $fullname = $('#name').val();
    var $email = $('#email').val();
    var data = {
      fullname: $fullname,
      email: $email
    };
    
      if ($fullname && $email) {
        $('.fa-spinner').remove()
        $("#submit").append('<i class="fas fa-spinner fa-spin"></i>')
        
          $.ajax({
          type:'POST',
          url: 'http://api.ebook.talcube.com/register.php',
          data: JSON.stringify(data),
          success: function(success){
            toastr.success('Thank you for registering, the ebook has been sent to your mail, kindly check your spam folder if you can’t see it in your inbox.');
            $('.fa-spinner').fadeOut();
          },
          error: function(xhr, status, error) {
            var err = JSON.parse(xhr.responseText);
          }
      });
      } else {
        toastr.error('All fields are required');
        $('.fa-spinner').hide();
      }
      
  });
    


});


