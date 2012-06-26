var g_sFachVisible = "Eins";
function changeFachVisible(sNew){
	if(sNew != g_sFachVisible){
		$('#fach' + g_sFachVisible + 'Glyph').fadeTo('fast',0.6);
		g_sFachVisible = sNew;
	}
}
$(document).ready(function(){
	$isIE6 = false;
	if ($.browser.msie && $.browser.version.substr(0,1)<7) {
		$isIE6 = true;
	}
	
	$('body').removeClass('noJS');
	
	var $scrollerWindow = $('#content');
	var $scrollerHeadingWindow = $('#headingWrapper');
	var $speed = 1000; // was 1500
	
	$('.topBanner-topicGlyph').hover(function()
	{
		$(this).fadeTo('fast',1);
	},
	function()
	{
		if(this.id.indexOf(g_sFachVisible) == -1){
			$(this).fadeTo('fast',0.6);
		}
	});
	
	function gotoFachEins()
	{
		var iContentAreaHeight = 850;
		changeFachVisible("Eins");
		$scrollerWindow.stop().scrollTo( $('#fachEins'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachEinsHeading'), $speed-555, {axis:'x',offset:{left: -20, top:0 }} );

		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		
		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachZwei");
		$('.content-topicNav-prev').addClass("noScroll");
		
		$('#fachEinsGlyph').fadeTo('fast',1.0);
		
		return false;
	}
	
	function gotoFachZwei()
	{
		var iContentAreaHeight = 425;
		changeFachVisible("Zwei");
		$scrollerWindow.stop().scrollTo( $('#fachZwei'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachZweiHeading'), $speed-555, {axis:'x',offset:{left: -20, top:0 }} );

		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);

		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachDrei");
		$('.content-topicNav-prev').addClass("goto_fachEins");
		
		$('#fachZweiGlyph').fadeTo('fast',1.0);
		
		return false;
	}
	
	function gotoFachDrei()
	{
		var iContentAreaHeight = 700;
		changeFachVisible("Drei");
		$scrollerWindow.stop().scrollTo( $('#fachDrei'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachDreiHeading'), $speed-555, {axis:'x',offset:{left: -20, top:0 }} );
		
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		
		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("goto_fachVier");
		$('.content-topicNav-prev').addClass("goto_fachZwei");

		$('#fachDreiGlyph').fadeTo('fast',1.0);

		return false;
	}
	
	function gotoFachVier()
	{
		var iContentAreaHeight = 550;
		changeFachVisible("Vier");
		$scrollerWindow.stop().scrollTo( $('#fachVier'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		$scrollerHeadingWindow.stop().scrollTo( $('#fachVierHeading'), $speed-555, {axis:'x',offset:{left: -20, top:0 }} );
		
		$('#contentWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicNavWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);
		$('#contentTopicDisplayWrapper').animate({height: iContentAreaHeight + 'px'}, $speed-100);

		$('.content-topicNav-next').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-prev').removeClass("noScroll goto_fachEins goto_fachZwei goto_fachDrei goto_fachVier");
		$('.content-topicNav-next').addClass("noScroll");
		$('.content-topicNav-prev').addClass("goto_fachDrei");

		$('#fachVierGlyph').fadeTo('fast',1.0);

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

	gotoFachEins();

	timeline.init();
	writeBioData();
	setUpFachHeadings();
	//timeline.write();
	radar.init("radarWrapper");
});

function writeBioData(){
	var asBioData = new Array();
	asBioData[asBioData.length] = ["Vitae"];
	asBioData[asBioData.length] = ["Email","david.wyss@gogs.net"];
	asBioData[asBioData.length] = ["Availability","November 2011"];
	asBioData[asBioData.length] = ["Qualifications","Degree: Graphic Design"];
	//asBioData[asBioData.length] = ["Languages","English (preferred), German"];
	asBioData[asBioData.length] = ["Hilights","&bull; Published Author IBM QuickPlace (GUI Design/UX Design)<br/>&bull; International conference speaker (GUI Design/UX Design)"];
	asBioData[asBioData.length] = ["Skills"];
	asBioData[asBioData.length] = ["Core Role","Senior JEE Analyst Programmer, Java Team Lead"];
	asBioData[asBioData.length] = ["Technologies","Java J2EE Spring, Agile (Scrum, RAD), Hibernate, Ajax, ReST, Oracle, XML<span onclick=\"$.gotoFachZwei();\">[more]</span>"];
	asBioData[asBioData.length] = ["Certificates","&bull; Sun: Certified Java Programmer<br/>&bull; Sun: Certified Web Component Developer<br/>&bull; Adobe: Flash Developer<br/>&bull; IBM: Principal Application Developer"];
	asBioData[asBioData.length] = ["Roles"];
	var sOut = "<h4>Overview</h4>";
	for(var iB = 0; iB < asBioData.length; iB++){
		if(asBioData[iB].length == 1){
			sOut += "<hr/><h4 class=\"subhead\">" + asBioData[iB] + "</h4>";
		} else {
			sOut += "<div class=\"bioData-wrapper\"><div class=\"bioData-label\">" + asBioData[iB][0] + ":</div><div class=\"bioData-value\">" + asBioData[iB][1] + "</div></div>";
		}
	}
	sOut += timeline.getTimelineInFormat("<div id=\"timelineTable_${id}\" class=\"bioData-wrapper\" onmouseout=\"showHideBubble(${id}, false)\" onmouseover=\"showHideBubble(${id}, true);\"><div class=\"bioData-label\">${startReadable}-${endReadable}<br/>${durationReadable}</div><div class=\"bioData-value\">${title}<div class=\"bioData-value-description\">${description}</div></div></div>");
	document.getElementById("bioData").innerHTML = sOut;
}
function writeTimeline(){
	var sOut = "";
	sOut += "<div class=\"timeline-bar\" style=\"width:700px;\">&nbsp;</div>";
	document.getElementById("timelineWrapper").innerHTML = sOut;
}

function setUpFachHeadings(){
	decorateFachBackground("fachEinsHeading", "Overview");
	var asTech = new Array();
	asTech[asTech.length] = "Hibernate,305,20";
	asTech[asTech.length] = "Struts,258,40";
	asTech[asTech.length] = "MVC,403,50";
	asTech[asTech.length] = "Spring,430,34";
	decorateFachBackground("fachZweiHeading", "Timeline");
	decorateFachBackground("fachDreiHeading", "Skills Radar", asTech);
	decorateFachBackground("fachVierHeading", "About&nbsp;");
}

function decorateFachBackground(sAreaId, sText, asHints){
	var sOut = "<div class=\"topBanner-topicText\">&nbsp;" + sText + "&nbsp;</div>";
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

function Skill(sParentName, sName, sDescription, iRating, iX, iY, sColor){
	this.id = radar.getNextId();
	this.parentId = 0;
	this.parentName = jsonSafeString(sParentName, "");
	this.name = jsonSafeString(sName, "");
	this.rating = jsonSafeInt(iRating, 1);
	this.childrenLength = 0;
	this.p_children = new Array();
	this.x = iX;
	this.y = iY;
	this.color = sColor;
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
		this.areaTrg.style.height = (this.widthGross + 25) + "px";
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
		aoRings[aoRings.length] = new Array(this.widthGross, 0, "Basic");
		var iSizeCurr = Math.round(this.widthGross * .666666);
		aoRings[aoRings.length] = new Array(iSizeCurr, Math.round((this.widthGross - iSizeCurr) / 2), "Good");
		iSizeCurr = Math.round(this.widthGross * .333333);
		aoRings[aoRings.length] = new Array(iSizeCurr, Math.round((this.widthGross - iSizeCurr) / 2), "Advanced");
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
				//sOut += "<div id=\"blipCircle_" + oBlip.id + "\" class=\"radar-skill-blipCircle\" style=\"background-color:" + oBlip.color + ";\">&nbsp;</div>";
				sOut += "<div id=\"blipCircle_" + oBlip.id + "\" class=\"radar-skill-blipCircle\">&nbsp;</div>";
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
		var sItemFormat = "<div class=\"radar-ledgend-child\" onmouseover=\"radar.doMouseEventLegendOrBlip(${id}, true);\" onmouseout=\"radar.doMouseEventLegendOrBlip(${id}, false);\" id=\"legend_${id}\">${name}</div>";
		var sChildrenStartFormat = "<div id=\"childrenWrapper_${id}\" style=\"margin-left:25px;\">";
		var sChildrenEndFormat = "</div>";
		var sOut = "<div id=\"radarLedgendWrapper\">";
		return jsonToHeirarchyFormat(oRoot, sItemFormat, sChildrenStartFormat, sChildrenEndFormat, sOut) + "</div>";
	};
	this.doMouseEventLegendOrBlip = function(iId, isOn){
		// Handle animation
		var areaDot = document.getElementById("blip_" + iId);
		areaDot.style.color = (isOn ? "#F00" : "#000");
		if(isOn){
			animateBlipCircle(iId);
		}
		// Handle 
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


///////// MOVE INTO RADAR //////////////////////////////////////////////////////
var anim = null;
var areaAnimatedBlipCircle = null;
var iAnimSize = 0;
var iPreviousAnimId = -1;
function animateBlipCircle(iId){
	if(areaAnimatedBlipCircle != null){
		// There is currently an animated circle. Retire it.
		stopAnimBlipCircle();
	}
	if(iPreviousAnimId != iId){
		iPreviousAnimId = iId;
	} else {
		//return;
	}
	areaAnimatedBlipCircle = document.getElementById("blipCircle_" + iId);
	anim = setInterval("continueAnimBlipCircle()", 20);
}
function stopAnimBlipCircle(){
	clearInterval(anim);
	iAnimSize = 0;
	resetAnimBlipCircle();
	anim = null;
	areaAnimatedBlipCircle = null;
}
function resetAnimBlipCircle(){
	var iDisplaySize = (iAnimSize % 40);	
	areaAnimatedBlipCircle.style.width = iDisplaySize + "px";
	areaAnimatedBlipCircle.style.height = iDisplaySize + "px";
	areaAnimatedBlipCircle.style.top = (8 - Math.round(iDisplaySize / 2)) + "px";
	areaAnimatedBlipCircle.style.left = (45 - Math.round(iDisplaySize / 2)) + "px";
	//stopAnimBlipCircle();
}
function continueAnimBlipCircle(){
	if(iAnimSize > 120){
		stopAnimBlipCircle();
	}
	iAnimSize += 6;
 	resetAnimBlipCircle();
}
///////////////////////////////////////////////////////////////////////////////
var sColor = "red";

radar.skill("", "Technologies", "", 0, 0, 0, sColor);
radar.skill("Technologies", "Java", "(Sun Certified)", 1, 0, 0, sColor);
radar.skill("Java", "XML", "", 1, 130, -65, sColor);
radar.skill("Java", "J2EE", "", 1, 25, -10, sColor);
radar.skill("J2EE", "Spring", "Web MVC, IoC", 1, 45, -35, sColor);
radar.skill("J2EE", "Hibernate", "", 1, 20, -60, sColor);
radar.skill("J2EE", "Struts", "", 1, 200, -200, sColor);
radar.skill("J2EE", "JSTL", "", 1, 135, -135, sColor);
radar.skill("J2EE", "ANT", "Automated test, build, deploy", 1, 100, -220, sColor);
radar.skill("Java", "WebServices", "Service oriented Architecture", 1, 70, -270, sColor);
radar.skill("Java", "JMS", "Bank department integration", 1, 240, -40, sColor);

sColor = "#FA5"
radar.skill("Technologies", "Persistance", "", 0, 0, 0, sColor);
radar.skill("Persistance", "SQL", "Data design, programming", 1, 50, 20, sColor);
radar.skill("Persistance", "HQL", "Implementation of complex queries", 1, 135, 45, sColor);
radar.skill("Persistance", "PL/SQL", "Data maintenance, scalability enhancement", 1, 225, 70, sColor);

radar.skill("Technologies", "Web", "", 0, 0, 0, sColor);
radar.skill("Web", "JSON", "Handling of complex data objects in Web apps", 1, 12, 45, sColor);
radar.skill("Web", "Ajax", "Rich online application design, development", 1, 15, 68, sColor);
radar.skill("Ajax", "ReST", "Highly scalable rich application design", 1, 18, 90, sColor);
radar.skill("Web", "CSS", "", 1, 50, 60, sColor);
radar.skill("Web", "HTML5", "", 1, 60, 275, sColor);

radar.skill("", "Software", "", 0, 0, 0, sColor);
radar.skill("Software", "Eclipse", "", 1, -30, 50, sColor);
radar.skill("Software", "Oracle", "", 1, -50, 100, sColor);
radar.skill("Software", "PhotoShop", "", 1, -75, 150, sColor);
radar.skill("Software", "MySQL", "", 1, -90, 180, sColor);
radar.skill("Software", "Flash", "(Certified)", 1, -110, 210, sColor);
radar.skill("Software", "WebSphere", "", 1, -130, 240, sColor);
	
radar.skill("", "Communication Skills", "", 0, 0, 0, sColor);
radar.skill("Communication Skills", "Team Leadership", "Teams of 2 - 5 people", 1, -20, 10, sColor);
radar.skill("Communication Skills", "Business sense", "Speaking with the business", 1, -80, 5, sColor);
radar.skill("Communication Skills", "Graphic Design", "(Graphic design)", 1, -100, 55, sColor);
radar.skill("Communication Skills", "Presenting", "Guest Presenter: Belgium, England, Germany, Switzerland, USA", 1, -140, 75, sColor);
radar.skill("Communication Skills", "UML", "Application design, client communication", 1, -175, 88, sColor);
radar.skill("Communication Skills", "Book Writing", "Excellence in UI, UX design", 1, -260, 120, sColor);

radar.skill("", "Methodologies", "", 0, 0, 0, sColor);
radar.skill("Methodologies", "Waterfall", "Banking, Insurance, Telecommunications", 1, -205, -205, sColor);
radar.skill("Methodologies", "Agile", "", 1, -23, -23, sColor);
radar.skill("Agile", "RAD", "Prototyping, TFD", 1, -80, -30, sColor);
radar.skill("Agile", "Scrum", "", 1, -40, -60, sColor);
