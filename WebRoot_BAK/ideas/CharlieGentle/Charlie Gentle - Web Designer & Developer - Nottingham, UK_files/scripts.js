$(document).ready(function(){
	$isIE6 = false;
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$isIE6 = true;
	}
	
	$('body').removeClass('noJS');
	
	/*
	$footerHeight = $(window).height() - $('#footer').position().top;
	if (!$.browser.msie)
	{
		$('#footer').css({'minHeight':$footerHeight});
	}
	*/
	
	var $scrollerWindow = $('#content');
	var $speed = 1500;
	
	$('#nav li a').hover(function()
	{
		$(this).fadeTo('fast',0.5);
	},
	function()
	{
		$(this).fadeTo('fast',1);
	});
	
	$('#logo').hover(function()
	{
		$(this).fadeTo('fast',0.7);
	},
	function()
	{
		$(this).fadeTo('fast',1);
	});
	
	function gotoHome()
	{
		$scrollerWindow.stop().scrollTo( $('#home'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$('h1').stop().animate({backgroundPosition: '(0px 0px)'}, $speed );
		$('#title2').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+300 );
		$('#title3').stop().animate({backgroundPosition: '(20px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_web");
		$('#prevControl').addClass("noScroll");
		$('h1').text('Digital Portfolio');
		_gaq.push(['_trackEvent', 'Nav', 'Home']);
		return false;
	}
	
	function gotoWeb()
	{
		$scrollerWindow.stop().scrollTo( $('#web'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$('h1').stop().animate({backgroundPosition: '(-980px 0px)'}, $speed );
		$('#title2').stop().animate({backgroundPosition: '(-1160px 0px)'}, $speed+300 );
		$('#title3').stop().animate({backgroundPosition: '(-1360px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_about");
		$('#prevControl').addClass("goto_home");
		$('h1').text('Web Design');
		$('.webDetail:visible').fadeOut('normal',function()
		{
			$('#webMain').fadeIn();
		});
		_gaq.push(['_trackEvent', 'Nav', 'Web']);
		return false;
	}
	
	function gotoAbout()
	{
		$scrollerWindow.stop().scrollTo( $('#about'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$('h1').stop().animate({backgroundPosition: '(-1960px 0px)'}, $speed );
		$('#title2').stop().animate({backgroundPosition: '(-2340px 0px)'}, $speed+300 );
		$('#title3').stop().animate({backgroundPosition: '(-2740px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("goto_contact");
		$('#prevControl').addClass("goto_web");
		$('h1').text('About Charlie');
		_gaq.push(['_trackEvent', 'Nav', 'About']);
		return false;
	}
	
	function gotoContact()
	{
		$scrollerWindow.stop().scrollTo( $('#contact'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$('h1').stop().animate({backgroundPosition: '(-2940px 0px)'}, $speed );
		$('#title2').stop().animate({backgroundPosition: '(-3520px 0px)'}, $speed+300 );
		$('#title3').stop().animate({backgroundPosition: '(-4120px 0px)'}, $speed+600 );
		$('#nextControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#prevControl').removeClass("noScroll goto_home goto_web goto_about goto_contact");
		$('#nextControl').addClass("noScroll");
		$('#prevControl').addClass("goto_about");
		$('h1').text('Contact');
		_gaq.push(['_trackEvent', 'Nav', 'Contact']);
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
	$('.noScroll').live("click", noScroll);
	
	$('#antisocialLink').click(function()
	{
		$('#webMain').fadeOut('normal',function()
		{
			$('#antisocial').fadeIn();
		});		
		_gaq.push(['_trackEvent', 'WebThumbs', 'Antisocial']);
		return false;
	}
	);
	
	$('#zacapaLink').click(function()
	{
		$('#webMain').fadeOut('normal',function()
		{
			$('#zacapa').fadeIn();
		});		
		_gaq.push(['_trackEvent', 'WebThumbs', 'Zacapa']);
		return false;
	}
	);
	
	$('#adambutcherLink').click(function()
	{
		$('#webMain').fadeOut('normal',function()
		{
			$('#adambutcher').fadeIn();
		});		
		_gaq.push(['_trackEvent', 'WebThumbs', 'AdamB']);
		return false;
	}
	);
	
	$('#witchqueenLink').click(function()
	{
		$('#webMain').fadeOut('normal',function()
		{
			$('#witchqueen').fadeIn();
		});		
		_gaq.push(['_trackEvent', 'WebThumbs', 'Witch']);
		return false;
	}
	);
	
	$('#smithharrisonLink').click(function()
	{
		$('#webMain').fadeOut('normal',function()
		{
			$('#smithharrison').fadeIn();
		});		
		_gaq.push(['_trackEvent', 'WebThumbs', 'Smith']);
		return false;
	}
	);
	
	$('.back').click(function()
	{
		$('.webDetail:visible').fadeOut('normal',function()
		{
			$('#webMain').fadeIn();
		});	
		return false;
	}
	);
	
	getTwitters('tweets', { 
		id: 'charliegentle', 
		count: 4, 
		enableLinks: true, 
		ignoreReplies: true, 
		clearContents: true,
		template: '%text% <a href="http://twitter.com/%user_screen_name%/statuses/%id%/" class="time">%time%</a>'
	});
	
	$("#submit").click(function(){					   				   
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		var emailFromVal = $("#emailFrom").val();
		if(emailFromVal == '') {
			$("#emailFrom").addClass("error");
			hasError = true;
		} else if(!emailReg.test(emailFromVal)) {	
			$("#emailFrom").addClass("error");
			hasError = true;
		}
		else
		{
			$("#emailFrom").removeClass("error");
		}

		var nameVal = $("#emailName").val();
		if(nameVal == '') {
			$("#emailName").addClass("error");
			hasError = true;
		}
		else
		{
			$("#emailName").removeClass("error");
		}

		var messageVal = $("#emailMessage").val();
		if(messageVal == '') {
			$("#emailMessage").addClass("error");
			hasError = true;
		}
		else
		{
			$("#emailMessage").removeClass("error");
		}


		if(hasError == false) {
			$(this).hide();
			$("#myForm").fadeOut("fast", function(){
				$("#myForm").before('<img src="images/loading.gif" alt="Loading" id="loadingImage" />');
			});
			
			$.post("sendemail.php",
				{ emailFrom: emailFromVal, emailName: nameVal, emailMessage: messageVal },
					function(data){
						$("#loadingImage").fadeOut("fast", function() {				   
							$("#loadingImage").before('<p>Your message has been sent. Cheers!</p>');											
						});
					}
				 );
		}

		return false;
	});
	
});