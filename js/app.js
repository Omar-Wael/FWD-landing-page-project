/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//function to greate the menu bar
(() => {
    sections.forEach((element) => {
        //get li name
        let sectionName = element.getAttribute('data-nav');
        //get li link
        let sectionId = element.getAttribute('id');
        //create li 
        let li = document.createElement('li');
        //create li inner HTML content
        li.innerHTML = `<a href = '#${sectionId}' class = 'menu__link'> ${sectionName}</a>`;
        //add li to menu bar
        menu.appendChild(li);      
// Scroll to anchor ID using scrollIntoView event
        const anchor = document.querySelectorAll('.menu__link');
        anchor.forEach(element => {
        element.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(element.getAttribute('href')).scrollIntoView({behavior:'smooth'});
        })
    });
    });
})();
// build the nav
/*createMenuBar();*/

// Add class 'active' to section when near top of viewport

// Instancing a new IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    // Each of the sections will make up an “entry”
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // If target enters the viewport, add an “your-active-class” class to it
            entry.target.classList.add('your-active-class');
            // Otherwise, remove the “your-active-class” class
        } else {
            entry.target.classList.remove('your-active-class');
        }
    });
});
// Looping through the sections and adding them as targets of the observer
Array.prototype.forEach.call(sections, (el) => {
    observer.observe(el)
});
// Scroll to anchor ID using scrollTO event
//done in createMenuBar function
    
    


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


