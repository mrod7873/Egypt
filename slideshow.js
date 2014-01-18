/* 
Slideshow Scripts for 
the 3 Pyramids Home Page
*/ 

//declare variables/arrays for the slideshow and set the slideshow interval duration
var whichPic = 0;
		var picArray = ["gp-a.jpg", "sphinx-a.jpg", "Great_Sphinx_of_Giza-a.jpg", "Great-Sphinx-of-Giza-Cairo-a.jpg"];
		var captionArray = ["Three Great Pyramids", "Front of Giza Pyramid Complex", "Great Sphinx of Giza", "Great Sphinx at Night"];
		var slideshow = setInterval("slideshowStart()",2000);

//create function slideshowStart using conditionals to loop through the images/captions for the slideshow
		function slideshowStart(){

		var img = document.getElementById("imageHolder");
		var p = document.getElementById("caption");

		p.innerHTML = captionArray[whichPic];

		img.src = "images/" + picArray[whichPic];

		if(whichPic < picArray.length-1){
			whichPic++;
		} else {
			whichPic = 0;
		}
	}
