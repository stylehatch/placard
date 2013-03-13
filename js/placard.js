/**
 * placard - v0.9.0
 * 2013-03-13
 * Display details on a website as a fixed overlay bar and modal window
 * http://stylehatch.github.com/photoset-grid/
 *
 * Copyright 2013 Jonathan Moore, @moore - Style Hatch
 */

 /*jshint smarttabs:true, browser: true, curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, strict: true, undef: true, devel: true */
 /*global $:false */
( function( window, undefined ) {

'use strict';

// dependencies
var StyleHatch = window.StyleHatch;

function loadPlacard(){
  // console.log('The placard has been loaded!');

  // Temporary HTML to inject
  var modalHTMl = '<div class="stylehatch-placard cleanslate">' +
                    '<div class="logo"><a href="http://stylehatch.co" target="_blank"><img src="http://static.tumblr.com/fzgsfsd/Lqcm27cej/style-hatch.png" width="56" height="36"></a></div>' +
                    '<div class="theme"><h6>Customization Mode</h6><h2>' + StyleHatch.themeName + '</h2></div>' +
                    '<div class="links"><a href="' + StyleHatch.demoSiteURL + '" class="modal-btn demo" target="_blank">Full Demo</a><a href="' + StyleHatch.supportURL + '" class="modal-btn support" target="_blank">Theme Support</a></div>' +
                  '</div>';

  $('body').append( modalHTMl );

  return true;
}
StyleHatch.loadPlacard = loadPlacard;

// Load CSS
$.ajax({
  url: StyleHatch.placardCSS,
  dataType: 'text',
  success: function(data) {
    //console.log(data); //data returned
    $('<style type="text/css">\n' + data + '</style>').appendTo("head");

    StyleHatch.loadPlacard();
  }
});


})( window );