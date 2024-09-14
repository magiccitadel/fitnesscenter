     // loading animation
     document.addEventListener('DOMContentLoaded', function(){
        let loading = document.getElementById("loader-wraper");

        loading.style.transition = "opacity 0.5s ease-out"; // Smooth transition
        loading.style.opacity = "0"; // Fade out

        setTimeout(function(){
        loading.style.display= "none"; // Hide after fading out
        }, 500); // Match with the transition time
        });


    // side bar
    document.addEventListener("DOMContentLoaded", ()=> {
        let sidetoogle = document.getElementById("sidebar-toogle")
        let sidebar = document.getElementById("sidebar");
        let shadows = document.getElementById("shadow");
        let menulink = document.getElementById("side-lists")
     
        const openMenu = () => {
            sidebar.style.top = "0";
            shadows.style.display = "block";
        };
      
        const closeMenu = () => {
            sidebar.style.top = "-400px";
            shadows.style.display = "none";
        };
            sidetoogle.addEventListener("click", openMenu);
            shadows.addEventListener('click', closeMenu);
            menulink.addEventListener('click', closeMenu);
        });
        
         // galley view
      document.addEventListener('DOMContentLoaded', () => {
        const photos = document.querySelectorAll(".image-pic");
        const backshadow = document.getElementById("gallery-shadow");
        let activePhoto = null;
    
        // Handle image click to activate
        photos.forEach(photo => {
            photo.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevents the click from bubbling up to the slider
                if (activePhoto) {
                    activePhoto.classList.remove("active");
                }
                activePhoto = photo;
                photo.classList.add("active");
                backshadow.style.display = "block";
            });
        });
    
        // Handle background shadow click to deactivate
        backshadow.addEventListener('click', () => {
            if (activePhoto) {
                activePhoto.classList.remove("active");
            }
            backshadow.style.display = "none";
        });
    
        // Handle clicking on the empty space in the slider to deactivate
        document.addEventListener('click', (event) => {
            if (activePhoto && !activePhoto.contains(event.target)) {
                activePhoto.classList.remove("active");
                backshadow.style.display = "none";
            }
        });
      });



      window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        if (window.scrollY > 50) { // You can adjust the scroll value as needed
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      