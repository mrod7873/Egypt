/* 
WikiMedia Scripts for 
the 3 Pyramids Info Page
*/ 


//for handling data from WikiMedia's servers
	function updateInfo(data){
		
		//declare variables for the search results
		var resultsDiv = document.getElementById("results");
		var newResults = document.createElement("div");
		var results = data.query.pages;
	
		//for in loop to calculate search results
		for(var prop in results){
			var item = results[prop];
			var title = item.title;
			var url = item.fullurl;	

			//create elements for the search results
			var div = document.createElement("div");
			var a = document.createElement("a");
			var textNode = document.createTextNode(url);

			//set properities for the elements
			a.href= url;
			a.appendChild(textNode);
			var h3 = document.createElement("h3");
			
			//set innerHTML/appendChild elements for the search results
			h3.innerHTML = title;
			div.appendChild(h3);
			div.appendChild(a);
			newResults.appendChild(div);
			
		}

		resultsDiv.innerHTML = newResults.innerHTML;
	}

	//executes anonymous function for search results
	/*window.onload = function(){
		var button = document.getElementById("button");
		button.onclick = newSearch;
		
	}*/

	//create function to query a new search based on user input
	function newSearch() {
		
		var searchBox = document.getElementById("searchText");
		var searchTerm = searchBox.value;
		
		 var scriptTag = document.createElement("script");

           //this sets the src of the script from WikiMedia

           //first concatenate the search term with the rest of the script tag src
                var newRequest = "http://en.wikipedia.org/w/api.php?action=query&prop=info&format=json&inprop=url&generator=search&gsrsearch="+searchTerm+"&gsrlimit=10&callback=updateInfo";

                //then set the src
                scriptTag.src = newRequest;
		
            //pulls out head element by tagName
                var head = document.getElementsByTagName("head")[0];
		head.appendChild(scriptTag);
		
	}
	