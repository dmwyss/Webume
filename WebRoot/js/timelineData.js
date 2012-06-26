
var g_fPublishedDate = 2012.04;
var sPublishedYearMonth = "" + g_fPublishedDate;

timeline.addJob(2011.10, g_fPublishedDate, "NAB", "Top Tier Bank - Aust", "JEE (Java) Business Analyst / Programmer");
timeline.addJob(2007.10, 0, "Champion Data", "Sports Statistics - Aust", "JEE (Java) Senior Analyst/Programmer, Team Lead. Sports Statistics Apps");
timeline.addJob(2005.10, 0, "NAB", "Top Tier Bank - Aust", "JEE (Java) Business Analyst / Programmer");
timeline.addJob(2005.05, 0, "Sensis", "Teleco / Online Business - Aust", "Rich Internet Application Developer");
timeline.addJob(2003.05, 0, "LNB Consulting", "Web App Services - Aust", "JEE Web Application Developer");
timeline.addJob(2002.05, 0, "Swiss Re", "Insurance - Switz", "Java / Domino / Flash Web Application Developer");
timeline.addJob(1999.06, 0, "IBM", "IT Consultancy - Switz", "Senior Consultant Web Application Developer");
timeline.addJob(1998.05, 0, "Quest Enterprise", "Web App Services - Switz", "IBM Domino Web Application Developer");
timeline.addJob(1996.02, 0, "Trident Consulting", "Web App Services - Aust", "Web Application Developer");
timeline.addJob(1995.01, 0, "Reproschicker", "Digital Media - Switz", "Graphic Designer");


timeline.addTech("Visual Design", "Qualified: 1987 RMIT", "1995.01-" + sPublishedYearMonth);
timeline.addTech("Web Application Development", "", "1996.02-" + sPublishedYearMonth);
timeline.addTech("Java", "Certified: Sun Java Developer 2002", "2002.05-" + sPublishedYearMonth);
timeline.addTech("J2EE", "Certified: Sun J2EE Web Component Developer 2003", "2003.05-" + sPublishedYearMonth);
timeline.addTech("Flash", "Certified: Adobe Flash Developer 2007", "2005.10-2011.06");
timeline.addTech("iOS", "", "2010.10-2011.09");


timelineTech.jobs = timeline.jobs;
timelineTech.techs = timeline.techs;