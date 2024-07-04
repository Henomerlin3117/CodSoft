
const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
};

ScrollReveal().reveal('.about-container .section-header',{
    ...scrollRevealOption,
});

ScrollReveal().reveal('.about-container .about-description',{
    ...scrollRevealOption,
    delay: 500,
    interval: 500,
});

ScrollReveal().reveal('.service-container .section-header',{
    ...scrollRevealOption,
});

ScrollReveal().reveal('.service-container .section-description',{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal('.service-card',{
    duration:1000,
    delay:1000,
    interval:500,
});

ScrollReveal().reveal('.blog-container h2',{
    ...scrollRevealOption,
});

ScrollReveal().reveal('.blog-container h4',{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal('.blog-container p',{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal('.blog-container .blg-btn',{
    ...scrollRevealOption,
    delay:1500,
});