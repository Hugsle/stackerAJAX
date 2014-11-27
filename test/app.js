$(document).ready(function() {

$(".submit").submit(function(e){
	e.preventDefault();
	var v = $('#query').val();
})

			var request = {  
		    site: 'stackoverflow',
	        order: 'desc',
			sort: 'creation'

	    };
/*************************************************************************************/	
/***************************************************************************************/
			$.ajax({
					type: "GET",
					url: "http://api.stackexchange.com/2.2/tags/\"javascript\"/top-answerers/all_time",
					data: request,
					dataType: "jsonp",
					success:function(data) {
					console.log(data); 
				}
			})
});


