jQuery(document).ready(function($) {
"use strict";

$(window).load(function() { 

  $('.timeline-item-trigger span').click(function () {
      if ($(this).hasClass('fa fa-plus')) {
          $(this).removeClass('fa fa-plus').addClass('fa fa-minus');
      } else {
          $(this).removeClass('fa fa-minus').addClass('fa fa-plus');
      }
  });

  $('.timeline-item-title').click(function () {
      $trigger = $(this).parent().parent().find('.timeline-item-trigger span');
      if ($trigger.hasClass('fa fa-plus')) {
          $trigger.removeClass('fa fa-plus').addClass('fa fa-minus');
      } else {
          $trigger.removeClass('fa fa-minus').addClass('fa fa-plus');
      }
  }); 


        
}); 

//Progress Bar
  $( '.progress .bar' ).each(function() {
    var percentage = $(this).data( 'percentage' );
    $(this).append('<span class="percentage-marker">' + percentage + '&#37;</span>');
  }); 


//Portfolio Isotop
$(window).load(function() {   
 $(function(){
      
      var $container = $('#portfolio');
      

                $container.isotope({
                  itemSelector : '.block',
                  layoutMode : 'masonry'
                  
                });
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
      });
      
    });


//Gooogle Map
    $('#map-content').gmap3({
        marker:{address:"Haltern am See, Weseler Str. 151", options:{icon: "img/location1.png"}},
        map:{
            options:{
              zoom: 14,
        scrollwheel: false
            }
           }
      });

//Tooltips
      $( 'body' ).tooltip({
        selector: "a[data-toggle=tooltip]"
      });

//Onepage Navigation
      $('#navs').onePageNav({
        currentClass: 'active',
        filter: ':not(.external)',
        scrollOffset: 100,
        scrollThreshold: 0.25
      });

      $('#navss').onePageNav({
        currentClass: 'active',
        filter: ':not(.external)',
        scrollOffset: 100,
        scrollThreshold: 0.25
      });      

//SmoothScroll      
      smoothScroll.init({
          speed: 200 
      }); 

      $('.nav a.colapse-menu1').click(function () { $(".navbar-collapse").collapse("hide") });
      $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });     
//Responsive Nav
      $( "ul.sub-menu").parent().append("<span class='toggle_nav_button'>+</span>");
        $(".toggle_nav_button").click(
              function(){
                var link = $(this);
                $(this).parent().find("ul.sub-menu").slideToggle('fast', function(){
                  if ($(this).is(':visible')){
                    link.text('-');
                  } else {
                    link.text('+');
                  }
          });
          return false;
      });  

//Prettyphoto
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
    jQuery('a[data-rel]').each(function() {
        jQuery(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
    });

//Contact Form 

$(document).ready(function ()
{ 
 $('#submit').formValidator({
    scope: '#form'
  });
  
  $('#post-commentsss').formValidator({
    scope: '#comments-form'
  });
  
  $('#submit,#post-commentsss').click(function() {
        $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
    });

  // Form plugin

  var options = {

    beforeSubmit: function() {
      $('.sending').show();

    },
    success: function() {
      $('.sending').hide();
      $('#form').hide();
      $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
      $('.mess').delay(3000).fadeOut(function() {

        $('#form').clearForm();
        $('#form').delay(3500).show();

      });
    }
  };
  

  $('#form').submit(function() {
    $(this).ajaxSubmit(options);
    return false;
  });
    
});

//Scroll Top
             var scrollTimeout;
            
            $('a.scroll-top').click(function(){
                $('html,body').animate({scrollTop:0},500);
                return false;
            });

            $(window).scroll(function(){
                clearTimeout(scrollTimeout);
                if($(window).scrollTop()>400){
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
                }
                else{
                    scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);    
            }
            });

}); 