
$(document).ready(function(){
    $("img").on("click",function(){
        $(this).animate({
            height: '390',
            width: '480px',
           	margin:'10px',
		 })
        .css({zIndex:1,
           	position:'relative'});
   		 });
    	$("img")
});

	var x=true;
	$("#yuxari")
	.on('click',function(){
		if (x) {
			$('.first').show(400)
			$('.second').hide(400)			
			x=false
		}
		else{
			$('.first').hide(400)
			$('.second').show(400)
			x=true
		}
	});

	var x=true;
	$("#ashagi")
	.on('click',function(){
		
		if (x) {
			$('.first').hide(400)
			$('.second').show(400)
			x=false
		}
		else{
			$('.first').show(400)
			$('.second').hide(400)
			x=true
		}
})


