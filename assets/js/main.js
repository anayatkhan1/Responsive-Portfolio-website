/*=============== CHANGE BACKGROUND HEADER ===============*/
function ScrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    } else{
        header;
    }

}

window.addEventListener('scroll', ScrollHeader);

/*=============== SERVICES MODAL ===============*/
const ModelViews = document.querySelectorAll('.services__model'),
      ModelBtns = document.querySelectorAll('.services__button'),
      ModelClose = document.querySelectorAll('.services__model-close');

let Model = function(modelClick){
    ModelViews[modelClick].classList.add('active-model');
}

ModelBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () => {
        Model(i);
    })
});

ModelClose.forEach((mc) =>{
    mc.addEventListener('click', () => {
        ModelViews.forEach((mv) => {
            mv.classList.remove('active-model')
        })
    })

});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active__work'));
    this.classList.add('active__work');
}

linkWork.forEach(l=> l.addEventListener('click', activeWork));

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,


    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          spaceBetween: 20,
        },
        
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },

      },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
function scrollActive(){
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id');
			//   sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            // sectionsClass.classList.add('active-link')
		}else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
			// sectionsClass.classList.remove('active-link')
		}                                                    
	});
}
window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {delay: 700});
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'});
