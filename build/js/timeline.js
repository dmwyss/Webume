function funk5(fStart, fEnd, sTitle, sService, sDescription){
this.id = 0;
this.start = fStart;
this.startMetric = funk10(this.start);
this.startReadable = funk13(this.start);
this.end = fEnd;
this.endMetric = funk10(this.end);
this.endReadable = funk13(this.end);
this.setEndMetric = function(fIn){
this.endMetric = fIn;
this.durationReadable = funk12(this.endMetric - this.startMetric);
};
this.setEnd = function(fIn){
this.end = fIn;
this.endReadable = funk13(fIn);
};
this.startPx = 0;
this.widthPx = 10;
this.title = sTitle;
this.durationReadable = funk12(this.endMetric - this.startMetric);
this.service = sService;
this.description = sDescription;
}
function funk10(fIn){
var iRemain = (fIn % 1) - .01;
return (fIn - iRemain) + (iRemain / 0.12);
}
function funk11(sTitle, sDescription, sDates){
this.id = 0;
this.title = sTitle;
this.description = sDescription;
var asD = sDates.split("-");
var dtc = new Date();
this.start = (asD[0] == "current") ? g_fPublishedDate : parseFloat(asD[0]);
this.startMetric = funk10(this.start);
this.startPx = 0;
this.end = (asD[1] == "current") ? g_fPublishedDate : parseFloat(asD[1]);
this.endMetric = funk10(this.end);
this.endPx = 0;
}
function funk6(sAreaTrgId){
this.areaTrgId = sAreaTrgId;
this.areaTrg = null;
this.widthGross = 802;
this.widthNet = this.widthGross - 2;
this.overallStartMetric = 0;
this.overallEndMetric = 1;
this.overallTotalDurationMetric = 1;
this.widthPerYear = this.widthNet / this.overallTotalDurationMetric;
this.isTimeLineTech = false;
this.p_idCounter = 0;
this.jobs = new Array();
this.techs = new Array();
this.init = function(){
this.areaTrg = document.getElementById(this.areaTrgId);
this.areaTrg.style.width = this.widthGross + "px";
this.jobs = funk9(this.jobs, "start", false);
this.overallStartMetric = this.jobs[this.jobs.length - 1].startMetric;
this.overallEndMetric = this.jobs[0].endMetric;
this.overallTotalDurationMetric = this.overallEndMetric - this.overallStartMetric;
this.widthPerYear = this.widthNet / this.overallTotalDurationMetric;
this.funk8();
this.write();
};
this.funk8 = function(){
var nStartOfNext = this.jobs[0].start;
var nStartOfNextMetric = this.jobs[0].startMetric;
for(var iD = 1; iD < this.jobs.length; iD++) {
if(this.jobs[iD].end == 0){
this.jobs[iD].setEnd(nStartOfNext);
this.jobs[iD].setEndMetric(nStartOfNextMetric);
}
nStartOfNext = this.jobs[iD].start;
nStartOfNextMetric = this.jobs[iD].startMetric;
}
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
t.widthPx = (Math.round(fEndPx) - t.startPx) - 7;
}
};
this.getfunk6InFormat = function(sFormat){
var sOut = "<div style=\"position:relative;\">";
for( var iE = 0; iE < this.jobs.length; iE++) {
sOut += jsonToFormat(this.jobs[iE], sFormat);
}
sOut += "</div><br/>";
return sOut;
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
var isBubble = this.isTimeLineTech;
if(isBubble){
sOut += "<blockquote id=\"bubble_" + t.id + "\" class=\"speechBubble-wrapper" + sLeftCenterRight + "\" style=\"display:none;left:" + ((t.startPx + t.widthPx) - Math.round(iBubbleWidth / 2) - Math.round(t.widthPx / 2) + iOffset) + "px;bottom:" + 40 + "px;\">";
sOut += "<p class=\"speechBubble-banner\">" + t.title + "</p>";
var sDateInfo = t.startReadable + "-" + t.endReadable + " (" + t.durationReadable + ")";
sOut += "<p class=\"speechBubble-body\">" + t.description + "<br/><span style=\"color:silver\">" + sDateInfo + "</span></p>";
sOut += "</blockquote>";
}
sOut += "<div class=\"timeline-bar\" style=\"width:" + t.widthPx + "px;left:" + t.startPx + "px;\" id=\"bar_" + t.id + "\" onmouseover=\"funk7(" + t.id + ", true);\" onmouseout=\"funk7(" + t.id + ", false)\">&nbsp;</div>";
}
sOut += "<div class=\"timeLine-years-wrapper" + (this.isTimeLineTech ? " timeLine-yearsTech" : "") + "\" style=\"width:" + (this.widthGross + 30) + "px;\">";
var iFirstYear = Math.floor(this.overallStartMetric);
var iLastYear = Math.ceil(this.overallEndMetric);
var iTotalYears = iLastYear - iFirstYear;
var iPixelsBeforeFirstYear = Math.round(this.widthPerYear);
sOut += "<div class=\"timeLine-year\" style=\"width:" + iPixelsBeforeFirstYear + "px;border:none;\">" + iFirstYear;
sOut += "</div>";
for(var i = 1; i < iTotalYears; i++){
sOut += "<div class=\"timeLine-year\" style=\"width:" + Math.round(this.widthPerYear -1) + "px;\">" + (iFirstYear + i);
sOut += "</div>";
}
sOut += "";
sOut += "</div>";
if(this.isTimeLineTech){
sOut += "<br/><div class=\"timeLine-tech-wrapper\">";
for ( var iT = 0; iT < this.techs.length; iT++) {
sOut += "<div class=\"timeLine-tech-title\">" + this.techs[iT].title + " <span>&nbsp; " + this.techs[iT].description + "</span></div>"
sOut += "<div class=\"timeLine-tech-bar-wrapper\">"
sOut += "<div class=\"timeLine-tech-bar\" style=\"left:" + this.techs[iT].startPx + "px;width:" + (this.techs[iT].widthPx + 10) + "px;\">&nbsp;</div>";
sOut += "</div>";
}
sOut += "</div>";
}
this.areaTrg.innerHTML = sOut;
};
this.funk14 = function(fStart, fEnd, sTitle, sService, sDescription){
var tlTemp = new funk5(fStart, fEnd, sTitle, sService, sDescription);
this.p_idCounter++;
tlTemp.id = this.p_idCounter;
this.jobs[this.jobs.length] = tlTemp;
};
this.funk15 = function(sTitle, sDescription, sDates){
var techTemp = new funk11(sTitle, sDescription, sDates);
this.p_idCounter++;
techTemp.id = this.p_idCounter;
this.techs[this.techs.length] = techTemp;
};
}
function funk7(iParentId, isShow){
var areaBar = document.getElementById("bar_" + iParentId);
var sOld = (isShow ? "" : "-on");
var sNew = (isShow ? "-on" : "");
var sClassName = areaBar.className
sClassName = sClassName.split("timeline-bar" + sOld).join("timeline-bar" + sNew);
areaBar.className = sClassName;
var areaBubble = document.getElementById("bubble_" + iParentId);
if(areaBubble){
areaBubble.style.display = (isShow ? "" : "none");
}
var areaTableRow = document.getElementById("timelineTable_" + iParentId);
if(areaTableRow){
areaTableRow.className = (isShow ? "bioData-wrapperOn" : "bioData-wrapper");
}
}
function funk12(fDuration){
var iYear = Math.floor(fDuration);
var iRemain = (fDuration - iYear);
var iMonth = Math.round(iRemain * 12);
var sYear = "";
var sJoin = " ";
if(iYear > 1){
sYear = iYear + " years";
sJoin = " ";
} else if (iYear > 0) {
sYear = iYear + " year"
sJoin = " ";
}
var sMonth = "";
if(iMonth > 1){
sMonth = sJoin + iMonth + " months";
} else if (iMonth > 0) {
sMonth = sJoin + iMonth + " month"
}
return sYear + sMonth;
}
function funk13(fDate){
var iYear = Math.floor(fDate);
var iRemain = Math.min(Math.round((fDate - iYear) * 100), 12);
var sMonth = ["Jan", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][iRemain];
return sMonth + " " + iYear;
}
var timeline = new funk6("timelineWrapper");
var timelineTech = new funk6("techBubbleLineWrapper");
timelineTech.isTimeLineTech = true;
