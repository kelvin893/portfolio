   // JavaScript to handle the navbar toggle
   const toggleButton = document.getElementById('toggleButton');
   const navLinks = document.getElementById('navLinks');

   toggleButton.addEventListener('click', () => {
   navLinks.classList.toggle('show');
});











// Animation slide right and left constantly running
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right');
hiddenElements.forEach((el) => slideObserver.observe(el));















    /// smooth scroll-down effect
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.smoothscroll').addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            document.querySelector('#aboutme').scrollIntoView({ 
                behavior: 'smooth' // Smooth scroll
            });
        });
    });
    
    
        /// smooth scroll-down effect
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector('.smoothscrolls').addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor click behavior
                document.querySelector('#myServices').scrollIntoView({ 
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });
    
        /// smooth scroll-down effect
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector('.smooth_scroll').addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor click behavior
                document.querySelector('#projects').scrollIntoView({ 
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });
    
            /// smooth scroll-down effect
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior
            document.querySelector('#contactme').scrollIntoView({ 
                behavior: 'smooth' // Smooth scroll
            });
        });
    });










    

      // Get thumbnail
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var thumbnails = document.getElementsByClassName('thumbnail');
var currentIndex = 0;

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('click', function(event) {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
        currentIndex = Array.prototype.indexOf.call(thumbnails, event.target);
    });
}

var span = document.getElementsByClassName('close')[0];
span.onclick = function() { 
    modal.style.display = "none";
}

var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('prev')[0];

next.onclick = function() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    modalImg.src = thumbnails[currentIndex].src;
    captionText.innerHTML = thumbnails[currentIndex].alt;
}

prev.onclick = function() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    modalImg.src = thumbnails[currentIndex].src;
    captionText.innerHTML = thumbnails[currentIndex].alt;
}
