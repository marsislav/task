

        $(".nav li").hover(function () {
            $(this).find(".mega-menu").stop().slideDown();
        }, function () {
            $(this).find(".mega-menu").stop().slideUp();
        });

        $(".tabs a").hover(function (e) {
            e.preventDefault();
            $(".tabs a").removeClass("active");
            // $(".tab").addClass("active"); // instead of this do the below 
            $(this).addClass("active");
            var tabId = $(this).attr("href");
            $(".tab-content div").hide();
            $(tabId).show();
        });
         
        /*Mobile menu */
        $(document).ready(function(){
            $("#mobile-menu-icon").click(function(){
              $("#mobile-menu").slideToggle();
            });
          });

          // ==========================================================================
//	Multi-level accordion nav
// ==========================================================================
$('.mobnav-label').click(function () {
	var label = $(this);
	var parent = label.parent('.has-children');
	var list = label.siblings('.mobnav-list');

	if ( parent.hasClass('is-open') ) {
		list.slideUp('fast');
		parent.removeClass('is-open');
	}
	else {
		list.slideDown('fast');
		parent.addClass('is-open');
	}
});
// ==========================================================================
        /* /Mobile menu */

        /*Accordion
================================================== */
        $(function () {
            $('.accordion-title').click(function (j) {

                var dropDown = $(this).closest('.accordion-card').find('.accordion-panel');
                $(this).closest('.accordion').find('.accordion-panel').not(dropDown).slideUp();

                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('.accordion-title.active').removeClass('active');
                    $(this).addClass('active');
                }

                dropDown.stop(false, true).slideToggle();
                j.preventDefault();
            });
        });
        /* /Accordion*/

/*modal */
 
        $(document).ready(function(){
            // Get the modal
            var modal = $("#applyModal");
          
            // Get the button that opens the modal
            var btn = $(".apply");
          
            // Get the <span> element that closes the modal
            var span = $(".close")[0];
          
            // When the user clicks the button, open the modal
            btn.click(function() {
              modal.css("display", "block");
            });
          
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.css("display", "none");
            };
          
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal[0]) {
                modal.css("display", "none");
              }
            };
          });
          
          
          //form
          
          var current_slide, next_slide, previous_slide;
          var left, opacity, scale;
          var animation;
          
          var error = false;
          
          // email validation
          $("#email").keyup(function() {
              var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              if (!emailReg.test($("#email").val())) {
                  $("#error-email").text('Please enter an Email addres.');
                  $("#email").addClass("box_error");
                  error = true;
              } else {
                  $("#error-email").text('');
                  error = false;
                  $("#email").removeClass("box_error");
              }
          });
          
          // website
          $("#website").keyup(function() {
              var websiteReg =  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
              if (!websiteReg.test($("#website").val())) {
                  $("#error-website").text('Website link is not valid.');
                  $("#website").addClass("box_error");
                  error = true;
              } else {
                  $("#error-website").text('');
                  error = false;
                  $("#website").removeClass("box_error");
              }
          });
          // Promote
          $("#promote").keyup(function() {
             var promote = $("#promote").val();
              if (promote == '') {
                  $("#error-promote").text('Enter your First name.');
                  $("#promote").addClass("box_error");
                  error = true;
              } else {
                  $("#error-promote").text('');
                  error = false;
              }
              if ((promote.length <= 2) || (promote.length > 200)) {
                  $("#error-promote").text("This field length must be between 2 and 200 Characters.");
                  $("#promote").addClass("box_error");
                  error = true;
              }
              
               else {
                  $("#promote").removeClass("box_error");
              }
          });
          
          // Paypal email validation
          $("#paypal-email").keyup(function() {
              var paypal_emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
              if (!paypal_emailReg.test($("#email").val())) {
                  $("#error-paypal-email").text('Please enter an Paypal Email addres.');
                  $("#paypal-email").addClass("box_error");
                  error = true;
              } else {
                  $("#error-paypalemail").text('');
                  error = false;
                  $("#paypal-email").removeClass("box_error");
              }
          });
          // first name
          $("#fname").keyup(function() {
              var fname = $("#fname").val();
              if (fname == '') {
                  $("#error-fname").text('Enter your First name.');
                  $("#fname").addClass("box_error");
                  error = true;
              } else {
                  $("#error-fname").text('');
                  error = false;
              }
              if ((fname.length <= 2) || (fname.length > 20)) {
                  $("#error-fname").text("User length must be between 2 and 20 Characters.");
                  $("#fname").addClass("box_error");
                  error = true;
              }
              if (!isNaN(fname)) {
                  $("#error-fname").text("Only Characters are allowed.");
                  $("#fname").addClass("box_error");
                  error = true;
              } else {
                  $("#fname").removeClass("box_error");
              }
          });
          // last name
          $("#lname").keyup(function() {
              var lname = $("#lname").val();
              if (lname != lname) {
                  $("#error-lname").text('Enter your Last name.');
                  $("#lname").addClass("box_error");
                  error = true;
              } else {
                  $("#error-lname").text('');
                  error = false;
              }
              if ((lname.length <= 2) || (lname.length > 20)) {
                  $("#error-lname").text("User length must be between 2 and 20 Characters.");
                  $("#lname").addClass("box_error");
                  error = true;
              }
              if (!isNaN(lname)) {
                  $("#error-lname").text("Only Characters are allowed.");
                  $("#lname").addClass("box_error");
                  error = true;
              } else {
                  $("#lname").removeClass("box_error");
              }
          });
           
           
          // first step validation
          $(".fs_next_btn").click(function() {
              // email
              if ($("#email").val() == '') {
                  $("#error-email").text('Please enter an email address.');
                  $("#email").addClass("box_error");
                  error = true;
              } else {
                  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                  if (!emailReg.test($("#email").val())) {
                      $("#error-email").text('Please insert a valid email address.');
                      error = true;
                  } else {
                      $("#error-email").text('');
                      $("#email").removeClass("box_error");
                  }
              }
          
               // first name
               if ($("#fname").val() == '') {
                  $("#error-fname").text('Enter your First name.');
                  $("#fname").addClass("box_error");
                  error = true;
              } else {
                  var fname = $("#fname").val();
                  if (fname != fname) {
                      $("#error-fname").text('First name is required.');
                      error = true;
                  } else {
                      $("#error-fname").text('');
                      error = false;
                      $("#fname").removeClass("box_error");
                  }
                  if ((fname.length <= 2) || (fname.length > 20)) {
                      $("#error-fname").text("User length must be between 2 and 20 Characters.");
                      error = true;
                  }
                  if (!isNaN(fname)) {
                      $("#error-fname").text("Only Characters are allowed.");
                      error = true;
                  } else {
                      $("#fname").removeClass("box_error");
                  }
              }
              // last name
              if ($("#lname").val() == '') {
                  $("#error-lname").text('Enter your Last name.');
                  $("#lname").addClass("box_error");
                  error = true;
              } else {
                  var lname = $("#lname").val();
                  if (lname != lname) {
                      $("#error-lname").text('Last name is required.');
                      error = true;
                  } else {
                      $("#error-lname").text('');
                      error = false;
                  }
                  if ((lname.length <= 2) || (lname.length > 20)) {
                      $("#error-lname").text("User length must be between 2 and 20 Characters.");
                      error = true;
                  } 
                  if (!isNaN(lname)) {
                      $("#error-lname").text("Only Characters are allowed.");
                      error = true;
                  } else {
                      $("#lname").removeClass("box_error");
                  }
              }
          
          
              // animation
              if (!error) {
                  if (animation) return false;
                  animation = true;
          
                  current_slide = $(this).parent().parent();
                  next_slide = $(this).parent().parent().next();
          
                  $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");
          
                  next_slide.show();
                  current_slide.animate({
                      opacity: 0
                  }, {
                      step: function(now, mx) {
                          scale = 1 - (1 - now) * 0.2;
                          left = (now * 50) + "%";
                          opacity = 1 - now;
                          current_slide.css({
                              'transform': 'scale(' + scale + ')'
                          });
                          next_slide.css({
                              'left': left,
                              'opacity': opacity
                          });
                      },
                      duration: 800,
                      complete: function() {
                          current_slide.hide();
                          animation = false;
                      },
                      easing: 'easeInOutBack'
                  });
              }
          });
          // second step validation
          $(".ss_next_btn").click(function() {
              // Website
              if ($("#website").val() == '') {
                  $("#error-website").text('Website link is required.');
                  $("#website").addClass("box_error");
                  error = true;
              } else {
                  var websiteReg =  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                  if (!websiteReg.test($("#website").val())) {
                      $("#error-website").text('Website link is not valid.');
                      error = true;
                  } else {
                      $("#error-website").text('');
                      $("#website").removeClass("box_error");
                  }
              }
          
              // promote
              if ($("#promote").val() == '') {
                  $("#error-promote").text('Please describe how you intend to promote Us.');
                  $("#promote").addClass("box_error");
                  error = true;
              }  
              else if ((promote.length <= 2) || (promote.length > 200)) {
                      $("#error-promote").text("This field length must be between 2 and 200 Characters.");
                      error = true;
                  } 
              else {
                  $("#error-promote").text('');
              }
            
              //Paypal email
              if ($("#paypal-email").val() == '') {
                  $("#error-paypal-email").text('Please enter an PayPal email address.');
                  $("#paypal-email").addClass("box_error");
                  error = true;
              } else {
                  var paypal_emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                  if (!paypal_emailReg.test($("#paypal-email").val())) {
                      $("#error-paypal-email").text('Please insert a valid PayPal email address.');
                      error = true;
                  } else {
                      $("#error-paypal-email").text('');
                      $("#paypal-email").removeClass("box_error");
                  }
              }
          
          
              if (!error) {
                  if (animation) return false;
                  animation = true;
          
                  current_slide = $(this).parent().parent();
                  next_slide = $(this).parent().parent().next();
          
                  $("#progress_header li").eq($(".multistep-box").index(next_slide)).addClass("active");
          
                  next_slide.show();
                  current_slide.animate({
                      opacity: 0
                  }, {
                      step: function(now, mx) {
                          scale = 1 - (1 - now) * 0.2;
                          left = (now * 50) + "%";
                          opacity = 1 - now;
                          current_slide.css({
                              'transform': 'scale(' + scale + ')'
                          });
                          next_slide.css({
                              'left': left,
                              'opacity': opacity
                          });
                      },
                      duration: 800,
                      complete: function() {
                          current_slide.hide();
                          animation = false;
                      },
                      easing: 'easeInOutBack'
                  });
              }
          });
          
          // third step 
           
          // previous
          $(".previous").click(function() {
              if (animation) return false;
              animation = true;
          
              current_slide = $(this).parent().parent();
              previous_slide = $(this).parent().parent().prev();
          
              $("#progress_header li").eq($(".multistep-box").index(current_slide)).removeClass("active");
          
              previous_slide.show();
              current_slide.animate({
                  opacity: 0
              }, {
                  step: function(now, mx) {
                      scale = 0.8 + (1 - now) * 0.2;
                      left = ((1 - now) * 50) + "%";
                      opacity = 1 - now;
                      current_slide.css({
                          'left': left
                      });
                      previous_slide.css({
                          'transform': 'scale(' + scale + ')',
                          'opacity': opacity
                      });
                  },
                  duration: 800,
                  complete: function() {
                      current_slide.hide();
                      animation = false;
                  },
                  easing: 'easeInOutBack'
              });
          });
          
          $(".submit_btn").click(function() {
             if (!error){
                      event.preventDefault();
              let first_name = ("#fname");
              let last_name = ("#lname")
              let email = ("#email");
              let website= ("#website");
              let promote = ("#promote");
              let pp_email=("#paypal-email");

              console.log(first_name.value);
              console.log(last_name.value);
              console.log(email.value);
              console.log(website.value);
              console.log(promote.value);
              console.log(pp_email.value);
             
              
              modal = $("#applyModal");
              modal.css("display", "none");
              }  
              
              document.getElementById("multistep_form").reset();
              return false;
          
          });
              
          
            