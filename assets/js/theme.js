!function(s){"use strict";s.fn.fitVids=function(t){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("div");n.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(n.childNodes[1])}return t&&s.extend(i,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&t.push(i.customSelector);var n=".fitvidsignore";i.ignore&&(n=n+", "+i.ignore);var e=s(this).find(t.join(","));(e=(e=e.not("object object")).not(n)).each(function(){var t=s(this);if(!(0<t.parents(n).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var e=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("name")){var i="fitvid"+s.fn.fitVids._count;t.attr("name",i),s.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),t.removeAttr("height").removeAttr("width")}})})},s.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(X){var Y={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};X.fn.bxSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){X(this).bxSlider(e)}),this;var c={},h=this,n=X(window).width(),s=X(window).height();if(!X(h).data("bxSlider")){function o(){X(h).data("bxSlider")||(c.settings=X.extend({},Y,e),c.settings.slideWidth=parseInt(c.settings.slideWidth),c.children=h.children(c.settings.slideSelector),c.children.length<c.settings.minSlides&&(c.settings.minSlides=c.children.length),c.children.length<c.settings.maxSlides&&(c.settings.maxSlides=c.children.length),c.settings.randomStart&&(c.settings.startSlide=Math.floor(Math.random()*c.children.length)),c.active={index:c.settings.startSlide},c.carousel=1<c.settings.minSlides||1<c.settings.maxSlides,c.carousel&&(c.settings.preloadImages="all"),c.minThreshold=c.settings.minSlides*c.settings.slideWidth+(c.settings.minSlides-1)*c.settings.slideMargin,c.maxThreshold=c.settings.maxSlides*c.settings.slideWidth+(c.settings.maxSlides-1)*c.settings.slideMargin,c.working=!1,c.controls={},c.interval=null,c.animProp="vertical"===c.settings.mode?"top":"left",c.usingCSS=c.settings.useCSS&&"fade"!==c.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return c.cssPrefix=e[i].replace("Perspective","").toLowerCase(),c.animProp="-"+c.cssPrefix+"-transform",!0;return!1}(),"vertical"===c.settings.mode&&(c.settings.maxSlides=c.settings.minSlides),h.data("origStyle",h.attr("style")),h.children(c.settings.slideSelector).each(function(){X(this).data("origStyle",X(this).attr("style"))}),d())}function a(){var t=1,e=null;return"horizontal"===c.settings.mode&&0<c.settings.slideWidth?t=c.viewport.width()<c.minThreshold?c.settings.minSlides:c.viewport.width()>c.maxThreshold?c.settings.maxSlides:(e=c.children.first().width()+c.settings.slideMargin,Math.floor((c.viewport.width()+c.settings.slideMargin)/e)||1):"vertical"===c.settings.mode&&(t=c.settings.minSlides),t}function t(){for(var t="",e="",i=b(),n=0;n<i;n++)e="",c.settings.buildPager&&X.isFunction(c.settings.buildPager)||c.settings.pagerCustom?(e=c.settings.buildPager(n),c.pagerEl.addClass("bx-custom-pager")):(e=n+1,c.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+e+"</a></div>";c.pagerEl.html(t)}function r(){h.startAuto()}function l(){h.stopAuto()}function g(t){var e=a();c.settings.ariaHidden&&!c.settings.ticker&&(c.children.attr("aria-hidden","true"),c.children.slice(t,t+e).attr("aria-hidden","false"))}var d=function(){var t=c.children.eq(c.settings.startSlide);h.wrap('<div class="'+c.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),c.viewport=h.parent(),c.settings.ariaLive&&!c.settings.ticker&&c.viewport.attr("aria-live","polite"),c.loader=X('<div class="bx-loading" />'),c.viewport.prepend(c.loader),h.css({width:"horizontal"===c.settings.mode?1e3*c.children.length+215+"%":"auto",position:"relative"}),c.usingCSS&&c.settings.easing?h.css("-"+c.cssPrefix+"-transition-timing-function",c.settings.easing):c.settings.easing||(c.settings.easing="swing"),c.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),c.viewport.parent().css({maxWidth:f()}),c.children.css({float:"horizontal"===c.settings.mode?"left":"none",listStyle:"none",position:"relative"}),c.children.css("width",m()),"horizontal"===c.settings.mode&&0<c.settings.slideMargin&&c.children.css("marginRight",c.settings.slideMargin),"vertical"===c.settings.mode&&0<c.settings.slideMargin&&c.children.css("marginBottom",c.settings.slideMargin),"fade"===c.settings.mode&&(c.children.css({position:"absolute",zIndex:0,display:"none"}),c.children.eq(c.settings.startSlide).css({zIndex:c.settings.slideZIndex,display:"block"})),c.controls.el=X('<div class="bx-controls" />'),c.settings.captions&&k(),c.active.last=c.settings.startSlide===b()-1,c.settings.video&&h.fitVids(),"none"===c.settings.preloadImages?t=null:"all"!==c.settings.preloadImages&&!c.settings.ticker||(t=c.children),c.settings.ticker?c.settings.pager=!1:(c.settings.controls&&I(),c.settings.auto&&c.settings.autoControls&&y(),c.settings.pager&&C(),(c.settings.controls||c.settings.autoControls||c.settings.pager)&&c.viewport.after(c.controls.el)),null===t?p():u(t,p)},u=function(t,e){var i=t.find('img:not([src=""]), iframe').length,n=0;0!==i?t.find('img:not([src=""]), iframe').each(function(){X(this).one("load error",function(){++n===i&&e()}).each(function(){!this.complete&&""!=this.src||X(this).trigger("load")})}):e()},p=function(){if(c.settings.infiniteLoop&&"fade"!==c.settings.mode&&!c.settings.ticker){var t="vertical"===c.settings.mode?c.settings.minSlides:c.settings.maxSlides,e=c.children.slice(0,t).clone(!0).addClass("bx-clone"),i=c.children.slice(-t).clone(!0).addClass("bx-clone");c.settings.ariaHidden&&(e.attr("aria-hidden",!0),i.attr("aria-hidden",!0)),h.append(e).prepend(i)}c.loader.remove(),w(),"vertical"===c.settings.mode&&(c.settings.adaptiveHeight=!0),c.viewport.height(v()),h.redrawSlider(),c.settings.onSliderLoad.call(h,c.active.index),c.initialized=!0,c.settings.responsive&&X(window).on("resize",R),c.settings.auto&&c.settings.autoStart&&(1<b()||c.settings.autoSlideForOnePage)&&L(),c.settings.ticker&&W(),c.settings.pager&&M(c.settings.startSlide),c.settings.controls&&N(),c.settings.touchEnabled&&!c.settings.ticker&&O(),c.settings.keyboardEnabled&&!c.settings.ticker&&X(document).keydown(q)},v=function(){var e=0,t=X();if("vertical"===c.settings.mode||c.settings.adaptiveHeight)if(c.carousel){var n=1===c.settings.moveSlides?c.active.index:c.active.index*x();for(t=c.children.eq(n),i=1;i<=c.settings.maxSlides-1;i++)t=n+i>=c.children.length?t.add(c.children.eq(i-1)):t.add(c.children.eq(n+i))}else t=c.children.eq(c.active.index);else t=c.children;return"vertical"===c.settings.mode?(t.each(function(t){e+=X(this).outerHeight()}),0<c.settings.slideMargin&&(e+=c.settings.slideMargin*(c.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return X(this).outerHeight(!1)}).get()),"border-box"===c.viewport.css("box-sizing")?e+=parseFloat(c.viewport.css("padding-top"))+parseFloat(c.viewport.css("padding-bottom"))+parseFloat(c.viewport.css("border-top-width"))+parseFloat(c.viewport.css("border-bottom-width")):"padding-box"===c.viewport.css("box-sizing")&&(e+=parseFloat(c.viewport.css("padding-top"))+parseFloat(c.viewport.css("padding-bottom"))),e},f=function(){var t="100%";return 0<c.settings.slideWidth&&(t="horizontal"===c.settings.mode?c.settings.maxSlides*c.settings.slideWidth+(c.settings.maxSlides-1)*c.settings.slideMargin:c.settings.slideWidth),t},m=function(){var t=c.settings.slideWidth,e=c.viewport.width();if(0===c.settings.slideWidth||c.settings.slideWidth>e&&!c.carousel||"vertical"===c.settings.mode)t=e;else if(1<c.settings.maxSlides&&"horizontal"===c.settings.mode){if(e>c.maxThreshold)return t;e<c.minThreshold?t=(e-c.settings.slideMargin*(c.settings.minSlides-1))/c.settings.minSlides:c.settings.shrinkItems&&(t=Math.floor((e+c.settings.slideMargin)/Math.ceil((e+c.settings.slideMargin)/(t+c.settings.slideMargin))-c.settings.slideMargin))}return t},b=function(){var t=0,e=0,i=0;if(0<c.settings.moveSlides){if(!c.settings.infiniteLoop){for(;e<c.children.length;)++t,e=i+a(),i+=c.settings.moveSlides<=a()?c.settings.moveSlides:a();return i}t=Math.ceil(c.children.length/x())}else t=Math.ceil(c.children.length/a());return t},x=function(){return 0<c.settings.moveSlides&&c.settings.moveSlides<=a()?c.settings.moveSlides:a()},w=function(){var t,e,i;c.children.length>c.settings.maxSlides&&c.active.last&&!c.settings.infiniteLoop?"horizontal"===c.settings.mode?(t=(e=c.children.last()).position(),S(-(t.left-(c.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===c.settings.mode&&(i=c.children.length-c.settings.minSlides,t=c.children.eq(i).position(),S(-t.top,"reset",0)):(t=c.children.eq(c.active.index*x()).position(),c.active.index===b()-1&&(c.active.last=!0),void 0!==t&&("horizontal"===c.settings.mode?S(-t.left,"reset",0):"vertical"===c.settings.mode&&S(-t.top,"reset",0)))},S=function(t,e,i,n){var s,o;c.usingCSS?(o="vertical"===c.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",h.css("-"+c.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===e?(h.css(c.animProp,o),0!==i?h.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){X(t.target).is(h)&&(h.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),z())}):z()):"reset"===e?h.css(c.animProp,o):"ticker"===e&&(h.css("-"+c.cssPrefix+"-transition-timing-function","linear"),h.css(c.animProp,o),0!==i?h.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){X(t.target).is(h)&&(h.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(n.resetValue,"reset",0),H())}):(S(n.resetValue,"reset",0),H()))):((s={})[c.animProp]=t,"slide"===e?h.animate(s,i,c.settings.easing,function(){z()}):"reset"===e?h.css(c.animProp,t):"ticker"===e&&h.animate(s,i,"linear",function(){S(n.resetValue,"reset",0),H()}))},C=function(){c.settings.pagerCustom?c.pagerEl=X(c.settings.pagerCustom):(c.pagerEl=X('<div class="bx-pager" />'),c.settings.pagerSelector?X(c.settings.pagerSelector).html(c.pagerEl):c.controls.el.addClass("bx-has-pager").append(c.pagerEl),t()),c.pagerEl.on("click touchend","a",$)},I=function(){c.controls.next=X('<a class="bx-next" href="">'+c.settings.nextText+"</a>"),c.controls.prev=X('<a class="bx-prev" href="">'+c.settings.prevText+"</a>"),c.controls.next.on("click touchend",T),c.controls.prev.on("click touchend",P),c.settings.nextSelector&&X(c.settings.nextSelector).append(c.controls.next),c.settings.prevSelector&&X(c.settings.prevSelector).append(c.controls.prev),c.settings.nextSelector||c.settings.prevSelector||(c.controls.directionEl=X('<div class="bx-controls-direction" />'),c.controls.directionEl.append(c.controls.prev).append(c.controls.next),c.controls.el.addClass("bx-has-controls-direction").append(c.controls.directionEl))},y=function(){c.controls.start=X('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+c.settings.startText+"</a></div>"),c.controls.stop=X('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+c.settings.stopText+"</a></div>"),c.controls.autoEl=X('<div class="bx-controls-auto" />'),c.controls.autoEl.on("click",".bx-start",E),c.controls.autoEl.on("click",".bx-stop",A),c.settings.autoControlsCombine?c.controls.autoEl.append(c.controls.start):c.controls.autoEl.append(c.controls.start).append(c.controls.stop),c.settings.autoControlsSelector?X(c.settings.autoControlsSelector).html(c.controls.autoEl):c.controls.el.addClass("bx-has-controls-auto").append(c.controls.autoEl),D(c.settings.autoStart?"stop":"start")},k=function(){c.children.each(function(t){var e=X(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&X(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},T=function(t){t.preventDefault(),c.controls.el.hasClass("disabled")||(c.settings.auto&&c.settings.stopAutoOnClick&&h.stopAuto(),h.goToNextSlide())},P=function(t){t.preventDefault(),c.controls.el.hasClass("disabled")||(c.settings.auto&&c.settings.stopAutoOnClick&&h.stopAuto(),h.goToPrevSlide())},E=function(t){h.startAuto(),t.preventDefault()},A=function(t){h.stopAuto(),t.preventDefault()},$=function(t){var e,i;t.preventDefault(),c.controls.el.hasClass("disabled")||(c.settings.auto&&c.settings.stopAutoOnClick&&h.stopAuto(),void 0!==(e=X(t.currentTarget)).attr("data-slide-index")&&(i=parseInt(e.attr("data-slide-index")))!==c.active.index&&h.goToSlide(i))},M=function(i){var t=c.children.length;if("short"===c.settings.pagerType)return 1<c.settings.maxSlides&&(t=Math.ceil(c.children.length/c.settings.maxSlides)),void c.pagerEl.html(i+1+c.settings.pagerShortSeparator+t);c.pagerEl.find("a").removeClass("active"),c.pagerEl.each(function(t,e){X(e).find("a").eq(i).addClass("active")})},z=function(){if(c.settings.infiniteLoop){var t="";0===c.active.index?t=c.children.eq(0).position():c.active.index===b()-1&&c.carousel?t=c.children.eq((b()-1)*x()).position():c.active.index===c.children.length-1&&(t=c.children.eq(c.children.length-1).position()),t&&("horizontal"===c.settings.mode?S(-t.left,"reset",0):"vertical"===c.settings.mode&&S(-t.top,"reset",0))}c.working=!1,c.settings.onSlideAfter.call(h,c.children.eq(c.active.index),c.oldIndex,c.active.index)},D=function(t){c.settings.autoControlsCombine?c.controls.autoEl.html(c.controls[t]):(c.controls.autoEl.find("a").removeClass("active"),c.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},N=function(){1===b()?(c.controls.prev.addClass("disabled"),c.controls.next.addClass("disabled")):!c.settings.infiniteLoop&&c.settings.hideControlOnEnd&&(0===c.active.index?(c.controls.prev.addClass("disabled"),c.controls.next.removeClass("disabled")):c.active.index===b()-1?(c.controls.next.addClass("disabled"),c.controls.prev.removeClass("disabled")):(c.controls.prev.removeClass("disabled"),c.controls.next.removeClass("disabled")))},L=function(){0<c.settings.autoDelay?setTimeout(h.startAuto,c.settings.autoDelay):(h.startAuto(),X(window).focus(r).blur(l)),c.settings.autoHover&&h.hover(function(){c.interval&&(h.stopAuto(!0),c.autoPaused=!0)},function(){c.autoPaused&&(h.startAuto(!0),c.autoPaused=null)})},W=function(){var t,e,i,n,s,o,a,r,l=0;"next"===c.settings.autoDirection?h.append(c.children.clone().addClass("bx-clone")):(h.prepend(c.children.clone().addClass("bx-clone")),t=c.children.first().position(),l="horizontal"===c.settings.mode?-t.left:-t.top),S(l,"reset",0),c.settings.pager=!1,c.settings.controls=!1,c.settings.autoControls=!1,c.settings.tickerHover&&(c.usingCSS?(n="horizontal"===c.settings.mode?4:5,c.viewport.hover(function(){e=h.css("-"+c.cssPrefix+"-transform"),i=parseFloat(e.split(",")[n]),S(i,"reset",0)},function(){r=0,c.children.each(function(t){r+="horizontal"===c.settings.mode?X(this).outerWidth(!0):X(this).outerHeight(!0)}),s=c.settings.speed/r,o="horizontal"===c.settings.mode?"left":"top",a=s*(r-Math.abs(parseInt(i))),H(a)})):c.viewport.hover(function(){h.stop()},function(){r=0,c.children.each(function(t){r+="horizontal"===c.settings.mode?X(this).outerWidth(!0):X(this).outerHeight(!0)}),s=c.settings.speed/r,o="horizontal"===c.settings.mode?"left":"top",a=s*(r-Math.abs(parseInt(h.css(o)))),H(a)})),H()},H=function(t){var e,i,n=t||c.settings.speed,s={left:0,top:0},o={left:0,top:0};"next"===c.settings.autoDirection?s=h.find(".bx-clone").first().position():o=c.children.first().position(),e="horizontal"===c.settings.mode?-s.left:-s.top,i="horizontal"===c.settings.mode?-o.left:-o.top,S(e,"ticker",n,{resetValue:i})},q=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&function(t){var e=X(window),i={top:e.scrollTop(),left:e.scrollLeft()},n=t.offset();return i.right=i.left+e.width(),i.bottom=i.top+e.height(),n.right=n.left+t.outerWidth(),n.bottom=n.top+t.outerHeight(),!(i.right<n.left||i.left>n.right||i.bottom<n.top||i.top>n.bottom)}(h)){if(39===t.keyCode)return T(t),!1;if(37===t.keyCode)return P(t),!1}},O=function(){c.touch={start:{x:0,y:0},end:{x:0,y:0}},c.viewport.on("touchstart MSPointerDown pointerdown",B),c.viewport.on("click",".bxslider a",function(t){c.viewport.hasClass("click-disabled")&&(t.preventDefault(),c.viewport.removeClass("click-disabled"))})},B=function(t){if("touchstart"===t.type||0===t.button)if(t.preventDefault(),c.controls.el.addClass("disabled"),c.working)c.controls.el.removeClass("disabled");else{c.touch.originalPos=h.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];if("function"==typeof PointerEvent&&void 0===e.pointerId)return;c.touch.start.x=i[0].pageX,c.touch.start.y=i[0].pageY,c.viewport.get(0).setPointerCapture&&(c.pointerId=e.pointerId,c.viewport.get(0).setPointerCapture(c.pointerId)),c.originalClickTarget=e.originalTarget||e.target,c.originalClickButton=e.button,c.originalClickButtons=e.buttons,c.originalEventType=e.type,c.hasMove=!1,c.viewport.on("touchmove MSPointerMove pointermove",F),c.viewport.on("touchend MSPointerUp pointerup",V),c.viewport.on("MSPointerCancel pointercancel",j)}},j=function(t){t.preventDefault(),S(c.touch.originalPos.left,"reset",0),c.controls.el.removeClass("disabled"),c.viewport.off("MSPointerCancel pointercancel",j),c.viewport.off("touchmove MSPointerMove pointermove",F),c.viewport.off("touchend MSPointerUp pointerup",V),c.viewport.get(0).releasePointerCapture&&c.viewport.get(0).releasePointerCapture(c.pointerId)},F=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-c.touch.start.x),s=Math.abs(i[0].pageY-c.touch.start.y),o=0,a=0;c.hasMove=!0,s<3*n&&c.settings.preventDefaultSwipeX?t.preventDefault():n<3*s&&c.settings.preventDefaultSwipeY&&t.preventDefault(),"touchmove"!==t.type&&t.preventDefault(),"fade"!==c.settings.mode&&c.settings.oneToOneTouch&&(o="horizontal"===c.settings.mode?(a=i[0].pageX-c.touch.start.x,c.touch.originalPos.left+a):(a=i[0].pageY-c.touch.start.y,c.touch.originalPos.top+a),S(o,"reset",0))},V=function(t){t.preventDefault(),c.viewport.off("touchmove MSPointerMove pointermove",F),c.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,s=0;c.touch.end.x=i[0].pageX,c.touch.end.y=i[0].pageY,"fade"===c.settings.mode?(s=Math.abs(c.touch.start.x-c.touch.end.x))>=c.settings.swipeThreshold&&(c.touch.start.x>c.touch.end.x?h.goToNextSlide():h.goToPrevSlide(),h.stopAuto()):(n="horizontal"===c.settings.mode?(s=c.touch.end.x-c.touch.start.x,c.touch.originalPos.left):(s=c.touch.end.y-c.touch.start.y,c.touch.originalPos.top),!c.settings.infiniteLoop&&(0===c.active.index&&0<s||c.active.last&&s<0)?S(n,"reset",200):Math.abs(s)>=c.settings.swipeThreshold?(s<0?h.goToNextSlide():h.goToPrevSlide(),h.stopAuto()):S(n,"reset",200)),c.viewport.off("touchend MSPointerUp pointerup",V),c.viewport.get(0).releasePointerCapture&&c.viewport.get(0).releasePointerCapture(c.pointerId),!1!==c.hasMove||0!==c.originalClickButton&&"touchstart"!==c.originalEventType||X(c.originalClickTarget).trigger({type:"click",button:c.originalClickButton,buttons:c.originalClickButtons})},R=function(t){if(c.initialized)if(c.working)window.setTimeout(R,10);else{var e=X(window).width(),i=X(window).height();n===e&&s===i||(n=e,s=i,h.redrawSlider(),c.settings.onSliderResize.call(h,c.active.index))}};return h.goToSlide=function(t,e){var i,n,s,o,a=!0,r=0,l={left:0,top:0},d=null;if(c.oldIndex=c.active.index,c.active.index=function(t){return t<0?c.settings.infiniteLoop?b()-1:c.active.index:t>=b()?c.settings.infiniteLoop?0:c.active.index:t}(t),!c.working&&c.active.index!==c.oldIndex){if(c.working=!0,void 0!==(a=c.settings.onSlideBefore.call(h,c.children.eq(c.active.index),c.oldIndex,c.active.index))&&!a)return c.active.index=c.oldIndex,void(c.working=!1);"next"===e?c.settings.onSlideNext.call(h,c.children.eq(c.active.index),c.oldIndex,c.active.index)||(a=!1):"prev"===e&&(c.settings.onSlidePrev.call(h,c.children.eq(c.active.index),c.oldIndex,c.active.index)||(a=!1)),c.active.last=c.active.index>=b()-1,(c.settings.pager||c.settings.pagerCustom)&&M(c.active.index),c.settings.controls&&N(),"fade"===c.settings.mode?(c.settings.adaptiveHeight&&c.viewport.height()!==v()&&c.viewport.animate({height:v()},c.settings.adaptiveHeightSpeed),c.children.filter(":visible").fadeOut(c.settings.speed).css({zIndex:0}),c.children.eq(c.active.index).css("zIndex",c.settings.slideZIndex+1).fadeIn(c.settings.speed,function(){X(this).css("zIndex",c.settings.slideZIndex),z()})):(c.settings.adaptiveHeight&&c.viewport.height()!==v()&&c.viewport.animate({height:v()},c.settings.adaptiveHeightSpeed),!c.settings.infiniteLoop&&c.carousel&&c.active.last?"horizontal"===c.settings.mode?(l=(d=c.children.eq(c.children.length-1)).position(),r=c.viewport.width()-d.outerWidth()):(i=c.children.length-c.settings.minSlides,l=c.children.eq(i).position()):c.carousel&&c.active.last&&"prev"===e?(n=1===c.settings.moveSlides?c.settings.maxSlides-x():(b()-1)*x()-(c.children.length-c.settings.maxSlides),l=(d=h.children(".bx-clone").eq(n)).position()):"next"===e&&0===c.active.index?(l=h.find("> .bx-clone").eq(c.settings.maxSlides).position(),c.active.last=!1):0<=t&&(o=t*parseInt(x()),l=c.children.eq(o).position()),void 0!==l&&(s="horizontal"===c.settings.mode?-(l.left-r):-l.top,S(s,"slide",c.settings.speed)),c.working=!1),c.settings.ariaHidden&&g(c.active.index*x())}},h.goToNextSlide=function(){if((c.settings.infiniteLoop||!c.active.last)&&!0!==c.working){var t=parseInt(c.active.index)+1;h.goToSlide(t,"next")}},h.goToPrevSlide=function(){if((c.settings.infiniteLoop||0!==c.active.index)&&!0!==c.working){var t=parseInt(c.active.index)-1;h.goToSlide(t,"prev")}},h.startAuto=function(t){c.interval||(c.interval=setInterval(function(){"next"===c.settings.autoDirection?h.goToNextSlide():h.goToPrevSlide()},c.settings.pause),c.settings.onAutoChange.call(h,!0),c.settings.autoControls&&!0!==t&&D("stop"))},h.stopAuto=function(t){c.autoPaused&&(c.autoPaused=!1),c.interval&&(clearInterval(c.interval),c.interval=null,c.settings.onAutoChange.call(h,!1),c.settings.autoControls&&!0!==t&&D("start"))},h.getCurrentSlide=function(){return c.active.index},h.getCurrentSlideElement=function(){return c.children.eq(c.active.index)},h.getSlideElement=function(t){return c.children.eq(t)},h.getSlideCount=function(){return c.children.length},h.isWorking=function(){return c.working},h.redrawSlider=function(){c.children.add(h.find(".bx-clone")).outerWidth(m()),c.viewport.css("height",v()),c.settings.ticker||w(),c.active.last&&(c.active.index=b()-1),c.active.index>=b()&&(c.active.last=!0),c.settings.pager&&!c.settings.pagerCustom&&(t(),M(c.active.index)),c.settings.ariaHidden&&g(c.active.index*x())},h.destroySlider=function(){c.initialized&&(c.initialized=!1,X(".bx-clone",this).remove(),c.children.each(function(){void 0!==X(this).data("origStyle")?X(this).attr("style",X(this).data("origStyle")):X(this).removeAttr("style")}),void 0!==X(this).data("origStyle")?this.attr("style",X(this).data("origStyle")):X(this).removeAttr("style"),X(this).unwrap().unwrap(),c.controls.el&&c.controls.el.remove(),c.controls.next&&c.controls.next.remove(),c.controls.prev&&c.controls.prev.remove(),c.pagerEl&&c.settings.controls&&!c.settings.pagerCustom&&c.pagerEl.remove(),X(".bx-caption",this).remove(),c.controls.autoEl&&c.controls.autoEl.remove(),clearInterval(c.interval),c.settings.responsive&&X(window).off("resize",R),c.settings.keyboardEnabled&&X(document).off("keydown",q),X(this).removeData("bxSlider"),X(window).off("blur",l).off("focus",r))},h.reloadSlider=function(t){void 0!==t&&(e=t),h.destroySlider(),o(),X(h).data("bxSlider",this)},o(),X(h).data("bxSlider",this),this}}}(jQuery),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.lightbox=e(t.jQuery)}(this,function(h){function t(t){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=h.extend({},this.constructor.defaults),this.option(t)}return t.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},t.prototype.option=function(t){h.extend(this.options,t)},t.prototype.imageCountLabel=function(t,e){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,e)},t.prototype.init=function(){var t=this;h(document).ready(function(){t.enable(),t.build()})},t.prototype.enable=function(){var e=this;h("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(t){return e.start(h(t.currentTarget)),!1})},t.prototype.build=function(){if(!(0<h("#lightbox").length)){var e=this;h('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(h("body")),this.$lightbox=h("#lightbox"),this.$overlay=h("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return e.end(),!1}),this.$lightbox.hide().on("click",function(t){return"lightbox"===h(t.target).attr("id")&&e.end(),!1}),this.$outerContainer.on("click",function(t){return"lightbox"===h(t.target).attr("id")&&e.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===e.currentImageIndex?e.changeImage(e.album.length-1):e.changeImage(e.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return e.currentImageIndex===e.album.length-1?e.changeImage(0):e.changeImage(e.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(t){3===t.which&&(e.$nav.css("pointer-events","none"),e.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(e),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return e.end(),!1})}},t.prototype.start=function(t){function e(t){i.album.push({alt:t.attr("data-alt"),link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var i=this,n=h(window);n.on("resize",h.proxy(this.sizeOverlay,this)),h("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var s,o=0,a=t.attr("data-lightbox");if(a){s=h(t.prop("tagName")+'[data-lightbox="'+a+'"]');for(var r=0;r<s.length;r=++r)e(h(s[r])),s[r]===t[0]&&(o=r)}else if("lightbox"===t.attr("rel"))e(t);else{s=h(t.prop("tagName")+'[rel="'+t.attr("rel")+'"]');for(var l=0;l<s.length;l=++l)e(h(s[l])),s[l]===t[0]&&(o=l)}var d=n.scrollTop()+this.options.positionFromTop,c=n.scrollLeft();this.$lightbox.css({top:d+"px",left:c+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&h("html").addClass("lb-disable-scrolling"),this.changeImage(o)},t.prototype.changeImage=function(a){var r=this;this.disableKeyboardNav();var l=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),h(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var d=new Image;d.onload=function(){var t,e,i,n,s,o;l.attr({alt:r.album[a].alt,src:r.album[a].link}),h(d),l.width(d.width),l.height(d.height),r.options.fitImagesInViewport&&(o=h(window).width(),s=h(window).height(),n=o-r.containerPadding.left-r.containerPadding.right-r.imageBorderWidth.left-r.imageBorderWidth.right-20,i=s-r.containerPadding.top-r.containerPadding.bottom-r.imageBorderWidth.top-r.imageBorderWidth.bottom-120,r.options.maxWidth&&r.options.maxWidth<n&&(n=r.options.maxWidth),r.options.maxHeight&&r.options.maxHeight<n&&(i=r.options.maxHeight),(d.width>n||d.height>i)&&(d.width/n>d.height/i?(e=n,t=parseInt(d.height/(d.width/e),10)):(t=i,e=parseInt(d.width/(d.height/t),10)),l.width(e),l.height(t))),r.sizeContainer(l.width(),l.height())},d.src=this.album[a].link,this.currentImageIndex=a},t.prototype.sizeOverlay=function(){this.$overlay.width(h(document).width()).height(h(document).height())},t.prototype.sizeContainer=function(t,e){function i(){n.$lightbox.find(".lb-dataContainer").width(a),n.$lightbox.find(".lb-prevLink").height(r),n.$lightbox.find(".lb-nextLink").height(r),n.showImage()}var n=this,s=this.$outerContainer.outerWidth(),o=this.$outerContainer.outerHeight(),a=t+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,r=e+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;s!==a||o!==r?this.$outerContainer.animate({width:a,height:r},this.options.resizeDuration,"swing",function(){i()}):i()},t.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},t.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=!!this.options.alwaysShowNavOnTouchDevices}catch(t){}this.$lightbox.find(".lb-nav").show(),1<this.album.length&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(0<this.currentImageIndex&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},t.prototype.updateDetails=function(){var t=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var e=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?e.text(this.album[this.currentImageIndex].title):e.html(this.album[this.currentImageIndex].title),e.fadeIn("fast").find("a").on("click",function(t){void 0!==h(this).attr("target")?window.open(h(this).attr("href"),h(this).attr("target")):location.href=h(this).attr("href")})}if(1<this.album.length&&this.options.showImageNumberLabel){var i=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(i).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return t.sizeOverlay()})},t.prototype.preloadNeighboringImages=function(){this.album.length>this.currentImageIndex+1&&((new Image).src=this.album[this.currentImageIndex+1].link),0<this.currentImageIndex&&((new Image).src=this.album[this.currentImageIndex-1].link)},t.prototype.enableKeyboardNav=function(){h(document).on("keyup.keyboard",h.proxy(this.keyboardAction,this))},t.prototype.disableKeyboardNav=function(){h(document).off(".keyboard")},t.prototype.keyboardAction=function(t){var e=t.keyCode,i=String.fromCharCode(e).toLowerCase();27===e||i.match(/x|o|c/)?this.end():"p"===i||37===e?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&1<this.album.length&&this.changeImage(this.album.length-1):"n"!==i&&39!==e||(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&1<this.album.length&&this.changeImage(0))},t.prototype.end=function(){this.disableKeyboardNav(),h(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),h("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&h("html").removeClass("lb-disable-scrolling")},new t}),function(t){"use strict";t(document).ready(function(){t("#nav-icon").click(function(){t(this).toggleClass("open"),t(".js-nav-toggle").toggleClass("open-mobile-menu"),t("body").toggleClass("mobile-menu-open"),"true"===t("#nav-icon").attr("aria-expanded")?t(this).attr("aria-expanded","false"):t(this).attr("aria-expanded","true"),"true"===t("#nav-icon").attr("aria-pressed")?t(this).attr("aria-pressed","false"):t(this).attr("aria-pressed","true"),"Åben menu"===t("#nav-icon").attr("aria-label")?t(this).attr("aria-label","Luk menu"):t(this).attr("aria-label","Åben menu")}),t(".all-menu a").click(function(){t(".all-menu a").removeClass("active"),t(".all-menu ul").removeClass("active-trail"),t(this).addClass("active"),t(this).parentsUntil(".all-menu").parents("li ul").addClass("active-trail")}),t(".all-menu ul").parent("li").append('<span class="menu-trigger" aria-label="Åben undermenu"></span>'),t(".menu-trigger").click(function(){t(this).siblings("ul").slideToggle().toggleClass("mobile-sibling-open"),t(this).toggleClass("active-trigger"),"Åben undermenu"===t(this).attr("aria-label")?t(this).attr("aria-label","Luk undermenu"):t(this).attr("aria-label","Åben undermenu")}),t(".current-menu-ancestor > .menu-trigger").addClass("active-trigger"),t(".all-menu li li:has(ul)").addClass("has-sub-menu"),t(".main figure a, .lightbox-content a, .gallery-item a").attr("data-lightbox","content-image"),t(".slider").bxSlider({mode:"fade",auto:!0,autoHover:!0,nextText:"",prevText:""}),t(".banner .gallery").bxSlider({mode:"fade",speed:1500,auto:!0,pager:!1,controls:!1}),t(".video").fitVids(),t(".show-hide-content").hide(),t(".show-hide-tricker").click(function(){t(this).closest(".sh-minus, .sh-plus").toggleClass("sh-minus sh-plus"),t(this).next(".show-hide-content").slideToggle()})})}(jQuery);