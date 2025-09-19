// menu icon navbar //
let menuIcon = document.querySelector('.fa-solid');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll=() => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
let header = document.querySelector('.header');

header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('fa-xmark');
     menuIcon.classList.add('fa-bars');
    navbar.classList.remove('active');

};

/*===============swiper==================*/

 var swiper = new Swiper(".mySwiper", {
    slidesPerView:1,
    spaceBetween:50,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    /*  dark mode */
    const darkModeToggle = document.getElementById('dark-mode');
    const body = document.body;

        if(localStorage.getItem('theme')==='dark'){
            body.classList.add('dark');
            if(darkModeToggle){
                darkModeToggle.classList.remove('fa-moon');
                darkModeToggle.classList.add('fa-sun');
            }
        }

        darkModeToggle.addEventListener('click',()=>{
            body.classList.toggle('dark');

            if(body.classList.contains('dark')){
                localStorage.setItem('theme','dark');
                darkModeToggle.classList.remove('fa-moon');
                darkModeToggle.classList.add('fa-sun');
            }
            else{
                localStorage.setItem('theme','light');
                 darkModeToggle.classList.remove('fa-sun');
                darkModeToggle.classList.add('fa-moon');

            }
        });

    /// scroll reveal///

    ScrollReveal({
         //reset: true//,
         distance:'80px',
         duration:1000,
         delay:100
        });

        ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
         ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper,contact form',{origin:'bottom'});
         ScrollReveal().reveal('.home-content h1, .about-img img', {origin:'left'});
         ScrollReveal().reveal('.home-content h3, .home-content p ,.about-content', {origin:'right'});


         //About content read more//

         const readMoreBtn = document.getElementById("readd-more-btn");
         const contentWrapper = document.querySelector(".content-wrapper");


         readMoreBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            


            if(!contentWrapper.classList.contains("show")){
                contentWrapper.classList.add("show");
                readMoreBtn.textContent = "Read Less";
            }
            else{
                 contentWrapper.scrollTo({
                    top:0,
                    behaviour:"smooth"
                 });
                 setTimeout(()=>{
                      contentWrapper.classList.remove("show");
                       readMoreBtn.textContent = "Read More";
                 },400)
            }
         });


         //service box//
//        const readMoreBtns = document.querySelectorAll('.read-more-btn');

// readMoreBtns.forEach(btn => {
//     const box = btn.closest('.service-box');

//     btn.addEventListener('click', (e) => {
//         e.preventDefault();

//         box.classList.toggle('show');

//         if (box.classList.contains('show')) {
//             btn.textContent = "Read Less";
//         } else {
//             btn.textContent = "Read More";
//         }
//     });
// });

// const readMoreBtns = document.querySelectorAll('.read-more-btn');

// readMoreBtns.forEach(btn => {
//     const box = btn.closest('.service-box');      // parent service-box
//     const moreText = box.querySelector('.more-text');  // extra content

//     btn.addEventListener('click', (e) => {
//         e.preventDefault();

//         box.classList.toggle('show');  // toggle 'show' class

//         if (box.classList.contains('show')) {
//             // Expand extra content
//             moreText.style.maxHeight = moreText.scrollHeight + "px";
//             btn.textContent = "Read Less";
//         } else {
//             // Collapse extra content
//             moreText.style.maxHeight = 0;
//             btn.textContent = "Read More";
//         }
//     });
// });

document.addEventListener("DOMContentLoaded",(e)=>{
    const buttons = document.querySelectorAll('.about .btn, .services .btn');

    buttons.forEach(button =>{
        button.addEventListener('click',(e)=>{
            e.preventDefault();

            const content = button.previousElementSibling;

            if(!content.classList.contains('expand')){
                content.classList.add('expand');
                button.textContent = "Read Less";
            }
            else{
                 content.scrollTo({
                    top:0,
                    behaviour:"smooth"
                 });
                setTimeout(()=>{
                    content.classList.remove('expand');
                    button.textContent = "Read More";
                },400)
                }
        });
    });
});

//email//
 document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Gmail link
  let mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nishwapandiyan@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    "Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\n\nMessage:\n" + message
  )}`;

  // Open in new tab
  window.open(mailtoLink, "_blank");

  // Clear form after sending
  document.getElementById("contactForm").reset();
});

