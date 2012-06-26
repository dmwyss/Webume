$(document).ready(function(){
	$isIE6 = false;
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$isIE6 = true;
	}
	
	$('body').removeClass('noJS');
	
	var $scrollerWindow = $('#content');
	var $scrollerHeadingWindow = $('#headingWrapper');
	var $speed = 10; // was 1500
	
	//$('#nav-wrapper a').hover(function()
	$('.topBanner-topicGlyph').hover(function()
	{
		$(this).fadeTo('fast',1);
	},
	function()
	{
		$(this).fadeTo('fast',0.8);
	});
	
	/*
	home = eins
	web = zwei
	about = drei
	contact = vier
	*/
	
	function gotoFachEins()
	{
		var iContentAreaHeight = 500;
		$scrollerWindow.stop().scrollTo( $('#fachEins'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachEinsHeading'), $speed-1000, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(0px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+600 );
		/*
		$('#nextControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#prevControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#nextControl').addClass("goto_fachZwei");
		$('#prevControl').addClass("noScroll");
		 */
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		
		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachZwei");
		$('.content-topicNav-prev').addClass("noScroll");
		
		//$('h1').text('Digital Portfolio');
		//_gaq.push(['_trackEvent', 'Nav', 'Home']);
		return false;
	}
	
	function gotoFachZwei()
	{
		var iContentAreaHeight = 425;
		$scrollerWindow.stop().scrollTo( $('#fachZwei'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachZweiHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-980px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-1160px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-1360px 0px)'}, $speed+600 );
		/*
		$('#nextControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#prevControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#nextControl').addClass("goto_fachDrei");
		$('#prevControl').addClass("goto_fachEins");
		 */
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);

		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachDrei");
		$('.content-topicNav-prev').addClass("goto_fachEins");
		
		//$('h1').text('Web Design');
		/*
		$('.webDetail:visible').fadeOut('normal',function()
		{
			$('#webMain').fadeIn();
		});
		*/
		//_gaq.push(['_trackEvent', 'Nav', 'Web']);
		return false;
	}
	
	function gotoFachDrei()
	{
		var iContentAreaHeight = 400;
		$scrollerWindow.stop().scrollTo( $('#fachDrei'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachDreiHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-1960px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-2340px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-2740px 0px)'}, $speed+600 );
		/*
		$('#nextControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#prevControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#nextControl').addClass("goto_fachVier");
		$('#prevControl').addClass("goto_fachZwei");
		 */
		
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		
		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachVier");
		$('.content-topicNav-prev').addClass("goto_fachZwei");
		//$('h1').text('About Charlie');
		//_gaq.push(['_trackEvent', 'Nav', 'About']);
		return false;
	}
	
	function gotoFachVier()
	{
		var iContentAreaHeight = 400;
		$scrollerWindow.stop().scrollTo( $('#fachVier'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachVierHeading'), $speed-800, {axis:'x',offset:{left: -20, top:0 }} );
		//$('h1').stop().animate({backgroundPosition: '(-2940px 0px)'}, $speed );
		//$('#title2').stop().animate({backgroundPosition: '(-3520px 0px)'}, $speed+300 );
		//$('#title3').stop().animate({backgroundPosition: '(-4120px 0px)'}, $speed+600 );
		/*
		$('#nextControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#prevControl').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('#nextControl').addClass("noScroll");
		$('#prevControl').addClass("goto_fachDrei");
		 */
		
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-1212);

		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("noScroll");
		$('.content-topicNav-prev').addClass("goto_fachDrei");
		//$('h1').text('Contact');
		//_gaq.push(['_trackEvent', 'Nav', 'Contact']);
		return false;
	}
	
	function noScroll()
	{
		return false;
	}
	
	$('#fachEinsGlyph').live("click", gotoFachEins);
	$('#fachZweiGlyph').live("click", gotoFachZwei);
	$('#fachDreiGlyph').live("click", gotoFachDrei);
	$('#fachVierGlyph').live("click", gotoFachVier);
	
	$('.goto_fachEins').live("click", gotoFachEins);
	$('.goto_fachZwei').live("click", gotoFachZwei);
	$('.goto_fachDrei').live("click", gotoFachDrei);
	$('.goto_fachVier').live("click", gotoFachVier);

	
	//$('.goto_fachVier').live("click", gotoContact);
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
	gotoFachDrei();
	setUpFachHeadings();
	timeline.init();
});

function writeTimeline(){
	var sOut = "";
	sOut += "<div class=\"timeline-bar\" style=\"width:700px;\">&nbsp;</div>";
	document.getElementById("timelineWrapper").innerHTML = sOut;
}

function setUpFachHeadings(){
	decorateFachBackground("fachEinsHeading", "Overview");
	var asJava = new Array();
	asJava[asJava.length] = "Hibernate,305,20";
	asJava[asJava.length] = "Struts,258,40";
	asJava[asJava.length] = "MVC,403,50";
	asJava[asJava.length] = "Spring,430,34";
	decorateFachBackground("fachZweiHeading", "Java", asJava);
	decorateFachBackground("fachDreiHeading", "Web&nbsp;");
	decorateFachBackground("fachVierHeading", "Mobile&nbsp;");
}

function decorateFachBackground(sAreaId, sText, asHints){
	var sOut = "<div class=\"topBanner-topicText\">&nbsp;" + sText + "&nbsp;</div>";
	//sOut += "<div class=\"topBanner-topicText\" style=\"top:-59px;right:169px;\">&nbsp;" + sText + "&nbsp;</div>";
	sOut += "<div class=\"topBanner-topicText\" style=\"top:-61px;right:171px;\">&nbsp;" + sText + "&nbsp;</div>";
	if(typeof asHints != "undefined"){
		for( var iHint = 0; iHint < asHints.length; iHint++) {
			var asHintSect = asHints[iHint].split(",");
			sOut += "<div class=\"topBanner-topicHint\" style=\"right:" + asHintSect[1] + "px;top:" + asHintSect[2] + "px;\">" + asHintSect[0] + "</div>";
		}
	}
	sOut += "&nbsp; <!-- DO NOT REMOVE -->";
	document.getElementById(sAreaId).innerHTML = sOut;	
}




