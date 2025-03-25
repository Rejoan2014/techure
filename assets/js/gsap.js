gsap.utils.toArray('.fade-up').forEach((element) => {
    gsap.from(element, {
        y: -30,
        opacity: 0, 
        duration: 1, 
        stagger: 0.5, 
        scrollTrigger: {
            trigger: element,
            start: "top 80%", 
            toggleActions: "play none none reverse",
            markers: true, 
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

