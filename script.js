const navMenuLink = document.querySelectorAll('.nav__menu-link')


for (let i = 0; i < navMenuLink.length; i++) {
  navMenuLink[i].addEventListener('click', function(e){
    const href = this.getAttribute('href');
    const elem = document.querySelector(href);
    window.scrollTo(0, elem.offsetTop - 100);
    e.preventDefault();
    for (let j = 0; j < navMenuLink.length; j++) {
      navMenuLink[j].classList.remove('nav__menu-link_active');
      
    }
    this.classList.add('nav__menu-link_active');
  })
  
}
