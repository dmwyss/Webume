package com.teamwyss.codemanagement;

import java.util.ArrayList;

import com.teamwyss.customdata.HtmlTag;
import com.teamwyss.util.ArrayUtils;
import com.teamwyss.util.DateUtils;
import com.teamwyss.util.FileUtils;
import com.teamwyss.util.HtmlUtils;
import com.teamwyss.util.ReplaceSubstring;
import com.teamwyss.util.StringFormatUtils;

public class CreateCombinedFile {

	private String pathRootSource = "";
	private String fileNameSource = "";
	private FileUtils fu = new FileUtils();
	private HtmlUtils hu = new HtmlUtils();
	private ArrayUtils au = new ArrayUtils();
	private static DateUtils du = new DateUtils();
	private boolean isWriteBuildFiles = true;

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		String sPathRoot = "X:/Data/Projects_Eclipse/resume5";
		String sPathRootForMac = "/Users/david/Projects_EclipseWorkspace/resume5";
		boolean isMac = false;
		if (isMac) {
			sPathRoot = sPathRootForMac;
		}
		String sPath = sPathRoot + "/WebRoot/htm/";
		String sName = "DavidWyss_Webume_Master.htm";
		CreateCombinedFile creator = new CreateCombinedFile(sPath, sName);
		String sDateStamp = du.toString(new java.util.Date(), "yyyyMMdd");
		creator.outputCombinedFile(sPathRoot + "/build/", "DavidWyss_Webume_" + sDateStamp + ".htm");
	}

	public CreateCombinedFile(String sRootDir, String sFileName) {
		// this.sBuildVersionNumber = "Version: 1.0 " + du.convertToJapaneseDateString(new java.util.Date());
		this.pathRootSource = sRootDir;
		this.fileNameSource = sFileName;
	}

	private void outputCombinedFile(String sPathRootTarget, String sFileNameTarget) {
		ArrayList<String> alContent = fu.getFileContentAsArrayList(this.pathRootSource + this.fileNameSource);
		// Go through looking for all the CSS files attached. Replace link with file contents.
		for (int iLine = 0; iLine < alContent.size(); iLine++) {
			String sLine = alContent.get(iLine);
			if (sLine.indexOf("<link") != -1) {
				alContent.set(iLine, replaceCssLinkWithFileContent(sLine, sPathRootTarget, sFileNameTarget));
			}
			if (sLine.indexOf("<script ") != -1) {
				alContent.set(iLine, replaceJavaScriptLinkWithFileContent(sLine, sPathRootTarget, sFileNameTarget));
			}
		}
		String sFilePathResolved = fu.getFilePathAbsolute(sPathRootTarget, sFileNameTarget);
		String sContent = au.join(alContent, "\r\n");

		ReplaceSubstring rs = new ReplaceSubstring();
		ArrayList<String> alFind = new ArrayList<String>();
		ArrayList<String> alReplace = new ArrayList<String>();
		alFind.add("${build.version.number}");
		String sBuildVersionNumber = "Version 1.0.0 " + du.toString(new java.util.Date(), "yyyyMMdd.HHmmss");
		alReplace.add(sBuildVersionNumber);
		sContent = rs.replaceSubstring(sContent, alFind, alReplace);

		System.out.println(sFilePathResolved + " ran"); // + sContent.substring(0, 200));
		fu.setFileContents(sFilePathResolved, sContent);
	}

	private String replaceJavaScriptLinkWithFileContent(String sLine, String sPathRootTarget, String sFileNameTarget) {
		ArrayList<HtmlTag> alHt = hu.getTag(sLine, "script");
		String sOut = "";
		for (int iScriptLink = 0; iScriptLink < alHt.size(); iScriptLink++) {
			HtmlTag ht = alHt.get(iScriptLink);
			String sFileScript = ht.getValueForParameter("src");
			String sFilePathResolved = fu.getFilePathAbsolute(this.pathRootSource, sFileScript);
			String sScriptFileContent = fu.getFileContent(sFilePathResolved);

			StringFormatUtils sfu = new StringFormatUtils();
			sScriptFileContent = sfu.removeMultiLineComments(sScriptFileContent);
			sScriptFileContent = sfu.removeSingleLineComments(sScriptFileContent);

			boolean isReformatFile = true;
			if (isReformatFile) {
				ReplaceSubstring rs = new ReplaceSubstring();
				ArrayList<String> alFind = new ArrayList<String>();
				ArrayList<String> alReplace = new ArrayList<String>();

				alFind.add("  ");
				alReplace.add(" ");

				alFind.add("\t\r\n");
				alReplace.add("\r\n");

				alFind.add(" \r\n");
				alReplace.add("\r\n");
				alFind.add(" \r\n");
				alReplace.add("\r\n");
				alFind.add(" \r\n");
				alReplace.add("\r\n");

				alFind.add("\r\n\r\n");
				alReplace.add("\r\n");

				alFind.add("\t\t");
				alReplace.add("\t");
				alFind.add("\t\t");
				alReplace.add("\t");

				alFind.add("\r\n\t");
				alReplace.add("\r\n");
				alFind.add("\r\n\t");
				alReplace.add("\r\n");

				int iFunkCounter = 0;
				alFind.add("jsonResolveHeirarchy");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("changeFachVisible");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("writeTimeline");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("decorateFachBackground");
				alReplace.add("funk" + iFunkCounter++);

				alFind.add("Skills Radar");
				alReplace.add("protectedValue01");
				alFind.add("Radar");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("protectedValue01");
				alReplace.add("Skills Radar");

				alFind.add("TimelineEvent");
				alReplace.add("funk" + iFunkCounter++);

				alFind.add("Tech Timeline");
				alReplace.add("protectedValue02");
				alFind.add("Timeline");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("protectedValue02");
				alReplace.add("Tech Timeline");
				// alFind.add(""); alReplace.add("funk" + iFunkCounter++);

				alFind.add("showHideBubble");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("interpolateData");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("jsonSortByField");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("toMetricDate");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("Technology");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("toReadableDuration");
				alReplace.add("funk" + iFunkCounter++);
				alFind.add("toReadableDate");
				alReplace.add("funk" + iFunkCounter++);

				alFind.add(".addJob");
				alReplace.add(".funk" + iFunkCounter++);
				alFind.add(".addTech");
				alReplace.add(".funk" + iFunkCounter++);

				sScriptFileContent = rs.replaceSubstring(sScriptFileContent, alFind, alReplace);
			}
			if (this.isWriteBuildFiles) {
				//String ss = (sPathRootTarget + fu.getFilePathAbsolute(sFileScript));
				fu.setFileContents(sPathRootTarget + fu.getFilePathAbsolute(sFileScript), sScriptFileContent);
			}
			sOut = "<!-- " + sFilePathResolved + " -->\r\n<script type=\"text/javascript\">\r\n" + sScriptFileContent + "\r\n</script>";
		}
		return sOut;
	}

	private String replaceCssLinkWithFileContent(String sLine, String sPathRootTarget, String sFileNameTarget) {
		ArrayList<HtmlTag> alHt = hu.getTag(sLine, "link");
		String sOut = "";
		for (int iCssLink = 0; iCssLink < alHt.size(); iCssLink++) {
			HtmlTag ht = alHt.get(iCssLink);
			String sFileCss = ht.getValueForParameter("href");
			String sFilePathResolved = fu.getFilePathAbsolute(this.pathRootSource, sFileCss);
			String sCssFileContent = fu.getFileContent(sFilePathResolved);

			StringFormatUtils sfu = new StringFormatUtils();
			sCssFileContent = sfu.removeMultiLineComments(sCssFileContent);

			boolean isReformatFile = true;
			if (isReformatFile) {
				ReplaceSubstring rs = new ReplaceSubstring();
				ArrayList<String> alFind = new ArrayList<String>();
				ArrayList<String> alReplace = new ArrayList<String>();
				alFind.add("\t\r\n");
				alReplace.add("\r\n");

				alFind.add(" \r\n");
				alReplace.add("\r\n");

				alFind.add("\r\n\r\n");
				alReplace.add("\r\n");

				alFind.add("    ");
				alReplace.add("\t");

				alFind.add("\t");
				alReplace.add("");

				alFind.add(": ");
				alReplace.add(":");

				alFind.add("\r\n");
				alReplace.add("");
				alFind.add("}");
				alReplace.add("}\r\n");

				sCssFileContent = rs.replaceSubstring(sCssFileContent, alFind, alReplace);
			}
			if (this.isWriteBuildFiles) {
				//String ss = (sPathRootTarget + fu.getFilePathAbsolute(sFileCss));
				fu.setFileContents(sPathRootTarget + fu.getFilePathAbsolute(sFileCss), sCssFileContent);
			}
			sOut = "<!-- " + sFilePathResolved + " -->\r\n<style type=\"text/css\">\r\n" + sCssFileContent + "\r\n</style>";
		}
		return sOut;
	}

}
