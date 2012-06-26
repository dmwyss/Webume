// Skills Data

function Skill(sParentName, sName, sDescription, iRating) {
	this.id = skm.getNextId();
	this.parentId = 0;
	this.parentName = jsonSafeString(sParentName, "");
	this.name = jsonSafeString(sName, "");
	this.rating = jsonSafeInt(iRating, 1);
	this.childrenLength = 0;
	this.p_children = new Array();
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

function SkillManager() {
	this.p_skillIdCounter = 1;
	this.skills = new Array(); //"root", "", 0);
	this.getNextId = function() {
		this.p_skillIdCounter++;
		return this.p_skillIdCounter;
	};
	this.resolveHeirarchcal = function() {
		this.add(new Skill("0000", "", "", 0));
		this.skills = this.sortByParent();
		var oRoot = jsonSelectWhere(this.skills, "parentId", "0000")[0];
		jsonResolveHeirarchy(this.skills, oRoot, "parentName", "name", 0);
	};
	this.add = function(skNew) {
		this.skills[this.skills.length] = skNew;
	};
	this.sortByParent = function() {
		return jsonSortByField(this.skills, "parentName,name", true);
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
		var sItemFormat = "<div onclick=\"doClickParent(${id});\">${name} &nbsp; <span style=\"color:#888;font-style:italic;\">${description}</span></div>";
		var sChildrenStartFormat = "<div id=\"childrenWrapper_${id}\" style=\"border:1px solid gray;margin-left:30px;\">";
		var sChildrenEndFormat = "</div>";
		var sOut = "";
		return jsonToHeirarchyFormat(oRoot, sItemFormat, sChildrenStartFormat, sChildrenEndFormat, sOut);
	};
}

function doClickParent(iId){
	var spanTrg = document.getElementById("childrenWrapper_" + iId);
	if(!spanTrg){
		return;
	}
	var sSetting = spanTrg.style.display;
	if(sSetting == "none"){
		sSetting = "";
	} else {
		sSetting = "none";
	}
	spanTrg.style.display = sSetting;
}

var skm = new SkillManager();
skm.add(new Skill("", "Technologies", "", 0));
skm.add(new Skill("Technologies", "Java", "(Sun Certified)", 0));
skm.add(new Skill("Java", "XML", "", 0));
skm.add(new Skill("Java", "J2EE", "", 0));
skm.add(new Skill("J2EE", "Spring", "Web MVC, IoC", 0));
skm.add(new Skill("J2EE", "Hibernate", "", 0));
skm.add(new Skill("J2EE", "Struts", "", 0));
skm.add(new Skill("J2EE", "JSTL", "", 0));
skm.add(new Skill("J2EE", "ANT", "Automated test, build, deploy", 0));
skm.add(new Skill("Java", "WebServices", "Service oriented Architecture", 0));
skm.add(new Skill("Java", "JMS", "Bank department integration", 0));
skm.add(new Skill("Technologies", "Persistance", "", 0));
skm.add(new Skill("Persistance", "SQL", "Data design, programming", 0));
skm.add(new Skill("Persistance", "PL/SQL", "Data maintenance, scalability enhancement", 0));
skm.add(new Skill("Persistance", "HQL", "Implementation of complex queries", 0));

skm.add(new Skill("", "Software", "", 0));
skm.add(new Skill("Software", "Eclipse", "", 0));
skm.add(new Skill("Software", "WebSphere", "", 0));
skm.add(new Skill("Software", "Oracle", "", 0));
skm.add(new Skill("Software", "MySQL", "", 0));
skm.add(new Skill("Software", "PhotoShop", "", 0));
skm.add(new Skill("Software", "Flash", "(Certified)", 0));
	
skm.add(new Skill("", "Communication Skills", "", 0));
skm.add(new Skill("Communication Skills", "Speaking: Guest Presentations", "Belgium,England,Germany,Switzerland,USA", 0));
skm.add(new Skill("Communication Skills", "Writing: Published Author", "Excellence in UI, UX design", 0));
skm.add(new Skill("Communication Skills", "Visual: Degree in Visual Communication", "(Graphic design)", 0));
skm.add(new Skill("Communication Skills", "Technical: UML", "Application design, client communication", 0));
skm.add(new Skill("Communication Skills", "Personal: Team Leadership", "Teams of 2 - 5 people", 0));

skm.add(new Skill("Technologies", "Web", "", 0));
skm.add(new Skill("Web", "Ajax", "Rich online application design, development", 0));
skm.add(new Skill("Ajax", "ReST", "Highly scalable rich application design", 0));
skm.add(new Skill("Web", "JSON", "Handling of complex data objects in Web apps", 0));
skm.add(new Skill("Web", "CSS", "", 0));
skm.add(new Skill("Web", "HTML5", "", 0));

skm.add(new Skill("", "Methodologies", "", 0));
skm.add(new Skill("Methodologies", "Waterfall", "Banking, Insurance, Telecommunications", 0));
skm.add(new Skill("Methodologies", "Agile", "", 0));
skm.add(new Skill("Agile", "RAD", "Prototyping, TFD", 0));
skm.add(new Skill("Agile", "Scrum", "", 0));


