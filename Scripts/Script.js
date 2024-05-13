document.addEventListener('DOMContentLoaded', function() {
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const homeLinkFoot = document.getElementById('homeLinkFoot');
    const projectsLinkFoot = document.getElementById('projectsLinkFoot');
    const javaProjectsLinkFoot = document.getElementById('javaProjectsLinkFoot');
    const contactLinkFoot = document.getElementById('contactLinkFoot');
    const copyRight = document.getElementById('copyRight');
    const Logo = document.getElementById('Logo');
    const homeNav = document.getElementById('homeNav');
    const projectsNav = document.getElementById('projectsNav');
    const JavaProjectsNav = document.getElementById('JavaProjectsNav');
    const contactNav = document.getElementById('contactNav');
    const upBtn = document.getElementById('upBtn');

    // Check if dark mode is enabled in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        darkModeSwitch.checked = true;
    }

    // Toggle dark mode
    darkModeSwitch.addEventListener('change', function() {
        if (this.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        homeLinkFoot.classList.add('text-white'); // Add text-white class
        projectsLinkFoot.classList.add('text-white'); // Add text-white class
        javaProjectsLinkFoot.classList.add('text-white'); // Add text-white class
        contactLinkFoot.classList.add('text-white'); // Add text-white class
        copyRight.classList.add('text-white'); // Add text-white 
        Logo.classList.add('text-white'); // Add text-white class
        homeNav.classList.add('text-white'); // Add text-white class
        projectsNav.classList.add('text-white'); // Add text-white class
        JavaProjectsNav.classList.add('text-white'); // Add text-white class
        contactNav.classList.add('text-white'); // Add text-white class
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        homeLinkFoot.classList.remove('text-white'); // Remove text-white class
        projectsLinkFoot.classList.remove('text-white'); // Remove text-white class
        javaProjectsLinkFoot.classList.remove('text-white'); // Remove text-white class
        contactLinkFoot.classList.remove('text-white'); // Remove text-white class
        copyRight.classList.remove('text-white'); // Remove text-white class
        Logo.classList.remove('text-white'); // Remove text-white class
        homeNav.classList.remove('text-white'); // Remove text-white class
        projectsNav.classList.remove('text-white'); // Remove text-white class
        JavaProjectsNav.classList.remove('text-white'); // Remove text-white class
        contactNav.classList.remove('text-white'); // Remove text-white class

    }
});
