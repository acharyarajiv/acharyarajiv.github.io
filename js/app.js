$(document).ready(function(){
	
	var activeId = '';
	Initialize();
	
	$('.collapsible').click(function(){
		$(this).find('div').toggle();
		if($(this).children(":first").text() == '+')
			$(this).children(":first").text('-');
		else
			$(this).children(":first").text('+');
	});	
	
	$('li a').click(function(){
		var showId = '#' + $(this).attr('value');
		showHideSection(showId);
	});
	
	function navigate_Section(){
		var url = document.location.href;
		if(url.lastIndexOf('#') != -1){
			var divId = url.substr(url.lastIndexOf('#'), url.length);
			showHideSection(divId);
		}
	}
	
	function showHideSection(showId){
		$(activeId).hide();		
		$(showId).show();
		activeId = showId;
	}

	function Initialize(){
		activeId = '#about_me';
		navigate_Section();
		
		//checking Experience
		var date = new Date();
		var year = date.getFullYear() - 2013;
		var month = date.getMonth() + 1;
		$('#total_exp_present').text(year + ' year ' + month + ' months')
	}
});