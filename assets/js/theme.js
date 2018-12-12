!function(X){var Y={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};X.fn.bxSlider=function(e){if(0===this.length)return this;if(1<this.length)return this.each(function(){X(this).bxSlider(e)}),this;var g={},h=this,n=X(window).width(),s=X(window).height();if(!X(h).data("bxSlider")){var o=function(){X(h).data("bxSlider")||(g.settings=X.extend({},Y,e),g.settings.slideWidth=parseInt(g.settings.slideWidth),g.children=h.children(g.settings.slideSelector),g.children.length<g.settings.minSlides&&(g.settings.minSlides=g.children.length),g.children.length<g.settings.maxSlides&&(g.settings.maxSlides=g.children.length),g.settings.randomStart&&(g.settings.startSlide=Math.floor(Math.random()*g.children.length)),g.active={index:g.settings.startSlide},g.carousel=1<g.settings.minSlides||1<g.settings.maxSlides,g.carousel&&(g.settings.preloadImages="all"),g.minThreshold=g.settings.minSlides*g.settings.slideWidth+(g.settings.minSlides-1)*g.settings.slideMargin,g.maxThreshold=g.settings.maxSlides*g.settings.slideWidth+(g.settings.maxSlides-1)*g.settings.slideMargin,g.working=!1,g.controls={},g.interval=null,g.animProp="vertical"===g.settings.mode?"top":"left",g.usingCSS=g.settings.useCSS&&"fade"!==g.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return g.cssPrefix=e[i].replace("Perspective","").toLowerCase(),g.animProp="-"+g.cssPrefix+"-transform",!0;return!1}(),"vertical"===g.settings.mode&&(g.settings.maxSlides=g.settings.minSlides),h.data("origStyle",h.attr("style")),h.children(g.settings.slideSelector).each(function(){X(this).data("origStyle",X(this).attr("style"))}),t())},t=function(){var t=g.children.eq(g.settings.startSlide);h.wrap('<div class="'+g.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),g.viewport=h.parent(),g.settings.ariaLive&&!g.settings.ticker&&g.viewport.attr("aria-live","polite"),g.loader=X('<div class="bx-loading" />'),g.viewport.prepend(g.loader),h.css({width:"horizontal"===g.settings.mode?1e3*g.children.length+215+"%":"auto",position:"relative"}),g.usingCSS&&g.settings.easing?h.css("-"+g.cssPrefix+"-transition-timing-function",g.settings.easing):g.settings.easing||(g.settings.easing="swing"),g.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),g.viewport.parent().css({maxWidth:l()}),g.children.css({float:"horizontal"===g.settings.mode?"left":"none",listStyle:"none",position:"relative"}),g.children.css("width",d()),"horizontal"===g.settings.mode&&0<g.settings.slideMargin&&g.children.css("marginRight",g.settings.slideMargin),"vertical"===g.settings.mode&&0<g.settings.slideMargin&&g.children.css("marginBottom",g.settings.slideMargin),"fade"===g.settings.mode&&(g.children.css({position:"absolute",zIndex:0,display:"none"}),g.children.eq(g.settings.startSlide).css({zIndex:g.settings.slideZIndex,display:"block"})),g.controls.el=X('<div class="bx-controls" />'),g.settings.captions&&C(),g.active.last=g.settings.startSlide===p()-1,g.settings.video&&h.fitVids(),"none"===g.settings.preloadImages?t=null:("all"===g.settings.preloadImages||g.settings.ticker)&&(t=g.children),g.settings.ticker?g.settings.pager=!1:(g.settings.controls&&w(),g.settings.auto&&g.settings.autoControls&&S(),g.settings.pager&&x(),(g.settings.controls||g.settings.autoControls||g.settings.pager)&&g.viewport.after(g.controls.el)),null===t?r():a(t,r)},a=function(t,e){var i=t.find('img:not([src=""]), iframe').length,n=0;0!==i?t.find('img:not([src=""]), iframe').each(function(){X(this).one("load error",function(){++n===i&&e()}).each(function(){(this.complete||""==this.src)&&X(this).trigger("load")})}):e()},r=function(){if(g.settings.infiniteLoop&&"fade"!==g.settings.mode&&!g.settings.ticker){var t="vertical"===g.settings.mode?g.settings.minSlides:g.settings.maxSlides,e=g.children.slice(0,t).clone(!0).addClass("bx-clone"),i=g.children.slice(-t).clone(!0).addClass("bx-clone");g.settings.ariaHidden&&(e.attr("aria-hidden",!0),i.attr("aria-hidden",!0)),h.append(e).prepend(i)}g.loader.remove(),f(),"vertical"===g.settings.mode&&(g.settings.adaptiveHeight=!0),g.viewport.height(u()),h.redrawSlider(),g.settings.onSliderLoad.call(h,g.active.index),g.initialized=!0,g.settings.responsive&&X(window).on("resize",V),g.settings.auto&&g.settings.autoStart&&(1<p()||g.settings.autoSlideForOnePage)&&W(),g.settings.ticker&&L(),g.settings.pager&&E(g.settings.startSlide),g.settings.controls&&M(),g.settings.touchEnabled&&!g.settings.ticker&&O(),g.settings.keyboardEnabled&&!g.settings.ticker&&X(document).keydown(q)},u=function(){var e=0,t=X();if("vertical"===g.settings.mode||g.settings.adaptiveHeight)if(g.carousel){var n=1===g.settings.moveSlides?g.active.index:g.active.index*v();for(t=g.children.eq(n),i=1;i<=g.settings.maxSlides-1;i++)t=n+i>=g.children.length?t.add(g.children.eq(i-1)):t.add(g.children.eq(n+i))}else t=g.children.eq(g.active.index);else t=g.children;return"vertical"===g.settings.mode?(t.each(function(t){e+=X(this).outerHeight()}),0<g.settings.slideMargin&&(e+=g.settings.slideMargin*(g.settings.minSlides-1))):e=Math.max.apply(Math,t.map(function(){return X(this).outerHeight(!1)}).get()),"border-box"===g.viewport.css("box-sizing")?e+=parseFloat(g.viewport.css("padding-top"))+parseFloat(g.viewport.css("padding-bottom"))+parseFloat(g.viewport.css("border-top-width"))+parseFloat(g.viewport.css("border-bottom-width")):"padding-box"===g.viewport.css("box-sizing")&&(e+=parseFloat(g.viewport.css("padding-top"))+parseFloat(g.viewport.css("padding-bottom"))),e},l=function(){var t="100%";return 0<g.settings.slideWidth&&(t="horizontal"===g.settings.mode?g.settings.maxSlides*g.settings.slideWidth+(g.settings.maxSlides-1)*g.settings.slideMargin:g.settings.slideWidth),t},d=function(){var t=g.settings.slideWidth,e=g.viewport.width();if(0===g.settings.slideWidth||g.settings.slideWidth>e&&!g.carousel||"vertical"===g.settings.mode)t=e;else if(1<g.settings.maxSlides&&"horizontal"===g.settings.mode){if(e>g.maxThreshold)return t;e<g.minThreshold?t=(e-g.settings.slideMargin*(g.settings.minSlides-1))/g.settings.minSlides:g.settings.shrinkItems&&(t=Math.floor((e+g.settings.slideMargin)/Math.ceil((e+g.settings.slideMargin)/(t+g.settings.slideMargin))-g.settings.slideMargin))}return t},c=function(){var t=1,e=null;return"horizontal"===g.settings.mode&&0<g.settings.slideWidth?t=g.viewport.width()<g.minThreshold?g.settings.minSlides:g.viewport.width()>g.maxThreshold?g.settings.maxSlides:(e=g.children.first().width()+g.settings.slideMargin,Math.floor((g.viewport.width()+g.settings.slideMargin)/e)||1):"vertical"===g.settings.mode&&(t=g.settings.minSlides),t},p=function(){var t=0,e=0,i=0;if(0<g.settings.moveSlides){if(!g.settings.infiniteLoop){for(;e<g.children.length;)++t,e=i+c(),i+=g.settings.moveSlides<=c()?g.settings.moveSlides:c();return i}t=Math.ceil(g.children.length/v())}else t=Math.ceil(g.children.length/c());return t},v=function(){return 0<g.settings.moveSlides&&g.settings.moveSlides<=c()?g.settings.moveSlides:c()},f=function(){var t,e,i;g.children.length>g.settings.maxSlides&&g.active.last&&!g.settings.infiniteLoop?"horizontal"===g.settings.mode?(t=(e=g.children.last()).position(),m(-(t.left-(g.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===g.settings.mode&&(i=g.children.length-g.settings.minSlides,t=g.children.eq(i).position(),m(-t.top,"reset",0)):(t=g.children.eq(g.active.index*v()).position(),g.active.index===p()-1&&(g.active.last=!0),void 0!==t&&("horizontal"===g.settings.mode?m(-t.left,"reset",0):"vertical"===g.settings.mode&&m(-t.top,"reset",0)))},m=function(t,e,i,n){var s,o;g.usingCSS?(o="vertical"===g.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)",h.css("-"+g.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"===e?(h.css(g.animProp,o),0!==i?h.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){X(t.target).is(h)&&(h.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A())}):A()):"reset"===e?h.css(g.animProp,o):"ticker"===e&&(h.css("-"+g.cssPrefix+"-transition-timing-function","linear"),h.css(g.animProp,o),0!==i?h.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){X(t.target).is(h)&&(h.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),m(n.resetValue,"reset",0),H())}):(m(n.resetValue,"reset",0),H()))):((s={})[g.animProp]=t,"slide"===e?h.animate(s,i,g.settings.easing,function(){A()}):"reset"===e?h.css(g.animProp,t):"ticker"===e&&h.animate(s,i,"linear",function(){m(n.resetValue,"reset",0),H()}))},b=function(){for(var t="",e="",i=p(),n=0;n<i;n++)e="",g.settings.buildPager&&X.isFunction(g.settings.buildPager)||g.settings.pagerCustom?(e=g.settings.buildPager(n),g.pagerEl.addClass("bx-custom-pager")):(e=n+1,g.pagerEl.addClass("bx-default-pager")),t+='<div class="bx-pager-item"><a href="" data-slide-index="'+n+'" class="bx-pager-link">'+e+"</a></div>";g.pagerEl.html(t)},x=function(){g.settings.pagerCustom?g.pagerEl=X(g.settings.pagerCustom):(g.pagerEl=X('<div class="bx-pager" />'),g.settings.pagerSelector?X(g.settings.pagerSelector).html(g.pagerEl):g.controls.el.addClass("bx-has-pager").append(g.pagerEl),b()),g.pagerEl.on("click touchend","a",P)},w=function(){g.controls.next=X('<a class="bx-next" href="">'+g.settings.nextText+"</a>"),g.controls.prev=X('<a class="bx-prev" href="">'+g.settings.prevText+"</a>"),g.controls.next.on("click touchend",I),g.controls.prev.on("click touchend",y),g.settings.nextSelector&&X(g.settings.nextSelector).append(g.controls.next),g.settings.prevSelector&&X(g.settings.prevSelector).append(g.controls.prev),g.settings.nextSelector||g.settings.prevSelector||(g.controls.directionEl=X('<div class="bx-controls-direction" />'),g.controls.directionEl.append(g.controls.prev).append(g.controls.next),g.controls.el.addClass("bx-has-controls-direction").append(g.controls.directionEl))},S=function(){g.controls.start=X('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+g.settings.startText+"</a></div>"),g.controls.stop=X('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+g.settings.stopText+"</a></div>"),g.controls.autoEl=X('<div class="bx-controls-auto" />'),g.controls.autoEl.on("click",".bx-start",k),g.controls.autoEl.on("click",".bx-stop",T),g.settings.autoControlsCombine?g.controls.autoEl.append(g.controls.start):g.controls.autoEl.append(g.controls.start).append(g.controls.stop),g.settings.autoControlsSelector?X(g.settings.autoControlsSelector).html(g.controls.autoEl):g.controls.el.addClass("bx-has-controls-auto").append(g.controls.autoEl),$(g.settings.autoStart?"stop":"start")},C=function(){g.children.each(function(t){var e=X(this).find("img:first").attr("title");void 0!==e&&(""+e).length&&X(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},I=function(t){t.preventDefault(),g.controls.el.hasClass("disabled")||(g.settings.auto&&g.settings.stopAutoOnClick&&h.stopAuto(),h.goToNextSlide())},y=function(t){t.preventDefault(),g.controls.el.hasClass("disabled")||(g.settings.auto&&g.settings.stopAutoOnClick&&h.stopAuto(),h.goToPrevSlide())},k=function(t){h.startAuto(),t.preventDefault()},T=function(t){h.stopAuto(),t.preventDefault()},P=function(t){var e,i;t.preventDefault(),g.controls.el.hasClass("disabled")||(g.settings.auto&&g.settings.stopAutoOnClick&&h.stopAuto(),void 0!==(e=X(t.currentTarget)).attr("data-slide-index")&&(i=parseInt(e.attr("data-slide-index")))!==g.active.index&&h.goToSlide(i))},E=function(i){var t=g.children.length;if("short"===g.settings.pagerType)return 1<g.settings.maxSlides&&(t=Math.ceil(g.children.length/g.settings.maxSlides)),void g.pagerEl.html(i+1+g.settings.pagerShortSeparator+t);g.pagerEl.find("a").removeClass("active"),g.pagerEl.each(function(t,e){X(e).find("a").eq(i).addClass("active")})},A=function(){if(g.settings.infiniteLoop){var t="";0===g.active.index?t=g.children.eq(0).position():g.active.index===p()-1&&g.carousel?t=g.children.eq((p()-1)*v()).position():g.active.index===g.children.length-1&&(t=g.children.eq(g.children.length-1).position()),t&&("horizontal"===g.settings.mode?m(-t.left,"reset",0):"vertical"===g.settings.mode&&m(-t.top,"reset",0))}g.working=!1,g.settings.onSlideAfter.call(h,g.children.eq(g.active.index),g.oldIndex,g.active.index)},$=function(t){g.settings.autoControlsCombine?g.controls.autoEl.html(g.controls[t]):(g.controls.autoEl.find("a").removeClass("active"),g.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},M=function(){1===p()?(g.controls.prev.addClass("disabled"),g.controls.next.addClass("disabled")):!g.settings.infiniteLoop&&g.settings.hideControlOnEnd&&(0===g.active.index?(g.controls.prev.addClass("disabled"),g.controls.next.removeClass("disabled")):g.active.index===p()-1?(g.controls.next.addClass("disabled"),g.controls.prev.removeClass("disabled")):(g.controls.prev.removeClass("disabled"),g.controls.next.removeClass("disabled")))},z=function(){h.startAuto()},D=function(){h.stopAuto()},W=function(){0<g.settings.autoDelay?setTimeout(h.startAuto,g.settings.autoDelay):(h.startAuto(),X(window).focus(z).blur(D)),g.settings.autoHover&&h.hover(function(){g.interval&&(h.stopAuto(!0),g.autoPaused=!0)},function(){g.autoPaused&&(h.startAuto(!0),g.autoPaused=null)})},L=function(){var t,e,i,n,s,o,a,r,l=0;"next"===g.settings.autoDirection?h.append(g.children.clone().addClass("bx-clone")):(h.prepend(g.children.clone().addClass("bx-clone")),t=g.children.first().position(),l="horizontal"===g.settings.mode?-t.left:-t.top),m(l,"reset",0),g.settings.pager=!1,g.settings.controls=!1,g.settings.autoControls=!1,g.settings.tickerHover&&(g.usingCSS?(n="horizontal"===g.settings.mode?4:5,g.viewport.hover(function(){e=h.css("-"+g.cssPrefix+"-transform"),i=parseFloat(e.split(",")[n]),m(i,"reset",0)},function(){r=0,g.children.each(function(t){r+="horizontal"===g.settings.mode?X(this).outerWidth(!0):X(this).outerHeight(!0)}),s=g.settings.speed/r,o="horizontal"===g.settings.mode?"left":"top",a=s*(r-Math.abs(parseInt(i))),H(a)})):g.viewport.hover(function(){h.stop()},function(){r=0,g.children.each(function(t){r+="horizontal"===g.settings.mode?X(this).outerWidth(!0):X(this).outerHeight(!0)}),s=g.settings.speed/r,o="horizontal"===g.settings.mode?"left":"top",a=s*(r-Math.abs(parseInt(h.css(o)))),H(a)})),H()},H=function(t){var e,i,n=t||g.settings.speed,s={left:0,top:0},o={left:0,top:0};"next"===g.settings.autoDirection?s=h.find(".bx-clone").first().position():o=g.children.first().position(),e="horizontal"===g.settings.mode?-s.left:-s.top,i="horizontal"===g.settings.mode?-o.left:-o.top,m(e,"ticker",n,{resetValue:i})},q=function(t){var e,i,n,s,o=document.activeElement.tagName.toLowerCase();if(null==new RegExp(o,["i"]).exec("input|textarea")&&(e=h,i=X(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset(),n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom))){if(39===t.keyCode)return I(t),!1;if(37===t.keyCode)return y(t),!1}},O=function(){g.touch={start:{x:0,y:0},end:{x:0,y:0}},g.viewport.on("touchstart MSPointerDown pointerdown",N),g.viewport.on("click",".bxslider a",function(t){g.viewport.hasClass("click-disabled")&&(t.preventDefault(),g.viewport.removeClass("click-disabled"))})},N=function(t){if("touchstart"===t.type||0===t.button)if(t.preventDefault(),g.controls.el.addClass("disabled"),g.working)g.controls.el.removeClass("disabled");else{g.touch.originalPos=h.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];if("function"==typeof PointerEvent&&void 0===e.pointerId)return;g.touch.start.x=i[0].pageX,g.touch.start.y=i[0].pageY,g.viewport.get(0).setPointerCapture&&(g.pointerId=e.pointerId,g.viewport.get(0).setPointerCapture(g.pointerId)),g.originalClickTarget=e.originalTarget||e.target,g.originalClickButton=e.button,g.originalClickButtons=e.buttons,g.originalEventType=e.type,g.hasMove=!1,g.viewport.on("touchmove MSPointerMove pointermove",F),g.viewport.on("touchend MSPointerUp pointerup",j),g.viewport.on("MSPointerCancel pointercancel",B)}},B=function(t){t.preventDefault(),m(g.touch.originalPos.left,"reset",0),g.controls.el.removeClass("disabled"),g.viewport.off("MSPointerCancel pointercancel",B),g.viewport.off("touchmove MSPointerMove pointermove",F),g.viewport.off("touchend MSPointerUp pointerup",j),g.viewport.get(0).releasePointerCapture&&g.viewport.get(0).releasePointerCapture(g.pointerId)},F=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-g.touch.start.x),s=Math.abs(i[0].pageY-g.touch.start.y),o=0,a=0;g.hasMove=!0,s<3*n&&g.settings.preventDefaultSwipeX?t.preventDefault():n<3*s&&g.settings.preventDefaultSwipeY&&t.preventDefault(),"touchmove"!==t.type&&t.preventDefault(),"fade"!==g.settings.mode&&g.settings.oneToOneTouch&&(o="horizontal"===g.settings.mode?(a=i[0].pageX-g.touch.start.x,g.touch.originalPos.left+a):(a=i[0].pageY-g.touch.start.y,g.touch.originalPos.top+a),m(o,"reset",0))},j=function(t){t.preventDefault(),g.viewport.off("touchmove MSPointerMove pointermove",F),g.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,s=0;g.touch.end.x=i[0].pageX,g.touch.end.y=i[0].pageY,"fade"===g.settings.mode?(s=Math.abs(g.touch.start.x-g.touch.end.x))>=g.settings.swipeThreshold&&(g.touch.start.x>g.touch.end.x?h.goToNextSlide():h.goToPrevSlide(),h.stopAuto()):(n="horizontal"===g.settings.mode?(s=g.touch.end.x-g.touch.start.x,g.touch.originalPos.left):(s=g.touch.end.y-g.touch.start.y,g.touch.originalPos.top),!g.settings.infiniteLoop&&(0===g.active.index&&0<s||g.active.last&&s<0)?m(n,"reset",200):Math.abs(s)>=g.settings.swipeThreshold?(s<0?h.goToNextSlide():h.goToPrevSlide(),h.stopAuto()):m(n,"reset",200)),g.viewport.off("touchend MSPointerUp pointerup",j),g.viewport.get(0).releasePointerCapture&&g.viewport.get(0).releasePointerCapture(g.pointerId),!1!==g.hasMove||0!==g.originalClickButton&&"touchstart"!==g.originalEventType||X(g.originalClickTarget).trigger({type:"click",button:g.originalClickButton,buttons:g.originalClickButtons})},V=function(t){if(g.initialized)if(g.working)window.setTimeout(V,10);else{var e=X(window).width(),i=X(window).height();n===e&&s===i||(n=e,s=i,h.redrawSlider(),g.settings.onSliderResize.call(h,g.active.index))}},R=function(t){var e=c();g.settings.ariaHidden&&!g.settings.ticker&&(g.children.attr("aria-hidden","true"),g.children.slice(t,t+e).attr("aria-hidden","false"))};return h.goToSlide=function(t,e){var i,n,s,o,a,r=!0,l=0,d={left:0,top:0},c=null;if(g.oldIndex=g.active.index,g.active.index=(a=t)<0?g.settings.infiniteLoop?p()-1:g.active.index:a>=p()?g.settings.infiniteLoop?0:g.active.index:a,!g.working&&g.active.index!==g.oldIndex){if(g.working=!0,void 0!==(r=g.settings.onSlideBefore.call(h,g.children.eq(g.active.index),g.oldIndex,g.active.index))&&!r)return g.active.index=g.oldIndex,void(g.working=!1);"next"===e?g.settings.onSlideNext.call(h,g.children.eq(g.active.index),g.oldIndex,g.active.index)||(r=!1):"prev"===e&&(g.settings.onSlidePrev.call(h,g.children.eq(g.active.index),g.oldIndex,g.active.index)||(r=!1)),g.active.last=g.active.index>=p()-1,(g.settings.pager||g.settings.pagerCustom)&&E(g.active.index),g.settings.controls&&M(),"fade"===g.settings.mode?(g.settings.adaptiveHeight&&g.viewport.height()!==u()&&g.viewport.animate({height:u()},g.settings.adaptiveHeightSpeed),g.children.filter(":visible").fadeOut(g.settings.speed).css({zIndex:0}),g.children.eq(g.active.index).css("zIndex",g.settings.slideZIndex+1).fadeIn(g.settings.speed,function(){X(this).css("zIndex",g.settings.slideZIndex),A()})):(g.settings.adaptiveHeight&&g.viewport.height()!==u()&&g.viewport.animate({height:u()},g.settings.adaptiveHeightSpeed),!g.settings.infiniteLoop&&g.carousel&&g.active.last?"horizontal"===g.settings.mode?(d=(c=g.children.eq(g.children.length-1)).position(),l=g.viewport.width()-c.outerWidth()):(i=g.children.length-g.settings.minSlides,d=g.children.eq(i).position()):g.carousel&&g.active.last&&"prev"===e?(n=1===g.settings.moveSlides?g.settings.maxSlides-v():(p()-1)*v()-(g.children.length-g.settings.maxSlides),d=(c=h.children(".bx-clone").eq(n)).position()):"next"===e&&0===g.active.index?(d=h.find("> .bx-clone").eq(g.settings.maxSlides).position(),g.active.last=!1):0<=t&&(o=t*parseInt(v()),d=g.children.eq(o).position()),void 0!==d&&(s="horizontal"===g.settings.mode?-(d.left-l):-d.top,m(s,"slide",g.settings.speed)),g.working=!1),g.settings.ariaHidden&&R(g.active.index*v())}},h.goToNextSlide=function(){if((g.settings.infiniteLoop||!g.active.last)&&!0!==g.working){var t=parseInt(g.active.index)+1;h.goToSlide(t,"next")}},h.goToPrevSlide=function(){if((g.settings.infiniteLoop||0!==g.active.index)&&!0!==g.working){var t=parseInt(g.active.index)-1;h.goToSlide(t,"prev")}},h.startAuto=function(t){g.interval||(g.interval=setInterval(function(){"next"===g.settings.autoDirection?h.goToNextSlide():h.goToPrevSlide()},g.settings.pause),g.settings.onAutoChange.call(h,!0),g.settings.autoControls&&!0!==t&&$("stop"))},h.stopAuto=function(t){g.autoPaused&&(g.autoPaused=!1),g.interval&&(clearInterval(g.interval),g.interval=null,g.settings.onAutoChange.call(h,!1),g.settings.autoControls&&!0!==t&&$("start"))},h.getCurrentSlide=function(){return g.active.index},h.getCurrentSlideElement=function(){return g.children.eq(g.active.index)},h.getSlideElement=function(t){return g.children.eq(t)},h.getSlideCount=function(){return g.children.length},h.isWorking=function(){return g.working},h.redrawSlider=function(){g.children.add(h.find(".bx-clone")).outerWidth(d()),g.viewport.css("height",u()),g.settings.ticker||f(),g.active.last&&(g.active.index=p()-1),g.active.index>=p()&&(g.active.last=!0),g.settings.pager&&!g.settings.pagerCustom&&(b(),E(g.active.index)),g.settings.ariaHidden&&R(g.active.index*v())},h.destroySlider=function(){g.initialized&&(g.initialized=!1,X(".bx-clone",this).remove(),g.children.each(function(){void 0!==X(this).data("origStyle")?X(this).attr("style",X(this).data("origStyle")):X(this).removeAttr("style")}),void 0!==X(this).data("origStyle")?this.attr("style",X(this).data("origStyle")):X(this).removeAttr("style"),X(this).unwrap().unwrap(),g.controls.el&&g.controls.el.remove(),g.controls.next&&g.controls.next.remove(),g.controls.prev&&g.controls.prev.remove(),g.pagerEl&&g.settings.controls&&!g.settings.pagerCustom&&g.pagerEl.remove(),X(".bx-caption",this).remove(),g.controls.autoEl&&g.controls.autoEl.remove(),clearInterval(g.interval),g.settings.responsive&&X(window).off("resize",V),g.settings.keyboardEnabled&&X(document).off("keydown",q),X(this).removeData("bxSlider"),X(window).off("blur",D).off("focus",z))},h.reloadSlider=function(t){void 0!==t&&(e=t),h.destroySlider(),o(),X(h).data("bxSlider",this)},o(),X(h).data("bxSlider",this),this}}}(jQuery),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):t.lightbox=e(t.jQuery)}(this,function(g){function t(t){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=g.extend({},this.constructor.defaults),this.option(t)}return t.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},t.prototype.option=function(t){g.extend(this.options,t)},t.prototype.imageCountLabel=function(t,e){return this.options.albumLabel.replace(/%1/g,t).replace(/%2/g,e)},t.prototype.init=function(){var t=this;g(document).ready(function(){t.enable(),t.build()})},t.prototype.enable=function(){var e=this;g("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(t){return e.start(g(t.currentTarget)),!1})},t.prototype.build=function(){if(!(0<g("#lightbox").length)){var e=this;g('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(g("body")),this.$lightbox=g("#lightbox"),this.$overlay=g("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return e.end(),!1}),this.$lightbox.hide().on("click",function(t){return"lightbox"===g(t.target).attr("id")&&e.end(),!1}),this.$outerContainer.on("click",function(t){return"lightbox"===g(t.target).attr("id")&&e.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===e.currentImageIndex?e.changeImage(e.album.length-1):e.changeImage(e.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return e.currentImageIndex===e.album.length-1?e.changeImage(0):e.changeImage(e.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(t){3===t.which&&(e.$nav.css("pointer-events","none"),e.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(e),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){return e.end(),!1})}},t.prototype.start=function(t){function e(t){i.album.push({alt:t.attr("data-alt"),link:t.attr("href"),title:t.attr("data-title")||t.attr("title")})}var i=this,n=g(window);n.on("resize",g.proxy(this.sizeOverlay,this)),g("select, object, embed").css({visibility:"hidden"}),this.sizeOverlay(),this.album=[];var s,o=0,a=t.attr("data-lightbox");if(a){s=g(t.prop("tagName")+'[data-lightbox="'+a+'"]');for(var r=0;r<s.length;r=++r)e(g(s[r])),s[r]===t[0]&&(o=r)}else if("lightbox"===t.attr("rel"))e(t);else{s=g(t.prop("tagName")+'[rel="'+t.attr("rel")+'"]');for(var l=0;l<s.length;l=++l)e(g(s[l])),s[l]===t[0]&&(o=l)}var d=n.scrollTop()+this.options.positionFromTop,c=n.scrollLeft();this.$lightbox.css({top:d+"px",left:c+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&g("html").addClass("lb-disable-scrolling"),this.changeImage(o)},t.prototype.changeImage=function(a){var r=this;this.disableKeyboardNav();var l=this.$lightbox.find(".lb-image");this.$overlay.fadeIn(this.options.fadeDuration),g(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var d=new Image;d.onload=function(){var t,e,i,n,s,o;l.attr({alt:r.album[a].alt,src:r.album[a].link}),g(d),l.width(d.width),l.height(d.height),r.options.fitImagesInViewport&&(o=g(window).width(),s=g(window).height(),n=o-r.containerPadding.left-r.containerPadding.right-r.imageBorderWidth.left-r.imageBorderWidth.right-20,i=s-r.containerPadding.top-r.containerPadding.bottom-r.imageBorderWidth.top-r.imageBorderWidth.bottom-120,r.options.maxWidth&&r.options.maxWidth<n&&(n=r.options.maxWidth),r.options.maxHeight&&r.options.maxHeight<n&&(i=r.options.maxHeight),(d.width>n||d.height>i)&&(d.width/n>d.height/i?(e=n,t=parseInt(d.height/(d.width/e),10)):(t=i,e=parseInt(d.width/(d.height/t),10)),l.width(e),l.height(t))),r.sizeContainer(l.width(),l.height())},d.src=this.album[a].link,this.currentImageIndex=a},t.prototype.sizeOverlay=function(){this.$overlay.width(g(document).width()).height(g(document).height())},t.prototype.sizeContainer=function(t,e){function i(){n.$lightbox.find(".lb-dataContainer").width(a),n.$lightbox.find(".lb-prevLink").height(r),n.$lightbox.find(".lb-nextLink").height(r),n.showImage()}var n=this,s=this.$outerContainer.outerWidth(),o=this.$outerContainer.outerHeight(),a=t+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,r=e+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;s!==a||o!==r?this.$outerContainer.animate({width:a,height:r},this.options.resizeDuration,"swing",function(){i()}):i()},t.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},t.prototype.updateNav=function(){var t=!1;try{document.createEvent("TouchEvent"),t=!!this.options.alwaysShowNavOnTouchDevices}catch(t){}this.$lightbox.find(".lb-nav").show(),1<this.album.length&&(this.options.wrapAround?(t&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(0<this.currentImageIndex&&(this.$lightbox.find(".lb-prev").show(),t&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),t&&this.$lightbox.find(".lb-next").css("opacity","1"))))},t.prototype.updateDetails=function(){var t=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var e=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?e.text(this.album[this.currentImageIndex].title):e.html(this.album[this.currentImageIndex].title),e.fadeIn("fast").find("a").on("click",function(t){void 0!==g(this).attr("target")?window.open(g(this).attr("href"),g(this).attr("target")):location.href=g(this).attr("href")})}if(1<this.album.length&&this.options.showImageNumberLabel){var i=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(i).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return t.sizeOverlay()})},t.prototype.preloadNeighboringImages=function(){this.album.length>this.currentImageIndex+1&&((new Image).src=this.album[this.currentImageIndex+1].link),0<this.currentImageIndex&&((new Image).src=this.album[this.currentImageIndex-1].link)},t.prototype.enableKeyboardNav=function(){g(document).on("keyup.keyboard",g.proxy(this.keyboardAction,this))},t.prototype.disableKeyboardNav=function(){g(document).off(".keyboard")},t.prototype.keyboardAction=function(t){var e=t.keyCode,i=String.fromCharCode(e).toLowerCase();27===e||i.match(/x|o|c/)?this.end():"p"===i||37===e?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&1<this.album.length&&this.changeImage(this.album.length-1):"n"!==i&&39!==e||(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&1<this.album.length&&this.changeImage(0))},t.prototype.end=function(){this.disableKeyboardNav(),g(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),g("select, object, embed").css({visibility:"visible"}),this.options.disableScrolling&&g("html").removeClass("lb-disable-scrolling")},new t}),function(t){"use strict";t(document).ready(function(){t("#nav-icon").click(function(){t(this).toggleClass("open"),t(".js-nav-toggle").toggleClass("open-mobile-menu"),t("body").toggleClass("mobile-menu-open")}),t(".all-menu a").click(function(){t(".all-menu a").removeClass("active"),t(".all-menu ul").removeClass("active-trail"),t(this).addClass("active"),t(this).parentsUntil(".all-menu").parents("li ul").addClass("active-trail")}),t(".all-menu ul").parent("li").append('<span class="menu-trigger"></span>'),t(".menu-trigger").click(function(){t(this).siblings("ul").slideToggle().toggleClass("mobile-sibling-open"),t(this).toggleClass("active-trigger")}),t(".current-menu-ancestor > .menu-trigger").addClass("active-trigger"),t(".all-menu li li:has(ul)").addClass("has-sub-menu"),t("figure a, .lightbox-content a").attr("data-lightbox","content-image"),t(".slider").bxSlider({mode:"fade",auto:!0,autoHover:!0,nextText:"",prevText:""})})}(jQuery);