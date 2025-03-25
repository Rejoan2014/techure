gsap.utils.toArray('.fade-up').forEach((element) => {
    gsap.from(element, {
        y: -30,
        opacity: 0, 
        duration: 1, 
        stagger: 0.5, 
        scrollTrigger: {
            trigger: element,
            start: "top 85%", 
            toggleActions: "play none none reverse",
            // markers: true, 
        }
    });
});

// Fade up effect on scroll
gsap.utils.toArray('.fade-btn').forEach((element) => {
    gsap.from(element, {
        x:-200, // Slide up effect
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    // Hover effect
    element.addEventListener('mouseenter', () => {
        gsap.to(element, {
            scale: 1.05,
            opacity: 0.9,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});

// Zoom from Y position
gsap.utils.toArray('.fadeInUpZoom').forEach((element) => {
    gsap.from(element, {
        y: 20,
        opacity: 0,
        duration: 1.5,
        scale: 0.2,
        scrollTrigger: {
            trigger: element,
            start: "top 85%", 
            toggleActions: "play none none reverse",
            // markers: true, 
        }
    });
});

// Zoom from initial position
gsap.utils.toArray('.fadeInScale').forEach((element) => {  
    gsap.from(element, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});


// Slide Left Animation
gsap.utils.toArray('.slide-left').forEach((element) => {
    gsap.from(element, {
        x: -300, // Slide from left
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    });
});

// Slide Right Animation
gsap.utils.toArray('.slide-right').forEach((element) => {
    gsap.from(element, {
        x: 300, // Slide from right
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    });
});


gsap.utils.toArray('.slide-leftToRight').forEach((element) => {
    gsap.from(element, {
        x: -70, 
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    });
});



gsap.utils.toArray('.slideUpFadeIn').forEach((element) => {
    gsap.from(element, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
});

// gsap.utils.toArray('.fadeUpInstant').forEach((element) => {
//     gsap.from(element, {
//         opacity: 0,
//         y: 50,
//         duration: 2,
//         ease: "power2.out",
//         stagger: 0.5,
//         scrollTrigger: {
//             trigger: element,
//             start: "top 85%",
//             toggleActions: "play none none reverse"
//         }
//     });
// });

// Animate for elements individually.
gsap.from('.fadeUpInstant', {
    opacity: 0,
    y: 50, 
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.fadeUpInstant',
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});









// custom class using same to fadeUpInstant
gsap.from('.service-card', {
    opacity: 0,
    y: 50, 
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.service-card',
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.from('.blog1-card', {
    opacity: 0,
    y: 50, 
    duration: 1,
    ease: "power2.out",
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.blog1-card',
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

gsap.to(".rotate360", {
    duration: 6,
    rotate: 360,
    ease: "linear",
    repeat: -1,
    yoyo: false,
    repeatDelay: 0 
});


// Fade-in and slide down animation for main menu (excluding buttons)
gsap.from('.main-menu > ul > li', {
    opacity: 0,
    y: 50,
    duration: .5,
    ease: "power2.out",
    stagger: 0.5
});


// Hero thumb shape animation
gsap.from(".hero-thumb__shape1, .hero-thumb__shape2", {
    y: -100, 
    opacity: 0,
    duration: 1.3, 
    delay: 0,
    ease: "elastic.out(1, 0.75)",
    stagger: 1,
    scrollTrigger: {
        trigger: ".hero-thumb", 
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// gsap.from(".hero-thumb__shape1", {
//     x: -200, // Start position to the left (adjust as needed)
//     opacity: 0,
//     duration: 1.5,
//     ease: "elastic.out(1, 0.75)", 
//     scrollTrigger: {
//         trigger: ".hero-thumb", 
//         start: "top 80%",
//         toggleActions: "play none none reverse"
//     }
// });
// gsap.from(".hero-thumb__shape2", {
//     x: 200, // Start position to the left (adjust as needed)
//     opacity: 0,
//     duration: 1.5,
//     ease: "elastic.out(1, 0.75)",
//     scrollTrigger: {
//         trigger: ".hero-thumb", 
//         start: "top 80%",
//         toggleActions: "play none none reverse"
//     }
// });
