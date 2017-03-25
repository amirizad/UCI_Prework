$(function(){
	var colors = ['Red', 'Yellow', 'Blue', 'Green','Beige','Aqua','Brown','Coral','Navy','Orange','Violet'];

	$("#button1").unbind().click(function(){
		$('#box').attr('style', '');
		$('#box').html();
		$('#prev-c').val('red');
		$('#curr-c').val('blue');
		$('#next-c').val('yellow');
		$('#rotation').val('0');
		$('#button2').html('Grow');
		$('#button7').html('Hide');
		$('.lbl').css('display','none');
	});

	$("#button2").unbind().click(function(){
		var divWidth = $('#box').width(),
			minWidth = 0,
			maxWith = 400;
		if($(this).html()==='Grow'){
			divWidth+=20
			$('#box').css({
				'width': divWidth+'px',
				'height': divWidth+'px'
			});
			$('#box').css('width') === '400px' ? $(this).html('Shrink') : $(this).html('Grow');
		}else{
			divWidth-=20
			$('#box').css({
				'width': divWidth+'px',
				'height': divWidth+'px'
			});
			$('#box').css('width') === '150px' ? $(this).html('Grow') : $(this).html('Shrink');
		};
	});

	$("#button3").unbind().click(function(e){
		var prev_color = $('#box').css('background-color');
		$('#prev-c').val(prev_color);
		$('#box').css('background','transparent');
		var current_color = $(this).html();
		$('#curr-c').val(current_color);
		$('#box').css({'background-color':current_color,'box-shadow':'none'});
    	var next_color =  colors[Math.floor(Math.random()*colors.length)];
    	$('#next-c').val(next_color);
		$(this).html(next_color);
		$('#lbl1').css('background-color',prev_color);
		$('#lbl2').css('background-color',current_color);
		$('#lbl3').css('background-color',next_color);
		$('.lbl').css('display','inline-block');
	});

	$("#button4").unbind().click(function(){
		// var op = parseFloat($('#box').css('opacity'));
		// var divOpacity = op.toString().length > 3 ? op.toFixed(1) : op;
		var divOpacity = parseFloat($('#box').css('opacity'));
		if($(this).html()==='Fade'){
			divOpacity -= 0.1;
			$('#box').css('opacity',divOpacity);
			divOpacity === 0.1 ? $(this).html('Appear') : $(this).html('Fade');
		}else{
			divOpacity += 0.1;
			$('#box').css('opacity',divOpacity);
			divOpacity === 1 ? $(this).html('Fade') : $(this).html('Appear');
		};
	});

	$("#button5").unbind().click(function(){
		var rotation = parseInt($('#rotation').val()) + 30;
		$('#box').css({
			'-ms-transform': 'rotate(' + rotation + 'deg)',
			'-webkit-transform': 'rotate(' + rotation + 'deg)',
			'transform': 'rotate(' + rotation + 'deg)'
		});
		$('#rotation').val(rotation === 360 ? 0 : rotation);
	});

	$("#button6").unbind().click(function(){
		if($(this).html()==='Circle'){
			$('#box').css('border-radius','50%');
			$(this).html("Square")
		}else{
			$('#box').css('border-radius','10px');
			$(this).html("Circle")
		}		
	});

	$("#button7").unbind().click(function(){
		if($(this).html()==='Hide'){
			$('#box').css('display','none');
			$(this).html("Show")
		}else{
			$('#box').css('display','block');
			$(this).html("Hide")
		}
	});

	$("#button8").unbind().click(function(){
		if($(this).html()==='Outline'){
			$('#box').css('outline','gray groove 10px');
			$(this).html("Outline-")
			$(this).css('text-decoration','line-through');
		}else{
			$('#box').css('outline','none');
			$(this).html("Outline")
			$(this).css('text-decoration','none');
		}
	});

	$("#button9").unbind().click(function(){
		if($(this).html()==='Border'){
		$('#box').css('border','5px solid black');
			$(this).html("Border-")
			$(this).css('text-decoration','line-through');
		}else{
			$('#box').css('border','none');
			$(this).html("Border")
			$(this).css('text-decoration','none');
		}

	});

	$("#button10").unbind().click(function(){
		$('#box').css('box-shadow','10px 10px 10px '+ $("#prev-c").val());
	});

	$("#button11").unbind().click(function(){
		$('#box').css('cursor','pointer');
	});

	$("#button12").unbind().click(function(){
		var gradient = '30% 30%, ' + $('#prev-c').val() + ', ' + $('#next-c').val();
		$('#box').css('background': $('#prevc').val());
		$('#box').css('background': getCssValuePrefix() + 'linear-gradient(' + gradient + ')');
	});

	$("#button13").unbind().click(function(){
		$('#box').css({
			'background':'url("logo.png") no-repeat transparent',
			'background-size':'contain'
		});
	});	
});

function getCssValuePrefix()
{
    var rtrnVal = '';
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
    var dom = document.createElement('div');
    for (var i = 0; i < prefixes.length; i++)
    {
        dom.style.background = prefixes[i] + 'linear-gradient(#000000, #ffffff)';
        if (dom.style.background)
        {
            rtrnVal = prefixes[i];
        }
    }
    dom = null;
    delete dom;
    console.log(rtrnVal);
    return rtrnVal;
};