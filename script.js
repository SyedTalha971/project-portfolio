document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const toggleNav = document.createElement('button');
    toggleNav.textContent = 'Menu';
    toggleNav.classList.add('menu-toggle');

    // toggle button
    nav.parentNode.insertBefore(toggleNav, nav);

    //event listener to toggle the menu
    toggleNav.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // links to social media icons
    document.querySelector('.fa-linkedin').parentNode.href = 'https://www.linkedin.com/in/syed-muhammad-talha-437752231';
    document.querySelector('.fa-github').parentNode.href = 'https://github.com/syedtalha971';
    document.querySelector('.fa-facebook').parentNode.href = 'https://www.facebook.com/share/1BAsjkSNwW/';
    document.querySelector('.fa-google').parentNode.href = 'mailto:talhasyed036@gmail.com';
    document.querySelector('.fa-npm').parentNode.href = 'https://www.npmjs.com/~syed-talha';
    document.querySelector('.fa-whatsapp').parentNode.href = 'https://wa.me/+923447757971';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Show the notification
    var notification = document.getElementById('notification');
    notification.style.display = 'block';
});

function closeNotification() {
    var notification = document.getElementById('notification');
    notification.style.display = 'none';
}

