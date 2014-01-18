/* 
Video Scripts for 
the 3 Pyramids Video Page
*/ 

//create function to retrieve the video data using JSONP from Vimeo's servers
function updateInfo(data){
			console.log(data);

			var videoContainer = document.getElementById("videoHolder");
				//only one thing to go through, first item
			var video  = data[0];
				
				//stores id number of the video 
				var id = video.id;

				//stores the title of the video
				var title = video.title;

				//stores the user name
				var user_name = video.user_name;

				//stores the upload date
				var upload_date = video.upload_date;

				//stores the user portrait info
				var user_portrait = video.user_portrait_medium ;
				var description = video.description;


				//create div for the video
				var div = document.createElement("div");

				//create iframe for the video
				var iframe = document.createElement("iframe");

				//subheads to hold the video info
				var titleInfo = document.createElement("h2");
				var userInfo = document.createElement("h3");
				var userImg = document.createElement("img");
				var videoDescription = document.createElement("p");

				//set innerHTML for video data
				titleInfo.innerHTML = title;
				userInfo.innerHTML = "created by " + user_name;
				videoDescription .innerHTML = description;
				userImg.src = user_portrait;

				//set attributes and styles for the video content
				div.setAttribute("class", "videoDiv");
				titleInfo.setAttribute("class", "titleVideo");
				userInfo.setAttribute("class", "userName");

				//iframe attribute
				iframe.src= 'http://player.vimeo.com/video/' + id;
				iframe.setAttribute("height", 400);
				iframe.setAttribute("width", 720);

				//div attribute
				div.appendChild(iframe);
				div.appendChild(titleInfo);
				div.appendChild(userInfo);
				videoDescription.appendChild(userImg);
				div.appendChild(videoDescription);
				videoContainer.appendChild(div);
		}