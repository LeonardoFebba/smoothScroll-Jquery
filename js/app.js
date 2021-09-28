$('[data-group]').each(function(){
	const $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		const id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

$('.nav-menu a[href^="#"]').click(function(e){
	e.preventDefault();
	const id = $(this).attr('href'),
	targetOffset = $(id).offset().top,
	menuHeight = $('.menu').innerHeight(); 
	
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});

$('section').each(function(){
	const height = $(this).height(),
	offsetTop = $(this).offset().top,
	heightMenu = $('.menu').innerHeight(),
	id = $(this).attr('id'),
	$itemMenu = $('a[href^="#'+ id +'"]');

	$(window).scroll(function(){
		const topScroll = $(this).scrollTop();
		if(offsetTop - heightMenu < topScroll && offsetTop + height - heightMenu > topScroll){
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	});
});

function slider(sliderName, velocidade){
	const slideClass = '.' + sliderName,
	activeClass = 'active';
	let rotate = setInterval(rotateSlide, velocidade);

	$(slideClass +'> :first').addClass(activeClass);
	$(slideClass).hover(function(){
		clearInterval(rotate);
	}, function(){ 
		rotate = setInterval(rotateSlide, velocidade);
	});

	function rotateSlide(){
		const activeSlide = $( slideClass + '> .' + activeClass);
		let nextSlide = activeSlide.next();

		

		if(nextSlide.length === 0){
			nextSlide = $( slideClass + '> :first');
		}
		activeSlide.removeClass(activeClass);
		nextSlide.addClass(activeClass);
	}

}

slider('introducao', 2000);


