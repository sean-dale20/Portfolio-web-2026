// ---------- Hamburger menu ----------
const menuToggle = document.querySelector('.menu-toggle');   // grab the ☰ button
const navButtons = document.querySelector('.nav-buttons');   // grab the <nav> that holds the links

menuToggle.addEventListener('click', function(){             // runs every time ☰ is clicked
    navButtons.classList.toggle('open');                     // add "open" if missing, remove it if present
});

// ---------- Smooth scroll for nav links ----------
document.querySelectorAll('.nav-buttons a').forEach(link => {   // loop over every link in the nav
    link.addEventListener('click', function(e){                 // runs when a link is clicked
        e.preventDefault();                                     // stop the default instant jump
        navButtons.classList.remove('open');                    // close the mobile menu after tapping a link

        const targetId = this.getAttribute('href').substring(1); // "#projects" becomes "projects"
        const targetElement = document.getElementById(targetId); // find the element with that id

        if(targetElement){                                      // only scroll if the element exists
            targetElement.scrollIntoView({
                behavior: 'smooth',                             // animate the scroll
                block: 'center'                                 // put the section in the middle of the screen
            });
        }
    });
});