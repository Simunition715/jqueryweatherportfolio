if ("geolocation" in navigator) {
  $('.js-geolocation').show(); 
} else {
  $('.js-geolocation').hide();
}

$('.js-geolocation').on('click', function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
  });
});


$(document).ready(function(){
	
	    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        $("#github").html(data.ip);
    });
		
		$.get('https://api.github.com/users/simunition715', function(response){
			var	information = '<img class="pic" src='+ response.avatar_url + '>';
				information += '<div id="data"'
				information += '<p class="bio">'+"Name: "+response.name+'</p>';
				information += '<p class="bio">'+"Location: "+response.location+'</p>';
				information += '<p class="bio">'+"Bio: "+response.bio+'</p>';
				information += '<h2 class="repos">'+"Public Repos: "+response.public_repos+'</h2>';
				information += '</div>'
				$('#info').html(information)
		} , 'json')
})





