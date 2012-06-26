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
	this.data = new Array();
	this.init = function(){
		this.areaTrg = document.getElementById(this.areaTrgId);
		this.areaTrg.style.width = this.widthGross + "px";
		this.data = jsonSortByField(this.data, "start", false);
		this.overallStartMetric = this.data[this.data.length - 1].startMetric;
		this.overallEndMetric = this.data[0].endMetric;
		this.overallTotalDurationMetric = this.overallEndMetric - this.overallStartMetric;
		this.widthPerYear = this.widthNet / this.overallTotalDurationMetric;
		this.interpolateData();
		this.write();
	};
	this.interpolateData = function(){
		// Work out min start and max end.
		//for(var iD = (this.data.length - 1); iD >= 0; iD--) {
		var nStartOfNext = this.data[0].start;
		var nStartOfNextMetric = this.data[0].startMetric;
		for(var iD = 1; iD < this.data.length; iD++) {
			if(this.data[iD].end == 0){
				this.data[iD].end = nStartOfNext;
				this.data[iD].endMetric = nStartOfNextMetric;
			}
			nStartOfNext = this.data[iD].start;
			nStartOfNextMetric = this.data[iD].startMetric;
		}
		/*
		var fMin = this.data[this.data.length - 1].startMetric;
		var fMax = this.data[0].endMetric;
		var fTotalDuration = fMax - fMin;
		*/
		var iEndCurr = this.widthNet;
		for( var iD = 0; iD < this.data.length; iD++) {
			var t = this.data[iD];
			var fStartPx = (t.startMetric - this.overallStartMetric) / this.overallTotalDurationMetric * this.widthNet;
			t.startPx = Math.round(fStartPx) + 1;
			t.widthPx = iEndCurr - t.startPx - 2;
			iEndCurr = t.startPx;
		}
	};
	this.write = function(){
		var sOut = "";
		var iBubbleWidth = 210;
		for( var iE = 0; iE < this.data.length; iE++) {
			var sLeftCenterRight = "";
			var iOffset = 0;
			if(iE < 2){
				sLeftCenterRight = "-right";
				iOffset = -65;
			} else if(iE > this.data.length - 3){
				sLeftCenterRight = "-left";
				iOffset = 60;
			}
			var t = this.data[iE];
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
		//var iPixelsBeforeFirstYear = Math.round((1 - (this.data[0].startMetric % 1)) * this.widthPerYear) + 6;
		var iPixelsBeforeFirstYear = Math.round(this.widthPerYear);
		sOut += "<div class=\"timeLine-year\" style=\"width:" + iPixelsBeforeFirstYear + "px;border:none;\">&nbsp;";
		sOut += "</div>";
		for(var i = 1; i < iTotalYears; i++){
			sOut += "<div class=\"timeLine-year\" style=\"width:" + Math.round(this.widthPerYear -1) + "px;\">" + (iFirstYear + i);
			sOut += "</div>";
		}
		sOut += "";
		sOut += "</div>";
		this.areaTrg.innerHTML = sOut;
	};
	this.add = function(fStart, fEnd, sTitle, sDescription){
		var tlTemp = new TimelineEvent(fStart, fEnd, sTitle, sDescription);
		this.p_idCounter++;
		tlTemp.id = this.p_idCounter;
		this.data[this.data.length] = tlTemp;
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
