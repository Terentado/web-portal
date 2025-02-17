/*!
* Start Bootstrap - New Age v6.0.5 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
//

$(document).ready(function(){
    $('.main').height($(window).height() - 55);
    $(window).on("resize", function(){
        $('.main').height($(window).height() - 55);
    });
});


function validation()
{
    var id=document.f1.user.value;
    var ps=document.f1.pass.value;
    if(id.length=="" && ps.length=="") {
        alert("User Name and Password fields are empty");
        return false;
    }
    else
    {
        if(id.length=="") {
            alert("User Name is empty");
            return false;
        }
        if (ps.length=="") {
            alert("Password field is empty");
            return false;
        }
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
