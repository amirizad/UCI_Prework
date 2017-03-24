$(function(){
	var colors = ['Red', 'Yellow', 'Blue', 'Green', 'Black','Beige','Aqua','Brown','Coral','Navy','Orange','Violet'];

	$("#button1").unbind().click(function(){
		$('#box').removeAttr('style');
		$('#box').html();
	});

	$("#button2").unbind().click(function(){
		var divWidth = $('#box').width();
		divWidth+=20
		$('#box').css({
			'width': divWidth+'px',
			'height': divWidth+'px'
		});
	});

	$("#button3").unbind().click(function(e){
		$('#box').css('background','transparent');
		var current_color = $(this).html();
		$('#box').css({'background-color':current_color,'box-shadow':'none'});
    	var color =  colors[Math.floor(Math.random()*colors.length)];
		$(this).html(color);
	});

	$("#button4").unbind().click(function(){
		var divOpacity = $('#box').css('opacity');
		divOpacity-=0.1;
		$('#box').css('opacity',divOpacity);
	});

	$("#button5").unbind().click(function(){
		$('#box').css({
			'-ms-transform': 'rotate(45deg)',
			'-webkit-transform': 'rotate(45deg)',
			'transform': 'rotate(45deg)'
		});
	});

	$("#button6").unbind().click(function(){
		$('#box').css('border-radius','50%');
	});

	$("#button7").unbind().click(function(){
		$('#box').css('display','none');
	});

	$("#button8").unbind().click(function(){
		$('#box').css('outline','gray groove 10px');
	});

	$("#button9").unbind().click(function(){
		$('#box').css('border','5px solid black');
	});

	$("#button10").unbind().click(function(){
		$('#box').css('box-shadow','10px 10px 10px '+ $("#button3").html());
	});

	$("#button11").unbind().click(function(){
		$('#box').css('cursor','pointer');
	});

	$("#button12").unbind().click(function(){
		$('#box').css({
			'background': 'red',
			'background': '-webkit-linear-gradient(red, yellow)',
			'background': '-o-linear-gradient(red, yellow)',
			'background': '-moz-linear-gradient(red, yellow)',    
			'background': 'linear-gradient(red, yellow)'
		});
	});

	$("#button13").unbind().click(function(){
		$('#box').css({
			'background':'url("logo.png") center center no-repeat transparent'
		});
	});	
});