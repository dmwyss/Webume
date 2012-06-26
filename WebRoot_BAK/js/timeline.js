function TimelineEvent(fStart, fEnd, sTitle, sDescription){
	this.id = 0;
	this.start = fStart;
	this.startMetric = toMetricDate(this.start);
	this.end = fEnd;
	this.endMetric = toMetricDate(this.end);
	this.startPx = 0;
	this.widthPx = 10;
	this.title = sTitle;
	this.description = sDescription;
}

function toMetricDate(fIn){
	var iRemain = (fIn % 1) - .01;
	return (fIn - iRemain) + (iRemain / 0.12);
}

function Technology(sTitle, sDescription, sDates){
	this.id = 0;
	this.title = sTitle;
	this.description = sDescription;
	var asD = sDates.split("-");
	var dtc = new Date();
	var iDateCurrent = dtc.getFullYear() + ((dtc.getMonth() + 1) / 100);
	this.start = (asD[0] == "current") ? iDateCurrent : parseFloat(asD[0]);
	this.startMetric = toMetricDate(this.start);
	this.startPx = 0;
	this.end = (asD[1] == "current") ? iDateCurrent : parseFloat(asD[1]);
	this.endMetric = toMetricDate(this.end);
	this.endPx = 0;
}

function Timeline(sAreaTrgId){
	this.areaTrgId = sAreaTrgId;
	this.areaTrg = null;
	this.widthGross = 802;
	this.widthNet = this.widthGross - 2;

	this.overallStartMetric = 0;
	this.overallEndMetric = 1;
	this.overallTotalDurationMetric = 1;
	this.widthPerYear = this.widthNet / this.overallTotalDurationMetric;
	
	this.p_idCounter = 0;
	this.jobs = new Array();
	this.techs = new Array();
	this.init = function(){
		this.areaTrg = document.getElementById(this.areaTrgId);
		this.areaTrg.style.width = this.widthGross + "px";
		this.jobs = jsonSortByField(this.jobs, "start", false);
		this.overallStartMetric = this.jobs[this.jobs.length - 1].startMetric;
		this.overallEndMetric = this.jobs[0].endMetric;
		this.overallTotalDurationMetric = this.overallEndMetric - this.overallStartMetric;
		this.widthPerYear = this.widthNet / this.overallTotalDurationMetric;
		this.interpolateData();
		this.write();
	};
	this.interpolateData = function(){
		// Work out min start and max end.
		//for(var iD = (this.jobs.length - 1); iD >= 0; iD--) {
		var nStartOfNext = this.jobs[0].start;
		var nStartOfNextMetric = this.jobs[0].startMetric;
		for(var iD = 1; iD < this.jobs.length; iD++) {
			if(this.jobs[iD].end == 0){
				this.jobs[iD].end = nStartOfNext;
				this.jobs[iD].endMetric = nStartOfNextMetric;
			}
			nStartOfNext = this.jobs[iD].start;
			nStartOfNextMetric = this.jobs[iD].startMetric;
		}
		/*
		var fMin = this.jobs[this.jobs.length - 1].startMetric;
		var fMax = this.jobs[0].endMetric;
		var fTotalDuration = fMax - fMin;
		*/
		var iEndCurr = this.widthNet;
		for( var iD = 0; iD < this.jobs.length; iD++) {
			var t = this.jobs[iD];
			var fStartPx = (t.startMetric - this.overallStartMetric) / this.overallTotalDurationMetric * this.widthNet;
			t.startPx = Math.round(fStartPx) + 1;
			t.widthPx = iEndCurr - t.startPx - 2;
			iEndCurr = t.startPx;
		}
		for( var iT = 0; iT < this.techs.length; iT++) {
			var t = this.techs[iT];
			var fStartPx = (t.startMetric - this.overallStartMetric) / this.overallTotalDurationMetric * this.widthNet;
			t.startPx = Math.round(fStartPx) + 0;
			var fEndPx = (t.endMetric - this.overallStartMetric) / this.overallTotalDurationMetric * this.widthNet;
			//t.widthPx = Math.min((Math.round(fEndPx) - t.startPx), this.widthGross);
			t.widthPx = (Math.round(fEndPx) - t.startPx) - 7;
		}
	};
	this.write = function(){
		var sOut = "";
		var iBubbleWidth = 210;
		for( var iE = 0; iE < this.jobs.length; iE++) {
			var sLeftCenterRight = "";
			var iOffset = 0;
			if(iE < 2){
				sLeftCenterRight = "-right";
				iOffset = -65;
			} else if(iE > this.jobs.length - 3){
				sLeftCenterRight = "-left";
				iOffset = 60;
			}
			var t = this.jobs[iE];
			//sOut += "<div style=\"position:absolute;left:" + t.startPx + "px;top:" + -40 + "px;\">" + t.title + "</div>";
			sOut += "<blockquote id=\"bubble_" + t.id + "\" class=\"speechBubble-wrapper" + sLeftCenterRight + "\" style=\"display:none;left:" + ((t.startPx + t.widthPx) - Math.round(iBubbleWidth / 2) - Math.round(t.widthPx / 2) + iOffset) + "px;bottom:" + 40 + "px;\">";
			sOut += "<p class=\"speechBubble-banner\">" + t.title + "</p>";
			var sDateInfo = toReadableDate(t.start) + "-" + toReadableDate(t.end) + " (" + toReadableDuration(t.endMetric - t.startMetric) + ")";
			sOut += "<p class=\"speechBubble-body\">" + t.description + "<br/><span style=\"color:silver\">" + sDateInfo + "</span></p>";
			sOut += "</blockquote>";
			sOut += "<div class=\"timeline-bar\" style=\"width:" + t.widthPx + "px;left:" + t.startPx + "px;\" id=\"bar_" + t.id + "\" onmouseover=\"showHideBubble(" + t.id + ", true);\" onmouseout=\"showHideBubble(" + t.id + ", false)\">&nbsp;</div>";
		}
		sOut += "<div class=\"timeLine-years-wrapper\" style=\"width:" + (this.widthGross + 30) + "px;\">";
		var iFirstYear = Math.floor(this.overallStartMetric);
		var iLastYear = Math.ceil(this.overallEndMetric);
		var iTotalYears = iLastYear - iFirstYear;
		var iffff = (this.overallStartMetric % 1);
		//var iPixelsBeforeFirstYear = Math.round((1 - (this.jobs[0].startMetric % 1)) * this.widthPerYear) + 6;
		var iPixelsBeforeFirstYear = Math.round(this.widthPerYear);
		sOut += "<div class=\"timeLine-year\" style=\"width:" + iPixelsBeforeFirstYear + "px;border:none;\">&nbsp;";
		sOut += "</div>";
		for(var i = 1; i < iTotalYears; i++){
			sOut += "<div class=\"timeLine-year\" style=\"width:" + Math.round(this.widthPerYear -1) + "px;\">" + (iFirstYear + i);
			sOut += "</div>";
		}
		sOut += "";
		sOut += "</div>";
		sOut += "<br/><div class=\"timeLine-tech-wrapper\">";
		for ( var iT = 0; iT < this.techs.length; iT++) {
			////var iWidth = 200; //this.techs[iT].startMetric;
			sOut += "<div class=\"timeLine-tech-title\">" + this.techs[iT].title + " <span>&nbsp; " + this.techs[iT].description + "</span></div>" 
			// (" + this.techs[iT].start + " - " + this.techs[iT].end + ")
			//sOut += this.techs[iT].startMetric + " - " + this.techs[iT].endMetric + "<br/>"
			sOut += "<div class=\"timeLine-tech-bar-wrapper\">"
			sOut += "<div class=\"timeLine-tech-bar\" style=\"left:" + this.techs[iT].startPx + "px;width:" + this.techs[iT].widthPx + "px;\">&nbsp;</div>";
			sOut += "</div>"; 
		}
		sOut += "</div>";
		this.areaTrg.innerHTML = sOut;
	};
	this.addJob = function(fStart, fEnd, sTitle, sDescription){
		var tlTemp = new TimelineEvent(fStart, fEnd, sTitle, sDescription);
		this.p_idCounter++;
		tlTemp.id = this.p_idCounter;
		this.jobs[this.jobs.length] = tlTemp;
	};
	this.addTech = function(sTitle, sDescription, sDates){
		var techTemp = new Technology(sTitle, sDescription, sDates);
		this.p_idCounter++;
		techTemp.id = this.p_idCounter;
		this.techs[this.techs.length] = techTemp;
	};
}

function showHideBubble(iParentId, isShow){
	var areaBar = document.getElementById("bar_" + iParentId);
	var sOld = (isShow ? "" : "-on");
	var sNew = (isShow ? "-on" : "");
	var sClassName = areaBar.className
	sClassName = sClassName.split("timeline-bar" + sOld).join("timeline-bar" + sNew);
	areaBar.className = sClassName;
	document.getElementById("bubble_" + iParentId).style.display = (isShow ? "" : "none");
}

function toReadableDuration(fDuration){
	var iYear = Math.floor(fDuration);
	var iRemain = (fDuration - iYear);
	var iMonth = Math.round(iRemain * 12);
	var sYear = "";
	var sJoin = " ";
	if(iYear > 1){
		sYear = iYear + "yrs";
		sJoin = " ";
	} else if (iYear > 0) {
		sYear = iYear + "yr"
		sJoin = " ";
	}
	var sMonth = "";
	if(iMonth > 1){
		sMonth = sJoin + iMonth + "mths";
	} else if (iMonth > 0) {
		sMonth = sJoin + iMonth + "mth"
	}
	return sYear + sMonth;
}

function toReadableDate(fDate){
	var iYear = Math.floor(fDate);
	var iRemain = Math.min(Math.round((fDate - iYear) * 100), 12);
	var sMonth = ["Jan", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][iRemain];
	return sMonth + " " + iYear;
}

function jsonSortByField(aoIn, sSortFields, isAscending) {
	var asSortFields = sSortFields.split(",");
	var asSortHelper = new Array();
	for ( var iL = 0; iL < aoIn.length; iL++) {
		var sSortFieldValues = "";
		for(var iSF = 0; iSF < asSortFields.length; iSF++) {
			sSortFieldValues += aoIn[iL][asSortFields[iSF]] + "AA";		
		}
		asSortHelper[asSortHelper.length] = sSortFieldValues + "$" + iL;
	}
	asSortHelper.sort();
	var aoOut = new Array();
	for(var iL = 0; iL < asSortHelper.length; iL++) {
		var ix = parseInt(asSortHelper[iL].substring(asSortHelper[iL].lastIndexOf("$") + 1));
		aoOut[iL] = aoIn[ix];
	}
	if(!isAscending) {
		aoOut.reverse();
	}
	return aoOut;
}


var timeline = new Timeline("timelineWrapper");
