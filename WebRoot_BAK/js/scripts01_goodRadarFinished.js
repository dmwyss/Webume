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
		var iContentAreaHeight = 700;
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
	radar.init("radarWrapper");
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

function Skill(sParentName, sName, sDescription, iRating, iX, iY){
	this.id = radar.getNextId();
	this.parentId = 0;
	this.parentName = jsonSafeString(sParentName, "");
	this.name = jsonSafeString(sName, "");
	this.rating = jsonSafeInt(iRating, 1);
	this.childrenLength = 0;
	this.p_children = new Array();
	this.x = iX;
	this.y = iY;
	this.setChildren = function(asToSet){
		this.p_children = asToSet;
		this.childrenLength = asToSet.length;
	};
	this.getChildren = function(){
		return this.p_children;
	};
	this.depth = 0;
	this.description = sDescription;
	this.toString = function(){
		return "[" + this.id + "|" + this.name + "]";
	};
}


function Radar(sAreaTrg){
	this.areaTrg;
	this.skills = new Array();
	this.widthGross = 575;
	this.init = function(sAreaTrg){
		this.areaTrg = document.getElementById(sAreaTrg);
		this.areaTrg.style.height = (this.widthGross + 40) + "px";
		this.resolveHeirarchcal();
		this.areaTrg.innerHTML = this.toRadar() + this.toHeirarchy();
	};
	this.skill = function(sParent, sTitle, sDescription, iMagnitude, iX, iY){
		iX = Math.round(iX + (this.widthGross / 2) - 44);
		iY = Math.round(iY + (this.widthGross / 2) + 3);
		this.skills[this.skills.length] = new Skill(sParent, sTitle, sDescription, iMagnitude, iX, iY);
	};
	this.p_skillIdCounter = 1;
	this.getNextId = function() {
		this.p_skillIdCounter++;
		return this.p_skillIdCounter;
	};
	this.resolveHeirarchcal = function() {
		this.skill("0000", "", "", 0, 0, 0);
		this.skills = this.sortByParent();
		var oRoot = jsonSelectWhere(this.skills, "parentId", "0000")[0];
		jsonResolveHeirarchy(this.skills, oRoot, "parentName", "name", 0);
	};
	this.sortByParent = function() {
		return jsonSortByField(this.skills, "parentName,name", true);
	};
	this.toRadar = function() {
		var aoRings = new Array();
		aoRings[aoRings.length] = new Array(this.widthGross, 0, "Peripheral");
		var iSizeCurr = Math.round(this.widthGross * .666666);
		aoRings[aoRings.length] = new Array(iSizeCurr, Math.round((this.widthGross - iSizeCurr) / 2), "Important");
		iSizeCurr = Math.round(this.widthGross * .333333);
		aoRings[aoRings.length] = new Array(iSizeCurr, Math.round((this.widthGross - iSizeCurr) / 2), "Core");
		var sOut = "<div id=\"radarRingWrapper\">";
		sOut += "<div class=\"radar-crosshair-horizontal\" style=\"top:" + Math.round(this.widthGross / 2) + "px;width:" + this.widthGross + "px;\">&nbsp;</div>"
		sOut += "<div class=\"radar-crosshair-vertical\" style=\"left:" + Math.round(this.widthGross / 2) + "px;height:" + this.widthGross + "px;\">&nbsp;</div>"
		for( var iRing = 0; iRing < aoRings.length; iRing++) {
			sOut += "<div class=\"radar-ring\" style=\"width:" + aoRings[iRing][0] + "px;height:" + aoRings[iRing][0] + "px;top:" + aoRings[iRing][1] + "px;left:" + aoRings[iRing][1] + "px;\">";
			sOut += "<div class=\"radar-ring-title\" style=\"width:" + aoRings[iRing][0] + "px;\"><span>" + aoRings[iRing][2] + "</span></div>";
			sOut += "</div>";
		}
		sOut += "</div>";
		sOut += "</div>";
		for( var iBlip = 0; iBlip < this.skills.length; iBlip++) {		
			var oBlip = this.skills[iBlip];
			if(oBlip.rating > 0){
				sOut += "<div class=\"radar-skill-wrapper\" style=\"left:" + oBlip.x + "px;top:" + oBlip.y + "px;\">";
				sOut += "<div class=\"radar-skill-blip\" onmouseover=\"radar.doMouseEventLegendOrBlip(" + oBlip.id + ", true);\" onmouseout=\"radar.doMouseEventLegendOrBlip(" + oBlip.id + ", false);\" id=\"blip_" + oBlip.id + "\"><span class=\"radar-skill-blipDot\">&bull;</span><br/>" + oBlip.name;
				sOut += "</div>";
				sOut += "</div>";
			}
		}
				
		
		return sOut;
	};
	this.getSkill = function(iId) {
		for ( var iS = 0; iS < this.skills.length; iS++) {
			if(this.skills[iS].id == iId){
				return this.skills[iS];
			}
		}
		return null;
	};
	this.toFormat = function(sFormat) {
		var sOut = "";
		for ( var iS = 0; iS < this.skills.length; iS++) {
			sOut += jsonToFormat(this.skills[iS], sFormat);
		}
		return sOut;
	};
	this.toHeirarchy = function(){
		var oRoot = jsonSelectWhere(this.skills, "parentId", "0000")[0];
		//var sItemFormat = "<div onclick=\"doClickParent(${id});\">${name} &nbsp; <span style=\"color:#888;font-style:italic;\">${description}</span></div>";
		var sItemFormat = "<div onmouseover=\"radar.doMouseEventLegendOrBlip(${id}, true);\" onmouseout=\"radar.doMouseEventLegendOrBlip(${id}, false);\" id=\"legend_${id}\">${name}</div>";
		var sChildrenStartFormat = "<div id=\"childrenWrapper_${id}\" style=\"margin-left:25px;\">";
		var sChildrenEndFormat = "</div>";
		var sOut = "<div id=\"radarLedgendWrapper\">";
		return jsonToHeirarchyFormat(oRoot, sItemFormat, sChildrenStartFormat, sChildrenEndFormat, sOut) + "</div>";
	};
	this.doMouseEventLegendOrBlip = function(iId, isOn){
		var o = this.getSkill(iId);
		if(o.depth == 0){
			//return;
		}
		if(o != null){
			this.toggleChildren(o, isOn);
		}
	};
	this.toggleChildren = function(oSkill, isOn){
		if(isOn){
			$("#legend_" + oSkill.id).addClass("radar-skill-legendItemOn");
			$("#blip_" + oSkill.id).addClass("radar-skill-legendItemOn");
		} else {
			$("#legend_" + oSkill.id).removeClass("radar-skill-legendItemOn");
			$("#blip_" + oSkill.id).removeClass("radar-skill-legendItemOn");
		}
		var aoChildren = oSkill.getChildren();
		for ( var iChild = 0; iChild < aoChildren.length; iChild++) {
			this.toggleChildren(aoChildren[iChild], isOn);
		}
	};
}
var radar = new Radar();

radar.skill("", "Technologies", "", 0, 0, 0);
radar.skill("Technologies", "Java", "(Sun Certified)", 1, 0, 0);
radar.skill("Java", "XML", "", 1, 130, -65);
radar.skill("Java", "J2EE", "", 1, 25, -10);
radar.skill("J2EE", "Spring", "Web MVC, IoC", 1, 45, -35);
radar.skill("J2EE", "Hibernate", "", 1, 20, -60);
radar.skill("J2EE", "Struts", "", 1, 200, -200);
radar.skill("J2EE", "JSTL", "", 1, 135, -135);
radar.skill("J2EE", "ANT", "Automated test, build, deploy", 1, 100, -220);
radar.skill("Java", "WebServices", "Service oriented Architecture", 1, 70, -270);
radar.skill("Java", "JMS", "Bank department integration", 1, 240, -40);

radar.skill("Technologies", "Persistance", "", 0, 0, 0);
radar.skill("Persistance", "HQL", "Implementation of complex queries", 1, 50, 20);
radar.skill("Persistance", "SQL", "Data design, programming", 1, 135, 45);
radar.skill("Persistance", "PL/SQL", "Data maintenance, scalability enhancement", 1, 225, 70);

radar.skill("Technologies", "Web", "", 0, 0, 0);
radar.skill("Web", "JSON", "Handling of complex data objects in Web apps", 1, 12, 45);
radar.skill("Web", "Ajax", "Rich online application design, development", 1, 15, 68);
radar.skill("Ajax", "ReST", "Highly scalable rich application design", 1, 18, 90);
radar.skill("Web", "CSS", "", 1, 50, 60);
radar.skill("Web", "HTML5", "", 1, 60, 275);

radar.skill("", "Software", "", 0, 0, 0);
radar.skill("Software", "Eclipse", "", 1, -30, 50);
radar.skill("Software", "Oracle", "", 1, -50, 100);
radar.skill("Software", "PhotoShop", "", 1, -75, 150);
radar.skill("Software", "MySQL", "", 1, -90, 180);
radar.skill("Software", "Flash", "(Certified)", 1, -110, 210);
radar.skill("Software", "WebSphere", "", 1, -130, 240);
	
radar.skill("", "Communication Skills", "", 0, 0, 0);
radar.skill("Communication Skills", "Team Leadership", "Teams of 2 - 5 people", 1, -20, 10);
radar.skill("Communication Skills", "Business sense", "Speaking with the business", 1, -80, 5);
radar.skill("Communication Skills", "Presenting", "Guest Presenter: Belgium, England, Germany, Switzerland, USA", 1, -100, 55);
radar.skill("Communication Skills", "UML", "Application design, client communication", 1, -140, 75);
radar.skill("Communication Skills", "Graphic Design", "(Graphic design)", 1, -175, 88);
radar.skill("Communication Skills", "Book Writing", "Excellence in UI, UX design", 1, -260, 120);

radar.skill("", "Methodologies", "", 0, 0, 0);
radar.skill("Methodologies", "Waterfall", "Banking, Insurance, Telecommunications", 1, -205, -205);
radar.skill("Methodologies", "Agile", "", 1, -23, -23);
radar.skill("Agile", "RAD", "Prototyping, TFD", 1, -80, -30);
radar.skill("Agile", "Scrum", "", 1, -40, -60);





