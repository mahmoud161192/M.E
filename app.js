const navigation = () => {
    const navbar = document.querySelector('.nav-list');
    const burger = document.querySelector('.hamburger');
    let divs = document.querySelectorAll('.bar');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
        burger.classList.toggle('animate-nav');
        for(i = 0; i < divs.length; i++) divs[i].classList.toggle('azure');
        // console.log(divs);
    })
};
navigation();
