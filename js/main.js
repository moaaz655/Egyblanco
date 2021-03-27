/*global $, window*/

$(function () {
    
    'use strict';
    
    $(window).scroll(function () {
       
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
            
        } else {
            
            navbar.removeClass('scrolled');
            
        }
        
    });

// Scroll To Top
    
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 800) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
            
        }
        
    });

// Click On Button To Scroll Top
        
    scrollButton.click(function () {
            
        $("html,body").animate({ scrollTop : 0}, 1500);
            
    });
    
});


    
