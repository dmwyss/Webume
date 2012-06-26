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
	if(!isAscending){
		aoOut.reverse();
	}
	return aoOut;
}

function jsonToFormat(o, sFormat) {
	asFormat = sFormat.split("${");
	sOut = asFormat[0];
	for(var i = 1; i < asFormat.length; i++) {
		var asInner = asFormat[i].split("}");
		sOut += o[asInner[0]] + asInner[1];
	}
	return sOut;
}

function jsonSelectWhere(ao, sFieldName, sValue) {
	var aoOut = new Array();
	for(var iO = 0; iO < ao.length; iO++) {
		if(ao[iO][sFieldName] == sValue) {
			aoOut[aoOut.length] = ao[iO];
		}
	}
	return aoOut;
}

function jsonResolveHeirarchy(ao, oParent, sParentFieldName, sIdentifierFieldName, iDepth) {
	// Get everything with whose parent name matches sParentValue
	var aoNextLevelDown = jsonSelectWhere(ao, sParentFieldName, oParent[sIdentifierFieldName]);
	oParent.setChildren(aoNextLevelDown);
	for(var iTop = 0; iTop < aoNextLevelDown.length; iTop++) {
		// Get each of the children
		var oNextLevelDownObjectTemp = aoNextLevelDown[iTop];
		oNextLevelDownObjectTemp.parentId = oParent.id;
		oNextLevelDownObjectTemp.parentName = oParent.name;
		oNextLevelDownObjectTemp.depth = iDepth;
		jsonResolveHeirarchy(ao, oNextLevelDownObjectTemp, sParentFieldName, sIdentifierFieldName, iDepth + 1);
	}	
}

function jsonToHeirarchyFormat(oParent, sFormat, sChildrenWrapperStart, sChildrenWrapperEnd, sOut) {
	// Get everything with whose parent name matches sParentValue
	var sOutTemp = "";
	sOutTemp += jsonToFormat(oParent, sFormat);
	if(oParent.childrenLength > 0){
		sOutTemp += jsonToFormat(oParent, sChildrenWrapperStart);
	}
	var aoNextLevelDown = oParent.getChildren();
	for(var iTop = 0; iTop < aoNextLevelDown.length; iTop++) {
		sOutTemp += jsonToHeirarchyFormat(aoNextLevelDown[iTop], sFormat, sChildrenWrapperStart, sChildrenWrapperEnd, "");
	}
	if(oParent.childrenLength > 0){
		sOutTemp += jsonToFormat(oParent, sChildrenWrapperEnd);
	}
	sOut += sOutTemp;
	return sOut;
}

function jsonSafeInt(varIn, iDefault){
	return ((typeof varIn != "undefined") ? varIn : iDefault);
}

function jsonSafeString(varIn, sDefault){
	return ((typeof varIn != "undefined") ? varIn : sDefault);
}
