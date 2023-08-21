document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("form-login");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const formData = new FormData(loginForm);
        
        // Use Fetch API to send the form data to the server
        fetch("/login", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            // Assuming the result contains the response from the server
            console.log(result);
            if (result === "Login successful") {
                // Redirect to the admin panel or update the UI accordingly
                window.location.href = "/admin";
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});





let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});



$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });
  
  $(document).ready(function(){
    $("a.btn").click(function(e){
      e.preventDefault();
  
      var url = $(this).attr("href");
      window.location.href = url;
    });
  });




  // Auto Scroll

  document.addEventListener("DOMContentLoaded", function() {
    const sectionLinks = document.querySelectorAll("#menu a[href^='#']");

    sectionLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        const targetId = e.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }
});

