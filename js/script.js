gsap.registerPlugin(ScrollTrigger);
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const counters = document.querySelectorAll('.counter');
const statisticsSection = document.getElementById('statistics');
const growthTitle1 = document.getElementById('growth-title-1'); 
const growthTitle2 = document.getElementById('growth-title-2'); 
const contactButton = document.querySelector('.contact-button');

let hasAnimatedGrowthTitles = false;

// Burger menu toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

window.addEventListener("load", () => {
    animateHeroSection();
});

const animateHeroSection = () => {
    const heading = document.querySelector(".hero-content h1");
    const text = heading.innerText;
    heading.innerHTML = '';

    // Split the text into individual characters
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

    gsap.to(".rotating-tk, .rotating-insta", {
        rotation: 360,
        duration: 8,
        ease: "linear",
        repeat: -1
    });

};
// Statistics animi
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

const handleScroll = () => {
    
    if (isElementInViewport(statisticsSection)) {
        animateCounters();
        hasAnimatedCounters = true;
    }
    
    if (isElementInViewport(growthTitle1) || isElementInViewport(growthTitle2)) {
        animateGrowthTitles();
    }
};

window.addEventListener('scroll', handleScroll);

const animateGrowthTitles = () => {

    if (!hasAnimatedGrowthTitles) {
        hasAnimatedGrowthTitles = true;

        gsap.from(growthTitle1, {
            duration: 1.5,
            opacity: 0,
            scale: 0.5,
            ease: "back.out",
            delay: 0.3,
        });

        gsap.from(growthTitle2, {
            duration: 1.6,
            opacity: 0,
            scale: 0.5,
            ease: "back.out",
            delay: 1,
        });
    }
};

const originalIcon = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 7h10v10"/>
        <path d="M7 17L17 7"/>
    </svg>
`;
const newIcon = `
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#21dadb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
        <path d="M5 12h14"/>
        <path d="m12 5 7 7-7 7"/>
    </svg>
`;
contactButton.innerHTML = `<span>Contact Us Now</span> ${originalIcon}`; 

const changeIconOnHover = () => {
    contactButton.addEventListener('mouseover', () => {
        contactButton.innerHTML = `<span>Contact Us Now</span> ${newIcon}`;
    });

    contactButton.addEventListener('mouseout', () => {
        contactButton.innerHTML = `<span>Contact Us Now</span> ${originalIcon}`;
    });
};

changeIconOnHover();
