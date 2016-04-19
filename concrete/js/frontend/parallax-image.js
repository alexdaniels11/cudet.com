$.fn.parallaxize=function(a,b){"use strict";function c(){this.init.apply(this,Array.prototype.slice.call(arguments))}return c.prototype={init:function(a,b){this.initializeConfig(b),this.config("element",a),this.config("width",1),this.config("height",1),this.initializeDOM(),this.initializeBindings()},initializeConfig:function(a){var c={};a=b.fn.extend({variation:20},a);var d=function(a){return function(b,c){return"undefined"==typeof b?a:"undefined"==typeof c?a[b]:a[b]=c}};this.config=d(c),this.setting=d(a)},initializeDOM:function(){var a=this.config("element"),c=b("<div/>"),d=new Image,e=b(d).appendTo(c),f=this;a.prepend(c),e.hide();var g=!0;d.onload=function(){f.config("height",e.height()),f.config("width",e.width()),f.translate(!1),g?e.show():e.fadeIn(250)},d.src=a.data("background-image"),setTimeout(function(){g=!1},150),this.config("image",e),a.addClass("parallaxic-container"),e.addClass("parallaxic-image"),c.addClass("parallax-image-container")},initializeBindings:function(){var c=this;b(a).scroll(function(){c.translate()}),b(a).resize(function(){c.translate(!1)})},translate:function(a){var b=[this.resizeTranslation(a),this.positionTranslation()].join(" ");this.config("image").css({transform:b,"-webkit-transform":b,"-moz-transform":b,"-o-transform":b})},resizeTranslation:function(a){var b;if(a!==!1&&(b=this.config("scale")))return"scale("+b+")";var c,d=this.setting("variation"),e=this.config("element"),f=(this.config("image"),e.height()),g=this.config("height"),h=this.config("width"),i=f+2*d,j=e.width();return c=g/h*j,i>c&&(c=i,j=h/g*c),b=Math.ceil(c/g*1e3)/1e3,this.config("scale",b),"scale("+b+")"},positionTranslation:function(){var a=this.setting("variation"),b=this.config("scale"),c=this.config("element"),d=(this.config("image"),c.height()),e=c.width(),f=this.config("height"),g=this.config("width"),h=(d-f)/2,i=(e-g)/2,j=this.getScrollPercentage();return h+=2*a*j-a,["translate3d(",Math.round(i/b),"px, ",Math.round(h),"px, ","0px)"].join("")},getScrollPercentage:function(){var c=this.config("element"),d=(this.config("image"),b(a)),e=c.offset().top-d.height(),f=c.offset().top+c.height()-e,g=d.scrollTop()-e;return Math.max(0,Math.min(1,g/f))}},function(a){this.data("parallax",new c(this,a))}}(window,$);