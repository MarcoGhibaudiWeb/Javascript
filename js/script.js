1
//validateForm is the main function, it checks each element of the form. 
//With document.getElementById("id").innerHTML, the script changes the informative text to lead the users through the possible errors.

function validateForm() {
    
    //This is the extraction of each variable used in the function
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var numb = document.getElementById("tnumb");
    var seat = document.getElementById("seats");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var numbLength = numb.value.length;
    var letters = /^[A-Za-z' ]+$/;  //This is an expression tha declares as var all the letters, the spaces and the <'>. 

    atpos = email.value.indexOf("@");
    dotpos = email.value.lastIndexOf(".");

    //This section validates the name, it must contain just letters, spaces or the <'> and must exist.
    if (name.value == "")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(name);
        name.focus();
        return false;
    }

    if(!name.value.match(letters) ) //the !name.value.match(letters) checks that the name contains just elements of the var letters.
    {
        document.getElementById("bookingText").innerHTML = "Only letters allowed";
        changeRed(name)
        name.focus();
        return false;
    }

    //This section validates the E-mail, it checks the position of the <@> and the <.>, it must exist.
    if (email.value == "")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(email);
        email.focus();
        return false;
    }

     if (atpos < 1 || (dotpos - atpos < 2)) 
    {
        document.getElementById("bookingText").innerHTML = "Please enter correct email ID";
        changeRed(email);
        email.focus();
        return false;
    }

    //This section validates the telephone number, it must be 10 digits and exist.
    if (numb.value == "")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(numb);
        numb.focus();
        return false;
    }

    if(isNaN(numb.value))
     {
        document.getElementById("bookingText").innerHTML = "Please enter correct number"
        changeRed(tnumb);
        numb.focus();
        return false;
     }

     if (numbLength != 10)
     {
        document.getElementById("bookingText").innerHTML = "Your number must contain 10 digits";
        changeRed(tnumb);
        numb.focus();
        return false;
     }

     //This section validates the seat value, it must be digits and not greater than 8.
    if (seat.value == "")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(seat);
        seat.focus();
        return false;
    }

    if(isNaN(seat.value)|| seat.value == 0)
     {
        document.getElementById("bookingText").innerHTML = "Please enter the number of guests";
        changeRed(tnumb);
        seat.focus();
        return false;
     }

     if(seat.value > 8)
     {
        document.getElementById("bookingText").innerHTML = "For booking of 9+ people, contact us by E-mail";
        changeRed(seat);
        seat.focus();
        return false;
     }

    //This last section checks that the fields of date and time exist.
    if (date.value == "")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(date);
        date.focus();
        return false;
    }

    if (time.value == "Select Time")
    {
        document.getElementById("bookingText").innerHTML = "You need to fill all the values";
        changeRed(time);
        time.focus();
        return false;
    }

    return true

}

//This function returns to normal the border of the form.
function changeNormal(id) 
{
    id.style.border = "0";

}

//This function changes red the border of the form found with errors.
function changeRed(id) 
{
    id.style.border = "3px red solid";
}
 
//This function resets the form onload of the page. 
function reset()
{
    document.getElementById("form").reset()
}

//This creates an automatic Slideshow in background
$(function() {

	$("#bgImage > img:gt(0)").hide();

	setInterval(function() {
	
        $('#bgImage > img:first')
			.fadeOut(3000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#bgImage');
		},  4000);

});		

//This sets the first img to go on the background when the page loads
$(document).ready(function()
{
    $("#content > div").hide();
    $("#content > div:eq(0)").fadeIn(1000);
});

// This hides and show different divs on the page
function navigation(page)
{   
        $("#content > div:not("+page+")").fadeOut(500);
        $("#content > div:eq("+page+")").fadeIn(2000);
}

//This function recalls the google API Map and shows the div
function map() 
{
        

        var myPlace = {lat: 51.4035813, lng: -0.1190476};
        var mapOptions = {
        zoom: 15,
        center: myPlace,
        mapTypeId: 'hybrid'
        };
        var map = new google.maps.Map(document.getElementById('map'),
            mapOptions);
        var marker = new google.maps.Marker({
            position: myPlace,
            map: map
        
         });
        
        $("#popMap").fadeIn(2000);
        $("#popMap").show();

        //This query hides the div onclick of the x
        $(".x").click(function()
        {
            $("#content > #popMap").fadeOut(1000);

        });
        //This query hides the div onclick of the esc on the keybord
        $('body').keyup(function(esc)
        {
            if(esc.keyCode === 27)
            $("#content > #popMap").fadeOut(1000);
   
        });

};

//This function shows the div popGallery
function gallery(page)
{
    $("#popGallery > img").attr("src","assets/"+page+".jpg");
    $("#popGallery").fadeIn(2000);
    $(".x").click(function()
        {
            $("#content > #popGallery").fadeOut(1000);

        });
     $('body').keyup(function(esc)
        {
            if(esc.keyCode === 27)
            $("#content > #popGallery").fadeOut(1000);
   
        });
    
}








