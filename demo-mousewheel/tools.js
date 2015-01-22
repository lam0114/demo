(function($){
	$('#wrapper').on('mousewheel',function(e){
		var $child = $('.child');
		var mt = parseInt($child.css('margin-top'));
		var h = $child.height();
		var v = mt+e.deltaY*20;
		if(v > 0)
			v = 0
		else if(v < -1*h)
			v = (-1*h);
		else
			v = v;
		$('.child').css('margin-top',v+'px');
	});
	var f = 0;
	$(window).scroll(function(e){
		var scrollTop = $(this).scrollTop();
		var flag = scrollTop > f;
		f  = scrollTop;
		var wh = $(this).height();
		var i = Math.floor(scrollTop/wh);
		$('#sidebar .nav').eq(i).addClass('ac').siblings().removeClass('ac');
		var v = scrollTop/wh;
		console.log(scrollTop + ' --- ' + wh + ' --- ' + v);
		if(!v){
			setTimeout(function(){
				console.log('---'+new Date());
			},1000);
		}
		// var $c = $('.child');
		// var mt = parseInt($c.css('margin-top'));
		// var ch = $c.height();
		// if(flag){
			// mt-=5;
			// if(mt<-1*ch)
				// mt=(-1*ch);
		// }else{
			// mt+=5;
			// if(mt>0)
				// mt=0;
		// }
		// $('.child').css('margin-top',mt+'px');
		// var c = $('#wrapper section').size();
		// var sH = $('#wrapper section:eq(0)').height();
		// var totalTop = c*sH;
		// if(scrollTop == (totalTop - sH))
			// $(this).scrollTop(0);
	});
	$('#sidebar .nav').click(function(e){
		var $this = $(this);
		var i = $this.index();
		var sH = $('#wrapper section:eq(0)').height();
		$(window).scrollTop(i*sH);
	});
	$('#wrapper').one('mousewheel',function(){
		
		$(this).one('mousewheel',function(){
			
		});
	});
})(jQuery);