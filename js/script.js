const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const counters = document.querySelectorAll('.counter');
const statisticsSection = document.getElementById('statistics');


burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

window.addEventListener("load", () => {
    const heading = document.querySelector(".hero-content h1");
    const text = heading.innerText;
    heading.innerHTML = ''; 

    // Split the text 
    for (let char of text) {
        const span = document.createElement('span');
        span.innerText = char; 
        heading.appendChild(span); 
    }

    // Animate each letter
    const chars = heading.querySelectorAll('span');
    gsap.from(chars, {
        duration: 0.5,
        opacity: 0,
        y: 50,
        ease: "back.out",
        stagger: 0.1, 
        delay: 0.5 
    });
    gsap.from(".hero-content p", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: 2 
    });

    gsap.from(".hero-input-group", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out",
        delay: 2.3 
    });

    gsap.to(".rotating-tk", {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1 
    });
    gsap.to(".rotating-insta", {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1 
    });

});

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');

        const updateCount = () => {
            const count = +counter.innerText.replace(' +', ''); 
            const increment = Math.ceil(target / 200); 

            if (count < target) {
                counter.innerText = count + increment + ' +'; 
                setTimeout(updateCount, 1); 
            } else {
                counter.innerText = target + ' +'; 
            }
        };
        updateCount();
    });
};

const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const handleScroll = function() {
     if (isElementInViewport(statisticsSection)) {
        animateCounters(); 
         window.removeEventListener('scroll', handleScroll);
    }
 };

 window.addEventListener('scroll', handleScroll);

 const cards = document.querySelectorAll('.service-card');
        
     cards.forEach(card => {
         const cardInner = card.querySelector('.service-card-inner');

        card.addEventListener('mouseenter', () => {
             gsap.to(cardInner, { rotationY: 180, duration: 0.6, ease: "power2.inOut" });
         });
            
        card.addEventListener('mouseleave', () => {
            gsap.to(cardInner, { rotationY: 0, duration: 0.6, ease: "power2.inOut" });
        });
    });
