// JavaScript Document

function greeting()
{
	//alert("inside greeting()");
	// 1. Create header object to work with
	var myHeader = document.createElement('header');
	myHeader.setAttribute("id","newHeader")
	document.getElementById("greeting").appendChild(myHeader)
	var header = document.getElementById("newHeader")
	var headerStyle = document.getElementById("greeting")							
	// 2. Set the font size to something between 24-48
	headerStyle.style.fontSize = "48px";							
	// 3. Center the greeting in the displayable area
	headerStyle.style.textAlign = "center";							
	
	//Create a date object called today with todays date and time in it.
	var today = new Date();						
	
	//Pull the hour of the day from the date object.  
	currentTime = today.getHours();				
	
	if(currentTime >= 6 && currentTime < 12)
	{
		header.innerHTML = "Good Morning!";
		// 4. Set a color for the greeting
		headerStyle.style.color = "#ff6347";						
	}
	else
	{
		if(currentTime >= 12 && currentTime <17)
		{
			header.innerHTML = "Good Afternoon!";
			// 5. Set a color for the greeting	
			headerStyle.style.color = "#2e8b57";					
		}
		else
		{
			header.innerHTML = "Good Evening";
			// 6. Set a color for the greeting		
			headerStyle.style.color = "#4682b4";					
		}
	}
	
}//end greeting()