function toggleDiv (targetId, link) {
                //calls out div elements
               
                var target = document.getElementById(targetId);
                var linkedItem = document.getElementById(link);

                //set display to block
                if (target.style.display == "block"){
                    
                    //set display to none
                    target.style.display = "none";
                    linkedItem.innerHTML = "Show";

                } else {
                    // or make it visible
                    target.style.display = "block";
                    linkedItem.innerHTML = "Hide";
                }
            }