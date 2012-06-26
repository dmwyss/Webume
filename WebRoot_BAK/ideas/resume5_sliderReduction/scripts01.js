$(document).ready(function(){
	$isIE6 = false;
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$isIE6 = true;
	}
	
	$('body').removeClass('noJS');
	
	var $scrollerWindow = $('#content');
	var $scrollerHeadingWindow = $('#headingWrapper');
	var $speed = 1500;
	
	$('#nav-wrapper a').hover(function()
	{
		$(this).fadeTo('fast',0.3);
	},
	function()
	{
		$(this).fadeTo('fast',1);
	});
	
	function gotoHome()
	{
		$scrollerWindow.stop().scrollTo( $('#home'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#homeHeading'), $speed-1000, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(0px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_web");
		$('#prevControl').addClass("noScroll");
		$('h1').text('Digital Portfolio');
		//_gaq.push(['_trackEvent', 'Nav', 'Home']);
		return false;
	}
	
	function gotoWeb()
	{
		$scrollerWindow.stop().scrollTo( $('#web'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#webHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-980px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-1160px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-1360px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_about");
		$('#prevControl').addClass("goto_home");
		$('h1').text('Web Design');
		$('.webDetail:visible').fadeOut('normal',function()
		{
			$('#webMain').fadeIn();
		});
		//_gaq.push(['_trackEvent', 'Nav', 'Web']);
		return false;
	}
	
	function gotoAbout()
	{
		$scrollerWindow.stop().scrollTo( $('#about'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#aboutHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-1960px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-2340px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-2740px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_contact");
		$('#prevControl').addClass("goto_web");
		$('h1').text('About Charlie');
		//_gaq.push(['_trackEvent', 'Nav', 'About']);
		return false;
	}
	
	function gotoContact()
	{
		$scrollerWindow.stop().scrollTo( $('#contact'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#contactHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-2940px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-3520px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-4120px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("noScroll");
		$('#prevControl').addClass("goto_about");
		$('h1').text('Contact');
		//_gaq.push(['_trackEvent', 'Nav', 'Contact']);
		return false;
	}
	
	function noScroll()
	{
		return false;
	}
	
	$('.goto_home').live("click", gotoHome);
	$('.goto_about').live("click", gotoAbout);
	$('.goto_web').live("click", gotoWeb);
	$('.goto_contact').live("click", gotoContact);
	//$('.noScroll').live("click", noScroll);
	
	/*
	$('.back').click(function()
	{
		$('.webDetail:visible').fadeOut('normal',function()
		{
			$('#webMain').fadeIn();
		});	
		return false;
	}
	);
	*/
	gotoHome();
});