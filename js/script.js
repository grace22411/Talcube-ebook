$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".modal-content").show();
  })

  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
  });


  $("#submit").click(function(e){
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
            alert('Success registering');
          },
          error: function(xhr, status, error) {
            var err = JSON.parse(xhr.responseText);
            console.log(err);
          }
      });
      } else {
        alert('All fields are required')
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


