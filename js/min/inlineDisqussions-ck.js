var disqus_shortname,disqus_identifier,disqus_url;!function(i){var s={};i.fn.extend({inlineDisqussions:function(a){var d={identifier:"disqussion",displayCount:!0,highlighted:!1,position:"right",background:"white",maxWidth:9999};s=i.extend({},d,a),0===i("#disqussions_wrapper").length&&i('<div id="disqussions_wrapper"></div>').appendTo(i("body")),0===i("#disqus_thread").length?i('<div id="disqus_thread"></div>').appendTo("#disqussions_wrapper"):e(),s.highlighted&&i('<div id="disqussions_overlay"></div>').appendTo(i("body")),i(this).each(function(s){t(s,i(this))}),s.displayCount&&n(),i("html").click(function(s){0===i(s.target).parents("#disqussions_wrapper, .main-disqussion-link-wrp").length&&o()})}});var t=function(t,e){var n;if(e.attr("data-disqus-identifier"))n=e.attr("data-disqus-identifier");else{for(;i('[data-disqus-identifier="'+window.location.pathname+s.identifier+"-"+t+'"]').length>0;)t++;n=window.location.pathname+s.identifier+"-"+t}var r=s.highlighted?"disqussion-link disqussion-highlight":"disqussion-link",u=i('<a class="'+r+'" />').attr("href",window.location.pathname+s.identifier+"-"+t+"#disqus_thread").attr("data-disqus-identifier",n).attr("data-disqus-url",window.location.href+s.identifier+"-"+t).attr("data-disqus-position",s.position).text("+").wrap('<div class="disqussion" />').parent().appendTo("#disqussions_wrapper");u.css({top:e.offset().top,left:"right"==s.position?e.offset().left+e.outerWidth():e.offset().left-u.outerWidth()}),e.attr("data-disqus-identifier",n).mouseover(function(){u.addClass("hovered")}).mouseout(function(){u.removeClass("hovered")}),u.delegate("a.disqussion-link","click",function(s){s.preventDefault(),i(this).is(".active")?(s.stopPropagation(),o()):a(i(this),function(i){d(i)})})},e=function(){if(0===i("a.main-disqussion-link").length){var s=i('<a class="main-disqussion-link" />').attr("href",window.location.pathname+"#disqus_thread").text("Comments").wrap('<h2 class="main-disqussion-link-wrp" />').parent().insertBefore("#disqus_thread");s.delegate("a.main-disqussion-link","click",function(s){s.preventDefault(),i(this).is(".active")?s.stopPropagation():a(i(this),function(i){d(i,!0)})})}},a=function(s,t){var e=s.attr("data-disqus-identifier"),a=s.attr("data-disqus-url");if(window.DISQUS)DISQUS.reset({reload:!0,config:function(){this.page.identifier=e,this.page.url=a}});else{disqus_identifier=e,disqus_url=a;var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="//"+disqus_shortname+".disqus.com/embed.js",i("head").append(n)}i("a.disqussion-link, a.main-disqussion-link").removeClass("active").filter(s).addClass("active"),s.is(".disqussion-highlight")&&r(e),t(s)},n=function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src="//"+disqus_shortname+".disqus.com/count.js",i("head").append(s),window.setTimeout(function(){i(".disqussion-link").filter(function(){return i(this).text().match(/[1-9]/g)}).addClass("has-comments")},1e3)},d=function(t,e){var a={};e===!0?(i("#disqus_thread").removeClass("positioned"),a={position:"static",width:"auto"}):(i("#disqus_thread").addClass("positioned"),a={position:"absolute"}),a.backgroundColor=s.background;var n={};"right"==t.attr("data-disqus-position")?n={top:t.offset().top,left:t.offset().left+t.outerWidth(),width:Math.min(parseInt(i(window).width()-(t.offset().left+t.outerWidth()),10),s.maxWidth)}:"left"==t.attr("data-disqus-position")&&(n={top:t.offset().top,left:t.offset().left-Math.min(parseInt(t.offset().left,10),s.maxWidth),width:Math.min(parseInt(t.offset().left,10),s.maxWidth)}),i("#disqus_thread").stop().fadeIn("fast").animate(n,"fast").css(a)},o=function(){i("#disqus_thread").stop().fadeOut("fast"),i("a.disqussion-link").removeClass("active"),i("#disqussions_overlay").fadeOut("fast"),i("body").removeClass("disqussion-highlight"),i("[data-disqus-identifier]").removeClass("disqussion-highlighted"),i("body").css({position:"relative",left:"0",right:"0"})},r=function(s){i("body").addClass("disqussion-highlight"),i("#disqussions_overlay").fadeIn("fast"),i("[data-disqus-identifier]").removeClass("disqussion-highlighted").filter('[data-disqus-identifier="'+s+'"]:not(".disqussion-link")').addClass("disqussion-highlighted")}}(jQuery);