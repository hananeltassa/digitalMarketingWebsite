const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

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

});
