//work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

var work = {
	"jobs" : [
		{
			"employer" : "University of Rochester",
			"title" : "Research Assistant",
			"location" : "Rochester, NY",
			"dates" : "2010 - 2015",
            "description" : "Designed algorithms for privacy-preserving cloud-based medical data analytics. Worked with patient ECG data from Telemetric and Holter ECG Warehouse (THEW) database."
		},
		{
			"employer" : "Intel",
			"title" : "Component Design Engineer Intern",
			"location" : "Hillsboro, OR",
			"dates" : "Feb. 2012 - Dec. 2012",
            "description" : "Designed IREM (InfraRed Emission Microscope) automation flow for scan diagnosis."
		},
		{
			"employer" : "Rice University",
			"title" : "Research Assistant",
			"location" : "Houston, TX",
			"dates" : "2008 - 2010",
            "description" : "Investigated effects of hardware imperfections for fingerprinting wireless devices. Collected and analyzed data transmitted from wireless FPGA boards. Designed a classification algorithm to identify each wireless device uniquely."
		}
	]
};

//projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

var projects = {
  "projects" : [
		{
			"title" : "Research Assistant",
			"dates" : "2013- present",
			"description" : "Designed algorithms for privacy-preserving cloud-based medical data analytics. Worked with patient ECG data from Telemetric and Holter ECG Warehouse (THEW) database.",
			"images" : []
		},
		{
			"title" : "Component Design Engineer Intern",
			"dates" : "Feb. 2012 - Dec. 2012",
			"description" : "Designed IREM (InfraRed Emission Microscope) automation flow for scan diagnosis.",
			"images" : []
		},
		{
			"title" : "Research Assistant",
			"dates" : "2008 - 2010",
			"description" : "Investigated effects of hardware imperfections for fingerprinting wireless devices. Collected and analyzed data transmitted from wireless FPGA boards. Designed a classification algorithm to identify each wireless device uniquely.",
			"images" : []
		}
	],
  display : function () {
    for(var i in projects.projects){
      $("#projects").append(HTMLprojectStart);
      var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(title);
      var date = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(date);
      var decr = HTMLprojectDescription.replace("%data%", projects.projects[i].description );
      $(".project-entry:last").append(decr);
    }
  }
};

//bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

var bio = {
  "name" : "Ovunc Kocabas",
  "role" : "PhD. Candidate",
  "welcomeMessage" : "Hello there!",
  "contacts" : {
    "mobile" : "832-373-1216",
    "email" : "ovunc.kocabas@rochester.edu",
    "github" : "ovunck",
    "location" : "Rochester, NY"
  },
  "skills" : [
		"C",
		"C++",
    "Python",
    "Matlab",
    "R"
	]
};

//education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. 
//Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.

var education = {
  "schools" : [
		{
			"name" : "University of Rochester",
			"location" : "Rochester, NY",
      "degree" : "Ph.D.",
      "majors" : [
        "Electrical and Computer Engineering"
      ],
      "dates" : "2010 - present",
      "url" : "https://www.rochester.edu/"
    },
		{
      "name" : "Rice University",
      "location" : "Houston, TX",
      "degree" : "M.S.",
      "majors" : [
        "Electrical and Computer Engineering"
      ],
      "dates" : "2008 - 2010",
      "url" : "http://www.rice.edu/"
    },
    {
      "name" : "Sabanci University",
      "location" : "Istanbul, TURKEY",
      "degree" : "B.S.",
      "majors" : [
        "Microelectronics", "Computer Science"
      ],
      "dates" : "2001 - 2008",
      "url" : "https://www.sabanciuniv.edu/en"
    }
  ]
};

//var formattedName = HTMLheaderName.replace("%data%", "Ovunc");
//$("#header").append(formattedName);
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));


if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  for(skill in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

function displayWork () {
  
  for(item in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[item].title);
    $(".work-entry:last").append(employer+title);
    var date = HTMLworkDates.replace("%data%", work.jobs[item].dates);
    $(".work-entry:last").append(date);
    var loc = HTMLworkLocation.replace("%data%", work.jobs[item].location);
    $(".work-entry:last").append(loc);
    var decr = HTMLworkDescription.replace("%data%", work.jobs[item].description);
    $(".work-entry:last").append(decr);
  }
}

displayWork();


function inName(firstAndLastName){
  var names = firstAndLastName.trim().slice(0);
  var nameList = names.split(" ");
  var firstName = nameList[0];
  firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1);
  var lastName = nameList[1].toUpperCase();
  return firstName + " " + lastName;
};


projects.display();

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);

                        
                        
